const { Jimp } = require('jimp');
const { GifFrame, GifUtil } = require('gifwrap');
const fs = require('fs');
const path = require('path');

const srcImageFile = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'Opening_and_closing_book_slowly_202608192155.jpeg');
const outputDir = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'book-jpg');
const destGifFile = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'bg-book.gif');

async function run() {
    console.log('Loading book grid image from:', srcImageFile);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const masterImage = await Jimp.read(srcImageFile);
    const totalW = masterImage.bitmap.width;  // 1376
    const totalH = masterImage.bitmap.height; // 768

    const cols = 3;
    const rows = 3;
    const colWidth = Math.floor(totalW / cols);
    const rowHeight = Math.floor(totalH / rows);

    console.log(`Master image size: ${totalW}x${totalH}. Grid: ${colWidth}x${rowHeight} per frame`);

    const frames = [];
    const croppedImages = [];

    let frameCount = 1;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = c * colWidth;
            const y = r * rowHeight;
            const w = (c === cols - 1) ? (totalW - x) : colWidth;
            const h = (r === rows - 1) ? (totalH - y) : rowHeight;

            const frameImg = masterImage.clone();
            frameImg.crop({ x, y, w, h });

            const frameFileName = `book-frame-${String(frameCount).padStart(3, '0')}.jpg`;
            const framePath = path.join(outputDir, frameFileName);
            
            await frameImg.write(framePath);
            console.log(`Saved frame ${frameCount}: ${frameFileName} (${w}x${h})`);

            croppedImages.push(frameImg);
            frameCount++;
        }
    }

    console.log("Generating smooth loop sequence for GIF background video...");
    // Sequence order: forward (0->8) then hold closing frame, then smooth cycle
    const sequenceOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    for (let idx of sequenceOrder) {
        const baseImg = croppedImages[idx].clone();
        // Resize for standard crisp web background
        baseImg.resize({ w: 640 });

        const gifFrame = new GifFrame(baseImg.bitmap);
        // Delay: 18 centiseconds (~5.5 FPS smooth cinematic cadence)
        gifFrame.delayCentiseconds = (idx === 0 || idx === 8) ? 35 : 18;
        frames.push(gifFrame);
    }

    console.log("Quantizing colors with Wu quantizer...");
    GifUtil.quantizeWu(frames, 256);

    console.log("Writing bg-book.gif to:", destGifFile);
    await GifUtil.write(destGifFile, frames);
    console.log("Background video GIF generated successfully!");
}

run().catch(err => {
    console.error("Compilation error:", err);
});

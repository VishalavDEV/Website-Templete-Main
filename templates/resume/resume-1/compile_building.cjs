const { Jimp } = require('jimp');
const { GifFrame, GifUtil } = require('gifwrap');
const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/Harish/Desktop/Website-Template/frontend/templates/coming soon-template/cm-3/buliding-jpg';
const destFile = 'c:/Users/Harish/Desktop/Website-Template/frontend/templates/coming soon-template/cm-3/bg-building.gif';

async function run() {
    console.log("Loading building frames...");
    const frames = [];
    
    for (let i = 1; i <= 50; i++) {
        const frameNum = String(i).padStart(3, '0');
        const file = path.join(srcDir, `ezgif-frame-${frameNum}.jpg`);
        console.log(`Processing building frame ${i}/50...`);
        
        const image = await Jimp.read(file);
        // Resize to 720px width for standard HD quality
        image.resize({ w: 720 });
        
        // Convert Jimp image to Gifwrap frame
        const frame = new GifFrame(image.bitmap);
        frame.delayCentiseconds = 6; // ~16 FPS slow motion loop speed
        frames.push(frame);
    }
    
    console.log("Quantizing colors across all frames...");
    // Quantize entire array for visual color consistency
    GifUtil.quantizeWu(frames, 256);
    
    console.log("Encoding loopable building GIF...");
    await GifUtil.write(destFile, frames);
    console.log("Building GIF written successfully to " + destFile);
}

run().catch(err => {
    console.error("Compilation error:", err);
});

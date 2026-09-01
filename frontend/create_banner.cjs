const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function createBotanicalCover() {
    const srcBook = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'book-cover.jpg');
    const srcPlate = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'rosa-canina.jpg');
    const dest1 = path.join(__dirname, 'templates', 'coming soon-template', 'cm-4', 'botanical-cover.jpg');
    const dest2 = path.join(__dirname, 'public', 'templates', 'comming-soon', 'cm-4', 'botanical-cover.jpg');

    console.log('Reading book image...');
    const bookImg = await Jimp.read(srcBook);
    
    // Create a 16:9 banner canvas 1280x720
    const banner = new Jimp({ width: 1280, height: 720, color: 0x070c09ff });

    // Resize book image to cover nicely on right/center
    const resizedBook = bookImg.clone();
    resizedBook.resize({ w: 720, h: 720 });
    
    // Composite on banner
    banner.composite(resizedBook, 560, 0);

    // Also read Rosa Canina plate for left side artistic showcase
    const plateImg = await Jimp.read(srcPlate);
    plateImg.resize({ w: 480, h: 640 });
    banner.composite(plateImg, 40, 40);

    await banner.write(dest1);
    await banner.write(dest2);
    console.log('Successfully created botanical-cover.jpg banner in templates and public folders!');
}

createBotanicalCover().catch(err => console.error('Error:', err));

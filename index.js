const puppeteer = require('puppeteer')
const fs = require('fs/promises')


async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files')

    await page.screenshot({ path:"./websitescreenshot.png", fullPage: true})
    const imagepage = await page.goto('https://media.prusaprinters.org/media/prints/106763/stls/1063196_711404c0-5547-49ec-b6e4-9ee219ca92cb/pro_small_2x2.stl')

    https.get(imagepage, res => {
            const stream = fs.createWriteStream('somepic.png');
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
            })
        })


    await browser.close()
}

start()

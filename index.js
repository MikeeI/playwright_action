const puppeteer = require('puppeteer')
const fs = require('fs/promises')


async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files')

    await page.screenshot({ path:"./websitescreenshot.png", fullPage: true})
    
    const imagepage = await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files')
    await fs.writeFile('file.gcode', await imagepage.buffer())

    await browser.close()
}

start()

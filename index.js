const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const request = require('request');

async function start() {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    //await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files', { waitUntil: 'networkidle2' })
    await page.goto('https://www.prusaprinters.org/prints/117619-alpaca-buddha-llama-buddha/files', { waitUntil: 'networkidle2' })
    await page.waitForSelector('app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn > .filesize')
    await page.click('app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn > .filesize')
    
    await page.goto('https://www.prusaprinters.org/prints/117767-l-boxx-bit-hex-holder-lboxx-also-known-as-sortimo/files', { waitUntil: 'networkidle2' })
    await page.waitForSelector('app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn > .filesize')
    await page.click('app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn > .filesize')
    await browser.close()    
}

start()

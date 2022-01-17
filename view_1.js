const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const request = require('request');

async function start(url) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto(url)
    await page.setViewport({ width: 2560, height: 1600 })
    await navigationPromise
    await page.waitForSelector('.max-width-md > app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn')
    //await page.click('.max-width-md > app-market-downloads:nth-child(1) > .first-item > .download-wrapper > .btn')
    await delay(4000);
    await browser.close()
}

start('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files')

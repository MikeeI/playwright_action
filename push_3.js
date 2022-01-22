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
    await page.waitForSelector('app-market-downloads > .download-item > .download-wrapper > .btn > .fa')
    await page.click('app-market-downloads > .download-item > .download-wrapper > .btn > .fa')
    await page.waitForSelector('.detail-grid > .detail-content > .download-btn > .d-flex > .download-count')
    let element = await page.$('.detail-grid > .detail-content > .download-btn > .d-flex > .download-count')
    const text = await page.evaluate(element => element.textContent, element);  
    console.log(text)
    setTimeout(() => { browser.close(); }, 6000);
}

start('https://www.prusaprinters.org/prints/117619-alpaca-buddha-llama-buddha/files')

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
    await delay(4000);
    await page.waitForSelector('.detail-content > .row > .col-auto > .views > .number')
    let element = await page.$('.detail-content > .row > .col-auto > .views > .number')
    let value = await page.evaluate(el => el.textContent, element)
    echo "Number: $value"
    await browser.close()
}

start('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer')

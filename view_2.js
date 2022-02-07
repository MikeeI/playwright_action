const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const request = require('request');

async function start(url) {
    const browser = await puppeteer.launch({ args: [
      '--proxy-server=socks5://localhost:40000',
    ],headless: true })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto(url)
    await page.setViewport({ width: 2560, height: 1600 })
    await navigationPromise
    await page.waitForSelector('.detail-content > .row > .col-auto > .views > .number')
    let element = await page.$('.detail-content > .row > .col-auto > .views > .number')
    const text = await page.evaluate(element => element.textContent, element);
    console.log(text)
    setTimeout(() => { browser.close(); }, 6000);
}


start('https://www.prusaprinters.org/prints/128293-heavy-duty-pencil-case-with-sharpener')

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
    
    setTimeout(() => { browser.close(); }, 3000);
}


start('https://www.thingiverse.com/thing:4894102')

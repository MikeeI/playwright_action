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
    
    await page.waitForTimeout(2000); // wait for 5 seconds
    
    await page.screenshot({
        path: 'screenshot-1.png',
    });
    setTimeout(() => { browser.close(); }, 6000);
}
start('http://ipinfo.io/json')

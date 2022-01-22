const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const request = require('request');

async function start(url) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    await page.setRequestInterception(true)
    await page.goto(url)
    await page.setViewport({ width: 2560, height: 1600 })
    await navigationPromise
    
    page.on('request', (request) => {
        // Block All Images
        if (request.url().includes('cookiepro.com') || request.url().includes('onetrust')) {
            request.abort();
        } else {
            request.continue()
        }
    });
    
    
    await page.waitForTimeout(5000); // wait for 5 seconds

    await page.waitForSelector('app-market-downloads:nth-child(1) > .download-item > .download-wrapper > .btn > .fa')
    await page.click('app-market-downloads:nth-child(1) > .download-item > .download-wrapper > .btn > .fa')

    await page.waitForSelector('.detail-grid > .detail-content > .download-btn > .d-flex > .download-count')
    let element = await page.$('.detail-grid > .detail-content > .download-btn > .d-flex > .download-count')

    const text = await page.evaluate(element => element.textContent, element);  
    console.log(text)

    await page.screenshot({
        path: 'screenshot-2.png',
    });
    setTimeout(() => { browser.close(); }, 6000);
    
  

        
}

start('https://www.prusaprinters.org/prints/118424-vacuumroborockroobma-laundry-stopper-and-run-over-/files')

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

    
    await page.waitForSelector('.ThingFile__buttons--1lAll > .ThingFile__download--2SUQd > .button > .i-button > span')
    await page.click('.ThingFile__buttons--1lAll > .ThingFile__download--2SUQd > .button > .i-button > span')

    const text = await page.evaluate(element => element.textContent, element);  
    console.log(text)
    setTimeout(() => { browser.close(); }, 6000);
    
    await page.screenshot({
        path: 'screenshot-2.png',
    });
}


start('https://www.thingiverse.com/thing:4894102/files')

    

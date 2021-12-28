async function start() {

    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer')

    await page.setViewport({ width: 1278, height: 1312 })

    await page.waitForSelector('.d-flex > .nav-block > .navbar-nav > .navbar-item:nth-child(6) > .btn')
    await page.click('.d-flex > .nav-block > .navbar-nav > .navbar-item:nth-child(6) > .btn')

    await navigationPromise

    await page.waitForSelector('#id_email')
    await page.click('#id_email')
    await page.type('#id_email', 'platinum2589@gmail.com')

    await page.waitForSelector('#id_password')
    await page.click('#id_password')
    await page.type('#id_password', 'Wyi3JVjGmfGwzTtqNFNU2CTP4xH4avXJ')


    //await page.waitForSelector('.justify-content-center > .main-content > #recaptcha_form > .form-group > .btn')
    await page.click('.justify-content-center > .main-content > #recaptcha_form > .form-group > .btn')

    await navigationPromise

    await browser.close()
}

start()

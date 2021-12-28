async function start() {
    //const cookies_pre = [
    //  {name: 'csrftoken', value: 'No2VKbVsBri2ICg7O3kmAHRvRrbGeeCX0NF8Eap108n9y5A0uNxhQAdIqUZj6yoP', domain: 'www.prusaprinters.org'}
    //];
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch()
    const fs = require('fs');
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    
    const cookies = fs.readFileSync('cookies.json', 'utf8')
    const deserializedCookies = JSON.parse(cookies)
    await page.setCookie(...deserializedCookies)
  
    //await page.setCookie(...cookies_pre);
    await page.setViewport({ width: 1278, height: 1312 })
    
    await page.evaluateOnNewDocument (
        token => {
            localStorage.clear();
            localStorage.setItem('auth_token', token);
        }, 'ZVPuwQ8idO2V7DxWbz6MXQdBS0HZ91');
    
    
    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer', { waitUntil: 'networkidle2' })
    await page.screenshot({
        path: 'screenshot-1.png',
    });
    
    /*
    const cookies = await page.cookies()
    const cookieJson = JSON.stringify(cookies)
    fs.writeFileSync('cookies.json', cookieJson)
    console.log(cookieJson)
    */
    /*
    await page.waitForSelector('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')
    await page.click('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')
    
    await page.screenshot({
        path: 'screenshot-2.png',
    });
    */
    
    /*
    await page.waitForSelector('.d-flex > .nav-block > .navbar-nav > .navbar-item:nth-child(6) > .btn')
    await page.click('.d-flex > .nav-block > .navbar-nav > .navbar-item:nth-child(6) > .btn')

    await navigationPromise

    await page.waitForSelector('#id_email')
    await page.click('#id_email')
    await page.type('#id_email', 'platinum2589@gmail.com')

    await page.waitForSelector('#id_password')
    await page.click('#id_password')
    await page.type('#id_password', 'Wyi3JVjGmfGwzTtqNFNU2CTP4xH4avXJ')


    await page.waitForSelector('.justify-content-center > .main-content > #recaptcha_form > .form-group > .btn')
    await page.click('.justify-content-center > .main-content > #recaptcha_form > .form-group > .btn')

    await navigationPromise
    
    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer')

    await page.waitForSelector('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')
    await page.click('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')

    */

    await browser.close()
}

start()

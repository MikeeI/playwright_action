const puppeteer = require('puppeteer')
//const fs = require('fs/promises')
const request = require('request');
const fs = require('fs');

let json_db = fs.readFileSync('db.json');
let rows = JSON.parse(json_db);

account = "booths.revise_0n@icloud.com"
auth_token = "x0L9LfgZPFPd0NXUPISzfJL3kH1eHC"

for (var i = 0; i < rows.length; i++) {

    console.log("array index: " + i);
    if (rows[i]["account"] == account) {
        if (rows[i]["like"] == false) {
            console.log("Like: False | Execute Like")
            rows[i]["like"] = true;
            like_url(rows[i]["url"],auth_token)
        }
    }
}

fs.writeFileSync('db2.json', JSON.stringify(rows, null, 2));


/*
//rows.forEach(element => console.log(element));
for (var i = 0; i < rows.length; i++) {
    console.log("array index: " + i);

    var element = rows[i];
    if (element["like"] == false) 
    {
        console.log("Like: False | Execute Like")
        rows[i]["like"]=true;
    }
    /*
    for (var key in element) {
        var value = element[key];
        console.log(element);
        if (element["like"] == false) {
            console.log("Like: False | Execute Like")
            
        }
        //console.log(" - " + key + ": " + value);
    }
    */
    


fs.writeFileSync('db2.json', JSON.stringify(rows, null, 2));

async function like_url(url,auth_token) {
    
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    
    await page.setViewport({ width: 1278, height: 1312 })
    
    await page.evaluateOnNewDocument (
        token => {
            localStorage.clear();
            localStorage.setItem('auth_token', token);
        }, auth_token);
    
    
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.screenshot({
        path: 'screenshot-1.png',
    });
    
    await page.waitForSelector('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')
    await page.click('.d-none > .w-100 > .btn > div > .mr-1 > div > svg > .like-fill > path')

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
    //setTimeout(() => { browser.close(); }, 6000);
}

//like_url('https://www.prusaprinters.org/prints/117767-l-boxx-bit-hex-holder-lboxx-also-known-as-sortimo')
//like_url('https://www.prusaprinters.org/prints/118424-vacuumroborockroobma-laundry-stopper-and-run-over-')


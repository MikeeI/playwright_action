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

fs.writeFileSync('db.json', JSON.stringify(rows, null, 2));


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
    
    
    await navigationPromise
    await page.waitForSelector('.d-none > .w-100 > .btn > div > .mr-1 > .liked > svg > .like-fill > path')
    await page.click('.d-none > .w-100 > .btn > div > .mr-1 > .liked > svg > .like-fill > path')
    
  
    await page.screenshot({
        path: 'screenshot-2.png',
    });
        
    setTimeout(() => { browser.close(); }, 6000);
}



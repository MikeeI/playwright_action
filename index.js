const puppeteer = require('puppeteer')
const fs = require('fs/promises')


async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.prusaprinters.org/prints/106763-stanley-dewalt-fatmax-deep-pro-organizer/files')
    cookies = await page.cookies();
    cookie_str = "";
    for(var i = 0; i < cookies.length; i+=1){
        a = cookies[i];
        cookie_str += a.name + "=" + a.value + ";";
    }

    
    const stlurl = 'https://media.prusaprinters.org/media/prints/106763/stls/1063196_711404c0-5547-49ec-b6e4-9ee219ca92cb/pro_small_2x2.stl'
    
    request.get({
        url: stlurl,
        headers: {
            "cookie": cookie_str,
        }
    }).pipe(fs.createWriteStream("ofname"))

    https.get(stlurl, res => {
            const stream = fs.createWriteStream('stl.stl');
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
            })
        })


    await browser.close()
}

start()

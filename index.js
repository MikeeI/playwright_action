const puppeteer = require('puppeteer')
const fs = require('fs/promises')


async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://myanimelist.net/topanime.php')

    await page.screenshot({ path:"./assets/websitescreenshot.png", fullPage: true})
    
    
    // Anime Descriptions Text List
    const animeDesc = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".detail")).map(x => x.textContent)
    })
    await fs.writeFile('animelist.txt', animeDesc.join('\r\n'))

    // Anime Ranking Text File
    const animeRanking = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".ranking-list")).map(x => x.textContent )
    })
    await fs.writeFile('animeranking.txt', animeRanking.join('\r\n'))

    // Anime Pics Download Pics got it to work sort of downloads 9 pics
    const animePics= await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".lazyloaded")).map(x => x.src)
    })

    for (const animePic of animePics) {
        const imagepage = await page.goto(animePic)
        await fs.writeFile(`${animePic.split("=").pop()}.png`, await imagepage.buffer())
    }

    // const animeLinks = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll(".icon-watch2")).map(x => x.href)
    // })
    // await fs.writeFile('animelinks.text', animeLinks.join('\r\n'))

    await browser.close()
}

start()

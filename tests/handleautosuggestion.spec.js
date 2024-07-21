const {test,expect} = require('@playwright/test')

test("handle auto suggestion", async ({page}) => {
    await page.goto("https://www.google.com");
   await page.locator("#APjFqb").fill("Mukesh Otwani");

   await page.waitForSelector("//li[@role='presentation']");

   const arrList = await page.$$("//li[@role='presentation']");

   for(let i=0; i<arrList.length; i++){

    const element = await arrList[i].textContent();

    if(element.includes("blog")){

        await arrList[i].click();
        break;
    }

}
   
await page.waitForTimeout(3000);
       
})

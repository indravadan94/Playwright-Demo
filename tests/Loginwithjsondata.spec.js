const {test,expect} = require('@playwright/test');
const { json } = require('stream/consumers');
const testdata = JSON.parse(JSON.stringify(require('../LoginData.json')))  

test.describe("Data Driven Login Test", () => {

    for(const data of testdata){
        test.describe(`Login with Users ${data.id}`, () => {
            
test("Jason data read", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
 
     await page.locator("#name").fill(data.userName);
     await page.locator("#email").fill(data.password);
 
     
 
 })


        })

        
    }
})





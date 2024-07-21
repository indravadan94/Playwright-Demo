const {test,expect} = require('@playwright/test')

test("dropdown", async ({page}) =>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({index:4})

    //await page.waitForTimeout(3000);

    const values = await page.locator("#state").textContent();

    console.log(values);

   // await expect(values.includes("Gujarat")).toBeTruthy();

   let ddState=false;

    let arrState = await page.$("#state");
    let arrOption = await arrState.$$("option");

    for(let i=0;i<arrOption.length;i++){
        let element = arrOption[i];

        let value = await element.textContent();

        if(value.includes("Gujarat")){
             ddState=true;
             break;
        }
        
        console.log("Value of state is: " +value );
    }

    await expect(ddState).toBeTruthy();

    await page.locator("#hobbies").selectOption(["Playing","Reading","Dancing"]);

    await page.waitForTimeout(5000);

})
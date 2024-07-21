const {test,expect} = require('@playwright/test')
class HomePage{
    constructor(page){
        this.page=page;
        this.menu = "//img[@alt='menu']";
        this.manageoption = "//span[normalize-space()='Manage']";
        this.btnSignout = "//button[normalize-space()='Sign out']";
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manageoption)).toBeVisible();
    }

    async logoutFromApplication(){

        await this.page.click(this.menu)
        await this.page.click(this.btnSignout)
    }
}

module.exports = HomePage;
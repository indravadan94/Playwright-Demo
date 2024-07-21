class LoginPage{
    constructor(page){
        this.page=page;

        this.userName = "#email1"
        this.password = "#password1"
        this.loginButton = "//button[@type='submit']"

        }

        async loginToApplication(){

            await this.page.fill(this.userName,"admin@email.com");
            await this.page.fill(this.password,"admin@123");
            await this.page.click(this.loginButton);
        }
}
module.exports = LoginPage;
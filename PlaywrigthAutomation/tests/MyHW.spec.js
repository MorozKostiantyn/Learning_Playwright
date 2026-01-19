const {test, expect} = require('@playwright/test')

test('Sing In Page',async ({page})=>{
    const registerPage = page.locator('.login-wrapper-footer-text');
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const email = page.locator('#userEmail');
    const phoneNumber = page.locator('#userMobile');
    const password = page.locator('#userPassword');
    const confirmPassword = page.locator('#confirmPassword');
    const ageCheckBox = page.locator('input[type="checkbox"][formcontrolname="required"]');
    const register = page.locator('#login');
    const loginBtn = page.locator('button.btn.btn-primary')
        const emailLogin = page.locator('#userEmail');
        const passwordLogin = page.locator('#userPassword');
        const signInLogin = page.locator('#login');
        const cardTitles = page.locator('.card-body b');
    let emailForTest = 'kostia.moroz111111@gmail.com'
    let passwordForTest = 'Kostia12345'
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await registerPage.click();
    await firstName.fill("Kostia111");
    await lastName.fill("Moroz111");
    await email.fill(emailForTest);
    await phoneNumber.fill("1234567890");
    await password.fill(passwordForTest);
    await confirmPassword.fill("Kostia12345");
    await ageCheckBox.check();
    await register.click();
    await expect(page.locator('h1.headcolor')).toContainText("Account Created Successfully");
    await loginBtn.click();
    await expect(page.locator('h1.login-title')).toContainText("Log in");
    await emailLogin.fill(emailForTest);
    await passwordLogin.fill(passwordForTest);
    await signInLogin.click();
    console.log(await cardTitles.first().textContent());



})
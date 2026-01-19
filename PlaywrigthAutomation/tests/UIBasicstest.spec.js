const {test, expect} = require('@playwright/test')


test('Browser Context PlayWright test',async ({browser})=>
{
    
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const cardTitles = page.locator('.card-body a');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title())
        //css   type, fill
        await userName.fill("rahulshetty");
        await page.locator("[type='password']").fill("learning");
        await page.locator('#signInBtn').click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        //
        await userName.fill("");
        await userName.fill("rahulshettyacademy")
        await signIn.click();
        // console.log(await cardTitles.first().textContent())
        // console.log(await cardTitles.nth(1).textContent())//receive 2-nd element from massive of locators
        const allTitles = await cardTitles.allTextContents()
        console.log(allTitles);

        
});

test("UI controls", async({page})=>{
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const drodown = page.locator('select.form-control')
        const documentLink = page.locator('[href*="documents-request"]')
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await drodown.selectOption('consult');
        await page.locator('.radiotextsty').last().click();
        await page.locator("#okayBtn").click();
        await expect (page.locator('.radiotextsty').last()).toBeChecked();
        await page.locator("#terms").click();
        await expect (page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect (await page.locator("#terms").isChecked()).toBeFalsy;
        await expect(documentLink).toHaveAttribute("class","blinkingText");
        
        
        
        
        //await page.pause();


    
});


test("Child windows handling", async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator('[href*="documents-request"]')
        const [newPage] = await Promise.all(
        [
                context.waitForEvent('page'),//listening for new page pending, rejected, fulfilled
                documentLink.click(),   
        ])//new page is opened

        const text = await newPage.locator(".red").textContent();
        const arrrayText = text.split("@")
        const domain = arrrayText[1].split(" ")[0];
        // console.log(domain);
        await page.locator("#username").fill(domain);
        console.log(await page.locator("#username").inputValue());


})
const {test, expect} = require('@playwright/test')

test.only('Add to the cart',async ({page})=>{
    const productName = 'ADIDAS ORIGINAL'
    const products = page.locator('.card-body');
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill("kostia.moroz111111@gmail.com");
    await page.locator('#userPassword').fill("Kostia12345");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i=0; i < count;i++)
    {
      if  (await products.nth(i).locator('b').textContent() === productName)
      {
        //add to cart
        await products.nth(i).locator("text = Add To Cart").click();
        break
      }
    }
    await page.locator("[routerlink='/dashboard/cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text =Checkout").click();
    
})
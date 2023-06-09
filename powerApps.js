const { Builder, By,Capabilities, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
//const { assertInterfaceType } = require('graphql');

// async function performChildReply(driver, postMessage) {
//     const replyButton = await driver.findElement(By.xpath('//*[@id="messageActions"]/div/span'));
//     await replyButton.click();
  
//     await driver.sleep(2000);
  
//     const body = await driver.findElement(By.id('mceu_70'));
//     const iframe = await body.findElement(By.tagName('iframe'));
  
//     await driver.switchTo().frame(iframe);
  
//     const paragraphElement = await driver.findElement(By.tagName('p'));
//     await paragraphElement.sendKeys(postMessage);
  
//     await driver.sleep(2000);
    
//     await driver.switchTo().defaultContent();
  
//     const postButton = await driver.findElement(By.id('submitContext_0'));
//     await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", postButton);
//     await postButton.click();
  
//     await driver.sleep(3000);
//   }
  
  





async function powerApps(url, email, password){
    const driver = new Builder().forBrowser('chrome').withCapabilities(Capabilities.chrome())
    .setChromeOptions(new chrome.Options().addArguments('--start-maximized')).build();
    try{
        await driver.get(url);

        

        const replyButton = await driver.findElement(By.className("lia-button-primary"))
        await replyButton.click();

        let pageTitle = await driver.getTitle();
        console.log('title', pageTitle);

        //Sign in to your Acoount  

        if(pageTitle === 'Sign in to your account'){
            await driver.wait(until.elementLocated(By.css('input[name="loginfmt"]'))) 

            //EmailInput 
            const emailInput = await driver.findElement(By.css('input[name="loginfmt"]'));
            await emailInput.sendKeys(email); 
            //nextButton 
            const nextButton = await driver.findElement(By.id('idSIButton9'));
            await nextButton.click();

            await driver.sleep(2000);

            await driver.wait(until.elementLocated(By.css('input[name="passwd"]'))); 

            const passwordInput = await driver.findElement(By.css('input[name="passwd"]'));
            await passwordInput.sendKeys(password); 

            await driver.sleep(1000); 

            const submitButton = await driver.findElement(By.id('idSIButton9'));
            await submitButton.click();

            await driver.sleep(2000);
        }

        await driver.wait(until.elementLocated(By.css('input[id="idSIButton9"]')));
        await driver.sleep(15000) 

        const yesButton = await driver.findElement(By.id('idSIButton9'));
        await yesButton.click(); 

        //AfterLogin get the title page  

        const afterLoginPageTitle = await driver.getTitle();
        console.log("Page Title:", afterLoginPageTitle); 
       

        if(afterLoginPageTitle === "Complete your Profile - Power Platform Community"){
            const username = await driver.findElement(By.id("lia-login"))
            await username.sendKeys("Puneet");
            await driver.sleep(2000); 

            const clickCheckBox  = await driver.findElement(By.id("lia-userAcceptsTermsOfService"));
            await clickCheckBox.click()
            await driver.sleep(2000); 

            const submitButton = await driver.findElement(By.id("submitContext_0"));
            await submitButton.click();
            await driver.sleep(2000);
        }

        const date = new Date() 

        const body = await driver.findElement(By.id('mceu_38')) 
        const iframe = await body.findElement(By.tagName('iframe')) 

        await driver.switchTo().frame(iframe) 

        const paragraphElement = await driver.findElement(By.tagName('p'))

        await paragraphElement.sendKeys(`Puneet -- ${date}`)

        await driver.sleep(2000) 

        await driver.switchTo().defaultContent(); 

    //Post Button in powerApps  

    const postButton = await driver.findElement(By.id('submitContext_1'));
    await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", postButton);
    await postButton.click(); 

    await driver.sleep(3000);
    
    //await performChildReply(postMessage)
            
    const replyElements = await driver.findElements(By.css('[aria-label="Reply to comment"]'))
    const lastReplyElement = replyElements[replyElements.length-1]
    lastReplyElement.click();
    await driver.sleep(4000);
    
    const iframeTwoMain = await driver.findElement(By.id("mceu_70"));
    const iframeTwo = await iframeTwoMain.findElement(By.tagName('iframe'));

    await driver.switchTo().frame(iframeTwo);

    const childParagraph = await driver.findElement(By.tagName('p'));

    const dateValue = new Date(); 

    await childParagraph.sendKeys(`Testing for Child reply Puneet -- ${dateValue} - ${Math.floor(Math.random() * 100) } - Random number`);
    await driver.sleep(2000);

    await driver.switchTo().defaultContent();

    await driver.sleep(2000) 

    const childReply = await driver.findElement(By.css('input[name="submitContext_0"]'));
    await childReply.click()

    }finally{
        console.log("over")
    }

}
const url ="https://powerusers-staging.microsoft.com/t5/ICS-Forums/Puneet-7-6-2023/td-p/98261"
const email='puneethg@italentdigital.com'
const password='@Aa8142424331'
//const postMessage = "This is a child reply message."

powerApps(url, email,password)
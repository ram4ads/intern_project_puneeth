const { Builder, By,Capabilities, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');





async function login(url, username, password) {
  const driver = new Builder().forBrowser('chrome').withCapabilities(Capabilities.chrome())
  .setChromeOptions(new chrome.Options().addArguments('--start-maximized')).build();

  try {
    await driver.get(url);
    await driver.findElement(By.name('login')).sendKeys(username);
    await driver.findElement(By.name('password')).sendKeys(password);
    await driver.findElement(By.id('form_0')).submit();
    await driver.sleep(1000);

    const dropdown = await driver.findElement(By.className('lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation'));
    await dropdown.click();
    await driver.sleep(2000);

    const desktop = await driver.findElement(By.className('board-dropdown-item lia-board-rd-discussion1'));
    await desktop.click();
    await driver.sleep(2000);

    const newMessage = await driver.findElement(By.partialLinkText('New Message'));
    await newMessage.click();
    await driver.sleep(1000);

    //creating subject using name with date 

    const subject = await driver.findElement(By.name('subject'));

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

    const subjectText = `Puneet-${day}-${month}-${year}`
    await subject.sendKeys(subjectText);
    await driver.sleep(2000)


    //creating body element  

    const body = await driver.findElement(By.id('mceu_40'))

    const iframe = await body.findElement(By.tagName('iframe')) 
    await driver.switchTo().frame(iframe); 

    const paragraphElement  = await driver.findElement(By.tagName('p'))
    await paragraphElement.sendKeys(`This message only for testing, By  ${subjectText}`)
    await driver.sleep(1000)
    await driver.switchTo().defaultContent();



      
    const labelList = await driver.findElement(By.id('list_0'));
    const generalCommentOption = await labelList.findElement(By.xpath(".//a[contains(text(), 'General Comment')]"));
    await generalCommentOption.click();

    // Add "General Comment" label to selected labels
    const selectedLabelInput = await driver.findElement(By.id('lia-labels')) 
    await selectedLabelInput.sendKeys('')

    await driver.sleep(3000)


    


    //Post the message 

    const post = await driver.findElement(By.id('submitContext_1'))
    await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", post);
    await post.click();
    await driver.sleep(2000)

    //scroll up at selected value 
    await driver.executeScript("window.scrollTo(0, 0)");
    //syndication select dropdown  

    const communityDropdown = await driver.findElement(By.className("selected-values"))
    await communityDropdown.click() 
     
    await driver.sleep(2000)
    
    const dropTheValues = await driver.findElement(By.className("commnity-panel"))

    const communityOptions = await dropTheValues.findElements(By.css(".check-box"))
    for (let i = 0; i < 4; i++) {
      await communityOptions[i].click();
    }
    await driver.sleep(1000)

    const syndiate = await driver.findElement(By.id("btn-post"))
    await syndiate.click();

    await driver.sleep(4000);

    const buttonClick = await driver.findElement(By.id("btn-proceed"))
    await buttonClick.click() 

    await driver.sleep(4000)

    const submission = await driver.findElement(By.className("btn-ok alert-popup-close lia-button lia-button-primary"))
    await submission.click(); 

    await driver.sleep(11000) 

    const checkStatus = await driver.findElement(By.id("btn-status"))
    checkStatus.click(); 

    await driver.sleep(2000);

//Status box  

await driver.wait(until.elementLocated(By.id('tblHTML')));



//Finding rows the tabel body 

const tableRows = await driver.findElements(By.css("#tblHTML tbody tr"))

//iterate through the each row 

const targetId = [];
for(let row of tableRows){
  //find the status cell in each row  
  const statusCell = await row.findElement(By.xpath('.//td[2]'))
  const status = await statusCell.getText();

  if(status.trim() === "COMPLETED"){
    await driver.sleep(2000)
    const targetMessageLink = await row.findElement(By.xpath(".//td[4]/a")) 
    await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", targetMessageLink);
    const targetLink = await targetMessageLink.getAttribute('href');
    targetId.push(targetLink)
    await driver.sleep(3000)
  }
}
  
console.log(targetId)


const newCommunity = async(email, passwordOne,community)=>{
  try{
    await driver.get(community);  //get the driver community  

    const replyButton = await driver.findElement(By.xpath("//span[contains(@class, 'message-reply')]/a"));
    await replyButton.click();

    // page accessing title whether it is naviagting to signup or going to reply 

    const pageTitle = await driver.getTitle();
    console.log("Page Title:", pageTitle) 

    // for signup the value  

    if(pageTitle === "Sign in to your account"){
      //waiting untill signin page loads 

      await driver.wait(until.elementLocated(By.css('input[name="loginfmt"]')))

      //accesing email and password send keys 
      const emailInput = await driver.findElement(By.css('input[name="loginfmt"]'))
      await emailInput.sendKeys(email)

      //click on next buttom 

      const nextButton = await driver.findElement(By.id("idSIButton9"))
      await nextButton.click();
      await driver.sleep(2000); 

      await driver.wait(until.elementLocated(By.css('input[name="passwd"]')))
      const password = await driver.findElement(By.css('input[name="passwd"]'))
      await password.sendKeys(passwordOne)
      await driver.sleep(1000) 

      const submitButton = await driver.findElement(By.id('idSIButton9'))
      await submitButton.click();
      await driver.sleep(2000);  

      await driver.wait(unitl.elementLocated(By.css('input[id="idSIButton9')))
      await driver.sleep(14000) 
      const yesButton = await driver.findElement(By.id('idSIButton9'))
      await yesButton.click() 
      await driver.sleep(3000)

    }
    const afterLoginTitle = await driver.getTitle();
    console.log('Page Title:', afterLoginTitle)

    if("Complete your Profile".includes(afterLoginTitle)){

      const username = await driver.findElement(By.id("lia-login"))
      await driver.sleep(2000);
      await username.sendKeys("Puneet")
      await driver.sleep(2000) 

      const clickCheckBox = await driver.findElement(By.id('lia-userAcceptsTermsOfService'));
      await clickCheckBox.click(); 

      const submitformButton = await driver.findElement(By.id('submitContext_0'));
      await submitformButton.click() 
      await driver.sleep(2000)

    }
//accssing body in the other community for the first reply  
    const dataAndTime = new Date()
    const body = await driver.findElement(By.id('mceu_38'))
    const iframe = await body.findElement(By.tagName('iframe'));
    await driver.switchTo().frame(iframe);
    const paragraphElement  = await driver.findElement(By.tagName('p'));
    await paragraphElement.sendKeys(`Child reply by puneet ${dataAndTime}`);
    await driver.sleep(2000);
    await driver.switchTo().defaultContent(); 

    //submit reply  
    const postBtn = await driver.findElement(By.id("submitContext_1"));
    await postBtn.click();
    await driver.sleep(3000);
    

    const replyButtonOne = await driver.findElement(
    By.xpath("//span[contains(@class, 'message-reply')]/a")

    );
    await replyButtonOne.click();


  }finally{
    console.log("New Community reply")
  }
}
for (const communityUrl of targetId) {
  const email = "puneethg@italentdigital.com"
  const passwordOne = "@Aa8142424331"
   if (communityUrl.startsWith("https://staging.community.fabric.microsoft")) {
        console.log("Skipping execution for", communityUrl);
        continue; // Skip this iteration and continue to the next iteration

    }
   await newCommunity(email,passwordOne, communityUrl);

}

newCommunity(email,passwordOne);


   

   

   



    

    let pageTitle = await driver.getTitle();
    console.log('title', pageTitle);
  } finally {
    console.log('over');
    //await driver.quit();
  }
}
const url = 'https://staging.community.fabric.microsoft.com/t5/user/loginpage';
const username = 'SmartConX_Test';
const password = 'A!s2d3f4';

login(url, username, password);

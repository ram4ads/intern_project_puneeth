const { Builder, By } = require('selenium-webdriver');

async function login(url, username, password) {
  const driver = new Builder().forBrowser('chrome').build();

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
    await driver.sleep(2000);

    //creating subject using name with date 

    const subject = await driver.findElement(By.name('subject'));

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

    const subjectText = `Puneet-${day}-${month}-${year}`
    await subject.sendKeys(subjectText);
    await driver.sleep(3000)


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
    const selectedLabelsInput = await driver.findElement(By.id('lia-labels'));
    await selectedLabelsInput.sendKeys('');
    await driver.sleep(1000)
    


    

    //Post the message 

    const post = await driver.findElement(By.id('submitContext_1'))
    await post.click();
  

    let pageTitle = await driver.getTitle();
    console.log('title', pageTitle);
  } finally {
    console.log('over');
    await driver.quit();
  }
}

const url = 'https://staging.community.fabric.microsoft.com/t5/user/loginpage';
const username = 'ics_sysuser';
const password = 'Q!w2e3r4';

login(url, username, password); 

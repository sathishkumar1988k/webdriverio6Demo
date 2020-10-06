try{
    // "use strict";
    const { Given,Then, When } = require('cucumber');
    var naviagtionPages = require('../supportfiles/navigationsupport.js');
    var world = require('../supportfiles/world.js');

    Given(/^.*navigate to the (.*) .*$/, function (url){
        // console.log("url"+url);
        console.log("naviate to function in navigationstep.js");
        console.log(browser.config.serverUrls);
        // browser.url('https://www.google.com');
        // browser.pause(5000);
        return naviagtionPages.navigateurl(url);
    });

    Then(/^.*enter the (.*) in (.*) .*$/, function (data,selectora){
        // console.log("url"+url);
        console.log("naviate to enter function");
        // console.log("Selector is"+selectornew);
        return naviagtionPages.enteradata(data,selectora);
    });

    Then(/^.*click on (.*) .*$/, function (selectora){
        // console.log("url"+url);
        console.log("naviate to click function");
        // console.log("Selector is"+selectornew);
        return naviagtionPages.clickafield(selectora);
    });
}
catch (err)
{
    console.log('unable to find navigatiopnstep.js');
}
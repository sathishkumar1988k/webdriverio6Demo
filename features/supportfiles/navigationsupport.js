try{
// "use strict"

var world = require('../supportfiles/world.js');
module.exports = {

    navigateurl: function(url){
        console.log("launched navigationsupport.js");
        // state = that.client;
        // console.log("state"+state);
        var url;
        if (true)
        {
            // console.log("url is"+url);
            url = browser.config.serverUrls;
            // console.log("url is"+url);
        }  
        return browser.url(url);   
    },

    enteradata: function(data,selectora){
        // var selectorfinal;
        console.log("launched enteradata function");
        browser.maximizeWindow();
        browser.pause(5000);
        var selectornew = 'test';
        selectornew = world.getdataselector(selectora);
        console.log("selectornew "+selectornew);
        const selectornew1 = $(selectornew);
        selectornew1.setValue(data);
        browser.pause(5000);
    },

    clickafield: function(selectora){
        console.log("launched navigationsupport.js");
        selectornew = world.getdataselector(selectora);
        console.log("selectornew "+selectornew);
        const buttonclick = $(selectornew);
        buttonclick.click();
        browser.pause(5000);
        
        // selectornewa = world.newdataselector(selectora);
        // console.log("selectornewdataselector "+selectornewa);
        return true;   
    },
  };
}
catch(err) {
    console.log('error in naviagtion support file.js');
}
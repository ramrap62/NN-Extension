chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') { // Open the options page after install
      chrome.tabs.create({ url: 'welcome.html' });
    }
    else if (details.reason === 'update' && /^(((0|1)\..*)|(2\.(0|1)(\..*)?))$/.test(details.previousVersion)) { // Clear data from versions before 2.1
      
    }
  });
  
chrome.tabs.onUpdated.addListener(
  function(tab) {
    // read changeInfo data
    chrome.tabs.executeScript(null,{file:"jquery.min.js"});
    //chrome.tabs.executeScript(null,{file:"popup.js"});
      
    }
  
);
  
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    //console.log(JSON.stringify(message.myurl, undefined, 2)); 
    //fetch('http://ai.bpraneeth.com:6788/nudenet_classifier_url?url='+message.myurl)
    fetch('http://117.198.102.142:5004/nudenet?url='+message.myurl)
          .then(response => response.text())
          .then(data => {
            let dataObj = JSON.parse(data);
            console.log(JSON.stringify(dataObj));
            senderResponse({data: dataObj, index: message.index});
          })
          .catch(error => console.log("error", error))
          console.log("Done");
      return true;
  }
});


  /*
  "content_scripts": [{
              "matches": ["<all_urls>"],
              "all_frames": true,
              "js":      ["popup.js"]
          }],*/
  
  
  
  
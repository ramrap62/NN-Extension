chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'install') { // Open the options page after install
      chrome.tabs.create({ url: 'popup.html' });
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
  
  /*
  "content_scripts": [{
              "matches": ["<all_urls>"],
              "all_frames": true,
              "js":      ["popup.js"]
          }],*/
  
  
  
  
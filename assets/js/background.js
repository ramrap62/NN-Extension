chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    //console.log(JSON.stringify(message.myurl, undefined, 2)); 
    //fetch('http://ai.bpraneeth.com:6788/nudenet_classifier_url?url='+message.myurl)
    fetch('http://localhost:5004/nudenet?url='+message.myurl)
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

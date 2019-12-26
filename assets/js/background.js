chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  console.log("Hello again!");
  if(message.msg === "image"){
    console.log("Background");
    console.log(JSON.stringify(message.myurl, undefined, 2)); 
    //fetch('http://ai.bpraneeth.com:6788/nudenet_classifier_url?url='+message.myurl)
    fetch('http://localhost:5004/nudenet?url='+message.myurl)
          .then(response => response.text())
          .then(data => {
            console.log("before parsing");
            let dataObj = JSON.parse(data);
            var lookup = [];
            var i = 0;
            for(var name in dataObj){
              if(dataObj.hasOwnProperty(name)){
                lookup[i] = dataObj[name];
                i++;
              }
            }
            console.log(JSON.stringify(dataObj));
            console.log(lookup[0]);
            //senderResponse({data: lookup[0], index: message.index});
            senderResponse({data: dataObj, index: message.index});
          })
          .catch(error => console.log("error", error))
          console.log("Done");
      return true;
  }
});

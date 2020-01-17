/*function getCookies(domain, name, callback) {
  chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
      if(callback) {
          callback(cookie.value);
      }
  });
}

//usage:
window.onload=function(){
getCookies("http://127.0.0.1", "email", function(email) {
  alert(email);
});
}
*/
var ID;
setTimeout(function(){
  window.location.reload(1);
}, 1000);


    function getCookies(domain, name) 
    {
        chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
            ID = cookie.value;
            checkId();
        });
    }

    function checkId() {
      //alert(ID)
      if (ID == 'true') {
        //console.log("hai");
        document.getElementById('login').style.visibility = 'hidden';
    } else if(ID=='false'){
      document.getElementById('logout').style.visibility = 'hidden';
    }
    else{
      window.location = "./register.html";
    }
    }

    getCookies("http://127.0.0.1", "login")    
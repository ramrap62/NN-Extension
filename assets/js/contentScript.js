let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  let im = images[i].src;
  images[i].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQw_UPTWdccpOq1VqfbcU8HakDnVTYuGS8chaoLhy7UZikyrHH";
  console.log("Hello!");
  chrome.runtime.sendMessage({msg: 'image', index: i, myurl: im}, function({data, index}){
    console.log("Received");
    console.log(data);
    if(data == "name 'logging' is not defined")
    {
      images[index].src = "https://logodix.com/logo/1593592.png";
    }
    if (data.safe <= 0.8)
    {
      images[index].src = "https://i3.cpcache.com/merchandise/77_550x550_Front_Color-NA.jpg?Size=NA&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:5.743982,%22height%22:3.5,%22alignment%22:%22MiddleCenter%22,%22orientation%22:1,%22dpi%22:150,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:600,%22crop_w%22:900,%22scale%22:0,%22template%22:{%22id%22:2225868,%22params%22:{}}}";
    }
    else if (data.safe > 0.8)
    {
      images[index].src = im;
    }
  });
}

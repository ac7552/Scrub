var URL_LIST = [];
var OLDPAGE = "";
var NEWPAGE = ""

let addItem = (response) => {
  if(URL_LIST.indexOf(response)  === -1){
     URL_LIST.push(response)
  }
}

chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
  switch (response) {
    case "delete":
        itemsDelete();
      break;
    default:
      addItem(response);
      itemsDelete();
    }

  });


let itemsDelete = () => {
  for(let i = 0; i < URL_LIST.length ; i++ ){
    chrome.history.search({text: URL_LIST[i]}, function(data){
    for(let i = 0; i < Object.keys(data).length; i++){
       chrome.history.deleteUrl({url: data[i].url})
       chrome.history.addUrl({url: "https://www.1800flowers.com/?flws_rd=1"})
     }
   });
  }
}

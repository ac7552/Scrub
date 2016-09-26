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
      addItem(response.url);
      itemsDelete();
        if(URL_LIST.indexOf(response.remove) !== -1){
          let temp_array = []
          for(let i = 0; i < URL_LIST.length; i++){
            if(URL_LIST[i] !== response.remove){
              let temp_array = URL_LIST
            }
          }
          URL_LIST = temp_array
      }
    }

  });


let itemsDelete = () => {
  for(let i = 0; i < URL_LIST.length ; i++ ){
    chrome.history.search({text: URL_LIST[i]}, function(data){
    for(let i = 0; i < Object.keys(data).length; i++){
       chrome.history.deleteUrl({url: data[i].url})
     }
   });
  }
}
  //check if you can replace emails in google history
  //style drop down menu
  //get rid of torpedo shape for input



  //description of splash page under title
  //call to action below description (try out) guest login
  //give hover effect to demo
  //make sign up and login obvious
  //redirect to home after login
  //make comments obvious - comment icon
  //create card effect to home page
  // change color of covers backgrtound on covers
  // add margin - margin: 20px;
  //add border radius
  //look at windows flat pannel look
  //remove errors from console

  //resume font size descrepency
  //remove links  for publications
  //puts github and linkedin at the top

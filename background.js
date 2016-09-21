chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
    chrome.history.search({text: response}, function(data){
      for(let i = 0; i < Object.keys(data).length; i++){
         chrome.history.deleteUrl({url: data[i].url})
         chrome.history.addUrl({url: "https://www.1800flowers.com/?flws_rd=1"})
         chrome.history.addUrl({url: "http://www.popsugar.com/love/Most-Romantic-Gifts-From-Significant-Others-36097706"})
      }
    });
  });

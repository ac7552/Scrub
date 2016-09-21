
//
window.onload=function() {
    document.getElementById('my-form').onsubmit=function(e) {
      let url = document.getElementById('url').value
      let keyword = document.getElementById('keyword').value
      chrome.runtime.sendMessage(url)
  }
}

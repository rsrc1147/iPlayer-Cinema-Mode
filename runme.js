  chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == "runContentScript"){
        chrome.tabs.executeScript({
          code: "var head = document.getElementsByTagName('head')[0];var body = document.body; var style = document.createElement('style');head.appendChild(style);style.innerHTML = '.channel-player, #tviplayer *{max-width:100vw!important;}'"
        });
      }
   });
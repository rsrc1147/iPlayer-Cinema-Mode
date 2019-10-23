// asynchronous self-invoking function to not pollute global namespace
(function(window, document, undefined) {
  window.addEventListener('DOMContentLoaded', function(event) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);
    style.innerHTML = '.channel-player, #tviplayer *{max-width:100vw!important;}'; 
  });
})(this, this.document);

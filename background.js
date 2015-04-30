chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  var url = 'https://pp.vk.me/c622129/v622129008/2c9c8/CHBm8EJkDx8.jpg';
  var code =  'var images = document.images\n';
  code += 'for (i = 0; i < images.length; ++i) {\n';
  code += 'images[i].src = "' + url + '";';
  code += '}';
  chrome.tabs.executeScript({
    code: code
  });
});

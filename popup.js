let switchColor = document.getElementById('switchColor');

  chrome.storage.sync.get('color', function(data) {
    switchColor.style.backgroundColor = data.color;
    switchColor.setAttribute('value', data.color);
  });

  switchColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
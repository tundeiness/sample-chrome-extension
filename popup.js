let switchColor = document.getElementById('switchColor');

  chrome.storage.sync.get('color', function(data) {
    switchColor.style.backgroundColor = data.color;
    switchColor.setAttribute('value', data.color);
  });
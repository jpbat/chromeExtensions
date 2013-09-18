chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            code: "for (var i = 0; i < document.images.length; i++) {document.images[i].setAttribute('src', 'http://bit.ly/PujsOO')}"
        });
    }
});

let _data = [];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'submit_data') {
        chrome.runtime.sendMessage({ action: 'get_data' }, function(response) {
            _data = response.data;
        });
    }
    if (request.action === 'get_data_content') {
        sendResponse({ data: _data });
    }
});
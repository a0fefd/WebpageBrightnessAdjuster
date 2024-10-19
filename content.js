setInterval(function () {
    chrome.runtime.sendMessage({ action: 'get_data_content' }, function (response) {
        document.querySelector("html").style.filter = "brightness("+response.data[0]+"%)";
    });
}, 500)

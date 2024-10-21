function getSetBrightness() {
    chrome.runtime.sendMessage({ action: 'get_data_content' }, function (response) {
        document.querySelector("html").style.filter = "brightness("+response.data[0]+"%)";
    });
    return "100";
}
getSetBrightness();
setInterval(getSetBrightness, 500)


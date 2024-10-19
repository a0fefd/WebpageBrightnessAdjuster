function getCurrentTab(callback) {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
        if (chrome.runtime.lastError)
            console.error(chrome.runtime.lastError);
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        callback(tab);
    });
}

let john = 0;
john = document.querySelector("#brightness").value;
// }
setInterval(function () {
    john = document.querySelector("#brightness").value;
    document.querySelector("#brightness_num").text = john;
}, 20);
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'get_data') {
        // Send data back to content script
        sendResponse({ data: [john] });
    }
});
const submit = document.querySelector("#submit");
submit.addEventListener("click", function (event) {
    chrome.runtime.sendMessage({ action: 'submit_data' }, function (response) {});
    // setTimeout(function () {
    //     getCurrentTab(function (tab) {
    //         tab.window.location.reload();
    //     });
    // },200)
})

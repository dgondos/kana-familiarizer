var portFromCS;
let nextFun = 0;

browser.runtime.onConnect.addListener(function(p) {
    portFromCS = p;
});

browser.browserAction.onClicked.addListener(function() {
    portFromCS.postMessage({ fun: nextFun });
    nextFun++;
    if (nextFun > 3) {
        nextFun = 0;
    }
});
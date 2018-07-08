let hepburn = require("hepburn");

function disableKanafam() {
    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        if (!element.classList.contains("kanafam-modified")) {
            continue;
        }
        let originalText = element.getAttribute("originalText");
        element.parentElement.replaceChild(document.createTextNode(originalText), element);
    }
}

let changeText = function(transformFun) {
    disableKanafam();

    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        if (element.classList.contains("kanafam-modified")) {
            continue;
        }
        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let newElement = document.createElement("span");
                newElement.setAttribute("originalText", text);
                newElement.classList.add('kanafam-modified');
                newElement.appendChild(document.createTextNode(transformFun(text)));
                element.replaceChild(newElement, node);
            }
        }
    }
}

let transformFuns = [ hepburn.toKatakana, hepburn.toHiragana ];

var myPort = browser.runtime.connect({name:"port-from-cs"});

myPort.onMessage.addListener(function(m) {
    if (m.fun < 3) {
        changeText(transformFuns[m.fun]);
    }
    else {
        disableKanafam();
    }
});

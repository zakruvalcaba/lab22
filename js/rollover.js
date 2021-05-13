const $ = (id) => {
    return document.getElementById(id);
}

const createRollover = function (imgTag, secondUrl, secondAlt) {
    // STORE FIRST IMAGE INFO
    let firstUrl = imgTag.src;
    let firstAlt = imgTag.alt;

    // PRELOAD THE INITIAL IMAHE
    let image = new Image();
    image.src = secondUrl;

    // CREATE MOUSEOVER AND MOUSEOUT FUNCTIONS
    const mouseover = function () {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };
    const mouseout = function () {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    }

    // ATTACH EVENT HANDLERS
    evt.attach(imgTag, 'mouseover', mouseover);
    evt.attach(imgTag, 'mouseout', mouseout);
};

const evt = {
    attach: function (node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else {
            node.attachEvent('on' + eventName, func)
        }
    }
};

window.addEventListener('load', () => {
    createRollover($('img1'), 'images/wakeboard.jpg', 'Zak likes to wakeboard');
    createRollover($('img2'), 'images/race.jpg', 'Zak likes obstacle course racing');
});
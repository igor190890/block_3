let block_1 = document.getElementById("block_1");
let block_2 = document.getElementById("block_2");
let block_3 = document.getElementById("block_3");


function getElementPosition(elemId) {
    var elem = document.getElementById(elemId);

    var w = elem.offsetWidth;
    var h = elem.offsetHeight;
    var l = 0;
    var t = 0;

    while (elem) {
        l += elem.offsetLeft;
        t += elem.offsetTop;
        elem = elem.offsetParent;
    }

    return {"left": l, "top": t, "width": w, "height": h};
}


function CreateObPosition() {
    this.x_left;
    this.x_right;
    this.y_top;
    this.y_bot;
}

let position = {};

position.div1 = new CreateObPosition();
position.div2 = new CreateObPosition();
position.div3 = new CreateObPosition();

function ollPosition() {
    let e = getElementPosition("block_1");
    position.div1.x_left = e.left;
    position.div1.x_right = e.left + e.width;
    position.div1.y_top = e.top;
    position.div1.y_bot = e.top + e.height;

    e = getElementPosition("block_2");
    position.div2.x_left = e.left;
    position.div2.x_right = e.left + e.width;
    position.div2.y_top = e.top;
    position.div2.y_bot = e.top + e.height;

    e = getElementPosition("block_3");
    position.div3.x_left = e.left;
    position.div3.x_right = e.left + e.width;
    position.div3.y_top = e.top;
    position.div3.y_bot = e.top + e.height;
}

//----------------
let nowMove = false;
block_1.addEventListener("mousedown", function(){nowMove = this.id});
block_2.addEventListener("mousedown", function(){nowMove = this.id});
block_3.addEventListener("mousedown", function(){nowMove = this.id});

block_1.addEventListener("mouseup", function(){nowMove = false});
block_2.addEventListener("mouseup", function(){nowMove = false});
block_3.addEventListener("mouseup", function(){nowMove = false});


function lisen() {
    ollPosition();

    position.move = new CreateObPosition();
    e = getElementPosition(this.id);

    position.move.x_left = e.left;
    position.move.x_right = e.left + e.width;
    position.move.y_top = e.top;
    position.move.y_bot = e.top + e.height;

    // size less
    let coefficientLess = 30;
    let blockWigth = 150;
    let blockHeight = 80;
    let pctWidth = (blockWigth * coefficientLess) / 100;
    let pctHeight = (blockHeight * coefficientLess) / 100;


    if (this.id === "block_1" && nowMove === this.id) {
        if (
            (
                position.move.x_right - pctWidth > position.div2.x_left &&
                position.move.x_left + pctWidth < position.div2.x_right &&
                position.move.y_bot - pctHeight > position.div2.y_top &&
                position.move.y_top + pctHeight < position.div2.y_bot
            )
            ||
            (
                position.move.x_right - pctWidth > position.div3.x_left &&
                position.move.x_left + pctWidth < position.div3.x_right &&
                position.move.y_bot - pctHeight > position.div3.y_top &&
                position.move.y_top + pctHeight < position.div3.y_bot
            )
        ) {
            document.getElementById(this.id).style.background = "#f3f3f3";
            document.getElementById(this.id).style.width = blockWigth - pctWidth + "px";
            document.getElementById(this.id).style.height = blockHeight - pctHeight + "px";
        } else {
            document.getElementById(this.id).style.background = "#5E74FF";
            document.getElementById(this.id).style.width = blockWigth + "px";
            document.getElementById(this.id).style.height = blockHeight + "px";
        }
    }
    if (this.id === "block_2" && nowMove === this.id) {
        if (
            (
                position.move.x_right - pctWidth > position.div1.x_left &&
                position.move.x_left + pctWidth < position.div1.x_right &&
                position.move.y_bot - pctHeight > position.div1.y_top &&
                position.move.y_top + pctHeight < position.div1.y_bot
            )
            ||
            (
                position.move.x_right - pctWidth > position.div3.x_left &&
                position.move.x_left + pctWidth < position.div3.x_right &&
                position.move.y_bot - pctHeight > position.div3.y_top &&
                position.move.y_top + pctHeight < position.div3.y_bot
            )
        ) {
            document.getElementById(this.id).style.background = "#f3f3f3";
            document.getElementById(this.id).style.width = blockWigth - pctWidth + "px";
            document.getElementById(this.id).style.height = blockHeight - pctHeight + "px";
        } else {
            document.getElementById(this.id).style.background = "#5E74FF";
            document.getElementById(this.id).style.width = blockWigth + "px";
            document.getElementById(this.id).style.height = blockHeight + "px";
        }
    }
    if (this.id === "block_3" && nowMove === this.id) {
        if (
            (
                position.move.x_right - pctWidth > position.div2.x_left &&
                position.move.x_left + pctWidth < position.div2.x_right &&
                position.move.y_bot - pctHeight > position.div2.y_top &&
                position.move.y_top + pctHeight < position.div2.y_bot
            )
            ||
            (
                position.move.x_right - pctWidth > position.div1.x_left &&
                position.move.x_left + pctWidth < position.div1.x_right &&
                position.move.y_bot - pctHeight > position.div1.y_top &&
                position.move.y_top + pctHeight < position.div1.y_bot
            )
        ) {
            document.getElementById(this.id).style.background = "#f3f3f3";
            document.getElementById(this.id).style.width = blockWigth - pctWidth + "px";
            document.getElementById(this.id).style.height = blockHeight - pctHeight + "px";
        } else {
            document.getElementById(this.id).style.background = "#5E74FF";
            document.getElementById(this.id).style.width = blockWigth + "px";
            document.getElementById(this.id).style.height = blockHeight + "px";
        }
    }


}

function changeElem() {
    block_1.addEventListener("mousemove", lisen);
    block_2.addEventListener("mousemove", lisen);
    block_3.addEventListener("mousemove", lisen);
}

block_1.addEventListener("mousedown", zIndex);
block_2.addEventListener("mousedown", zIndex);
block_3.addEventListener("mousedown", zIndex);

function zIndex() {
    block_1.style.zIndex = "1";
    block_2.style.zIndex = "1";
    block_3.style.zIndex = "1";

    document.getElementById(this.id).style.zIndex = "100";
}

//----------------


function $(v) {

    return (document.getElementById(v));
}

function agent(v) {
        changeElem();
    return (Math.max(navigator.userAgent.toLowerCase().indexOf(v), 0));
}

function xy(e, v) {
    return (v ? (agent('msie') ? event.clientY + document.body.scrollTop : e.pageY) : (agent('msie') ? event.clientX + document.body.scrollTop : e.pageX));
}

function dragOBJ(d, e) {

    function drag(e) {
        if (!stop) {
            d.style.top = (tX = xy(e, 1) + oY - eY + 'px');
            d.style.left = (tY = xy(e) + oX - eX + 'px');
        }
    }


    var oX = parseInt(d.style.left), oY = parseInt(d.style.top), eX = xy(e), eY = xy(e, 1), tX, tY, stop;

    document.onmousemove = drag;
    document.onmouseup = function () {
        stop = 1;
        document.onmousemove = '';
        document.onmouseup = '';
    };

}



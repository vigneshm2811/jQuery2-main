var arr = [];
var total;
var balance = 100000;
///////////////////////////////////////OBJECT FOR DISPLAY CONTENT IN FIRST PAGE/////////////////////////////////////////
var obj = [{
    id: 0,
    img: ` "./images/cd-drive.jpg" `,
    para: `Cd-drive`,
    small: 2000,

}, {
    id: 1,
    img: ` "./images/cpu.jpg" `,
    para: ` CPU`,
    small: 3000,

}, {
    id: 2,
    img: ` "./images/laptop.jpg" `,
    para: ` Laptop`,
    small: 5000,

}, {
    id: 3,
    img: `  "./images/pendrive.jpg"`,
    para: `Pendrive`,
    small: 1000,

}, {
    id: 4,
    img: ` "./images/ssd.jpg" `,
    para: ` SSD`,
    small: 2000,

}, {
    id: 5,
    img: ` "./images/watch.webp" `,
    para: ` Watch`,
    small: 4000,

}, {
    id: 6,
    img: `  "./images/mobile.jpg"`,
    para: ` Mobile`,
    small: 10000,

}, {
    id: 7,
    img: `  "./images/computer.png" `,
    para: `  Computer`,
    small: 30000,

},
{
    id: 8,
    img: `   "./images/tab.jpeg"`,
    para: `   Tab`,
    small: 10000,

}
    , {
    id: 9,
    img: `   "./images/mouse.jfif" `,
    para: `  Mouse`,
    small: 300,

}, {
    id: 10,
    img: ` "./images/keyboard.jpg" `,
    para: `Keyboard`,
    small: 600,

}, {
    id: 11,
    img: `"./images/headset.webp"`,
    para: `Headphone`,
    small: 800


}
];
for (let i = 0; i < obj.length; i++) {
    $("#content").append(addobj())


    function addobj() {
        return (`<div class="col mt-2 start" id="col${i}">
    <div class="card" style="width: 15rem;">
    <img src=${obj[i].img}alt="Card image cap">
    <p class="card-text h3 ps-1" id="price">${obj[i].para}<svg xmlns="http://www.w3.org/2000/svg" style="display:none" id="icon" onclick="del(this)"width="16" height="16" fill="currentColor" class="bi bi-trash-fill ms-3" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg></p>
    <small class="card-text ps-2">price :<span > ${obj[i].small}</span></small>
    <input type="number" class="w-100 mt-2" value="" id="input" onchange="input(${i})">
    <button class="btn btn-primary mt-1 remve stop" id="btn${i}" >Add to Cart</button></div></div>`
        )
    }
}
////////////////////////////////////////////////////////////////////////SECOND PAGE CONTENT/////////////////////////////////////////
$("#btn0").click(function () {
    var col1 = $("#col0").html()

    arr.push(col1);
})
$("#btn1").click(function () {
    var col2 = $("#col1").html();
    arr.push(col2);
})
$("#btn2").click(function () {
    var col3 = $("#col2").html()
    arr.push(col3);
})
$("#btn3").click(function () {
    var col4 = $("#col3").html()
    arr.push(col4);
})
$("#btn4").click(function () {
    var col5 = $("#col4").html()
    arr.push(col5);
})
$("#btn5").click(function () {
    var col6 = $("#col5").html()
    arr.push(col6);
})
$("#btn6").click(function () {
    var col7 = $("#col6").html()
    arr.push(col7);
})
$("#btn7").click(function () {
    var col8 = $("#col7").html()
    arr.push(col8);
})
$("#btn8").click(function () {
    var col9 = $("#col8").html()
    arr.push(col9);
})
$("#btn9").click(function () {
    var col10 = $("#col9").html()
    arr.push(col10);
})
$("#btn10").click(function () {
    var col11 = $("#col10").html()
    arr.push(col11);
})
$("#btn11").click(function () {
    var col12 = $("#col11").html()
    arr.push(col12);
})

//////////////////////////////////////////////////GO TO CART BUTTON////////////////////////////////////////
$("#goTocart").click(function () {


    $("#fstcont").hide();
    $("#cart").show();

    $("#cart").html(arr);
    $("#goTocart").hide();
    $("#back").show();
    $("#Buy").show();
    for (var i = 0; i < arr.length; i++) {
        $(".remve").hide()
    }
    $("svg").show()


});
///////////////////////////////////////////////////////BACK BUTTON/////////////////////////////////////
$("#back").click(function () {
    $("#cart").hide();
    $("#fstcont").show();
    $("#goTocart").show();
    $("#back").hide();
    $("#Buy").hide();
    for (var i = 0; i < obj.length; i++) {
        $(".remve").show()
    }
    $("svg").hide()
})
///////////////////////////////////////////////////BUY///////////////////////////////////////////////////
$("#Buy").click(function () {
    $("#cart").hide();
    $("#thrd-disp").show();
    $("#back").hide();
    $("#Buy").hide();


})

/////////////////////////////////////////////////////AMT CALCULATION//////////////////////////////////////
function input(b) {

    var price = $(arr[b]).find("span").text()
    var quan = $("input").val()
    total = (price * quan)

    var bal = balance - total
    if (bal < 0) {
        $("#h1").show()
    } else {
        $("#h1").hide()
    }
    $("#amt").text(bal)
}
/////////////////////////////////////////////////////////DELETE////////////////////////////////////////
function del(d) {
    $("#icon").parentsUntil("#cart").remove();
    for (var i = 0; i < arr.length; i++) {
        arr = arr.slice(1);
    }

}
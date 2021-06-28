


document.getElementById('TenInch').onclick = function() {

    var values1 = ["Select one of our designs ...","copper1","copper2","copper3"];
    var values2 = ["Select one of our designs ...","silver1","silver2","silver3"];
    var values3 = ["Select one of our designs ...","center1","center2","center3","center4","center5","center6","center7","center8","center9"];
    var select1 = document.createElement("select");
    select1.name = "TenL1";
    select1.id = "TenL1";
    select1.className="form-select";

    var select2 = document.createElement("select");
    select2.name = "TenL2";
    select2.id = "TenL2";
    select2.className="form-select";

    var select3 = document.createElement("select");
    select3.name = "TenL3";
    select3.id = "TenL3";
    select3.className="form-select";

    for (const val of values1) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select1.appendChild(option);
    }

    for (const val of values2) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select2.appendChild(option);
    }

    for (const val of values3) {
    var option = document.createElement("option");
    option.value = val;
    console.log(val);
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select3.appendChild(option);
    }

    var label1 = document.createElement("label");
    label1.innerHTML = "Layer1 "
    label1.htmlFor = "TenL1";
    label1.className="labels__styles";
   

    var label2 = document.createElement("label");
    label2.innerHTML = "Layer2 "
    label2.htmlFor = "TenL2";
    label2.className="labels__styles";

    var label3 = document.createElement("label");
    label3.innerHTML = "Layer3 "
    label3.htmlFor = "TenL3";
    label3.className="labels__styles";

    document.getElementById("div1").innerHTML='';
    document.getElementById("div2").innerHTML='';
    document.getElementById("div3").innerHTML='';
    if(document.getElementById("div4")){
        document.getElementById("div4").remove();
    }
    if(document.getElementById("div5")){
        document.getElementById("div5").remove();
    }
document.getElementById("div1").appendChild(label1).appendChild(select1);
document.getElementById("div2").appendChild(label2).appendChild(select2);
document.getElementById("div3").appendChild(label3).appendChild(select3);
canvas.clear();
updateTshirtImage2();

document.getElementById("TenL1").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
if(this.value=="copper1")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_copper1, {id:"TCO1"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TCO2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TCO3");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
if(this.value=="copper2")
{
//canvas.clear();
console.log(canvas);
console.log(canvas.length)
var imgInstance = new fabric.Image(Ten_copper2, {id:"TCO2"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TCO3");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
if(this.value=="copper3"){
//canvas.clear();
var imgInstance = new fabric.Image(Ten_copper3, {id:"TCO3"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TCO2");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

}, false);

document.getElementById("TenL2").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
if(this.value=="silver1")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_silver1, {id:"TS1"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TS3");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS2");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
if(this.value=="silver2")
{
//canvas.clear();
var imgInstance = new fabric.Image(Ten_silver2, {id:"TS2"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TS3");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
if(this.value=="silver3"){
//canvas.clear();
var imgInstance = new fabric.Image(Ten_silver3, {id:"TS3"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TS2");
    canvas.remove(obj2);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
}, false);

document.getElementById("TenL3").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
if(this.value=="center1")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center1, {id:"TC1"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}
if(this.value=="center2")
{
//canvas.clear();
var imgInstance = new fabric.Image(Ten_center2, {id:"TC2"});
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center3")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC3"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC1");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center4")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC4"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC1");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center5")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC5"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC1");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center6")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC6"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC1");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center7")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC7"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC1");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center8")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC8"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC1");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC9");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

if(this.value=="center9")
{
// canvas.clear();
var imgInstance = new fabric.Image(Ten_center3, {id:"TC9"});
console.log(Seven_copper1);
imgInstance['selectable'] = false;
imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
group.add(imgInstance);
let obj1 = canvas.getObjects().find(obj1 => obj1.id === "TC2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "TC3");
    canvas.remove(obj2);
    let obj3 = canvas.getObjects().find(obj1 => obj1.id === "TC4");
    canvas.remove(obj3);
    let obj4 = canvas.getObjects().find(obj2 => obj2.id === "TC5");
    canvas.remove(obj4);
    let obj5 = canvas.getObjects().find(obj1 => obj1.id === "TC6");
    canvas.remove(obj5);
    let obj6 = canvas.getObjects().find(obj2 => obj2.id === "TC7");
    canvas.remove(obj6);
    let obj7 = canvas.getObjects().find(obj1 => obj1.id === "TC8");
    canvas.remove(obj7);
    let obj8 = canvas.getObjects().find(obj2 => obj2.id === "TC1");
    canvas.remove(obj8);
// var imgInstance = new fabric.Image(background, {id:"SCO1"});
// imgInstance.scaleToWidth(canvas.getWidth());
// imgInstance.scaleToHeight(canvas.getHeight());
// canvas.add(imgInstance);
}

}, false);





}

document.getElementById('SevenInch').onclick = function() {

var values1 = ["Select one of our designs ...","copper1","copper2","copper3"];
var values2 = ["Select one of our designs ...","silver1","silver2","silver3"];
var values3 = ["Select one of our designs ...","center1","center2"];

var select1 = document.createElement("select");
select1.name = "tshirt-design2";
select1.id = "tshirt-design2";
select1.className="form-select";

var select2 = document.createElement("select");
select2.name = "tshirt-design3";
select2.id = "tshirt-design3";
select2.className="form-select";

var select3 = document.createElement("select");
select3.name = "tshirt-design4";
select3.id = "tshirt-design4";
select3.className="form-select";

for (const val of values1) {
var option = document.createElement("option");
option.value = val;
option.text = val.charAt(0).toUpperCase() + val.slice(1);
select1.appendChild(option);
}

for (const val of values2) {
var option = document.createElement("option");
option.value = val;
option.text = val.charAt(0).toUpperCase() + val.slice(1);
select2.appendChild(option);
}

for (const val of values3) {
var option = document.createElement("option");
option.value = val;
option.text = val.charAt(0).toUpperCase() + val.slice(1);
select3.appendChild(option);
}

var label1 = document.createElement("label");
label1.innerHTML = "Layer1 "
label1.htmlFor = "tshirt-design2";
label1.className="labels__styles";

var label2 = document.createElement("label");
label2.innerHTML = "Layer2 "
label2.htmlFor = "tshirt-design3";
label2.className="labels__styles";

var label3 = document.createElement("label");
label3.innerHTML = "Layer3 "
label3.htmlFor = "tshirt-design3";
label3.className="labels__styles";

document.getElementById("div1").innerHTML='';
document.getElementById("div2").innerHTML='';
document.getElementById("div3").innerHTML='';
if(document.getElementById("div4")){
    document.getElementById("div4").remove();
}
if(document.getElementById("div5")){
    document.getElementById("div5").remove();
}

document.getElementById("div1").appendChild(label1).appendChild(select1);
document.getElementById("div2").appendChild(label2).appendChild(select2);
document.getElementById("div3").appendChild(label3).appendChild(select3);
canvas.clear();
updateTshirtImage1();

document.getElementById("tshirt-design2").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
// if(!this.value){
//     canvas.clear();
// }
if(this.value=="copper1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_copper1, {id:"SCO1"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
    canvas.remove(obj2); 
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="copper2")
{
    //canvas.clear();
    console.log(canvas);
    console.log(canvas.length)
    var imgInstance = new fabric.Image(Seven_copper2, {id:"SCO2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="copper3"){
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_copper3, {id:"SCO3"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO2");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}

}, false);
document.getElementById("tshirt-design3").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
if(this.value=="silver1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver1, {id:"SS1"});
    console.log(Seven_copper1);
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="silver2")
{
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver2, {id:"SS2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="silver3"){
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver3, {id:"SS3"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS2");
    canvas.remove(obj2);

    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
}, false);

document.getElementById("tshirt-design4").addEventListener("change", function(){

// if(this.value=="Select one of our designs ..."){
//     canvas.clear();
// }
if(this.value=="center1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_center1, {id:"SC1"});
    console.log(Seven_copper1);
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SC2");
    canvas.remove(obj1);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="center2")
{
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_center2, {id:"SC2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SC1");
    canvas.remove(obj1);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}

}, false);

}


document.getElementById('Inch24').onclick = function() {
    var values1 = ["Select one of our designs ...","Innercopper1"];
    var values2 = ["Select one of our designs ...","Innersilver1"];
    var values3 = ["Select one of our designs ...","Outercopper1"];
    var values4 = ["Select one of our designs ...","Outersilver1"];
    var values5 = ["Select one of our designs ...","Center1"];

    var select1 = document.createElement("select");
    select1.name = "Two4L1";
    select1.id = "Two4L1";
    select1.className="form-select";
    
    var select2 = document.createElement("select");
    select2.name = "Two4L2";
    select2.id = "Two4L2";
    select2.className="form-select";
    
    var select3 = document.createElement("select");
    select3.name = "Two4L3";
    select3.id = "Two4L3";
    select3.className="form-select";

    var select4 = document.createElement("select");
    select4.name = "Two4L4";
    select4.id = "Two4L4";
    select4.className="form-select";

    var select5 = document.createElement("select");
    select5.name = "Two4L5";
    select5.id = "Two4L5";
    select5.className="form-select";
    
    for (const val of values1) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select1.appendChild(option);
        }
        
        for (const val of values2) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select2.appendChild(option);
        }
        
        for (const val of values3) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select3.appendChild(option);
        }
        for (const val of values4) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select4.appendChild(option);
            }
            
            for (const val of values5) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select5.appendChild(option);
            }

            var label1 = document.createElement("label");
            label1.innerHTML = "Layer1 "
            label1.htmlFor = "Two4L1";
            label1.className="labels__styles";
            
            var label2 = document.createElement("label");
            label2.innerHTML = "Layer2 "
            label2.htmlFor = "Two4L2";
            label2.className="labels__styles";
            
            var label3 = document.createElement("label");
            label3.innerHTML = "Layer3 "
            label3.htmlFor = "Two4L3";
            label3.className="labels__styles";

            
            var label4 = document.createElement("label");
            label4.innerHTML = "Layer4 "
            label4.htmlFor = "Two4L4";
            label4.className="labels__styles";

            var label5 = document.createElement("label");
            label5.innerHTML = "Layer5 "
            label5.htmlFor = "Two4L5";
            label5.className="labels__styles";

            var div4=document.createElement("div");
            div4.id="div4";

            var div5=document.createElement("div");
            div5.id="div5";
            
            
            document.getElementById("div1").innerHTML='';
            document.getElementById("div2").innerHTML='';
            document.getElementById("div3").innerHTML='';
            if(document.getElementById("div4")){
                document.getElementById("div4").remove();
            }
            if(document.getElementById("div5")){
                document.getElementById("div5").remove();
            }
            if(document.getElementById("div4")){
                document.getElementById("div4").innerHTML='';
            }
            if(document.getElementById("div5")){
                document.getElementById("div5").innerHTML='';
            }    
            document.getElementById("div0").appendChild(div4);
            document.getElementById("div0").appendChild(div5);
            document.getElementById("div1").appendChild(label1).appendChild(select1);
            document.getElementById("div2").appendChild(label2).appendChild(select2);
            document.getElementById("div3").appendChild(label3).appendChild(select3);
            document.getElementById("div4").appendChild(label4).appendChild(select4);
            document.getElementById("div5").appendChild(label5).appendChild(select5);
            canvas.clear();
            updateTshirtImage3();

            document.getElementById("Two4L1").addEventListener("change", function(){
                if(this.value=="Innercopper1")
            {
              // canvas.clear();
            var imgInstance = new fabric.Image(Inch24_innerCopper, {id:"TWIC1"});
            imgInstance['selectable'] = false;
           imgInstance['evented'] = false;
           imgInstance.scaleToWidth(canvas.getWidth());
            imgInstance.scaleToHeight(canvas.getHeight());
            canvas.add(imgInstance);
            group.add(imgInstance);
    // let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
    // canvas.remove(obj1);
    // let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
    // canvas.remove(obj2); 
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
            }
            , false);
            document.getElementById("Two4L2").addEventListener("change", function(){
                if(this.value=="Innersilver1")
                {
                  // canvas.clear();
                var imgInstance = new fabric.Image(Inch24_innerSilver, {id:"TWIS1"});
                imgInstance['selectable'] = false;
               imgInstance['evented'] = false;
               imgInstance.scaleToWidth(canvas.getWidth());
                imgInstance.scaleToHeight(canvas.getHeight());
                canvas.add(imgInstance);
                group.add(imgInstance);
        // let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
        // canvas.remove(obj1);
        // let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
        // canvas.remove(obj2); 
        // var imgInstance = new fabric.Image(background, {id:"SCO1"});
        // imgInstance.scaleToWidth(canvas.getWidth());
        // imgInstance.scaleToHeight(canvas.getHeight());
        // canvas.add(imgInstance);
                }


            }
            , false);
            document.getElementById("Two4L3").addEventListener("change", function(){
 
                if(this.value=="Outercopper1")
                {
                  // canvas.clear();
                var imgInstance = new fabric.Image(Inch24_outerCopper, {id:"TWOC1"});
                imgInstance['selectable'] = false;
               imgInstance['evented'] = false;
               imgInstance.scaleToWidth(canvas.getWidth());
                imgInstance.scaleToHeight(canvas.getHeight());
                canvas.add(imgInstance);
                group.add(imgInstance);
        // let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
        // canvas.remove(obj1);
        // let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
        // canvas.remove(obj2); 
        // var imgInstance = new fabric.Image(background, {id:"SCO1"});
        // imgInstance.scaleToWidth(canvas.getWidth());
        // imgInstance.scaleToHeight(canvas.getHeight());
        // canvas.add(imgInstance);
                }
                
            }
            , false);
            document.getElementById("Two4L4").addEventListener("change", function(){
                  
                if(this.value=="Outersilver1")
                {
                  // canvas.clear();
                var imgInstance = new fabric.Image(Inch24_outerSilver, {id:"TWOS1"});
                imgInstance['selectable'] = false;
               imgInstance['evented'] = false;
               imgInstance.scaleToWidth(canvas.getWidth());
                imgInstance.scaleToHeight(canvas.getHeight());
                canvas.add(imgInstance);
                group.add(imgInstance);
        // let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
        // canvas.remove(obj1);
        // let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
        // canvas.remove(obj2); 
        // var imgInstance = new fabric.Image(background, {id:"SCO1"});
        // imgInstance.scaleToWidth(canvas.getWidth());
        // imgInstance.scaleToHeight(canvas.getHeight());
        // canvas.add(imgInstance);
                }

            }
            , false);
            document.getElementById("Two4L5").addEventListener("change", function(){

                if(this.value=="Center1")
                {
                  // canvas.clear();
                var imgInstance = new fabric.Image(Inch24_Center1, {id:"TWC1"});
                imgInstance['selectable'] = false;
               imgInstance['evented'] = false;
               imgInstance.scaleToWidth(canvas.getWidth());
                imgInstance.scaleToHeight(canvas.getHeight());
                canvas.add(imgInstance);
                group.add(imgInstance);
        // let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
        // canvas.remove(obj1);
        // let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
        // canvas.remove(obj2); 
        // var imgInstance = new fabric.Image(background, {id:"SCO1"});
        // imgInstance.scaleToWidth(canvas.getWidth());
        // imgInstance.scaleToHeight(canvas.getHeight());
        // canvas.add(imgInstance);
                }

            }
            , false);

        }
         



var canvas = window._canvas = new fabric.Canvas('c');

var group = new fabric.Group();
var Seven_background = new Image();
var Seven_copper1 = new Image();
var Seven_copper2 = new Image();
var Seven_copper3 = new Image();
var Seven_silver1 = new Image();
var Seven_silver2 = new Image();
var Seven_silver3 = new Image();
var Seven_center1 = new Image();
var Seven_center2 = new Image();

var Ten_background = new Image();
var Ten_copper1 = new Image();
var Ten_copper2 = new Image();
var Ten_copper3 = new Image();
var Ten_silver1 = new Image();
var Ten_silver2 = new Image();
var Ten_silver3 = new Image();
var Ten_center1 = new Image();
var Ten_center2 = new Image();
var Ten_center3 = new Image();
var Ten_center4 = new Image();

var Inch24_background= new Image();
var Inch24_innerCopper= new Image();
var Inch24_outerCopper= new Image();
var Inch24_innerSilver= new Image();
var Inch24_outerSilver= new Image();
var Inch24_Center1= new Image();

function updateTshirtImage1(){
var imgInstance = new fabric.Image(Seven_background, {});
imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
}

function updateTshirtImage2(){
var imgInstance = new fabric.Image(Ten_background, {});
imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
imgInstance.scaleToWidth(canvas.getWidth());
imgInstance.scaleToHeight(canvas.getHeight());
canvas.add(imgInstance);
}

function updateTshirtImage3(){
    var imgInstance = new fabric.Image(Inch24_background, {});
    imgInstance['selectable'] = false;
        imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    }

Seven_background.addEventListener("load", function(){

updateTshirtImage1(this.value);
}, false);

document.getElementById("tshirt-design2").addEventListener("change", function(){

// if(!this.value){
//     canvas.clear();
// }
if(this.value=="copper1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_copper1, {id:"SCO1"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
    canvas.remove(obj2); 
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="copper2")
{
    //canvas.clear();
    console.log(canvas);
    console.log(canvas.length)
    var imgInstance = new fabric.Image(Seven_copper2, {id:"SCO2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="copper3"){
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_copper3, {id:"SCO3"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SCO1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SCO2");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}

}, false);
document.getElementById("tshirt-design3").addEventListener("change", function(){

// if(!this.value){
//     canvas.clear();
// }
if(this.value=="silver1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver1, {id:"SS1"});
    console.log(Seven_copper1);
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS2");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="silver2")
{
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver2, {id:"SS2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS3");
    canvas.remove(obj2);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="silver3"){
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_silver3, {id:"SS3"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SS1");
    canvas.remove(obj1);
    let obj2 = canvas.getObjects().find(obj2 => obj2.id === "SS2");
    canvas.remove(obj2);

    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
}, false);

document.getElementById("tshirt-design4").addEventListener("change", function(){

// if(!this.value){
//     canvas.clear();
// }
if(this.value=="center1")
{
    // canvas.clear();
    var imgInstance = new fabric.Image(Seven_center1, {id:"SC1"});
    console.log(Seven_copper1);
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SC2");
    canvas.remove(obj1);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}
if(this.value=="center2")
{
    //canvas.clear();
    var imgInstance = new fabric.Image(Seven_center2, {id:"SC2"});
    imgInstance['selectable'] = false;
    imgInstance['evented'] = false;
    imgInstance.scaleToWidth(canvas.getWidth());
    imgInstance.scaleToHeight(canvas.getHeight());
    canvas.add(imgInstance);
    group.add(imgInstance);
    let obj1 = canvas.getObjects().find(obj1 => obj1.id === "SC1");
    canvas.remove(obj1);
    // var imgInstance = new fabric.Image(background, {id:"SCO1"});
    // imgInstance.scaleToWidth(canvas.getWidth());
    // imgInstance.scaleToHeight(canvas.getHeight());
    // canvas.add(imgInstance);
}

}, false);



Seven_background.src = './cricle.png';
Seven_silver1.src ='./silver.png';
Seven_silver2.src='./silver2.png';
Seven_silver3.src='./sillver3.png';
Seven_copper1.src='./copper.png';
Seven_copper2.src='./copper2.png';
Seven_copper3.src='./copper3.png';
Seven_center1.src='./center.png';
Seven_center2.src='./center1.png'

Ten_background.src = './Inch10/cricle.png';
Ten_silver1.src ='./Inch10/siller.png';
Ten_silver2.src='./Inch10/sillver1.png';
Ten_silver3.src='./Inch10/sillver2.png';
Ten_copper1.src='./Inch10/copper1.png';
Ten_copper2.src='./Inch10/copper2.png';
Ten_copper3.src='./Inch10/copper3.png';
Ten_center1.src='./Inch10/10inchcenter1.png';
Ten_center2.src='./Inch10/10inchcenter2.png';
Ten_center3.src='./Inch10/10inchcenter3.png';
Ten_center4.src='./Inch10/10inchcenter4.png';
Ten_center5.src='./Inch10/10inchcenter5.png';
Ten_center6.src='./Inch10/10inchcenter6.png';
Ten_center7.src='./Inch10/10inchcenter7.png';
Ten_center8.src='./Inch10/10inchcenter8.png';
Ten_center9.src='./Inch10/10inchcenter9.png';

Inch24_background.src="./24inch/Circle.png";
Inch24_innerCopper.src="./24inch/innercopper.png";
Inch24_outerCopper.src ="./24inch/outtercopper.png";
Inch24_innerSilver.src = "./24inch/innersillver.png";
Inch24_outerSilver.src = "./24inch/outersillver.png";
Inch24_Center1.src = "./24inch/center1.png";


canvas.setOverlayImage(group);
menuListArray = ["pizza vegetariana",
    "pizza de frango",
    "pizza portuguesa",
    "pizza quatro queijos",
    "pizza de calabresa",
    "pizza extravaganza"];


function getMenu() {
    var htmldata=""
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    document
}document.getElementById("displayMenu").innerHTML = htmldata;

// crie a função addItem
function addItem() {
var htmldata;
var imgtags='<img id="im1"  src="imgages/pizza.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+ '<br>'
}
document.getElementById("displayAddMenu").innerHTML = htmldata;
}


//crie a função addTop
function addTop() {
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}
var trs = 214;
var tds = 95;
var avenues = {
    0:true,
    4:true,
    9:true,
    18:true,
    28:true,
    37:true,
    47:true,
    57:true,
    62:true,
    68:true,
    73:true,
    79:true,
    86:true,
    94:true,
    101:true};
function isStreet(row){
    return row % 3 == 0;
}
function isAvenue(col) {
    return avenues[col]; 
}

var carX = 0;
var carY = 0;
var getGridNode = function(x,y) {
    var selector = 'tr:nth-child('+(y+1).toString()+') '
    selector += 'td:nth-child('+(x+1).toString()+')';
    return $(selector);
}
var changeColor = function(x,y){
    getGridNode(x,y).addClass('visited');
}; 
$(function(){
    changeColor(carX,carY);
});
$(document).on('keypress', function(event){
	var keyCode = event.keyCode;
			up = 119,
			right = 100,
			left = 97,
			down = 115,
			newCarX = carX,
			newCarY = carY;

			if (keyCode == up){
				console.log('up');
				newCarY = carY - 1;
			} else if (keyCode == right){
				console.log('right');
				newCarX = carX + 1;
			} else if (keyCode == left){
				console.log('left');
				newCarX = carX - 1;
			} else if (keyCode == down){
				console.log('down');
				newCarY = carY + 1;
			}
			
			var gridNode = getGridNode(newCarX, newCarY);
			
			if (!gridNode.hasClass('visited') &&
			    (isAvenue(newCarX) || isStreet(newCarY))) {
			    carY = newCarY;
			    carX = newCarX;
			}
			
			changeColor(carX,carY);
			
});


document.write("<table id='map' border='1px'>");
for (var i =0 ; i < trs; i++) {
    if (isStreet(i)) {
        document.write("<tr class=\"street\">");
    } else {
        document.write("<tr>");
    }

    for (var x =0 ; x < tds; x++) {
        if (isAvenue(x)) {
            document.write("<td class=\"avenue\"></td>");
        } else {
            document.write("<td></td>");
        }
    } 
    document.write("</tr>");
}
document.write("</table>");

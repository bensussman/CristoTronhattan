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

var car1 = [4,4];
var changeColor = function(x,y){
	var selector = 'tr:nth-child('+Math.floor(y).toString()+') td:nth-child('+Math.floor(x).toString()+')';
	console.log(typeof selector);
	$(selector).css('background', 'red');
	// $('tr:nth-child(50) td:nth-child(49)').css('background', 'yellow');
}; 
$(document).on('keypress', function(event){
	var keyCode = event.keyCode;
			up = 119,
			right = 100,
			left = 97,
			down = 115;

			if (keyCode == up){
				console.log('up');
				car1[1] = car1[1] - 3;
				console.log(car1);
			} else if (keyCode == right){
				console.log('right');
				car1[0] = car1[0] + 3;
				console.log(car1);
			} else if (keyCode == left){
				console.log('left');
				car1[0] = car1[0] - 3;
				console.log(car1);
			} else if (keyCode == down){
				console.log('down');
				car1[1] = car1[1] + 3;
				console.log(car1);
			}
			changeColor(car1[0]/3,car1[1]/3);
			
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

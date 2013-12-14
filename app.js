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
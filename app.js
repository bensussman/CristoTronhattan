var car1 = [200,200];

$(document).on('keypress', function(event){
	var keyCode = event.keyCode;
			up = 119,
			right = 100,
			left = 97,
			down = 115;

			if (keyCode == up){
				console.log('up');
				console.log(car1);
					
			} else if (keyCode == right){
				console.log('right');
				console.log(car1);
			} else if (keyCode == left){
				console.log('left');
				console.log(car1);
			} else if (keyCode == down){
				console.log('down');
				console.log(car1);
			}
			
});
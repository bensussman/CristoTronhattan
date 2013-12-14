var car1 = [200,200];

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
			
});
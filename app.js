var car1 = [0,0];

$(document).on('keypress', function(event){
	var keyCode = event.keyCode;
			up = 119,
			right = 100,
			left = 97,
			down = 115;

			if (keyCode == up){
				console.log('up');	
			} else if (keyCode == right){
				console.log('right')
			} else if (keyCode == left){
				console.log('left')
			} else if (keyCode == down){
				console.log('down')
			}
			
});
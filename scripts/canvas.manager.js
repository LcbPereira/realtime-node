var canvasManager = {
	init: function(){
		var body = document.querySelector('body'),
			canvas = document.createElement('canvas');

		canvas.setAttribute('width', 1024);
		canvas.setAttribute('height', 768);
		canvas.setAttribute('style', 'background: #000');

		body.insertAdjacentElement('afterbegin', canvas);

		return canvas;
	}
}
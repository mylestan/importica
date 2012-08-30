function createThumbnails(imgSrc, i){
	//variables
	var thumb = new Image();
	var thumbPath = imgSrc + '/' + i + '-thumb.jpg';

	//image values
	thumb.src = thumbPath;
	thumb.id = i;

	//add image to the div
	$("#thumbnails").append(thumb);

	//if it loaded correctly, call for next thumbnail
	$("#" + thumb.id).load( function() {
		createThumbnails(imgSrc, i + 1);
	});

	//if error is thrown (aka doesn't exist), remove element
	$("#" + thumb.id).error (function() {
		$("#" + thumb.id).remove();
	});
}

function createThumbnails(imgSrc, i){
	//variables
	var image = new Image();
	var imgPath = imgSrc + '/' + i + '.jpg';

	//image values
	image.src = imgPath;
	image.id = "thumbnail" + i;

	//add image to the div
	$("#thumbnails").append(image);

	//if it loaded correctly, call for next thumbnail
	$("#" + image.id).load( function() {
		createThumbnails(imgSrc, i + 1);
	});

	$("#" + image.id).error (function() {
		$("#" + image.id).remove();
	});
}
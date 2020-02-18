// Start upload preview image

var $uploadCrop,
	tempFilename,
	rawImg,
	imageId;

function readFile1(input5) {
	if (input5.files && input5.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('.upload-demo').addClass('ready');
			$('#cropImagePop').modal('show');
			rawImg = e.target.result;
		}
		reader.readAsDataURL(input5.files[0]);
	} else {
		swal("Sorry - you're browser doesn't support the FileReader API");
	}
}

$uploadCrop = $('#upload-demo').croppie({
	viewport: {
		width: 128,
		height: 128,
		borderRadius: '50%'
	},
	enforceBoundary: false,
	enableExif: true
});
$('#cropImagePop').on('shown.bs.modal', function () {
	// alert('Shown pop');
	$uploadCrop.croppie('bind', {
		url: rawImg
	}).then(function () {
		console.log('jQuery bind complete');
	});
});

$('.item-img').on('change', function () {
	imageId = $(this).data('id');
	tempFilename = $(this).val();
	$('#cancelCropBtn').data('id', imageId);
	readFile1(this);
});
$('#cropImageBtn').on('click', function (ev) {
	$uploadCrop.croppie('result', {
		type: 'base64',
		format: 'jpeg',
		size: {
			width: 150,
			height: 200
		}
	}).then(function (resp) {
		$('#item-img-output').attr('src', resp);
		$('#cropImagePop').modal('hide');
	});
});
// End upload preview image


// CROP BACKGROUND IMAGE

// Start upload preview image

var $uploadCropBG,
	tempFilenameBG,
	rawImgBG,
	imageIdBG;

function readFile2(input6) {
	if (input6.files && input6.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('.upload-demoBG').addClass('ready');
			$('#cropImagePopBG').modal('show');
			rawImgBG = e.target.result;
		}
		reader.readAsDataURL(input6.files[0]);
	} else {
		swal("Sorry - you're browser doesn't support the FileReader API");
	}
}

$uploadCropBG = $('#upload-demoBG').croppie({
	viewport: {
		width: '100%',
		height: 300,
	
	},
	enforceBoundary: false,
	enableExif: true
});
$('#cropImagePopBG').on('shown.bs.modal', function () {
	// alert('Shown pop');
	$uploadCropBG.croppie('bind', {
		url: rawImgBG
	}).then(function () {
		console.log('jQuery bind complete');
	});
});

$('.item-imgBG').on('change', function () {
	imageIdBG = $(this).data('id');
	tempFilenameBG = $(this).val();
	$('#cancelCropBtn').data('id', imageIdBG);
	readFile2(this);
});
$('#cropImageBtnBG').on('click', function (ev) {
	$uploadCropBG.croppie('result', {
		type: 'base64',
		format: 'jpeg',
		size: {
			width: 553,
			height: 150
		}
	}).then(function (respBG) {
		$('#item-img-outputBG').attr('src', respBG);
		$('#cropImagePopBG').modal('hide');
	});
});
// End upload preview image
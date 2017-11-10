function slowScroll(id){
	var offset=100;
	$('html,body').animate({scrollTop: $(id).offset ().top-offset},3000);
	return false;
}

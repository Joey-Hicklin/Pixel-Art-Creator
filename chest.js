$('#magicChest').click(function(){
	if(!$(this).hasClass('chestActive')){
		$(this).attr('src', 'magicChest-open.gif');
		$('#magicChestContainer').show('slow');
		$(this).addClass('chestActive');
	}else{
		$(this).attr('src', 'magicChest-close.gif');
		setTimeout(function(){
			$('#magicChest').attr('src', 'magicChest.gif');
		}, 1200);
		$('#magicChestContainer').hide('slow');
		$(this).removeClass('chestActive');
	}
});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if(getParameterByName('chest') == 1){
	$('#magicChest').show();
}

function hidetable(){
	document.getElementById('hider').onclick=function(){
				if (document.getElementById('tabl1').style.display=='none') {
					document.getElementById('tabl1').style.display='';
					document.getElementById('tabl2').style.display='none';
				}else{
				document.getElementById('tabl1').style.display='none';
				document.getElementById('tabl2').style.display='';
				}
			}
}
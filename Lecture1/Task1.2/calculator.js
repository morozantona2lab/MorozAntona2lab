var x,y,z;
function mu(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='*';
}
function pl(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='+';
}
function mi(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='-';
}
function di(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='/';
}
function fa(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='!';
}
function sqt(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='√';
}
function sq(){
	x=document.getElementById('line').value;
	document.getElementById('line').value='';
	//x=parseINT(x);
	z='^2';
}
function eq(){
	y=document.getElementById('line').value;
	switch (z){
		case '*':document.getElementById('res').innerHTML=x*y;
		break;
		case '/':document.getElementById('res').innerHTML=x/y;
		break;
		case '-':document.getElementById('res').innerHTML=x-y;
		break;
		case '+':document.getElementById('res').innerHTML=x-y*(-1);
		break;
		case '√':{
			y=Math.sqrt(x);
			document.getElementById('res').innerHTML=y;
		}
		break;
		case '^2':document.getElementById('res').innerHTML=x*x;
		break;
		case '!':
			{	
				var i=0;
				y=1;
				while(i<x){
					i+=1;
					y=y*i;
				}
			document.getElementById('res').innerHTML=y;
		}
		break;
	}
}

var x,y,z;
function mu(){
	z='*';
}
function pl(){
	z='+';
}
function mi(){
	z='-';
}
function di(){
	z='/';
}
function fa(){
	z='!';
}
function sqt(){
	z='√';
}
function sq(){
	z='^2';
}
function eq(){
	x=document.getElementById('line1').value;
	y=document.getElementById('line2').value;
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

function eq(){
	var x1,x2,d,a,b,c;
	a=document.getElementById('inp1').value;
	b=document.getElementById('inp2').value;
	c=document.getElementById('inp3').value;
	d=b*b-4*a*c;
	if (d>0){
		x1=(((-1)*b+Math.sqrt(d))/2*a);
		x2=(((-1)*b-Math.sqrt(d))/2*a);
		document.getElementById('labl1').innerHTML=x1;
		document.getElementById('labl2').innerHTML=x2;
	}
	if (d==0){
		x1=(((-1)*b)/2*a);
		document.getElementById('labl1').innerHTML=d;
	}
	if (d<0){
		document.getElementById('labl1').innerHTML="немає розв'язків";
	}
}
		
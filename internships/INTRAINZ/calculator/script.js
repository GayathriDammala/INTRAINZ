

 
 function dis(val){
 	document.getElementById("res").value+=val;
 }
 
 function solve(){
 		let x=document.getElementById("res").value;
 		let y=eval(x);
 		document.getElementById("res").value=y;
 }
 function clr(){
 		document.getElementById("res").value="";
 }
 function log(){
    let x=document.getElementById("res").value;
    let y=Math.log(x);
    document.getElementById("res").value=y;
  }
  function remainder(){
    let x=document.getElementById("res").value;
    let y=x.split('%');
    let remainder = y[0] % y[1];
    document.getElementById("res").value=remainder;
  }
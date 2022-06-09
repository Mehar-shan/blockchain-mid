function myFunction(){
   var num=document.getElementById("value").value;
   if(  num % 2 == 0 ){
       document.getElementById("demo").innerHTML="Number is Even";
   }
   else{
       document.getElementById("demo").innerHTML="Number is odd";
   }
}
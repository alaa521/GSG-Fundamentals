function getAttributes()
{
let WccHref = document.getElementById("wcc").href;
alert('The href attribute is: '+WccHref);

let WccHreflang= document.getElementById("wcc").hreflang;   
alert('The hreflang attribute is : '+WccHreflang);

let WccRel = document.getElementById("wcc").rel; 
alert('The rel attribute is : '+WccRel);

let WccTarget = document.getElementById("wcc").target; 
alert('The taget attribute is : '+WccTarget);

let WccType = document.getElementById("wcc").type; 
alert('The type attribute is  : '+WccType);  
}
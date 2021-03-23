let bttn =document.getElementById("changeStyle");
bttn.addEventListener("click", function changeStyle(element){
    element.preventDefault();
    document.getElementById("text");
    text.style.fontSize ="35px";
    text.style.backgroundColor ="#565adc";
    text.style.color ="#ff8080";
    text.style.padding ="10px";
});
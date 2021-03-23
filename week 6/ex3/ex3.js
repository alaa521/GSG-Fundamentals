let Calculate =document.getElementById("submit");
Calculate.addEventListener("click", function sphere_volume(element){
    element.preventDefault();
    let radius = document.getElementById("radius").value ;
    let sphere_volume =document.getElementById('volume');
    let volume =(4/3) * Math.PI * Math.pow(radius, 3);
     sphere_volume.value =volume;
});
  
    




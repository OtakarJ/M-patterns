var inputs = document.querySelectorAll("input");

inputs.forEach(function(i){
    i.addEventListener('click', function(el){

        var variable1 = document.querySelector('input[name="color"]:checked').value; // document.querySelector('input[name="food"]:checked').value;
        var variable2 = document.querySelector('input[name="pop"]:checked').value;
        var variable3 = document.querySelector('input[name="pattern"]:checked').value;
   
        var customClass = "bg--" + variable1 + "-pop-" + variable2 + "-" + variable3;

        document.getElementById('pattern-demo').className = "";
        document.getElementById('pattern-demo').classList.add(customClass);
        //document.getElementById('class').innerText = customClass;
        document.getElementById('value-color').innerText = variable1;
        document.getElementById('value-pop').innerText = variable2;
        document.getElementById('value-type').innerText = variable3;

    });

});
window.onload=function(){
    document.querySelector('input[name="color"]:checked').click();
  };
var inputs = document.querySelectorAll("input");

inputs.forEach(function(i){
    i.addEventListener('click', function(el){

        var variable1 = document.querySelector('input[name="color"]:checked').value; // document.querySelector('input[name="food"]:checked').value;
        var variable2 = document.querySelector('input[name="pop"]:checked').value;
        var variable3 = document.querySelector('input[name="pattern"]:checked').value;
   
        if (variable1 != variable2) {
            var backgroundClass = "bg--" + variable1 + "-pop-" + variable2 + "-" + variable3;
            document.getElementById('pop').style.display = 'inline-block';
        }
        else {
            var backgroundClass = "bg--" + variable1 + "-" + variable3;
            document.getElementById('pop').style.display = 'none';

    }

        document.getElementById('pattern-demo').className = "";
        document.getElementById('pattern-demo').classList.add(backgroundClass);
        //document.getElementById('class').innerText = backgroundClass;
        document.getElementById('value-color').innerText = variable1;
        document.getElementById('value-pop').innerText = variable2;
        document.getElementById('value-type').innerText = variable3;

    });

});
window.onload=function(){
    document.querySelector('input[name="color"]:checked').click();
  };
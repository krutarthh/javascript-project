function ageInDays(){
var birthyear=prompt("What year were you born in?");
var ageIndayss=(2022-birthyear)*365;

var h1=document.createElement('h3');
var textanswer=document.createTextNode('You are '+ageIndayss+' days young');
 h1.setAttribute('id','ageInDays');
h1.appendChild(textanswer);
 document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
var string=" ";
var buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        string=eval(string);
        document.querySelector('input').value=string;
    }else if(e.target.innerHTML=='AC'){
        string=" ";
        document.querySelector('input').value=string;
     }else if(e.target.innerHTML=='x²'){
        string=Math.pow(string,2);
        document.querySelector('input').value=string;
    }else if(e.target.innerHTML=='√x'){
        string=Math.sqrt(string);
        document.querySelector('input').value=string;
    }else{
        console.log(e.target);
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
    }
  })
})

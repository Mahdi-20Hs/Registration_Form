const checkbox = document.querySelector('input[type="checkbox"]');
const inputs = document.querySelectorAll('input[type="radio"]');

checkbox.addEventListener('change', function(){

  if(this.checked){
    inputs.forEach((input)=>{
      input.setAttribute('disabled', true);
    })
  }else{
    inputs.forEach((input)=>{
      input.removeAttribute('disabled');
    })
  }
})
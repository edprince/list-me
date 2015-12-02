window.addEventListener('load', main());

function main() {
  button = document.getElementById('btn__add');
  console.log(button.style.display)
  if (button.style.display != 'show') {
    button.addEventListener('click', function(){
      document.getElementById('wrapper').style.display ='show';
      document.getElementById('modal__add_item').style.display = 'show';
    });
  }
}

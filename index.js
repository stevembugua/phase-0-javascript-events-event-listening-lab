const input = document.getElementById('button');


function clickAlert() {
    alert('I was clicked!');
  }
  



function addingEventListener (callBack){
      input.addEventListener('click', callBack);
}



addingEventListener(clickAlert)
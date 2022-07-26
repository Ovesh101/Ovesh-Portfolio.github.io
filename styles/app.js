const sections  = document.querySelectorAll('.section');
const BUtton_Container = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function PageTransition(){
    // Button Click Active Class
    for (let i = 0 ; i < sectBtn.length;  i++) {
      sectBtn[i].addEventListener('click', function(){

          let currentBtn = document.querySelectorAll('.active-btn');
          currentBtn[0].className = currentBtn[0].className.replace('active-btn' , '');
          this.className +='active-btn';
      })
    }
    

    // To active particular Sections
    allSelections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id;
      if(id){
        console.log(id);
        // Remove Selected From Other Buttons
        sectBtn.forEach((btn) =>{
              btn.classList.remove('active-btn')
        })
        e.target.classList.add('active-btn')
        // Hide Other Section

        sections.forEach((section) =>{
          section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
      }
        
    
    })
  //  Toggle Theme Button 
  const themebtn = document.querySelector('.theme-btn');
  themebtn.addEventListener('click' , () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}
// Calling PageTransition Function
PageTransition();

//  SUbmit Button
let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});
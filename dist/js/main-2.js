// const TypeWritter = function(txtElement, words, wait = 3000){
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = ''
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
//
// }
//
// // Type Method
// TypeWritter.prototype.type = function(){
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get the full text of current word
//   const fullTxt = this.words[current];
//   // check if deleting
//   if(this.isDeleting){
//     // Remove a character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   }else{
//     // Add a character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//
//   // Insert txt into txtElement
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
//
//   // Type Speed
//   let typeSpeed = 300;
//
//   if(this.isDeleting){
//     typeSpeed /= 2;
//   }
//
//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt){
//     // Make a pause at the end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   }else if(this.isDeleting && this.txt === ''){
//     // Set delete to false
//     this.isDeleting = false;
//     // Move to the next words
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }
//   setTimeout(() => this.type(), 500);
// }
//

// ES6 class
class TypeWritter{
  constructor(txtElement, words, wait = 1000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type(){
    // Delay for 2seconds
    setTimeout('', 3000);
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get the full text of current word
    const fullTxt = this.words[current];
    // check if deleting
    if(this.isDeleting){
      // Remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 3);
    }else{
      // Add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into txtElement
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // Type Speed
    let typeSpeed = 100;

    if(this.isDeleting){
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
      // Make a pause at the end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
      // Set delete to false
      this.isDeleting = false;
      // Move to the next words
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), 500);
  }
}


// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words =JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init TypeWritter
  new TypeWritter(txtElement, words, wait);
}

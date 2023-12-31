 // Function to be executed when the green button is clicked
 function selectGreen() {
    document.body.style.backgroundColor = 'white';
    Zoro(); // Call the Zoro function
  }

  // Function to be executed when the red button is clicked
  function selectRed() {
  
    alert('Wrong color, try again');
    resetColors(); // Reset colors and display buttons again
  }

  // Function to reset colors and display buttons
  function resetColors() {
    document.body.style.backgroundColor = '';
    document.getElementById('buttons').style.display = 'flex';
  }

  
  function Zoro() {
    
    var  section1=document.querySelector(".section1").style.display="none"
   var section2=document.querySelector('.section2').style.display="block"

   playAudio()
   
   startDelayedMusic()
   
  }

 
 
 

  function playAudio() {
    const audio = document.getElementById('myAudio1');
  audio.play();
  }

  function playAudio2() {
    const audio2 = document.getElementById('myAudio2');
    audio2.play();
  }

  function playAudio2() {
    var audio = new Audio('asest/musik2.mp3'); // Replace with the path to your music file
    audio.play();
  }

  function startDelayedMusic() {
    setTimeout(playAudio2, 6000); // Delayed start after 6 seconds (5000 milliseconds)
  }

  //დაyოვნების ფუქნციებს ვწერ აქ 
  
    
    
  
  setTimeout(() => {
    document.getElementById('buttons').style.display = 'flex';
  }, 5000);
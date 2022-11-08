function google(){
    x = prompt("What Do you want to google")

    if(x === "" || x === null) {
          alert("You did not search anything page is going to refresh");
          window.location.reload(false)
          return false;
       }

    location.replace("https://www.google.com/search?q=" + x);

   }




function switcher(){
document.documentElement.style.setProperty('--background', 'white');
document.documentElement.style.setProperty('--color-text', 'black');
var music = new Audio("clickpro.mp3");
      music.play();
}

function black(){
document.documentElement.style.setProperty('--background', '#333');
document.documentElement.style.setProperty('--color-text', '#b8ad26');
var music = new Audio("clickpro.mp3");
      music.play();
}

function changer(){
x = prompt("Enter Hex Code Or Color Name In It Self")
document.documentElement.style.setProperty('--background', x) ;
alert("the color is being changed to " + x)


if(x === ""|| x === null) {
          alert("please write a valid color");
          var music = new Audio("sad.mp3");
      music.play();
       }


       else 
       
       var music = new Audio("hehe.mp3");
      music.play();

      

      
}
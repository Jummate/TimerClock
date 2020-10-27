
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let hr = document.querySelector("#hr");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let disp = document.querySelector('.display span');
let dis = document.querySelector('.display');
let audio = document.querySelector("audio");

let s = 0;
let m= 0;
let h= 0;
function firstDisplay(){
	disp.innerHTML = h+":"+m+":"+s;
}
start.addEventListener('click', function(){
  let total = (hr.value*3600) + (min.value*60) + sec.value;  			//add up all the input
  start.disabled = "disabled";																//prevent the button against pressing while the timer is running
  for(let count = 0; count <= total; count++){
    setTimeout(function(){
		
		s = count%60;
		if(count%60 == 0 && count != 0){
			m++;																						//60 seconds = 1 minute
		}
		if(m == 60){
			h++;																						//60 minutes = 1 hour
			m = 0;
		}
		  disp.innerHTML = h+":"+m+":"+s;
		 
		  if(count == total){
			start.disabled = false;
			audio.play();																			//play a sound to indicate the completion of the time
		  }
		}, count *1000);
  }
});
reset.addEventListener('click', function() {
  location.reload();
});

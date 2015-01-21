function StopWatch(sec, block){
	var time = sec;

	var hour = parseInt(time / 3600);
		if ( hour < 1 ) hour = 0;
	time = parseInt(time - hour * 3600);
		if ( hour < 10 ) hour = '0' + hour;

	var minutes = parseInt(time / 60);
		if ( minutes < 1 ) minutes = 0;
	time = parseInt(time - minutes * 60);
		if ( minutes < 10 ) minutes = '0' + minutes;

	var seconds = time;
		if ( seconds < 10 ) seconds = '0' + seconds;

	block.innerHTML = hour+':'+minutes+':'+seconds;

	sec++;

	setTimeout(function(){
		StopWatch(sec, block);
	}, 1000);
};

var start = document.getElementById('start-btn');

start.addEventListener("click", function(event){
	var timer = document.getElementById('stopwatch');
    StopWatch(0, timer);
});

var stop = document.getElementById('stop-btn');

stop.addEventListener("click", function(event){
	event.preventDefault();
});

reset.addEventListener("click", function(event){
	clearInterval(timer);
});











// $(document).ready(function(){
// 	var $timer = $("#stopwatch");
// 	var $hour = 0;
// 	var $timer = setInterval(function(){

// 	stopwatch.innerHTML = hour++;

// 	}, 1000);

// 	$("#start-btn").click(function(){
// 	btn.addEventListener("click", function(event){
// 		event.preventDefault();


// 	clearInterval(timer);

				
// 	});
// });



// var clock = document.getElementById("stopwatch");
// var hour = 00;
// var min = 00;
// var sec = 00;

// var timer = setInterval(function(){

// 	stopwatch.innerHTML = hour++;

// }, 1000);

// var btn = document.getElementById('stop-btn');

// 	btn.addEventListener("click", function(event){
// 		event.preventDefault();


// 	clearInterval(timer);

// });
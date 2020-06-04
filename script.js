let X = 10;
let Y = 6;
let blockSize = 500 / X;
let gameArea;

function table_create1() {
    for (let i = 0; i < Y; i++) {
        for (let j = 0; j < X; j++) {
            let block = $('<div></div>');
            block.addClass('water');
			block.addClass(i+''+j);
			if(i===0){
				if(j===0){
					block.addClass('tube2');
				}
				if(j===1){
					block.addClass('tube3');
				}
				if(j===2){
					block.addClass('tube1');
				}
				if(j===6){
					block.addClass('tube4');
				}
				if(j===7){
					block.addClass('tube1');
				}
			}
			if(i===1){
				if(j===2){
					block.addClass('tube2');
				}
				if(j===6){
					block.addClass('tube2');
				}
				if(j===7){
					block.addClass('tube1');
				}
				if(j===8){
					block.addClass('tube1');
				}
			}
			if(i===2){
				if(j===1){
					block.addClass('tube1');
				}
				if(j===2){
					block.addClass('tube1');
				}
				if(j===5){
					block.addClass('tube1');
				}
				if(j===6){
					block.addClass('tube1');
				}
				if(j===8){
					block.addClass('tube2');
				}
			}
			if(i===3){
				if(j===1){
					block.addClass('tube1');
				}
				if(j===2){
					block.addClass('tube2');
				}
				if(j===3){
					block.addClass('tube2');
				}
				if(j===4){
					block.addClass('tube2');
				}
				if(j===5){
					block.addClass('tube3');
				}
				if(j===8){
					block.addClass('tube2');
				}
			}
			if(i===4){
				if(j===6){
					block.addClass('tube1');
				}
				if(j===7){
					block.addClass('tube2');
				}
				if(j===8){
					block.addClass('tube3');
				}
			}
			if(i===5){
				if(j===6){
					block.addClass('tube1');
				}
				if(j===7){
					block.addClass('tube2');
				}
				if(j===8){
					block.addClass('tube2');
				}
				if(j===9){
					block.addClass('tube2');
				}
			}
            block.css({
                width: blockSize,
                height: blockSize,
                top: i * blockSize,
                left: j * blockSize
            });

            block.appendTo(gameArea);
        }
    }
}

function table_create2() {
	$('#gamearea').remove();
	$("#lefolyo").css({height: "0px"});
	
    for (let i = 0; i < Y; i++) {
        for (let j = 0; j < X; j++) {
            let block = $('<div></div>');
            block.addClass('water');
			block.addClass(i+''+j);
			if(i===0){
				if(j===0){
					block.addClass('tube3');
				}
				if(j===1){
					block.addClass('tube1');
				}
				if(j===2){
					block.addClass('tube2');
				}
				if(j===3){
					block.addClass('tube1');
				}
				if(j===4){
					block.addClass('tube1');
				}
				if(j===5){
					block.addClass('tube2');
				}
				if(j===6){
					block.addClass('tube2');
				}
				if(j===7){
					block.addClass('tube2');
				}
				if(j===8){
					block.addClass('tube3');
				}
			}
			if(i===1){
				if(j===0){
					block.addClass('tube1');
				}
				if(j===1){
					block.addClass('tube1');
				}
				if(j===3){
					block.addClass('tube1');
				}
				if(j===4){
					block.addClass('tube1');
				}
				if(j===5){
					block.addClass('tube1');
				}
				if(j===6){
					block.addClass('tube2');
				}
				if(j===7){
					block.addClass('tube1');
				}
				if(j===8){
					block.addClass('tube2');
				}
			}
			if(i===2){
				if(j===5){
					block.addClass('tube4');
				}
				if(j===7){
					block.addClass('tube1');
				}
				if(j===8){
					block.addClass('tube1');
				}
			}
			if(i===3){
				if(j===0){
					block.addClass('tube3');
				}
				if(j===1){
					block.addClass('tube2');
				}
				if(j===2){
					block.addClass('tube2');
				}
				if(j===3){
					block.addClass('tube2');
				}
				if(j===4){
					block.addClass('tube2');
				}
				if(j===5){
					block.addClass('tube1');
				}
			}
			if(i===4){
				if(j===0){
					block.addClass('tube1');
				}
				if(j===1){
					block.addClass('tube2');
				}
				if(j===2){
					block.addClass('tube1');
				}
				if(j===7){
					block.addClass('tube1');
				}
				if(j===8){
					block.addClass('tube2');
				}
				if(j===9){
					block.addClass('tube1');
				}
			}
			if(i===5){
				if(j===2){
					block.addClass('tube1');
				}
				if(j===3){
					block.addClass('tube2');
				}
				if(j===4){
					block.addClass('tube2');
				}
				if(j===5){
					block.addClass('tube3');
				}
				if(j===6){
					block.addClass('tube2');
				}
				if(j===7){
					block.addClass('tube1');
				}
				if(j===9){
					block.addClass('tube1');
				}
			}
            block.css({
                width: blockSize,
                height: blockSize,
                top: i * blockSize,
                left: j * blockSize
            });

            block.appendTo(gameArea);
        }
    }
}


function rotation_prepare(image) {
	let degree = Math.floor(Math.random() * 3) + 1;
    image.css({
        transform: 'rotate(' + degree * 90 + 'deg)'
    });
    image.attr('rot', degree);
}
function rotation_prepare_all(){
	$(".tube1").each(function () {
        rotation_prepare($(this));
    });
	 $(".tube2").each(function () {
        rotation_prepare($(this));
    });
	 $(".tube3").each(function () {
        rotation_prepare($(this));
    });
	 $(".tube4").each(function () {
        rotation_prepare($(this));
    });
}

let i = 30;

let score1;
let score2;

function onTimer() {
	document.getElementById('counter').innerHTML = 'Hátralévő idő: ' + i;
	i--;
	if (i < 0) {
		setTimeout(function(){
			console.log('You lose');
			$('.tube1').off('click')
			$('.tube2').off('click')
			$('.tube3').off('click')
			$('.tube4').off('click')
			alert('You lose! Press "f5" to retry.');
		}, 100);
	}
	else {
		game_timer = setTimeout(onTimer, 1000);
	}
}


$(function () {
	onTimer();
    gameArea = $('<div></div>');
    gameArea.appendTo('body');
    gameArea.attr('id', 'gamearea');

    table_create1();
	
	rotation_prepare_all();
	
	$('.tube1').on('click', function () {
		if(is_sound){soundeffect();}
        let angle = parseInt($(this).attr('rot')) * 90 + 90;
		if(angle >= 360){
			angle -= 360;
		}
        $(this).css({
            transform: 'rotate(' + angle + 'deg)'
        });
        $(this).attr('rot', (angle / 90));
		ellenor1();
    });
	
	$('.tube2').on('click', function () {
		if(is_sound){soundeffect();}
        let angle = parseInt($(this).attr('rot')) * 90 + 90;
		if(angle >= 360){
			angle -= 360;
		}
        $(this).css({
            transform: 'rotate(' + angle + 'deg)'
        });
        $(this).attr('rot', (angle / 90));
		ellenor1();
    });
	
	$('.tube3').on('click', function () {
		if(is_sound){soundeffect();}
        let angle = parseInt($(this).attr('rot')) * 90 + 90;
		if(angle >= 360){
			angle -= 360;
		}
        $(this).css({
            transform: 'rotate(' + angle + 'deg)'
        });
        $(this).attr('rot', (angle / 90));
		ellenor1();
    });
	
	$('.tube4').on('click', function () {
		if(is_sound){soundeffect();}
        let angle = parseInt($(this).attr('rot')) * 90 + 90;
		if(angle >= 360){
			angle -= 360;
		}
        $(this).css({
            transform: 'rotate(' + angle + 'deg)'
        });
        $(this).attr('rot', (angle / 90));
		ellenor1();
    });
	
	fill_toplist();
});

function ellenor1(){
	if(($('.00').attr('rot')==0)
	&& ($('.01').attr('rot')%2==1)
	&& ($('.02').attr('rot')==0)
	&& ($('.07').attr('rot')==0)
	&& ($('.12').attr('rot')==1)
	&& ($('.16').attr('rot')==3)
	&& ($('.17').attr('rot')==2)
	&& ($('.18').attr('rot')==0)
	&& ($('.21').attr('rot')==3)
	&& ($('.22').attr('rot')==1)
	&& ($('.25').attr('rot')==3)
	&& ($('.26').attr('rot')==1)
	&& ($('.28').attr('rot')==1)
	&& ($('.31').attr('rot')==2)
	&& ($('.32').attr('rot')==0)
	&& ($('.33').attr('rot')==0)
	&& ($('.34').attr('rot')==0)
	&& ($('.35').attr('rot')==2 || ($('.35').attr('rot')==3))
	&& ($('.38').attr('rot')==1)
	&& ($('.46').attr('rot')==3)
	&& ($('.47').attr('rot')==2)
	&& ($('.48').attr('rot')==2 || ($('.48').attr('rot')==3))
	&& ($('.56').attr('rot')==2)
	&& ($('.57').attr('rot')==0)
	&& ($('.58').attr('rot')==0)
	&& ($('.59').attr('rot')==0))
	{
		$("#lefolyo").animate({height: "123px"});
		score1 = 1000 + i * 11 + i * 5;
		console.log('gg, score: ' + score1);
		i = 60;
		
		
		
		$('main').css('background-image','url(water.gif)');
		
		
		setTimeout(function(){
			alert('You win! Click "OK" for next level');
			gameArea = $('<div></div>');
			gameArea.appendTo('body');
			gameArea.attr('id', 'gamearea');
			table_create2();
			
			rotation_prepare_all();
			
			$('.tube1').on('click', function () {
				if(is_sound){soundeffect();}
				let angle = parseInt($(this).attr('rot')) * 90 + 90;
				if(angle >= 360){
					angle -= 360;
				}
				$(this).css({
					transform: 'rotate(' + angle + 'deg)'
				});
				$(this).attr('rot', (angle / 90));
				ellenor2();
			});
			
			$('.tube2').on('click', function () {
				if(is_sound){soundeffect();}
				let angle = parseInt($(this).attr('rot')) * 90 + 90;
				if(angle >= 360){
					angle -= 360;
				}
				$(this).css({
					transform: 'rotate(' + angle + 'deg)'
				});
				$(this).attr('rot', (angle / 90));
				ellenor2();
			});
			
			$('.tube3').on('click', function () {
				if(is_sound){soundeffect();}
				let angle = parseInt($(this).attr('rot')) * 90 + 90;
				if(angle >= 360){
					angle -= 360;
				}
				$(this).css({
					transform: 'rotate(' + angle + 'deg)'
				});
				$(this).attr('rot', (angle / 90));
				ellenor2();
			});
			
			$('.tube4').on('click', function () {
				if(is_sound){soundeffect();}
				let angle = parseInt($(this).attr('rot')) * 90 + 90;
				if(angle >= 360){
					angle -= 360;
				}
				$(this).css({
					transform: 'rotate(' + angle + 'deg)'
				});
				$(this).attr('rot', (angle / 90));
				ellenor2();
			});
		}, 700);
		
	}
}
function ellenor2(){
	if(($('.00').attr('rot')==1 || ($('.00').attr('rot')==2))
	&& ($('.01').attr('rot')==3)
	&& ($('.02').attr('rot')==0)
	&& ($('.03').attr('rot')==0)
	&& ($('.04').attr('rot')==3)
	&& ($('.05').attr('rot')==0)
	&& ($('.06').attr('rot')==0)
	&& ($('.07').attr('rot')==0)
	&& ($('.08').attr('rot')==1 || ($('.08').attr('rot')==2))
	&& ($('.10').attr('rot')==2)
	&& ($('.11').attr('rot')==1)
	&& ($('.13').attr('rot')==2)
	&& ($('.14').attr('rot')==1)
	&& ($('.15').attr('rot')==3)
	&& ($('.16').attr('rot')==2)
	&& ($('.17').attr('rot')==0)
	&& ($('.18').attr('rot')==1)
	&& ($('.27').attr('rot')==2)
	&& ($('.28').attr('rot')==1)
	&& ($('.30').attr('rot')==0 || ($('.30').attr('rot')==1))
	&& ($('.31').attr('rot')==2)
	&& ($('.32').attr('rot')==2)
	&& ($('.33').attr('rot')==2)
	&& ($('.34').attr('rot')==2)
	&& ($('.35').attr('rot')==1)
	&& ($('.40').attr('rot')==2)
	&& ($('.41').attr('rot')==0)
	&& ($('.42').attr('rot')==0)
	&& ($('.47').attr('rot')==3)
	&& ($('.48').attr('rot')==0)
	&& ($('.49').attr('rot')==0)
	&& ($('.52').attr('rot')==2)
	&& ($('.53').attr('rot')==0)
	&& ($('.54').attr('rot')==0)
	&& ($('.55').attr('rot')%2==1)
	&& ($('.56').attr('rot')==0)
	&& ($('.57').attr('rot')==1)
	&& ($('.59').attr('rot')==2))
	{
		$("#lefolyo").animate({height: "123px"});
		score2 = 1000 + i * 11 + i * 5;
		console.log('gg again, score: ' + score2);
		score = score1 + score2;
		console.log('score: ' + score);
		
		clearTimeout(game_timer);
		
		setTimeout(function(){
			var person = prompt("Gratulálok, nyertél! Add meg a neved:", "anonymus");
			let asd = $('#scoreboard');
			localStorage.setItem(person, score);
			$('#scores').empty();
			fill_toplist();
		}, 700);
		
	}
}

function fill_toplist() {
	// vegigmegyunk a localStorage mentett elemein es egy uj tombbe pakoljuk. asszociativ tomb
	var data = [];
	for (var i = 0; i < localStorage.length; i++) {
		data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
	}
	// csokkeno sorrendbe rendezzuk az elemeket az elert pontszam alapjan
	data.sort(function (a, b) {
		return b[1] - a[1];
	});
	// a 10 legtobb pontot elert jatekost jelezzuk ki a listan
	for (let act_data of data.keys()) {
		if (act_data < 10) {
			$('#scores').append(data[act_data][0] + ' - ' + data[act_data][1] + '<br>');
		}
	}
}

function musicplay(){
	$('#music')[0].play();
	$('#musicbutton').attr('src','music.png');
	$('#musicbutton').attr('onclick','musicstop()');
}
function musicstop(){
	$('#music')[0].pause();
	$('#musicbutton').attr('src','nomusic.png');
	$('#musicbutton').attr('onclick','musicplay()');
}

function soundeffect() {
    document.getElementById('sound').play();
}

function soundplay(){
	$('#soundbutton').attr('src','sound.png');
	$('#soundbutton').attr('onclick','soundstop()');
	is_sound = 1;
}
function soundstop(){
	$('#soundbutton').attr('src','nosound.png');
	$('#soundbutton').attr('onclick','soundplay()');
	is_sound = 0;
}

let is_sound = 0;

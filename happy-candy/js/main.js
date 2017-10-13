//timer
/*function timer(){
 var obj = document.getElementById('timer_inp');
 obj.innerHTML--;
 if(obj.innerHTML == 0){
 	obj.innerHTML = "Вы проиграли";
 setTimeout(function(){},1000);}
 else {
 	setTimeout(timer,1000);
 }
}
setTimeout(timer,1000);
*/
var answerRadio = '';
var namberQuest = 0;
var limit = 3;
var winTitle = document.getElementById('win-result');
var rBlock = document.getElementById('questBlock');
var summ = 0;

function start(){
nextQuestion();	
winTitle.innerHTML = '';
}
function nextQuestion(){
	var strHtml = '<h2>'+happyArray[namberQuest]["question"][0]+'</h2><div class="wrap-radio" >';

	for (var i = 0; i < happyArray[namberQuest]["answer"].length; i++) {
		j = happyArray[namberQuest]["answer"][i];
		strHtml += '<div class="fl-l col-sm-6"> <input type="radio" value="'+i+'" onclick="check('+i+');" name="r" id="sub_'+i+'" /><label for="sub_'+i+'">'+j+'</label></div>';	
	}
	rBlock.innerHTML = strHtml +'</div>';
	//initBtnNext();
}
function nextQuest() {
if (!endQuest()) {
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Тест пройден</h1> <div>Вы набрали <h2>'+summ+'</h2>баллов </div><div class="btnGreen" onclick="start()">Заново</div></div></div></div>';
		return rBlock.innerHTML =  '';
	}
namberQuest++;
nextQuestion();
winTitle.innerHTML = '';
}
function check(i) {
	console.log(i, happyArray[namberQuest]["answer"][i]);	
	if (i == happyArray[namberQuest]["answerRight"][0]){
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Правильно</h1> <br><div class="btnGreen" id="btnNext" onclick="nextQuest();" >Далее</div></div></div></div>';
		summ += 5;
	}
	else{
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Не правилно</h1> <br><div class="btnGreen" id="btnNext" onclick="nextQuest();" >Далее</div></div></div></div>';
	}
	var radioDis = document.getElementsByName("r");
	for (var i = 0; i< radioDis.length;  i++){
    radioDis[i].disabled = true;
	}
}
function endQuest(){
	if (happyArray.length-1 == namberQuest) {
		return false;	
	} return true;
	console.log(happyArray.length-1, namberQuest);
}

var happyArray = [
	    {
		'question' : ['Сколько пальцев на руках у человека?'],
	  	'answer' : ['5 пальцев', '10 пальцев', '20 пальцев' , '15 пальцев'], 
	  	'answerRight' : ['1']	
	  	},
	  	{
		'question' : ['Что делают птицы ранней весной?'],
	  	'answer' : ['Спят в берлоге', 'Улетают на Юг', 'Прилетают с Юга' , 'Живут на крыше'], 
	  	'answerRight' : ['2']	
	  	},
	  	{
		'question' : ['Мальчик, который ходит в школу'],
	  	'answer' : ['Пацан', 'Ученик', 'Спортсмен' , 'Студент'], 
	  	'answerRight' : ['1']	
	  	},
	  	{
	  	'question' : ['Женщина, играющая в теннис'],
	  	'answer' : ['Теннисистка', 'Домохозяйка'], 
	  	'answerRight' : ['0']	
	  	},
	  	{
	  	'question' : ['Человек, играющий на пианино'],
	  	'answer' : ['Гитарист', 'Боянист', 'Пианист'], 
	  	'answerRight' : ['2']	
	  	}
];

function randomInteger() {
	var randSumm = [];
    var rand = 0;
    for (var i = 0;  i < limit; i++) {
    	rand = Math.floor((Math.random() * happyArray.length) +1);
    	console.log(rand);
    	if (randSumm.indexOf(rand)) {
    		randSumm.push(rand);
    	}
    	
    }
    console.log('randSumm: '+randSumm);
    return;
}
randomInteger();
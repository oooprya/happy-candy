// commit v2.01
var answerRadio = '';
var namberQuest;
var limit = 3;
var winTitle = document.getElementById('win-result');
var rBlock = document.getElementById('questBlock');
var summ = 0;
var randSumm = [];
var happyArray = [];
function start(){
happyArray = [
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
namberQuest = 0;
nextQuestion();
winTitle.innerHTML = '';
}
function nextQuestion(){
	var rand = Math.floor((Math.random() * happyArray.length));
	namberQuest = rand;
	console.log('номер вопроса: ' +namberQuest);
	var strHtml = '<h2>'+happyArray[namberQuest]["question"][0]+'</h2><div class="wrap-radio" >';
	for (var i = 0; i < happyArray[namberQuest]["answer"].length; i++) {
		j = happyArray[namberQuest]["answer"][i];
		strHtml += '<div class="fl-l col-sm-6"> <input type="radio" value="'+i+'" onclick="check('+i+');" name="r" id="sub_'+i+'" /><label for="sub_'+i+'">'+j+'</label></div>';	
	}
	rBlock.innerHTML = strHtml +'</div>';

}
function nextQuest() {
if (happyArray.length > 0) {
		happyArray.splice(namberQuest, 1);
		console.log('удален индекс №: ' +namberQuest);
	}
if (happyArray.length == 0) {
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Тест пройден</h1> <div>Вы набрали <h2>'+summ+'</h2>баллов </div><div class="btnGreen" onclick="start()">Заново</div></div></div></div>';
		return rBlock.innerHTML =  '';
	}
	nextQuestion();
	winTitle.innerHTML = '';
}
function check(i) {
	//console.log(i, happyArray[namberQuest]["answer"][i]);

	if (i == happyArray[namberQuest]["answerRight"][0]){
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Правильно</h1> <br><div class="btnGreen" id="btnNext" onclick="nextQuest();" >Далее</div></div></div></div>';
		summ += 5;
	}
	else{
		winTitle.innerHTML = '<div class="center-result"><div class="t-cell"><div class="win-bg"><h1>Не правилно</h1> <br><div class="btnGreen" id="btnNext" onclick="nextQuest();" >Далее</div></div></div></div>';
	}
	var radioDis = document.getElementsByName("r");
	for (var i = 0; i < radioDis.length;  i++){
    radioDis[i].disabled = true;
	}
}
/*function randomInteger() {
    var rand = 0;
    var flag = 0;
 	while (randSumm.length<limit) {
    	rand = Math.floor((Math.random() * happyArray.length) +1);
    	for (var i = 0; i < randSumm.length; i++) {
    		if (randSumm[i] == rand) {
    			flag = 1;
    		}
    	}
    	if (flag != 1) {
    		randSumm.push(rand);
    	}
    	flag = 0;
    	console.log(randSumm.length, rand, i, randSumm.length, randSumm);
    	i++;
    }
    console.log('randSumm: '+randSumm);
    return randSumm;
}
randomInteger();
*/
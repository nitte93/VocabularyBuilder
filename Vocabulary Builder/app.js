var app = angular.module('VocabularyApp', ["ngAnimate"]);


app.factory("words", function(){
	return[
	{word:'Dunning Krugar Effect', meaning:'The Dunning–Kruger effect is a cognitive bias wherein unskilled individuals suffer from illusory superiority, mistakenly assessing their ability to be much higher than is accurate. This bias is attributed to a metacognitive inability of the unskilled to recognize their ineptitude.' , sentence:"The polls showed favorable rating of only 10% of voters still hanging in there, the scandal was all the news and a primary source of jokes for late night shows, but the Dunning–Kruger effect kicked in and Weiner decided he could still win election to the position of Mayor of New York City. "},
	{word:'Morbid', meaning:'characterized by an abnormal and unhealthy interest in disturbing and unpleasant subjects, especially death and disease', sentence:'his morbid fascination with the horrors of contemporary warfare'},
	{word:'Tinderfoot', meaning:'a newcomer or novice, especially a person unaccustomed to hardship.', sentence:'the journey is not recommended for the tenderfoot'},
	{word:'neophyte', meaning:'someone new to something.', sentence:'Stinkin neophyte stole my packages and didnt even know what they were'}
	];
});

app.controller('vocabulary', function vocabulary(words){
	var vocab = this;

	vocab.name = "Nitesh";
	vocab.vocabs = words;
	vocab.selectedWord  = null;
	vocab.wordCopy = null;
/*	vocab.vocabs = [
	{word:'Dunning Krugar Effect', Meaning:' accurate.' , Sentence:'sentence'},
	{word:'morbid', Meaning:'meaning', Sentence:'sentence'},
	{word:'morbid', Meaning:'meaning', Sentence:'sentence'},
	{word:'morbid', Meaning:'meaning', Sentence:'sentence'}
	];

*/
	vocab.selectWord = function(word){
		vocab.selectedWord = word;
		vocab.wordCopy = angular.copy(word);
	}
	vocab.saveWord = function(){
		alert("hi")
		vocab.selectedWord.word = vocab.wordCopy.word;
		vocab.selectedWord.meaning = vocab.wordCopy.meaning;
		vocab.selectedWord.sentence = vocab.wordCopy.sentence;
	}
	vocab.addWord = function(){
		words.push({word:vocab.newWord , meaning:vocab.newMeaning , sentence: vocab.newSentence});
		vocab.newWord =''; vocab.newMeaning =''; vocab.newSentence ='';
	}
})


app.controller("AppCtrl" ,function(){
	var appToggle = this;

	appToggle.toggle = false;
})
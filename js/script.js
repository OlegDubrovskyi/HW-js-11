var allThemes = ['001', '002', '003', '004', '005', '217', '218', '219', '220', '221'];

window.onload = function(){
	var
		currentTheme = document.querySelector('.current-theme'),
	  changeTheme = document.querySelector('.change-theme');

	changeTheme.addEventListener('click', function() {
		var newThemeNo = allThemes.pop();
		currentTheme.href = 'http://www.csszengarden.com/' + newThemeNo + '/' + newThemeNo + '.css';

		allThemes.unshift(newThemeNo);
	});
};

var element = [];
var counter = 0;

function count(counter) {
     counter++;
     return counter;
  }

function prevCount(counter) {
     counter--;
     return counter;
  }


function isEnable(inputText) {
  var selector =  document.querySelector(inputText);
  
    if(selector.parentNode !== null){
      document.getElementsByClassName("nav-top")[0].removeAttribute('disabled');
    }
   
    if(selector.firstElementChild !== null){
      console.log(selector.firstElementChild);
      document.getElementsByClassName("nav-bottom")[0].removeAttribute('disabled');
    }
    if(selector.previousElementSibling !== null){
      document.getElementsByClassName("nav-left")[0].removeAttribute('disabled');
    }
    if(selector.nextElementSibling !== null){
      document.getElementsByClassName("nav-right")[0].removeAttribute('disabled');
    }
}


function FindOnPage() {
  var inputText = document.getElementById("textId").value;
  element =  document.querySelectorAll(inputText);
  element[0].style.outline = "3px solid red";
  element[0].style.backgroundColor = "lightblue";
  if(element !== undefined) {
  	document.getElementsByClassName('selector-next')[0].removeAttribute('disabled');
  }
  isEnable(inputText);
  return element;
}

function nextElement() {
  counter = count(counter);
  element[counter-1].style.removeProperty("outline");
  element[counter-1].style.removeProperty("background-color");
  element[counter].style.outline = "3px solid red";
  element[counter].style.backgroundColor = "lightblue";
  if(counter > 0 ){
    document.getElementsByClassName('selector-prev')[0].removeAttribute('disabled');
  }
   if(counter === element.length-1){
    document.getElementsByClassName('selector-next')[0].setAttribute('disabled', 'disabled');
  } 	
}

function prevElement() {
  counter = prevCount(counter);
  element[counter+1].style.removeProperty("outline");
  element[counter+1].style.removeProperty("background-color");
  element[counter].style.outline = "3px solid red";
  element[counter].style.backgroundColor = "lightblue";
  if(counter === 0 ){
    document.getElementsByClassName('selector-prev')[0].setAttribute('disabled', 'disabled');
  }
}

function Paren() {
  var inputText = document.getElementById("textId").value;
  var selector =  document.querySelector(inputText);
  element[counter].style.removeProperty("outline");
  element[counter].style.removeProperty("background-color");
  selector = selector.parentNode;
  selector.style.outline = "3px solid red";
  selector.style.backgroundColor = "lightblue";
}

function FirstChild() {
  var inputText = document.getElementById("textId").value;
  var selector =  document.querySelector(inputText);
  element[counter].style.removeProperty("outline");
  element[counter].style.removeProperty("background-color");
  selector = selector.firstElementChild;
  selector.style.outline = "3px solid red";
  selector.style.backgroundColor = "lightblue";
}


function PreviousSibling() {
  var inputText = document.getElementById("textId").value;
  var selector =  document.querySelector(inputText);
  element[counter].style.removeProperty("outline");
  element[counter].style.removeProperty("background-color");
  selector = selector.previousElementSibling;
  selector.style.outline = "3px solid red";
  selector.style.backgroundColor = "lightblue";
}

function NextSibling() {
  
  var inputText = document.getElementById("textId").value;
  var selector =  document.querySelector(inputText);
  element[counter].style.removeProperty("outline");
  element[counter].style.removeProperty("background-color");
  selector = selector.nextElementSibling;
  selector.style.outline = "3px solid red";
  selector.style.backgroundColor = "lightblue";
}

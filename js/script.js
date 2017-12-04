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
var counter;
console.log("1 "+counter);

function FindOnPage() {
  var inputText = document.getElementById("textId").value;
  element =  document.querySelectorAll(inputText);
  console.log(element);
  element[0].style.outline = "3px solid red";
  element[0].style.backgroundColor = "lightblue";
  if(element !== undefined) {
  	document.getElementsByClassName('selector-next')[0].removeAttribute('disabled');
  	document.getElementsByClassName('selector-prev')[0].removeAttribute('disabled');
  }
  return element;
}

function nextElement(counter) {
	if(counter === undefined) {
		counter = 0;
	}
	console.log("2 "+counter);
  element[counter].style.removeProperty("outline");
  element[counter].style.removeProperty("background-color");
  
  	element[counter+1].style.outline = "3px solid red";
  	element[counter+1].style.backgroundColor = "lightblue";
  	counter =  counter + 2;
  	console.log("3 "+counter);
}


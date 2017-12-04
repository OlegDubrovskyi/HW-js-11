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

function FindOnPage() {
  var inputText = document.getElementById("textId").value;
  var element =  document.querySelectorAll(inputText);
  console.log(element);
  element[0].style.outline = "3px solid red";
  element[0].style.backgroundColor = "lightblue";
  if(element !== undefined) {
  	document.getElementsByClassName('selector-next')[0].removeAttribute('disabled');
  	document.getElementsByClassName('selector-prev')[0].removeAttribute('disabled');
  }
  return element;
}

function nextElement(element) {

  console.log(element);
  element[0].style.removeProperty("outline");
  element[0].style.removeProperty("background-color");
  
  	element[1].style.outline = "3px solid red";
  	element[1].style.backgroundColor = "lightblue"; 
  	 
}

function counter() {
	return 
}


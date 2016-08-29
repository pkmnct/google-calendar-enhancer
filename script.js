// Function to expand the Google bar
function expandSearch() {
	document.getElementById('onegoogbar').style.display = 'inherit';
	localStorage.setItem("searchExpanded",true);
}

// Function to collapse the Google bar
function collapseSearch() {
	document.getElementById('onegoogbar').style.display = 'none';
	localStorage.setItem("searchExpanded",false);
}

// Function to either expand/collapse the Google bar depending on the localStorage value.
function expandCollapseSearch() {
	if (localStorage.getItem("searchExpanded") == "false") {
		expandSearch();
	} else {
		collapseSearch();
	}
}

// Function to expand the sidebar.
function expandMenu() {
	document.getElementById('nav').style.display = 'inherit';
	document.getElementById('mainbody').style.marginLeft = '184px';
	localStorage.setItem("menuExpanded",true);
}

// Function to collapse the sidebar.
function collapseMenu() {
	document.getElementById('nav').style.display = 'none';
	document.getElementById('mainbody').style.marginLeft = '10px';
	localStorage.setItem("menuExpanded",false);
}

// Function to expand/collapse the sidebar depending on the localStorage value.
function expandCollapseMenu() {
	if (localStorage.getItem("menuExpanded") == "false") {
		expandMenu();
	} else {
		collapseMenu();
	}
}

// Replace the applogo with the buttons.
// document.getElementsByClassName('applogo')[0].innerHTML = "<a id='menuButton' href='#'><img src='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/src/android-menu.svg' height='100%'></a> &nbsp;&nbsp; <a id='searchButton' href='#'><img src='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/src/android-search.svg' height='100%'></a>";

// Remove the applogo
var applogo = document.getElementsByClassName('applogo')[0];
applogo.parentNode.removeChild(applogo);


// Function to add the menu buttons
function addMenuButtons() {
	// Check if the buttons are already added
	if ((document.getElementById('nav-enhancer-menu')) == null) {
	
		// Create the buttons
		var theMenuText = '<div id="nav-enhancer-menu" tabindex="0" role="button" title="Menu" class="navbuttonouter goog-inline-block"><div class="navbutton nav-enhancer-menu goog-inline-block"></div></div>'
		var theSearchMenuText = '<div id="nav-search-menu" tabindex="0" role="button" title="Menu" class="navbuttonouter goog-inline-block"><div class="navbutton nav-search-menu goog-inline-block"></div></div>'
		
		// Set a variable for the area we are adding the buttons
		var topLeftNavigation = document.getElementById('topLeftNavigation').getElementsByTagName('tr')[0];
		
		// Add the buttons
		var theSearchMenu = topLeftNavigation.insertCell(0);
		theSearchMenu.innerHTML = theSearchMenuText;
		theSearchMenu.classList.add("enhancer-menu-last");
		var theMenu = topLeftNavigation.insertCell(0);
		theMenu.innerHTML = theMenuText;
		
		// Add Event Listener for the menu button.
		document.getElementById("nav-enhancer-menu").addEventListener('click', expandCollapseMenu, false);

		// Add Event Listener for the search button.
		document.getElementById("nav-search-menu").addEventListener('click', expandCollapseSearch, false);
	}
	// Make sure the buttons are always there (if we change weeks it removes the buttons).
	setTimeout(addMenuButtons, 100);
}
addMenuButtons();


// Make the times in the sidebar look prettier.
function makeTimesPretty() {
	if (document.getElementsByClassName('times-pretty').length == 0) {
		var timesToReplace = document.getElementsByClassName("tg-time-pri");
		timesToReplace[0].parentElement.parentElement.classList.add("times-pretty");
		for (var i = 0; i < timesToReplace.length; i++) {
			if (i == 0) {
				timesToReplace[i].innerHTML = "";
			} else if (i <= 12) {
				timesToReplace[i].innerHTML = i + " AM";
			} else {
				timesToReplace[i].innerHTML = i - 12 + " PM";
			}
		}
	}
	// Make sure the times are always pretty.
	setTimeout(makeTimesPretty, 100);
}
makeTimesPretty();

// Collapse what was collapsed before
if (localStorage.getItem("menuExpanded") == "false") {
	collapseMenu();
}
if (localStorage.getItem("searchExpanded") == "false") {
	collapseSearch();
}
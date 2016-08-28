/*
 * Function to create the buttons and their handlers
 */
function addButtons() {
	
}
/* 
 * Functions to expand/collapse the Google bar
 */
function expandSearch() {
	document.getElementById('onegoogbar').style.display = 'inherit';
	localStorage.setItem("searchExpanded",true);
}

function collapseSearch() {
	document.getElementById('onegoogbar').style.display = 'none';
	localStorage.setItem("searchExpanded",false);
}

function expandCollapseSearch() {
	if (localStorage.getItem("searchExpanded") == "false") {
		expandSearch();
	} else {
		collapseSearch();
	}
}
/* 
 * Functions to expand/collapse the sidebar
 */
function expandMenu() {
	document.getElementById('nav').style.display = 'inherit';
	document.getElementById('mainbody').style.marginLeft = '184px';
	localStorage.setItem("menuExpanded",true);
}

function collapseMenu() {
	document.getElementById('nav').style.display = 'none';
	document.getElementById('mainbody').style.marginLeft = '10px';
	localStorage.setItem("menuExpanded",false);
}

function expandCollapseMenu() {
	if (localStorage.getItem("menuExpanded") == "false") {
		expandMenu();
	} else {
		collapseMenu();
	}
}

// Replace the applogo with the buttons.
document.getElementsByClassName('applogo')[0].innerHTML = "<a id='menuButton' href='#'><img src='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/src/android-menu.svg' height='100%'></a> &nbsp;&nbsp; <a id='searchButton' href='#'><img src='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/src/android-search.svg' height='100%'></a>";

// Add Event Listener for the menu button.
document.getElementById("menuButton").addEventListener('click', expandCollapseMenu, false);

// Add Event Listener for the search button.
document.getElementById("searchButton").addEventListener('click', expandCollapseSearch, false);

// Collapse what was collapsed before
if (localStorage.getItem("menuExpanded") == "false") {
	collapseMenu();
}
if (localStorage.getItem("searchExpanded") == "false") {
	collapseSearch();
}
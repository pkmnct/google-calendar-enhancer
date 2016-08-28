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

// Make the times in the sidebar look prettier.
window.onload = function() {
	window.setTimeout(function () {
		// If we don't wait for the page to load and some additional time, the time format doesn't stick.
		var timesToReplace = document.getElementsByClassName("tg-time-pri");
		for (var i = 0; i < timesToReplace.length; i++) {
			if (i == 0) {
				timesToReplace[i].innerHTML = "";
			} else if (i <= 12) {
				timesToReplace[i].innerHTML = i + " AM";
			} else {
				timesToReplace[i].innerHTML = i - 12 + " PM";
			}
		}
	}, 800);
};
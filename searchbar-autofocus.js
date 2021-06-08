/*
Script to give focus to search bar on desktop
Does the same thing as the autofocus attribute but won't be applied on mobile devices

Author - Clance Kent
*/

window.onload = function() {
    if (screen.width > 600)
    {
        document.getElementsByClassName("search-input")[0].focus();
    }
};



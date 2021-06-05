
/*
Script that guesses the user's country based on timezone supplied by browser
Author - Clance Kent
*/



var tmzn = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("country").innerHTML = getCountry(tmzn);

function getCountry(timezone){
    if (timezone.includes('/'))
    {
        timezone = timezone.substring(0, timezone.indexOf('/')); 
    }
    return timezone; 
}

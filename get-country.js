
/*
Script to display the user's country 
Author - Clance Kent

Uses timezone to get display a country name immediately to avoid flicker,
then uses an IP lookup service to replace the data to be accurate for countries that share timezones
*/

var contentDiv = document.getElementById("country");
contentDiv.innerHTML = getCountryByTimezone(); // Prefill country by guessing from browser timezone
updateCountry("https://ipinfo.io/json"); // Get more accurate country info through IP lookup

function getCountryByTimezone(){
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('/'))
    {
        timezone = timezone.substring(0, timezone.indexOf('/')); 
    }
    return timezone; 
}

function updateCountry (ipLookupUrl) {
    fetch(ipLookupUrl)
    .then(res => res.json())
    .then((out) => {
        let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
        contentDiv.innerHTML = regionNames.of(out.country);;
    })
    .catch(err => { throw err });
}
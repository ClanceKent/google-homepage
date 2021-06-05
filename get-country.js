/*
fetch('https://extreme-ip-lookup.com/json/')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.country);
    document.getElementById("country").innerHTML = response.country;
 })
 .catch((data, status) => {
    console.log('Request failed');
 })
*/

 function getIP(json) {
   if (json.country && json.city) {
    var div = document.getElementById('country');
    div.innerHTML=json.country;
   }
  }

<script src="https://extreme-ip-lookup.com/json/?callback=getIP" async defer></script>
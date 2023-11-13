document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('search').addEventListener('click', function(){
        var str = document.getElementById('searchInput').value;
        str = str.trim().toUpperCase();
        str = str.replace(/[^a-zA-Z0-9\s]/g, '');
        var xhttp = new XMLHttpRequest(); 
        var resultDiv = document.getElementById('result');
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                resultDiv.textContent = "";
                resultDiv.innerHTML=xhttp.responseText;
            };
        }
        console.log(str);
        xhttp.open("GET", "superheroes.php?q="+str, true);
        xhttp.send();
    });

});
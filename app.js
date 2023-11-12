document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('search').addEventListener('click', function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "superheroes.php", true);
        
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            };
        }
        xhttp.send();
    });

});
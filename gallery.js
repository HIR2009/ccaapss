function sendMail() {
    var link = "hiranmayitkarthi@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}


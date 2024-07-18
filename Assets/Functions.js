function ShowCards() {
    document.getElementById('CardGallery').classList.add('.d-none')
    document.getElementById('ShowButton').style.display = "none";
    document.getElementById('HideButton').style.display = "block";
}

function HideCards() {
    document.getElementById('CardGallery').classList.remove('.d-none');
    document.getElementById('ShowButton').style.display = "block";
    document.getElementById('HideButton').style.display = "none";
}

function DarkModeToggle(){
    document.body.style.backgroundColor = "#1f1f1f";
    document.body.style.color="white";
    document.getElementById('card1').style.backgroundColor= "#1f1f1f";
    document.getElementById('card2').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('card3').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('card4').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('card5').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('card6').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('card7').style.backgroundColor= "#1f1f1f";
    document.getElementById('Navbar1').style.backgroundColor= "#1f1f1f";
    document.getElementById('Navbar2').style.backgroundColor= "#1f1f1f"; 
    document.getElementById('DarkButton').style.display = "none";
    document.getElementById('LightButton').style.display = "block";
}

function LightModeToggle(){
    document.body.style.backgroundColor = "white";
    document.body.style.color="black";
    document.getElementById('card1').style.backgroundColor= "white";
    document.getElementById('card2').style.backgroundColor= "white"; 
    document.getElementById('card3').style.backgroundColor= "white"; 
    document.getElementById('card4').style.backgroundColor= "white"; 
    document.getElementById('card5').style.backgroundColor= "white"; 
    document.getElementById('card6').style.backgroundColor= "white"; 
    document.getElementById('card7').style.backgroundColor= "white";
    document.getElementById('Navbar1').style.backgroundColor= "#white";
    document.getElementById('Navbar2').style.backgroundColor= "#white"; 
    document.getElementById('DarkButton').style.display = "block";
    document.getElementById('LightButton').style.display = "none";
}
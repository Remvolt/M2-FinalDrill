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
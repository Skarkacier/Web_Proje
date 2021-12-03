document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal();
    }
}

var modal = document.getElementById("myModal");
        
function showModal(id){
    var img = document.getElementById(id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    var urlImg = img.src;
    urlImg = urlImg.replace("thumbnails","originals");
    modalImg.src = urlImg;
    captionText.innerHTML = img.alt;
}

function closeModal(){
    modal.style.display = "none";
}
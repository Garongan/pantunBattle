function hideSubmitBtn() {  
    if (document.getElementById("tqModal").style.display === "none") {
        document.getElementById("submit-share-button").style.display = "block";
    }else
    document.getElementById("submit-share-button").style.display = "none";
}
function openTextareas() {  
    document.getElementById("textareas").innerHTML = '<textarea name="isi-pantun" id="isi-pantun" rows="4" spellcheck="false" autofocus ></textarea>';
}
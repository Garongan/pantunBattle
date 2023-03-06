function hideSubmitBtn() {  
    if (document.getElementById("tqModal").style.display === "none") {
        document.getElementById("submit-share-button").style.display = "block";
    }else
    document.getElementById("submit-share-button").style.display = "none";
}
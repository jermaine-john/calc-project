function removed() {
    var parent= document.getElementById("selectHistoryId");
    var child= parent.getElementsByTagName("option")[1];
    parent.removeChild(child);
}
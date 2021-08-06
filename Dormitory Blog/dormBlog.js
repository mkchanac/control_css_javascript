function addComment(form){
    var dorm;
    var newComment;
    var allComments;
    var addedVerbiage;

    dorm = document.getElementById("dorm");
    newComment = document.getElementById("newComment");
    allComments = document.getElementById("allComments");

    if(!form.checkValidity()){
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";

        if(allComments.value = ""){
            addedVerbiage = dorm.value + ":\n" + newComment.value;
        } else {
            addedVerbiage = dorm.value + ":\n" + newComment.value + "\n\n";
        }
        allComments.value = addedVerbiage + allComments.value;
        dorm.selectedIndex = 0;
        newComment.value = "";
    }

}
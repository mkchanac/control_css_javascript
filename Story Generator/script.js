
function storyGenerate(form){
    var noun;
    var verb1;
    var adj1;
    var verb2;
    var adj2;
    var holes;


    noun = form.elements["noun"].value;
    verb1 = form.elements["verb1"].value;
    adj1 = form.elements["adj1"].value;
    verb2 = form.elements["verb2"].value;
    adj2 = form.elements["adj2"].value;
    holes = document.getElementsByTagName("div");
    input = document.getElementById("input");
    result = document.getElementById("result");
    done = document.getElementById("done");
    back = document.getElementById("return");
    reset = document.getElementById("reset");
    input.style.display = "none";
    done.style.display = "none";
    result.style.display = "block";
    back.style.display = "block";
    reset.style.display = "none";
    


    if(noun == ""){
        holes[0].innerHTML = "&lt;missing text&gt;";
    } else {
        holes[0].innerHTML = noun;
        holes[0].style.color = "blue";    
    }
    if(verb1 == ""){
        holes[1].innerHTML = "&lt;missing text&gt;";
    } else {
        holes[1].innerHTML = verb1;
        holes[1].style.color = "blue";    
    }
    if(adj1 == ""){
        holes[2].innerHTML = "&lt;missing text&gt;";
    }     else {
        holes[2].innerHTML = adj1;
        holes[2].style.color = "blue";    
    }
    if(verb2 == ""){
        holes[3].innerHTML = "&lt;missing text&gt;";
    }else {
        holes[3].innerHTML = verb2;
        holes[3].style.color = "blue";    
    }
    if(adj2 == ""){
        holes[4].innerHTML = "&lt;missing text&gt;";
    }else {
        holes[4].innerHTML = adj2;
        holes[4].style.color = "blue";    
    }


    

}

function goBack(){
    var input = document.getElementById("input");
    input.style.display = "block";
    var result = document.getElementById("result");
    result.style.display = "none";

    done = document.getElementById("done");
    back = document.getElementById("return");
    reset = document.getElementById("reset");
    back.style.display = "none";
    done.style.display = "inline-block";
    reset.style.display = "inline-block";

}

function resetTheForm(form){
    var noun;
    var verb1;
    var adj1;
    var verb2;
    var adj2;
    var holes;

    
    noun = form.elements["noun"].value = '';
    verb1 = form.elements["verb1"].value = '';
    adj1 = form.elements["adj1"].value = '';
    verb2 = form.elements["verb2"].value = '';
    adj2 = form.elements["adj2"].value = '';
    holes = document.getElementsByTagName("div");


    for(let x of holes)
    {
        if(x.innerHTML != ""){
            x.innerHTML = "";
            x.style.color = "red";
        }
    }
}
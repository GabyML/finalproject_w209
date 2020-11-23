function check_answer(user_answer, correct_answer, result) {

    let choices = document.getElementsByClassName("q1result");

    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML="";
    }

    if (user_answer == correct_answer) {
        document.getElementById(result).innerHTML="Correct";
    }
    else {
        document.getElementById(result).innerHTML="Try Again";
    }

}

function show_animation(animation_div_id, fill, correct_answer) {
    let animation_div = document.getElementById(animation_div_id);
    animation_div.innerHTML="";
    for (let i = 0; i < 100; i++) {
        if (i%20==0 && i>0) {
            let br=document.createElement("br");
            animation_div.appendChild(br);
        }
        let person_div=document.createElement("div");
        person_div.classList.add("person_div");
        if (i < correct_answer && fill==true) {
            person_div.classList.add("filled");
        }
        animation_div.appendChild(person_div);
       
    }
}
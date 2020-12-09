function check_answer(user_answer, correct_answer, result, choices_class) {

    let choices = document.getElementsByClassName(choices_class);

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

var image
// image.width = '50px';
// image.height = '50px'

function show_animation(animation_div_id, fill, correct_answer) {
    let animation_div = document.getElementById(animation_div_id);
    animation_div.innerHTML="";
    for (let i = 0; i < 100; i++) {
        if (i%20==0 && i>0) {
            let br=document.createElement("br");
            animation_div.appendChild(br);
        }

        let person_img = document.createElement("img");
        person_img.classList.add("person");

        if (i < correct_answer && fill==true) {
            person_img.src="gold.png";
            person_img.alt="gold person";

        }
        else {
            person_img.src="black.png";
            person_img.alt="black person";
        }


        animation_div.appendChild(person_img);

    }
}

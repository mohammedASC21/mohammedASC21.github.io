//Nav bar 
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-links');




toggleButton.onclick = function() {
    for (var i = 0; i < navbarLinks.length; i++)
        navbarLinks[i].classList.toggle('active')


}


///nav

//nav

//contect form
submit_button = document.querySelector("#submit_button")


let input = document.querySelectorAll("input")



submit_button.onclick = function(e) {
    e.preventDefault()
    if (input[0].value == "" || input[1].value == "") {
        alert("Please fill in all fields")
    } else {
        let form = document.querySelector(".form_container")
        form.style.visibility = "hidden";
        let text = "Thank you for contecting me, " + input[0].value;
        document.querySelector("#after_send").innerHTML = text;
    }


}



//HTML
image_SRC = HTML.img;
div = document.querySelector('#skills_id')

newdiv = document.createElement('div');
div.appendChild(newdiv)
name1 = document.createElement('h2');
name1.innerText = HTML.name
newdiv.appendChild(name1)
console.log(name1)
image = document.createElement('img');
image.src = image_SRC;
image.className = "skill_logo";
console.log(image)
newdiv.appendChild(image)
des = document.createElement('p');
des.innerText = HTML.description;
newdiv.className = "HTML skill_des";
newdiv.appendChild(des)

//Python
newdiv2 = document.createElement('div');
div.appendChild(newdiv2)
name2 = document.createElement('h2');
name2.innerText = py.name
newdiv2.appendChild(name2)

image2 = document.createElement('img');
image2.src = py.img;
image2.className = "skill_logo";
console.log(image)
newdiv2.appendChild(image2)
des2 = document.createElement('p');
des2.innerText = py.description;
newdiv2.className = "PY skill_des";
newdiv2.appendChild(des2)

//Computer
newdiv3 = document.createElement('div');
div.appendChild(newdiv3)

name3 = document.createElement('h2');
name3.innerText = comp.name
newdiv3.appendChild(name3)

image3 = document.createElement('img');
image3.src = comp.img;
image3.className = "skill_logo";
newdiv3.appendChild(image3)

des3 = document.createElement('p');
des3.innerText = comp.description;
newdiv3.className = "COMP skill_des";
newdiv3.appendChild(des3)

//css
newdiv4 = document.createElement('div');
div.appendChild(newdiv4)

name4 = document.createElement('h2');
name4.innerText = css.name
newdiv4.appendChild(name4)

image4 = document.createElement('img');
image4.src = css.img;
image4.className = "skill_logo";
newdiv4.appendChild(image4)

des4 = document.createElement('p');
des4.innerText = css.description;
newdiv4.className = "css skill_des";
newdiv4.appendChild(des4)

//node
newdiv5 = document.createElement('div');
div.appendChild(newdiv5)

name5 = document.createElement('h2');
name5.innerText = nodejs.name
newdiv5.appendChild(name5)

image5 = document.createElement('img');
image5.src = nodejs.img;
image5.className = "skill_logo";
newdiv5.appendChild(image5)

des5 = document.createElement('p');
des5.innerText = nodejs.description;
newdiv5.className = "nodejs skill_des";
newdiv5.appendChild(des5)

//ms
newdiv6 = document.createElement('div');
div.appendChild(newdiv6)

name6 = document.createElement('h2');
name6.innerText = ms.name
newdiv6.appendChild(name6)

image6 = document.createElement('img');
image6.src = ms.img;
image6.className = "skill_logo";
newdiv6.appendChild(image6)

des6 = document.createElement('p');
des6.innerText = ms.description;
newdiv6.className = "ms skill_des";
newdiv6.appendChild(des6)

//js
newdiv7 = document.createElement('div');
div.appendChild(newdiv7)

name7 = document.createElement('h2');
name7.innerText = js.name
newdiv7.appendChild(name7)

image7 = document.createElement('img');
image7.src = js.img;
image7.className = "skill_logo";
newdiv7.appendChild(image7)

des7 = document.createElement('p');
des7.innerText = js.description;
newdiv7.className = "js skill_des";
newdiv7.appendChild(des7)

//git
newdiv8 = document.createElement('div');
div.appendChild(newdiv8)

name8 = document.createElement('h2');
name8.innerText = git.name
newdiv8.appendChild(name8)

image8 = document.createElement('img');
image8.src = git.img;
image8.className = "skill_logo";
newdiv8.appendChild(image8)

des8 = document.createElement('p');
des8.innerText = git.description;
newdiv8.className = "git skill_des";
newdiv8.appendChild(des8)


//p5
newdiv9 = document.createElement('div');
div.appendChild(newdiv9)

name9 = document.createElement('h2');
name9.innerText = p5.name
newdiv9.appendChild(name9)

image9 = document.createElement('img');
image9.src = p5.img;
image9.className = "skill_logo";
newdiv9.appendChild(image9)


newdiv9.className = "p5 skill_des";

project9 = document.createElement('h4');
project9.innerText = "Project: Pong ball game";
newdiv9.appendChild(project9)


project_img = document.createElement('img');
project_img.src = p5.project.image_pro
project_img.style.width = "100px"
newdiv9.appendChild(project_img)



console.log(document)
    //botton

let button_skills = document.querySelector('#skill_header');
let button_html = document.querySelector('.skill_html');
let button_py = document.querySelector('.skill_py');
let button_comp = document.querySelector('.skill_comp');

let button_css = document.querySelector('.skill_css');
let button_nodejs = document.querySelector('.skill_nodejs');
let button_ms = document.querySelector('.skill_ms');

let button_js = document.querySelector('.skill_js');
let button_git = document.querySelector('.skill_git');
let button_p5 = document.querySelector('.skill_p5');
let skill_html = document.querySelector('.HTML');
let skill_py = document.querySelector('.PY');
let skill_comp = document.querySelector('.COMP');
let skill_css = document.querySelector('.css');
let skill_nodejs = document.querySelector('.nodejs');
let skill_ms = document.querySelector('.ms');

let skill_js = document.querySelector('.js');
let skill_git = document.querySelector('.git');
let skill_p5 = document.querySelector('.p5');


// display: none;
skill_describtion.style.display = "block";
skill_html.style.display = "none";
skill_py.style.display = "none";
skill_comp.style.display = "none";

skill_css.style.display = "none";
skill_nodejs.style.display = "none";
skill_ms.style.display = "none";

skill_js.style.display = "none";
skill_git.style.display = "none";
skill_p5.style.display = "none";

button_skills.onclick = function() {
    skill_describtion.style.display = "block";
    skill_html.style.display = "none";
    skill_py.style.display = "none";
    skill_comp.style.display = "none";

    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";

    skill_js.style.display = "none";
    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}
button_html.onclick = function() {
    skill_html.style.display = "block";
    skill_describtion.style.display = "none";
    skill_py.style.display = "none";
    skill_comp.style.display = "none";
    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";
    skill_js.style.display = "none";

    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}
button_py.onclick = function() {
    skill_py.style.display = "block";
    skill_html.style.display = "none";
    skill_describtion.style.display = "none";
    skill_comp.style.display = "none";
    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";
    skill_js.style.display = "none";

    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}



button_comp.onclick = function() {
        skill_comp.style.display = "block";
        skill_describtion.style.display = "none";
        skill_html.style.display = "none";
        skill_py.style.display = "none";


        skill_css.style.display = "none";
        skill_nodejs.style.display = "none";
        skill_ms.style.display = "none";

        skill_js.style.display = "none";
        skill_git.style.display = "none";
        skill_p5.style.display = "none";


    }
    //2st part

button_css.onclick = function() {
    skill_html.style.display = "none";
    skill_py.style.display = "none";
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";

    skill_css.style.display = "block";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";

    skill_js.style.display = "none";
    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}

button_nodejs.onclick = function() {
    skill_py.style.display = "none";
    skill_html.style.display = "none";
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";

    skill_css.style.display = "none";
    skill_nodejs.style.display = "block";
    skill_ms.style.display = "none";

    skill_js.style.display = "none";
    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}



button_ms.onclick = function() {
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";
    skill_html.style.display = "none";
    skill_py.style.display = "none";


    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "block";

    skill_js.style.display = "none";
    skill_git.style.display = "none";
    skill_p5.style.display = "none";


}


// //3st part

button_js.onclick = function() {
    skill_html.style.display = "none";
    skill_py.style.display = "none";
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";

    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";

    skill_js.style.display = "block";
    skill_git.style.display = "none";
    skill_p5.style.display = "none";
}

button_git.onclick = function() {
    skill_py.style.display = "none";
    skill_html.style.display = "none";
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";

    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";

    skill_js.style.display = "none";
    skill_git.style.display = "block";
    skill_p5.style.display = "none";
}



button_p5.onclick = function() {
    skill_comp.style.display = "none";
    skill_describtion.style.display = "none";
    skill_html.style.display = "none";
    skill_py.style.display = "none";


    skill_css.style.display = "none";
    skill_nodejs.style.display = "none";
    skill_ms.style.display = "none";

    skill_js.style.display = "none";
    skill_git.style.display = "none";
    skill_p5.style.display = "block";


}
const body = document.body;
// Create copyright name
const creatorName = "Avion Cobb"
// Create a new Date object
const today = new Date();
// Create current year
const thisYear = today.getFullYear();

//---------------FOOTER CREATION---------------
// Create new <footer> element
const footerElement = document.createElement("footer");

// Append <footer> to the body
body.appendChild(footerElement);
const footer = document.querySelector("footer");

//-------------COPYRIGHT CREATION---------------
//Create new copyright <p> element
const copyright = document.createElement("p");

//Added Creator Name, Copyright symbol, and Current Year to HTML
copyright.innerHTML = `Copyright &copy;${thisYear} ${creatorName}. All rights reserved.`;
// Changed copyright text to white
copyright.style.color = "white";
// Changed copyright text size
copyright.style.fontSize = "1.5rem";
// Added copyright info to <footer> element
footer.appendChild(copyright);

//--------------SKILLS LIST CREATION-------------
// Grabbed skills section from HTML
const skillSection = document.getElementById("skills");

//--------HARD SKILLS----------
// Grabbed hard skills <ul> from HTML
const hardSkillsList = skillSection.querySelector(".hard-skills-list");
const hardSkills = [
    "JavaScript",
    "Python",
    "C++",
    "React.js",
    "Node.js",
    "SQL",
    "Git",
    "AWS",
    "HTML/CSS",
    "DevOps",
    "Agile Methodologies"
];

//For loop to create <li> for each element in hardSkills [array] and place in HTML
for (let i = 0; i < hardSkills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = hardSkills[i];
    hardSkillsList.appendChild(skill);
};

// ---------SOFT SKILLS------------
// Grabbed soft skills <ul> from HTML
const softSkillsList = skillSection.querySelector(".soft-skills-list");
const softSkill = [
    "Problem Solving",
    "Teamwork",
    "Project Management",
    "Analytical Skills",
    "Communication",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
    "Conflict Management",
    "Technical Support",
    "Critical Thinking"
];

//For loop to create <li> for each element in softSkills [array] and place in HTML
for (let i = 0; i < softSkill.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = softSkill[i];
    softSkillsList.appendChild(skill);
};

// ------ MESSAGE FORM -------
// Form selection
const messageForm = document.querySelector("[name='leave-message']");

//obtain message section
const messageSection = document.getElementById("messages");

// add submit eventListener
messageForm.addEventListener("submit", submitForm);

//callback function to submit form
function submitForm() {
    //prevents page from refreshing
    event.preventDefault();
    //storing event target in a variable
    const eventTarget = event.target;

    //obtain values from HTML form
    const userName = eventTarget.userName.value;
    const userEmail = eventTarget.userEmail.value;
    const userMessage = eventTarget.userMessage.value;

    //console logging values
    console.log(userName, userEmail, userMessage);

    //obtain message section
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    //makes new list item
    const newMessage = document.createElement("li");
    // setting inner HTML
    newMessage.innerHTML = `<a href=mailto:${userEmail}>${userName}</a>` + `<span>${userMessage}</span>`;

    //creating remove button
    const removeButton = document.createElement("button");
    //setting text
    removeButton.innerText = "remove";
    // adding attribute type
    removeButton.type = "button";

    //adding remove message event listener
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    //adding remove button to newMessage element
    newMessage.appendChild(removeButton);

    //adding newMessage to messageList
    messageList.appendChild(newMessage);

    //resetting form once info is submitted
    eventTarget.reset();


    //creating edit button
    const editButton = document.createElement("button");
    //setting text
    editButton.innerText = "edit";
    // adding attribute type
    editButton.type = "button";

    //adding edit button event listener
    editButton.addEventListener("click", () => {
        const editEntry = editButton.parentNode.querySelector("span");
        if (editEntry.contentEditable === "true") {
            editEntry.contentEditable = false;
            editEntry.style.border = "";


        } else {
            editEntry.contentEditable = true;
            editEntry.style.border = "3px dotted #d4af37";

        }
    });

    //adding edit button to newMessage element
    newMessage.appendChild(editButton);
};
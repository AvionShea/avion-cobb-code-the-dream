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

// -------- PROJECT ---------
// API to retrieve repos from Github
async function getProjectsFromGithub() {
    const gitHubUrl = "https://api.github.com/users/avionshea/repos";
    try {
        //send the request for info and checking if it's good
        const response = await fetch(gitHubUrl);
        if (!response.ok) {
            throw new Error("Bummer! Request failed.");
        }
        //turning the good info into json
        const repositories = await response.json();
        console.log(repositories);

        //Displaying repos in HTML
        const projectList = document.querySelector(".projectList");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerHTML = `<a class="blur-text" href="${repositories[i].html_url}" target="_blank"><span>${repositories[i].name}</span><p>Entry created on: ${repositories[i].created_at.slice(0, 10)}</p></a> <span class="classified">CLASSIFIED</span>`;
            projectList.appendChild(project);
        }

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getProjectsFromGithub();


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
    newMessage.innerHTML = `<a href=mailto:${userEmail}>${userName} sent: </a>` + `<span>${userMessage}</span>`;

    alert("Message sent!");

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
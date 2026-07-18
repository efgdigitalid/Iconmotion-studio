let templates = {};
let motions = [];

fetch("./templates.json")
    .then(response => response.json())
    .then(data => {
        templates = data;
        console.log("Templates loaded:", templates);

loadTemplates();
    })
    .catch(error => {
        console.error("Error loading templates:", error);
    });

fetch("./motions.json")
    .then(response => response.json())
    .then(data => {
        motions = data;
        console.log("Motions loaded:", motions);

loadMotions();
    })
    .catch(error => {
        console.error("Error loading motions:", error);
    });

console.log("IconMotion Studio AI v1.1");

function loadTemplates() {
    const select = document.getElementById("template");

    if (!select) return;

    select.innerHTML = "";

    Object.keys(templates).forEach((name) => {
        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        select.appendChild(option);
    });
}

function loadMotions() {
    const select = document.getElementById("motion");

    if (!select) return;

    select.innerHTML = "";

    motions.forEach((name) => {
        const option = document.createElement("option");

        option.value = name;
        option.textContent = name;

        select.appendChild(option);
    });
}

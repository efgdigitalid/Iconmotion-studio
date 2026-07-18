let templates = {};
let motions = [];

fetch("./templates.json")
    .then(response => response.json())
    .then(data => {
        templates = data;
        console.log("Templates loaded:", templates);
    })
    .catch(error => {
        console.error("Error loading templates:", error);
    });

fetch("./motions.json")
    .then(response => response.json())
    .then(data => {
        motions = data;
        console.log("Motions loaded:", motions);
    })
    .catch(error => {
        console.error("Error loading motions:", error);
    });

console.log("IconMotion Studio AI v1.1");

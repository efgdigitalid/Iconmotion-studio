console.log("IconMotion Studio AI");
fetch("./templates.json")
    .then(res => res.json())
    .then(data => {
        console.log("Templates:", data);
    });

fetch("./motions.json")
    .then(res => res.json())
    .then(data => {
        console.log("Motions:", data);
    });

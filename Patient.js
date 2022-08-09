const client = new FHIR.client("https://r3.smarthealthit.org");

function display(data) {
    const output = document.getElementById("output");
    output.innerText = data instanceof Error ?
        String(data) :
        JSON.stringify(data, null, 4);
}

client.request("/Encounter/3d1ae6a9-b8c1-4c12-a8ba-b44d96ddfe24", {
    resolveReferences: ["serviceProvider", "subject"]
}).then(display).catch(display);

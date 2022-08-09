const rxnorm  = "http://www.nlm.nih.gov/research/umls/rxnorm";
const client  = new FHIR.client("https://r3.smarthealthit.org");
const getPath = client.getPath;

function display(data) {
    const output = document.getElementById("output");
    output.innerText = data instanceof Error ?
        String(data) :
        JSON.stringify(data, null, 4);
}

function getMedicationName(medCodings = []) {
    var coding = medCodings.find(c => c.system === rxnorm);
    return coding && coding.display || "Unnamed Medication(TM)";
}

client.request(`/MedicationRequest?patient=smart-1642068`, {
    resolveReferences: "medicationReference"
}).then(data => data.entry.map(item => getMedicationName(
    getPath(item, "resource.medicationCodeableConcept.coding") ||
    getPath(item, "resource.medicationReference.code.coding")
))).then(display, display);

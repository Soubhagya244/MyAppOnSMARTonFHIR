const client = FHIR.client("https://r3.smarthealthit.org");
client.request("Patient").then(console.log).catch(console.error);

const id_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9." +
"eyJwcm9maWxlIjoiUHJhY3RpdGlvbmVyL3NtYXJ0LVByYWN0aXRpb2" +
"5lci03MjA4MDQxNiIsImZoaXJVc2VyIjoiUHJhY3RpdGlvbmVyL3Nt" +
"YXJ0LVByYWN0aXRpb25lci03MjA4MDQxNiIsInN1YiI6IjM2YTEwYm" +
"M0ZDJhNzM1OGI0YWZkYWFhZjlhZjMyYmFjY2FjYmFhYmQxMDkxYmQ0" +
"YTgwMjg0MmFkNWNhZGQxNzgiLCJpc3MiOiJodHRwOi8vbGF1bmNoLn" +
"NtYXJ0aGVhbHRoaXQub3JnIiwiaWF0IjoxNTU5MzkyMjk1LCJleHAi" +
"OjE1NTkzOTU4OTV9.niEs55G4AFJZtU_b9Y1Y6DQmXurUZZkh3WCud" +
"ZgwvYasxVU8x3gJiX3jqONttqPhkh7418EFssCKnnaBlUDwsbhp7xd" +
"WN4o1L1NvH4bp_R_zJ25F1s6jLmNm2Qp9LqU133PEdcRIqQPgBMyZB" +
"WUTyxQ9ihKY1RAjlztAULQ3wKea-rfe0BXJZeUJBsQPzYCnbKY1dON" +
"_NRd8N9pTImqf41MpIbEe7YEOHuirIb6HBpurhAHjTLDv1IuHpEAOx" +
"pmtxVVHiVf-FYXzTFmn4cGe2PsNJfBl8R_zow2n6qaSANdvSxJDE4D" +
"UgIJ6H18wiSJJHp6Plf_bapccAwxbx-zZCw";
                    
function display(data) {
    const output = document.getElementById("output");
    output.innerText = data instanceof Error ?
        String(data) :
        JSON.stringify(data, null, 4);
}

const client = new FHIR.client({
    serverUrl: "https://r3.smarthealthit.org",
    tokenResponse: { id_token }
});

client.request(client.user.fhirUser).then(display).catch(display);

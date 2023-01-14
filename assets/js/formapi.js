 var submit = document.getElementById("submit");
    submit.addEventListener("click", function(event){
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("comments").value;
        var data = {
            name: name,
            email: email,
            phone: phone
        };
        var sheetId = "12z0Yj2Mfqyn6352MHy4a_hK93saGpSbyF5o_5ttU-QI";
        var apiKey = "AIzaSyCfOKj_xBkiVvUSclwuQp0sLo0YjPHYq3w";
        
        var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:C1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=${apiKey}`;
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                range: "Sheet1",
                majorDimension: "ROWS",
                values: [
                    [data.name, data.email, data.phone]
                ]
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    });


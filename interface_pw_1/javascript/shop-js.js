
function bestellen()
{
    let prijsTicket = 15;
    let prijsAlbum = 19;

    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    let postcode = document.getElementById("postcode").value;
    let huisnummer = document.getElementById("huisnummer").value;
    let email = document.getElementById("email").value;
    let telefoonnummer = document.getElementById("telefoonnummer").value;

    const ticket = document.getElementById("ticket");
    const album = document.getElementById("album");

    const requiredInputs = [
        { value: voornaam, name: "Voornaam" },
        { value: achternaam, name: "Achternaam" },
        { value: postcode, name: "Postcode" },
        { value: huisnummer, name: "Huisnummer" },
        { value: email, name: "Email" }
    ];

    for (let input of requiredInputs) {
        if (input.value.trim() === "") {
            document.getElementById("gegevens").innerHTML = `Vul alstublieft het veld '${input.name}' in.`;
            document.getElementById("bevestig").disabled = true;
            return;
        }
    }

    let bestelInfo = "";

    if (ticket.checked && album.checked){
        let prijsTotaal = prijsTicket + prijsAlbum - ((prijsTicket + prijsAlbum)/10);
        bestelInfo = "<br>U bestelt tickets en een album. <br>U krijgt 10% korting<br>Uw totaal is €".concat(prijsTotaal.toFixed(2))
    }
    else if (album.checked){
        bestelInfo = "<br>U bestelt een album. <br>Uw totaal is €" + prijsAlbum.toFixed(2)
    }
    else if (ticket.checked){
    bestelInfo = "<br>U bestelt tickets. <br>Uw totaal is €" + prijsTicket.toFixed(2)
    }
    else {
        bestelInfo = "<br>U bestelt niets"
    }

    document.getElementById("bevestig").disabled = false;

    let gegevens = "Hallo " + voornaam + " " + achternaam + "<br>Postcode: " + postcode + "<br>Huisnummer: " + huisnummer + "<br>Email: " + email + "<br>Telefoonnummer: " + telefoonnummer;
    document.getElementById("gegevens").innerHTML = gegevens
    document.getElementById("bestelInfo").innerHTML = bestelInfo

}
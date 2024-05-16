//Koppla ett Click-event till btnSubmit
document.getElementById("btnSubmit").addEventListener("click", () => {
    //Hämta input värde, spara i variabel
    const name = document.getElementById("txtName").value

    //Skriv ut meddelande
    document.getElementById("output").innerText = `Hejsan ${name}`

    //Kontrollera värdet på det inmatade namnet
    if (name == "Maria") {
        location.assign("secondPage.html")
    }
})
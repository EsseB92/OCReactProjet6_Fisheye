function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function dataProcess(event) {
    event.preventDefault();

    const form = document.getElementById('form');

    const firstname = event.target.elements[0].value;
    const lastname = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const message = event.target.elements[3].value;
    
    console.log("firstname : " + firstname);
    console.log("lastname : " + lastname);
    console.log("email : " + email);
    console.log("message : " + message);
    closeModal()
    form.reset()
}

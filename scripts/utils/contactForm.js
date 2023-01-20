document.addEventListener('keyup', (event) => {
    if(event.code === 'Escape') {
        closeModal()
    }
})

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");

	modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false")
    main.setAttribute("aria-hidden", "true")
    const tabIndex = document.querySelectorAll('[tabindex]');
    for(let element of tabIndex) {
        element.setAttribute("tabindex", -1)
    };
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true")
    main.setAttribute("aria-hidden", "false")
    const tabIndex = document.querySelectorAll('[tabindex]');
    for(let element of tabIndex) {
        element.setAttribute("tabindex", 0)
    };
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

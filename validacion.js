let menuVisible = false;

//Función que oculta o muestra el menu

function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;

    }
}

function seleccionar(){
    //oculto el menu una vez selecciono un opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("https://formspree.io/f/meqbdqqy", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Mensaje enviado con éxito. Gracias por contactarme.");
                form.reset();
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        });
    });
});
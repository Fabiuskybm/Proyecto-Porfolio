

// MENÚ HAMBURGUESA
const nav = document.querySelector("#nav");
const navList = document.querySelector("#nav-list");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.classList.add("ocultarMenu");
    navList.classList.add("nav-list-open");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.classList.remove("ocultarMenu");
    navList.classList.remove("nav-list-open");
})



// FORMULARIO
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll('#form .form-inputs')
const textarea = document.querySelector("#message");


const patrones = {
    nombre: /^[\p{L}\s]{4,16}$/u,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]+$/,
    asunto: /^[a-zA-ZÁ-ÿ0-9\_\-\.\s]{4,40}$/,
    telefono: /^\d{7,14}$/
}

const campos = {
    nombre: false,
    correo: false,
    asunto: false,
    telefono: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            if(patrones.nombre.test(e.target.value)) {
                document.getElementById("name-input").classList.remove("formulario-incorrecto");
                document.getElementById("name-input").classList.add("formulario-correcto");
                document.querySelector(".name-error").style.display = "none";
                campos.nombre = true;

            } else {
                document.getElementById("name-input").classList.remove("formulario-correcto");
                document.getElementById("name-input").classList.add("formulario-incorrecto");
                document.querySelector(".name-error").style.display = "block";
                campos.nombre = false;

                if(e.target.value === "") {
                    document.getElementById("name-input").classList.remove("formulario-incorrecto");
                    document.querySelector(".name-error").style.display = "none";
                    campos.nombre = false;
                }
            }
            break;
        case "Email":
            if(patrones.correo.test(e.target.value)) {
                document.getElementById("email-input").classList.remove("formulario-incorrecto");
                document.getElementById("email-input").classList.add("formulario-correcto");
                document.querySelector(".email-error").style.display = "none";
                campos.correo = true;

            } else {
                document.getElementById("email-input").classList.remove("formulario-correcto");
                document.getElementById("email-input").classList.add("formulario-incorrecto");
                document.querySelector(".email-error").style.display = "block";
                campos.correo = false;

                if(e.target.value === "") {
                    document.getElementById("email-input").classList.remove("formulario-incorrecto");
                    document.querySelector(".email-error").style.display = "none";
                    campos.correo = false;
                }
            }
            break;
        case "Telefono":
            if(patrones.telefono.test(e.target.value)) {
                document.getElementById("tel-input").classList.remove("formulario-incorrecto");
                document.getElementById("tel-input").classList.add("formulario-correcto");
                document.querySelector(".tel-error").style.display = "none";
                campos.telefono = true;

            } else {
                document.getElementById("tel-input").classList.remove("formulario-correcto");
                document.getElementById("tel-input").classList.add("formulario-incorrecto");
                document.querySelector(".tel-error").style.display = "block";
                campos.telefono = false;

                if(e.target.value === "") {
                    document.getElementById("tel-input").classList.remove("formulario-incorrecto");
                    document.querySelector(".tel-error").style.display = "none";
                    campos.telefono = false;
                }
            }
            break;
        case "Asunto":
            if(patrones.asunto.test(e.target.value)) {
                document.getElementById("annount-input").classList.remove("formulario-incorrecto");
                document.getElementById("annount-input").classList.add("formulario-correcto");
                document.querySelector(".annount-error").style.display = "none";
                campos.asunto = true;

            } else {
                document.getElementById("annount-input").classList.remove("formulario-correcto");
                document.getElementById("annount-input").classList.add("formulario-incorrecto");
                document.querySelector(".annount-error").style.display = "block";
                campos.asunto = false;

                if(e.target.value === "") {
                    document.getElementById("annount-input").classList.remove("formulario-incorrecto");
                    document.querySelector(".annount-error").style.display = "none";
                    campos.asunto = false;
                }
            }
            break;
        case "Mensaje":
            if(e.target.value !== "") {
                document.getElementById("message").classList.add("formulario-correcto");
                campos.mensaje = true;
            } else {
                document.getElementById("message").classList.remove("formulario-correcto");
                campos.mensaje = false;
            }

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
})

textarea.addEventListener('keyup', validarFormulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("nombre: ", campos.nombre);
    console.log("correo: ", campos.correo);
    console.log("telefono: ", campos.telefono);
    console.log("asunto: ", campos.asunto);
    console.log("mensaje: ", campos.mensaje);

    if(campos.nombre && campos.correo && campos.telefono && campos.asunto && campos.mensaje) {
        formulario.reset();
        document.querySelectorAll(".form-inputs").forEach(function (e) {
            e.classList.remove("formulario-correcto");
        });

        document.getElementById("message").classList.remove("formulario-correcto");
        
        document.getElementById("send-form-message").style.display = "flex";
        
        setTimeout(function() {
            document.getElementById("send-form-message").style.display = "none";
        }, 3000)

        campos.nombre = false;
        campos.correo = false;
        campos.telefono = false;
        campos.asunto = false;
        campos.mensaje = false;
        
    } else {
        document.getElementById("error-form-message").style.display = "flex";
        setTimeout(function() {
            document.getElementById("error-form-message").style.display = "none";
        }, 3000)
    }
    
})



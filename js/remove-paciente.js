var patientsTable = document.querySelectorAll("#tabela-pacientes");

patientsTable[0].addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});
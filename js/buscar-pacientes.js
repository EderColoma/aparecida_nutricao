var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var response = xhr.responseText;
            var patients = JSON.parse(response);

            patients.forEach(function(p) {
                var patient = createPatient(p.nome, p.peso, p.altura, p.gordura);
                addPatientLine(patient);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
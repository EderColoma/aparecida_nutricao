var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var addButton = document.querySelector("#adicionar-paciente"); 
addButton.addEventListener("click", function(event){
                                        event.preventDefault();
                                        var form = document.querySelector("#form-adiciona");
                                        var patient = createPatientFromForm(form);

                                        if(isPatientValid(patient)){
                                            addPatientLine(patient);
                                            form.reset();
                                            var errorMessages = document.querySelector("#mensagens-erro");
                                            errorMessages.innerHTML = "";
                                        }
                                    });

function addPatientLine(patient){
    var tr = createTr("paciente");

    tr.appendChild(createTd("info-nome", patient.name));
    tr.appendChild(createTd("info-peso", patient.weight));
    tr.appendChild(createTd("info-altura", patient.height));
    tr.appendChild(createTd("info-gordura", patient.fat));
    tr.appendChild(createTd("info-imc", calculateBMI(patient.weight, patient.height).toFixed(2)));

    addTrToPatientsTable(tr);
}

function createTr(className){
    var tr = document.createElement("tr");
    tr.classList.add(className);

    return tr;
}

function createTd(className, text){
    var td = document.createElement("td");
    td.classList.add(className);
    td.textContent = text;

    return td;
}

function addTrToPatientsTable(tr){
    var tBody = document.querySelector("#tabela-pacientes");
    tBody.appendChild(tr);
}

function createPatientFromForm(form) {

    var name = form.nome.value;
    var weight = form.peso.value;
    var height = form.altura.value;
    var fat = form.gordura.value;

    return createPatient(name, weight, height, fat);
}

function createPatient(name, weight, height, fat) {

    var patient = {
        name: name,
        weight: weight,
        height: height,
        fat: fat 
    }

    return patient;
}

function isPatientValid(patient){
    var errors = validatePatient(patient.weight, patient.height);
    errors.push(validateName(patient));
    errors.push(validateFat(patient));
    showErrorMessages(errors);
    return errors.length == 0;
}

function validateName(patient){
    return patient.name.length > 0 ? "" : "Nome não pode estar em branco";
}

function validateFat(patient){
    return patient.fat.length > 0 ? "" : "Gordura não pode estar nulo";
}

function showErrorMessages(errors){
    var ulErrors = document.querySelector("#mensagens-erro");
    ulErrors.innerHTML = "";

    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ulErrors.appendChild(li);
    });
}
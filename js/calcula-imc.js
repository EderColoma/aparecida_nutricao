var patients = document.querySelectorAll(".paciente");
patients.forEach(p => {
    showBMI(p);
});

function showBMI(patient){
    var weight = patient.querySelector(".info-peso").textContent;
    var height = patient.querySelector(".info-altura").textContent;
    var tdIMC = patient.querySelector(".info-imc");

    var error = validatePatient(weight, height); 
    if(error.length == 0){
        tdIMC.textContent = calculateBMI(weight, height).toFixed(2);
    }else{
        tdIMC.textContent = "Informações inválidas";
        highlightInvalidLine(patient);
    }
}

function calculateBMI(weight, height){
    return weight / (height * height);
}

function validateWeight(weight) {
    return (weight > 0 && weight < 1000) ? "" : "Peso inválido";
}

function validateHeight(height) {
    return (height > 0 && height < 3) ? "" : "Altura inválida";
}

function validatePatient(weight, height){
    var errors = [];

    var weightMessage = validateWeight(weight);
    if(weightMessage.length > 0){
        errors.push(weightMessage);
    }
    
    var heightMessage = validateHeight(height);
    if(heightMessage.length > 0){
        errors.push(heightMessage);
    } 
    
    return errors;
}

function highlightInvalidLine(line){
    line.classList.add("paciente-invalido");
}
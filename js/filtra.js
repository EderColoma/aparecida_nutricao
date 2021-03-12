var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){filterPatients(this.value)});

function filterPatients(filterValue){
    var patients = document.querySelectorAll(".paciente");
    patients.forEach(p => {
        filterResult(p, filterValue);
    });
}

function filterResult(patient, filterValue){
    if(containsFilterValue(patient, filterValue)){
        patient.classList.remove("invisivel");
    }else{
        patient.classList.add("invisivel");
    }
}

function containsFilterValue(patient, filterValue){
    var tdName = patient.querySelector(".info-nome");
    var name = tdName.textContent;
    return name.includes(filterValue);
}
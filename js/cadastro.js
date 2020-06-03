let lastScrollTop = 0;
let navbar = document.getElementById("nav-hide")

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-70px";
        document.getElementById("mySidebar").style.width = "0";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop
});

//window.addEventListener(onload);
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// ====================================================================================================
// document.getElementById("buttom-seguinte").onclick(alert("Cadastro feito com sucesso!"));
// document.getElementById("buttom-seguinte01").onclick(alert("Cadastro feito com sucesso!"));


// Mascara Form ==========================================================================================
jQuery(function($) {
    // Mask dados pessoais 
    $('#inputcpf').mask('000.000.000-00');
    $('#inputrg').mask('00.000.000-00');
    $('#inputdatenasc').mask('00/00/0000');
    // Mask endereço
    $('#inputCEP').mask('00000-000');
    $('#inputnum').mask('00');
    // Mask contato
    $('#inputtel').mask("(00) 0000-0000");
    $('#inputcel').mask("(00) 00000-0000");
    // Mask Dog
    $('#inputidade-dog').mask("00");

    // ================================Quero Adestrar ===============================================================
    // Mask dados pessoais 
    $('#inputcpf01').mask('000.000.000-00');
    $('#inputrg01').mask('00.000.000-00');
    $('#inputdatenasc01').mask('00/00/0000');
    // Mask endereço
    $('#inputCEP01').mask('00000-000');
    $('#inputnum01').mask('00');
    // Mask contato
    $('#inputtel01').mask("(00) 0000-0000");
    $('#inputcel01').mask("(00) 00000-0000");


});

let nome = document.getElementById('inputname');
let sobrenome = document.getElementById('inputlastname');
let cpf = document.getElementById('inputcpf');
let rg = document.getElementById('inputrg');
let DataNascimento = document.getElementById('inputdatenasc');
let pais = document.getElementById('inputpais');
let cidade = document.getElementById('inputcidade');
let estado = document.getElementById('inputestado');
let cep = document.getElementById('inputCEP');
let endereco = document.getElementById('inputlogradouro');
let email = document.getElementById('inputemail');
let senha = document.getElementById('inputpassword');



function validacao(input) {
    return input.value.trim() === '';
}

function errorForm(message) {
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

let errorListUl = document.querySelector('#error-list');

$("#buttom-seguinte01").click((element) => {
    validarFormulario();
})


function validarFormulario() {


    if (validacao(nome)) {
        errorForm('Campo Nome não preenchido');
    }
    if (validacao(sobrenome)) {
        errorForm('Campo Sobrenome não preenchido');
    }
    if (validacao(cpf)) {
        errorForm('Campo CPF não preenchido');
    }
    if (validacao(rg)) {
        errorForm('Campo RG não preenchido');
    }
    if (validacao(DataNascimento)) {
        errorForm('Campo Data de nascimento não preenchido');
    }
    if (validacao(pais)) {
        errorForm('Campo País não preenchido');
    }
    if (validacao(cidade)) {
        errorForm('Campo Cidade não preenchido');
    }
    if (validacao(estado)) {
        errorForm('Campo Estado não preenchido');
    }
    if (validacao(cep)) {
        errorForm('Campo CEP não preenchido');
    }
    if (validacao(endereco)) {
        errorForm('Campo Endereço não preenchido');
    }
    if (validacao(email)) {
        errorForm('Campo Email não preenchido');
    }
    if (validacao(senha)) {
        errorForm('Campo Senha não preenchido');
    }
    if (errorListUl.querySelectorAll('li').length > 0) {
        errorListUl.removeAttribute('hidden');

    }
}
// =============================================================================Quero Adestrar ============================================

let nome01 = document.getElementById('inputname01');
let sobrenome01 = document.getElementById('inputlastname01');
let cpf01 = document.getElementById('inputcpf01');
let rg01 = document.getElementById('inputrg01');
let DataNascimento01 = document.getElementById('inputdatenasc01');
let pais01 = document.getElementById('inputpais01');
let cidade01 = document.getElementById('inputcidade01');
let estado01 = document.getElementById('inputestado01');
let cep01 = document.getElementById('inputCEP01');
let endereco01 = document.getElementById('inputlogradouro01');
let email01 = document.getElementById('inputemail01');
let senha01 = document.getElementById('inputpassword01');


function errorForm01(message) {
    errorListUl01.innerHTML += "<li>" + message + "</li>";
}

let errorListUl01 = document.querySelector('#error-list01');

$("#buttom-seguinte").click((element) => {
    validarFormulario01();
})


function validarFormulario01() {


    if (validacao(nome01)) {
        errorForm01('Campo Nome não preenchido');
    }
    if (validacao(sobrenome01)) {
        errorForm01('Campo Sobrenome não preenchido');
    }
    if (validacao(cpf01)) {
        errorForm01('Campo CPF não preenchido');
    }
    if (validacao(rg01)) {
        errorForm01('Campo RG não preenchido');
    }
    if (validacao(DataNascimento01)) {
        errorForm01('Campo Data de nascimento não preenchido');
    }
    if (validacao(pais01)) {
        errorForm01('Campo País não preenchido');
    }
    if (validacao(cidade01)) {
        errorForm01('Campo Cidade não preenchido');
    }
    if (validacao(estado01)) {
        errorForm01('Campo Estado não preenchido');
    }
    if (validacao(cep01)) {
        errorForm01('Campo CEP não preenchido');
    }
    if (validacao(endereco01)) {
        errorForm01('Campo Endereço não preenchido');
    }
    if (validacao(email01)) {
        errorForm01('Campo Email não preenchido');
    }
    if (validacao(senha01)) {
        errorForm01('Campo Senha não preenchido');
    }
    if (errorListUl01.querySelectorAll('li').length > 0) {
        errorListUl01.removeAttribute('hidden');

    }
}

// let inputCertificado = document.getElementById('Certificacoes');
// let event = inputCertificado.addEventListener('click', function() {
//     insertCertificado();
// });

// function insertCertificado(inputCertificado) {
//     let arguments = inputCertificado.document.createElemente('ul');
// }
let idDog = 1;
let buttonMais = document.getElementById('plus');
let evento = buttonMais.addEventListener('click', function() {
    insertForm();
});

function insertForm() {
    let html =
        `<div id="dog-[dogId]">
<div class="form-row">
    <div class="form-group col-md-12 col-sm-12">
        <label for="inputnome-dog">Nome</label>
        <input type="text" class="form-control" id="inputnome-dog" placeholder="nome do doguinho" required>
    </div>
    <div class="form-group col-md-12 col-sm-12">
        <label for="inputapelido-dog">Apelido</label>
        <input type="text" class="form-control" id="inputapelido-dog" placeholder="apelido do doguinho">
    </div>

</div>
<div class="form-row">
    <div class="form-group col-md-6 col-sm-6">
        <label for="inputidade-dog">Idade</label>
        <input type="text" class="form-control" id="inputidade-dog" placeholder="Ex.:03" required>
    </div>
    <div class="form-group col-md-6 col-sm-6">
        <label for="inputraca">Raça</label>
        <input type="text" class="form-control" id="inputraca" placeholder="Ex.: Yorkshire terrier" required>
    </div>
</div>

<div class="form-group col-md-12 col-sm-6">
    <button type="button" onclick="removeDog([dogId])" class="delete">
        <span class="material-icons">
            delete
        </span>
    </button>
</div>
</div>
`;

    html = html.split("[dogId]").join(idDog);
    $(".num-dog").append(html);
    idDog++;
}

function removeDog(idDog) {
    $(`#dog-${idDog}`).remove();
}
// ==============================================nivel escolar =========================================

let idNivelEscolar = 1;
let buttonNivel = document.getElementById('plus02');
let evento02 = buttonNivel.addEventListener('click', function() {
    insertEscolar();
});

function insertEscolar() {
    let html02 =
        `<div id="nivel-[nivel-Id]">
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 ">
                    <label for="exampleFormControlSelect1">Nível de
                    Escolaridade</label>
                    <select class="form-control" id="exampleFormControlSelect">
                    <option value=" ">Selecione a escolaridade</option>
                    <option value="fundamentalC ">Ensino Fundamental Completo
                    </option>
                    <option value="fundamentalI">Ensino Fundamental Incompleto
                    </option>
                    <option value="medioC ">Ensino Médio Completo</option>
                    <option value="medioI ">Ensino Médio Incompleto</option>
                    <option value="superiorC ">Ensino Superior Bacharelado
                    </option>
                    <option value="superiorI ">Ensino Superior Tecnólogo
                    </option>
                    <option value="pos ">Pós graduação</option>
                    <option value="mestrado ">Mestrado</option>
                    <option value="doutorado ">Doutorado</option>
                </select>
                </div>
                <div class="form-group col-md-6 col-sm-6 ">
                    <label for="cursos ">Cursos</label>
                    <input type="text " class="form-control " id="cursos " placeholder="Ex.:Direito " required>
                </div>
            </div>
            <div class="form-group col-md-12 col-sm-12">
                <button type="button" onclick="removeNivel([nivel-Id])" class="delete">
                    <span class="material-icons">
                        delete
                    </span>
                </button>
            </div>
        </div>
    

`;

    html02 = html02.split("[nivel-Id]").join(idNivelEscolar);
    $(".nivel-escolar").append(html02);
    idNivelEscolar++;
}

function removeNivel(idNivelEscolar) {
    $(`#nivel-${idNivelEscolar}`).remove();
}
// ===================================================Certifições===============================================
let idCertificado = 1;
let buttonCertificado = document.getElementById('plus03');
let evento03 = buttonCertificado.addEventListener('click', function() {
    insertCertificado();
});

function insertCertificado() {
    let html03 =
        `<div id="certificado-[certificado-Id]">
        <div class="form-row">
          <div class="form-group col-md-12 col-sm-12">
             <label for="select-cursos11">Certificações</label>
             <input type="text" class="form-control" id="Certificacoes" placeholder="Ex.:Educação do seu dog" required>
         </div>
        </div>
        </div>
            <div class="form-group col-md-12 col-sm-12">
                <button type="button" onclick="removeCertificado([certificado-Id])" class="delete">
                    <span class="material-icons">
                        delete
                    </span>
                </button>
            </div>

        </div>   
    </div>
    

`;

    html03 = html03.split("[certificado-Id]").join(idCertificado);
    $(".certificado-input").append(html03);
    idCertificado++;
}

function removeCertificado(idCertificado) {
    $(`#certificado-${idCertificado}`).remove();
}
// ===================================================Experiencias===============================================
let idExperiencia = 1;
let buttonExp = document.getElementById('plus04');
let evento04 = buttonExp.addEventListener('click', function() {
    insertExp();
});

function insertExp() {
    let html04 =
        `<div id="exp-[exp-Id]">
        <div class="form-row">
            <div class="form-group col-md-12 col-sm-12">
                <label for="experiencia">Experiência </label>
                <input type="text" class="form-control" id="experiencia" placeholder="Ex.: Babá de dog" required>
            </div>
        </div>
        <div class="form-group col-md-12 col-sm-12">
                <button type="button" onclick="removeExp([exp-Id])" class="delete">
                    <span class="material-icons">
                        delete
                    </span>
                </button>
        </div>
        </div>
    

`;

    html04 = html04.split("[exp-Id]").join(idExperiencia);
    $(".experiencia-select").append(html04);
    idExperiencia++;
}

function removeExp(idExperiencia) {
    $(`#exp-${idExperiencia}`).remove();
}
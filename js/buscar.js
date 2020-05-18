let botao = document.querySelector(".btn-search");


botao.addEventListener("click", function() {
   
    setInputValue(catchInput());
    showWrapper();

});



// functions used below

function showWrapper() {
    document.querySelector(".wrapper").classList.add("wrapper-show");
}


function catchInput() {
    let inputSearch = document.querySelector("#searchInput");
    return inputSearch;
}


function setInputValue (searchBarInput) {
    document.querySelector(".cityName").textContent = searchBarInput.value;
}


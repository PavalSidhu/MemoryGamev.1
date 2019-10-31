window.addEventListener('load', () => {
    
    let store = localStorage.getItem("score");
    let score = document.querySelector("#score");

    score.value = store;
    score.readOnly = true;
});
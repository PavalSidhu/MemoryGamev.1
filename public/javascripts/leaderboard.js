window.addEventListener('load', () => {
    let score = localStorage.getItem('score');
    let list = document.getElementById("players");

    let params = new URLSearchParams(location.search);
    let name = params.get('name');

    let li = document.createElement("li");
    let details = document.createTextNode("Player: " + name + " Score: " + score);
    
    li.appendChild(details);
    list.appendChild(li);
});
// window.addEventListener('load', () => {
//     fetchLeaderboard();
// });

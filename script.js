var likes = [
    document.querySelector("#post-0").innerText.split(" ")[0],
    document.querySelector("#post-1").innerText.split(" ")[0],
    document.querySelector("#post-2").innerText.split(" ")[0]
];
var spans = [
    document.querySelector("#post-0"),
    document.querySelector("#post-1"),
    document.querySelector("#post-2")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}

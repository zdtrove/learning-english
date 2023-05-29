import data from './data.json' assert { type: 'json' };

const listWord = document.getElementsByClassName("list-word")[0];
data.forEach(item => {
    const h2 = document.createElement("h2");
    h2.innerHTML = item.title;
    listWord.appendChild(h2);
    const div = document.createElement("div");
    div.classList.add("item");
    item.list.forEach((item1) => {
        const word = document.createElement("p");
        const example = document.createElement("p");
        example.classList.add("example");
        word.innerHTML = `<p>${item1.word}</p>`;
        example.innerHTML = `<p class="example">- ${item1.example}</p>`;
        div.appendChild(word);
        div.appendChild(example);
        listWord.appendChild(div);
    });
});

const h2 = document.getElementsByTagName("h2");
let i;

for (i = 0; i < h2.length; i++) {
    h2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
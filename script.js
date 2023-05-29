import data from './data.json' assert { type: 'json' };

const listWord = document.getElementsByClassName("list-word")[0];
const h2 = document.getElementsByTagName("h2");
let i;

data.forEach((item, index) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `${index + 1}. ${item.title}`;
    listWord.appendChild(h2);
    const div = document.createElement("div");
    div.classList.add("item");
    item.list.forEach((item1, index1) => {
        const word = document.createElement("p");
        const example = document.createElement("p");
        const button = document.createElement("button");
        const meaning = document.createElement("b");
        meaning.classList.add("meaning");
        meaning.style.display = "none";
        meaning.innerHTML = `<i>${item1.meaning}</i>`;
        button.addEventListener('click', function handleClick(event) {
            if (meaning.style.display === "none") {
                meaning.style.display = "inline-block";
                button.innerHTML = '<span>-</span>';
            } else {
                meaning.style.display = "none";
                button.innerHTML = '<span>+</span>';
            }
        });
        button.innerHTML = '<span>+</span>';
        example.classList.add("example");
        word.innerHTML = `${index1 + 1}. ${item1.word}`;
        word.appendChild(button);
        word.appendChild(meaning);
        example.innerHTML = item1.example;
        div.appendChild(word);
        div.appendChild(example);
        listWord.appendChild(div);
    });
});

for (i = 0; i < h2.length; i++) {
    h2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.opacity == 1) {
            panel.style.opacity = 0;
            panel.style.height = 0;
        } else {
            panel.style.opacity = 1;
            panel.style.height = "auto";
        }
    });
}

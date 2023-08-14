const formatDate = (date) => {
  let tmp;
  return (
    ((tmp = date.getDate()) < 10 ? "0" + tmp : tmp) +
    "." +
    ((tmp = date.getMonth() + 1) < 10 ? "0" + tmp : tmp) +
    "." +
    ((tmp = date.getFullYear() % 100) < 10 ? "0" + tmp : tmp)
  );
};

let day = new Date();
let anonsDate = formatDate(day);

const POSTS = [
  {
    title_ua: "Анонс!",
    title_ru: "Анонс!",
    publishDate: anonsDate,
    text_ua: "Нова стаття незабаром буде розміщена",
    text_ru: "Новая статья в скором времени будет размещена",
  },
];

function generatedPostHTML(title_ua, title_ru, publishDate, text_ua, text_ru) {
  let currantLang = document.querySelector(".active-lang");
  let postHtml = "";
  if (currantLang.innerText === "UA") {
    postHtml = `
    <li>
      <div class="post-head-container">
        <h2>${title_ua}</h2>
        <p class="publish-date">${publishDate}</p>
      </div>
      <p class="post-text">${text_ua}</p>
    </li>`;
  } else {
    postHtml = `
    <li>
      <div class="post-head-container">
        <h2>${title_ru}</h2>
        <p class="publish-date">${publishDate}</p>
      </div>
      <p class="post-text">${text_ru}</p>
    </li>`;
  }
  return postHtml;
}

let postsList = document.querySelector(".posts-list");

postsList.innerHTML = POSTS.map((post) => {
  return generatedPostHTML(
    post.title_ua,
    post.title_ru,
    post.publishDate,
    post.text_ua,
    post.text_ru
  );
}).join("");

document.querySelector(".basket-btn").addEventListener("click", function () {
  window.open("basket.html", "_self");
});

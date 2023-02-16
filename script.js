let quotes = [];
let allQuotes = [];

const likeQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
};

const deleteQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("auth.token"),
    },
  }).then((response) => {
    getQuotes();
  });
};

const renderQuotes = () => {
  const parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  quotes.forEach(function (item, index) {
    const childEl = document.createElement("li");
    const quoteTextEl = document.createElement("p");
    const quoteLikesEl = document.createElement("p");
    const likeEl = document.createElement("img");
    const editEl = document.createElement("img");
    const deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    likeEl.src = "like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
    };

    editEl.src = "edit.png";
    editEl.style = "width: 30px";
    editEl.onclick = function () {
      window.location.href = "edit-quote.html?quoteId=" + item._id;
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };
    console.log("Quotes", allQuotes);
    // const sortedArr = arrofNumbers.sort((a, b) => a - b);
    console.log("SortedQuotes", allQuotes);

    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);
    var auth_token = localStorage.getItem("auth_token");
    if (auth_token) {
      childEl.appendChild(editEl);
      childEl.appendChild(deleteEl);
    } else {
      document.getElementById("logindiv").style.display = "block";
    }

    parentEl.appendChild(childEl);
  });
  //
};
document.getElementById("sortbutt").onclick = () => {
  const parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  const desc = [...allQuotes];
  desc.sort((a, b) => b.likes - a.likes);
  console.log("SortedQuoaates", desc);

  parentEl.innerHTML = "";
  desc.forEach(function (item, index) {
    const childEl = document.createElement("li");
    const quoteTextEl = document.createElement("p");
    const quoteLikesEl = document.createElement("p");
    const likeEl = document.createElement("img");
    const editEl = document.createElement("img");
    const deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    likeEl.src = "like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
    };

    editEl.src = "edit.png";
    editEl.style = "width: 30px";
    editEl.onclick = function () {
      window.location.href = "edit-quote.html?quoteId=" + item._id;
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };
    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);
    var auth_token = localStorage.getItem("auth_token");
    if (auth_token) {
      childEl.appendChild(editEl);
      childEl.appendChild(deleteEl);
    } else {
      document.getElementById("logindiv").style.display = "block";
    }

    parentEl.appendChild(childEl);
  });
};
document.getElementById("sortbutt2").onclick = () => {
  const parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  const desc2 = [...allQuotes];
  desc2.sort((a, b) => a.likes - b.likes);
  console.log("SortedQuoaates", desc2);

  parentEl.innerHTML = "";
  desc2.forEach(function (item, index) {
    const childEl = document.createElement("li");
    const quoteTextEl = document.createElement("p");
    const quoteLikesEl = document.createElement("p");
    const likeEl = document.createElement("img");
    const editEl = document.createElement("img");
    const deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    likeEl.src = "like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
    };

    editEl.src = "edit.png";
    editEl.style = "width: 30px";
    editEl.onclick = function () {
      window.location.href = "edit-quote.html?quoteId=" + item._id;
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };
    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);
    var auth_token = localStorage.getItem("auth_token");
    if (auth_token) {
      childEl.appendChild(editEl);
      childEl.appendChild(deleteEl);
    } else {
      document.getElementById("logindiv").style.display = "block";
    }

    parentEl.appendChild(childEl);
  });
};
/*
511

*/
const getQuotes = () => {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;
      allQuotes = data;
      renderQuotes();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

getQuotes();

document.getElementById("search").addEventListener("keydown", function () {
  const searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});

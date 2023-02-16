const urlParams = new URLSearchParams(window.location.search);
const quoteId = urlParams.get("quoteId");

console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  })
  .catch((err) => {
    console.log(err);
  });

document.getElementById("submitChanges").addEventListener("click", function () {
  const quoteText = document.getElementById("quoteText").value;
  const quoteAuthor = document.getElementById("quoteAuthor").value;
  const quoteSource = document.getElementById("quoteSource").value;

  const newData = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };
  if (quoteAuthor != "" && quoteSource != "" && quoteText != "") {
    fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: {
        Authorization: localStorage.getItem("auth.token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Uspesno ste editovali citat");
        window.location.href = "index.html";
      })
      .catch(() => {
        alert("nesto nije u redu");
      });
  } else {
    alert("ne mozete imati prazno");
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  }
});

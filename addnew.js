let biznis = document.getElementById("biznis");
let znanje = document.getElementById("znanje");
let nesto = document.getElementById("nesto");
let nesto2 = document.getElementById("nesto2");
document.getElementById("biznis").addEventListener("click", function () {
  biznis.style.backgroundColor = "lime";
  znanje.style.backgroundColor = "white";
  nesto.style.backgroundColor = "white";
  nesto2.style.backgroundColor = "white";
});
document.getElementById("znanje").addEventListener("click", function () {
  znanje.style.backgroundColor = "lime";
  biznis.style.backgroundColor = "white";
  nesto.style.backgroundColor = "white";
  nesto2.style.backgroundColor = "white";
});
document.getElementById("nesto").addEventListener("click", function () {
  nesto.style.backgroundColor = "lime";
  biznis.style.backgroundColor = "white";
  znanje.style.backgroundColor = "white";
  nesto2.style.backgroundColor = "white";
});
document.getElementById("nesto2").addEventListener("click", function () {
  nesto2.style.backgroundColor = "lime";
  biznis.style.backgroundColor = "white";
  znanje.style.backgroundColor = "white";
  nesto.style.backgroundColor = "white";
});
document.getElementById("done").addEventListener("click", function () {
  document.getElementById("id01").style.display = "none";
  nesto2.style.backgroundColor = "white";
  biznis.style.backgroundColor = "white";
  znanje.style.backgroundColor = "white";
  nesto.style.backgroundColor = "white";
});
const token = localStorage.getItem("auth_token");
if (!token) {
  window.location.href = "index.html";
}
document.getElementById("addNew").addEventListener("click", function () {
  const text = document.getElementById("quoteText").value;
  const author = document.getElementById("quoteAuthor").value;
  const source = document.getElementById("quoteSource").value;

  const newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };
  if (text != "" && author != "" && source != "") {
    fetch("https://js-course-server.onrender.com/quotes/add-quote", {
      method: "POST",
      body: JSON.stringify(newQuote),
      headers: {
        Authorization: localStorage.getItem("auth.token"),

        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("quoteSource").value = "";
        document.getElementById("quoteText").value = "";
        document.getElementById("quoteAuthor").value = "";
        alert("Vas citat je uspesno dodat");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  } else {
    alert("Neko od unetih polja je prazno");
  }
});

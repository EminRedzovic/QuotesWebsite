document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confpassword = document.getElementById("confpassword").value;
  const fullName = document.getElementById("fullName").value;

  const loginData = {
    email: email,
    password: password,
    confirmPassword: confpassword,
    fullName: fullName,
  };
  if (email != "" && password != "" && confpassword != "" && fullName != "") {
    fetch("https://js-course-server.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userId) {
          alert("Uspesna registracija");
          window.location.href = "Login.html";
        } else {
          alert("Neuspesn registracija");
          console.log(data);
        }
      });
  } else {
    alert("Neko od unetih polja je prazno!");
  }
});

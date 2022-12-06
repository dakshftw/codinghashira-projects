var state = false;

function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye-wrapper").style.boxShadow = "0 0 0 0 #ffffff";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";

    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye-wrapper").style.boxShadow =
      "0 0 0 285px #ffffff";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";

    state = true;
  }
}

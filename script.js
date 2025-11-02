
function readMore(id) {
  const moreText = document.getElementById(id);

  if (moreText.style.display === "block") {
    moreText.style.display = "none";
  } else {
    moreText.style.display = "block";
  }
}

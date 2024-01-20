export function setupCounter(element: HTMLButtonElement) {

  element.addEventListener("click", () => {
  if (element.innerHTML === `<i class="fas fa-moon"></i>`) {
    element.innerHTML = `<i class="fas fa-sun"></i>`;
    element.style.color = "orange";
    element.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.add("darkmode");
  } else {
    element.innerHTML = `<i class="fas fa-moon"></i>`;
    element.style.color = "black";
    element.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
  }
});
}




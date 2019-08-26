const img = ["bg.jpeg", "glasses1.jpeg", "glasses2.jpeg"];
const slides = document.querySelector(".slides");
const slider = Array.from(document.querySelectorAll(".slider i"));

slides.addEventListener("click", function(e) {
  //cek target element ke berapa
  function cekI(i) {
    return i == e.target;
  }

  if (slider.some(cekI)) {
    function cekIndex(index) {
      return index == e.target;
    }

    const sliderActive = document.querySelector(".active");
    const index = slider.findIndex(cekIndex);

    e.target.classList.add("active");
    sliderActive.classList.remove("active");
    document.body.style.backgroundImage = "url('img/" + img[index] + "')";
  }
});

const sliderActive = document.querySelector(".active");

function ambilIndex(i) {
  return i == sliderActive;
}
let ind = slider.findIndex(ambilIndex);

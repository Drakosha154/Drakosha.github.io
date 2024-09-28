document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

$("#dropdown1").click(function() { 
  if ($("#drop2").is(":visible")) {
  	$("#drop2").toggle();
  }
    $("#drop1").toggle();
  });

$("#dropdown2").click(function() { 
  if ($("#drop1").is(":visible")) {
  	$("#drop1").toggle();
  }
  $("#drop2").toggle();
});

$("#dropdown3").click(function() { 
  if ($("#drop2").is(":visible")) {
  	$("#drop2").toggle();
  }
    $("#drop1").toggle();
  });

$("#dropdown4").click(function() { 
  if ($("#drop1").is(":visible")) {
  	$("#drop1").toggle();
  }
  $("#drop2").toggle();
});

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop)

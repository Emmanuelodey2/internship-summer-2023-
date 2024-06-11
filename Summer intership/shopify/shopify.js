// Your javascript goes here
document.getElementById("dropbtn").addEventListener("click", function() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  });
  function changeImage() {
    var image = document.getElementById("demo");
    if (image.src.match("https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg")) {
      image.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
    }else{
      image.src ="https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
    }
  }
  function changeImage3() {
    var image = document.getElementById("demo1");
    if (image.src.match("https://crushingit.tech/hackathon-assets/icon-arrow-down.svg")) {
      image.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
    }else{
      image.src ="https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
    }
  }

  document.getElementById("drop").addEventListener("click", function() {
    var dropdownContent = document.getElementById("section");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });

  function changeImage2() {
    var image = document.getElementById("drop");
    if (image.src.match("https://crushingit.tech/hackathon-assets/icon-arrow-down.svg")) {
      image.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
    }else{
      image.src ="https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
    }
  }
  
  


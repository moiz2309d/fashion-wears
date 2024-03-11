// function dropdowntogle(){
//      var dropdown  = document.getElementById("dropdownsections");
//      alert("jjj")
//      if(dropdown.style.display===""){
//         if (dropdown.style.display === "none"){
            
//             dropdown.style.display = "block";
//           }
//           else{
//             dropdown.style.display = "none";
//           }
//      }

// }


function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");

    if (dropdown.style.display === "none") {
      
      dropdown.style.display = "block";
    }
     else{
      dropdown.style.display = "none";
    }
  }

  // hamburger

  var navitems = document.querySelector('.navitems');
  var openMenu = document.querySelector('.openMenu');
  var closeMenu = document.querySelector('.closeMenu');

  openMenu.addEventListener("click" , function(){
    navitems.style.top = "0%";
    // openMenu.style.display = "none"
    // closeMenu.style.display = "block"
})

closeMenu.addEventListener("click" , function(){
    navitems.style.top = "-100%";
    // closeMenu.style.display = "none"
    // openMenu.style.display = "block"

})
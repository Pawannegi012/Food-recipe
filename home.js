//The function is for searching in for the Food Section
const search = () => {
  //CaLling the id Search for the Input and making the value input to an uppercase
  const searchBox = document.getElementById("search").value.toUpperCase();

  //Getting the whole food list
  const storeitems = document.getElementById("food-list");

  // This will display the card box div when the user input in the searchBox variable
  const foods = document.querySelectorAll(".card-shadow");

  /* This will search for the name in the H3 Tag of the Card Box an Example is 
    searching Adobo with the use of the Store Items and it will find the Adobo h3 tag
    */
  const foodName = storeitems.getElementsByTagName("h3");

  // This part will be displaying the Error if no recipe is searched
  let noResult = document.querySelector("p");

  //Search Filter for the Food Recipe

  // variable found called for boolean and set to false
  let found = false;

  /* i use the for loop and call the foodName variable  and get the length of it
      and match var will be the responsible for the output of searched
    */
  for (let i = 0; i < foodName.length; i++) {
    let match = foods[i].getElementsByTagName("h3")[0];
    // if else and with the condition match and get the expression if one is true on the OR operation
    if (match) {
      let textValue = match.textContent || match.innerHTML;

      // then textvalue condition will be responsible if there is a recipe or not
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        foods[i].style.display = "";
        found = true;
      } else {
        foods[i].style.display = "none";
      }
    }
  }
  if (found) {
    noResult.style.display = "none";
  } else {
    noResult.style.display = "";
  }
};

// The 'x' icon in search bar will clear the input
function clearInput() {
  let clearSearch = (document.getElementById("search").value = "");
}

//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");

//The functions will run for the button when click
function getRecipeDetails() {
  document.querySelector(".meal-detail").style.display = "block";
}
function get2ndRecipe() {
  document.querySelector(".second-meal-detail").style.display = "block";
}
function get3rdRecipe() {
  document.querySelector(".third-meal-detail").style.display = "block";
}
function get4thRecipe() {
  document.querySelector(".four-meal-detail").style.display = "block";
}
function get5thRecipe() {
  document.querySelector(".five-meal-detail").style.display = "block";
}
function get6thRecipe() {
  document.querySelector(".six-meal-detail").style.display = "block";
}
function get7thRecipe() {
  document.querySelector(".seven-meal-detail").style.display = "block";
}
function get8thRecipe() {
  document.querySelector(".eight-meal-detail").style.display = "block";
}
function get9thRecipe() {
  document.querySelector(".nine-meal-detail").style.display = "block";
}
function get10thRecipe() {
  document.querySelector(".ten-meal-detail").style.display = "block";
}
function get11thRecipe() {
  document.querySelector(".eleven-meal-detail").style.display = "block";
}

//the function will close the above functions when the closeBtn is clicked
function closeBtn() {
  document.querySelector(".meal-detail").style.display = "none";
  document.querySelector(".second-meal-detail").style.display = "none";
  document.querySelector(".third-meal-detail").style.display = "none";
  document.querySelector(".four-meal-detail").style.display = "none";
  document.querySelector(".five-meal-detail").style.display = "none";
  document.querySelector(".six-meal-detail").style.display = "none";
  document.querySelector(".seven-meal-detail").style.display = "none";
  document.querySelector(".eight-meal-detail").style.display = "none";
  document.querySelector(".nine-meal-detail").style.display = "none";
  document.querySelector(".ten-meal-detail").style.display = "none";
  document.querySelector(".eleven-meal-detail").style.display = "none";
}

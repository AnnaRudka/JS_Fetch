// finding elements in HTML
const jokesContainerEl1 = document.getElementById("container__jokes5");
jokesContainerEl1.innerHTML = '<div class="lds-heart"><div></div></div>';
const jokesContainerEl2 = document.getElementById("container__more-jokes");
const btnAddMoreJokes = document.getElementById("btn_add_more_jokes");

// events
btnAddMoreJokes.addEventListener("click", createJokesList);

// initiating asynchronous requests

fetch("http://api.icndb.com/jokes/random/5")
  .then((res) => {
    return res.json();
  })
  .then(renderJokes);

//function definition

function renderJokes(jokes) {
  let jokesContent = "";
  for (let i = 0; i < jokes.value.length; i++) {
    jokesContent += "<h3> :) " + jokes.value[i].joke + "</h3>";
  }
  jokesContainerEl1.innerHTML = jokesContent;
}

function createJokesList() {
  const inputChoice = document.getElementById("input_choice").value;
  if (inputChoice) {
    jokesContainerEl2.innerHTML = '<div class="lds-heart"><div></div></div>';
    fetch(`http://api.icndb.com/jokes/random/${inputChoice}`)
      .then((res) => {
        return res.json();
      })
      .then(renderMoreJokes);
  } else alert("Please, put a number");
}

function renderMoreJokes(jokes) {
  let jokesContent = "";
  for (let i = 0; i < jokes.value.length; i++) {
    jokesContent += "<h3> :) " + jokes.value[i].joke + "</h3>";
  }
  jokesContainerEl2.innerHTML = jokesContent;
}

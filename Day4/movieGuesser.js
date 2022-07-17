
let movieText = document.getElementById("movie-line");

const getMovieLine = () => {
    let number = Math.floor(Math.random() * movies.length);
    let movie = movies[number];
    return movie;
};

function validateGuess(event) {
    event.preventDefault();
    
    let guess = document.getElementById("guess-input").value;
    if (currentMovieDisplayed.title.toLowerCase() === guess.toLowerCase()) {
        let result = document.getElementById("guess-result");
        result.innerHTML = "Correct movie!";
        result.classList.add('alert-success');
    } else {
        let result = document.getElementById("guess-result");
        result.innerHTML = "Wrong movie!";
        result.classList.add('alert-danger');
    }
}

function getHint(event) {
    event.preventDefault();

    let hintDisplay = document.getElementById("hints-display");
    hintDisplay.innerHTML = currentMovieDisplayed.hint;
    hintDisplay.classList.add('alert-info');
}

let currentMovieDisplayed = getMovieLine();
movieText.innerHTML = currentMovieDisplayed.explanation;


let hintButton = document.getElementById("hint");
hintButton.addEventListener('click',(e) => getHint(e));

let submitButton = document.getElementById("submit");
submitButton.addEventListener('click',(e) => validateGuess(e));

playOptions = ['Rock','Paper','Scissors'];
/**
* Function called computerPlay that will randomly return either
* 'Rock', 'Paper', or 'Scissors'. This function will be used to
* make the computer opponent select a play.
*/
function computerPlay(){
    randomIndex = Math.floor(Math.random()*playOptions.length);
    return playOptions[randomIndex];
}

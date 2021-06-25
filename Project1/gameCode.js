var randNum = 0
var attemptString = " "



function compareEntry(entry,randNum, array) {
    entry = entry.toString();
    randNum = randNum.toString();

    for(var i = 0; i < array.length; i++){
        if(entry.charAt(i) == randNum.charAt(i)){
            array[i] = entry.charAt(i)
        }
    }
    return array;
}

//activates on entry
function runCompare(){
    var entry = document.querySelector('#entry').value
    var gameType = document.querySelector("#gameSelect").value;
    var attemptsLeft = document.getElementById('attemptCounter').innerHTML;
    var array = document.getElementById('sequence').innerHTML;
    var entryString = getAttemptString();
    array = array.split(' ')

    if ((gameType == '--Select Game--') || (entry == "")){
        window.alert('Invalid entry')
    }
    else if(attemptsLeft == 0){
        window.alert('Your attempts remaining are Zero. Please start a new game.')
    }
    else{

        var numInts = parseInt(gameType);

        if(numInts == 3){
            var randomNum = getRandNum()
            
            array = compareEntry(entry,randomNum, array)
            
            attemptsLeft -= 1
            
            entryString = entryString.concat( "<br/> Your entry: " + entry + "<br/> Attempts Left: " + attemptsLeft+ "<br/>")
            
            setAttemptString(entryString)
            //update elements and print out the user's guesses
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')
            document.getElementById('gameMessage').innerHTML = entryString
            document.getElementById('entry').value = ""
            if(randomNum ==  entry){
                document.getElementById('gameMessage').innerHTML = "Congratulations! You guessed right! Play Again?"
                document.getElementById('attemptCounter').innerHTML = 0
                setAttemptString(" ")
            }
            if((attemptsLeft == 0) && (randomNum !=  entry)){
                document.getElementById('gameMessage').innerHTML = "The correct sequence was " +randomNum + ". Play Again?"
                setAttemptString(" ")
            }
            if(attemptsLeft == 1){
                document.getElementById('attemptCounter').style.color = "Red"
            }
            if(attemptsLeft <= 3){
                var hintString =' '
                    for (var i = 0 ; i < randomNum.length; i++){
                    if (randomNum.charAt(i) < 4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is less than 4")
                    }
                    else if (randomNum.charAt(i) >=4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is greater than or equal to 4")
                    }
                }
                    document.getElementById('hint').innerHTML = hintString

            }


        }
        if(numInts == 5){
            var randomNum = getRandNum()
            
            

            array = compareEntry(entry,randomNum, array)
            

            attemptsLeft -= 1

            entryString = entryString.concat( "<br/> Your entry: " + entry + "<br/> Attempts Left: " + attemptsLeft+ "<br/>")
            
            setAttemptString(entryString)
            //update elements and print out the user's guesses
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')
            document.getElementById('gameMessage').innerHTML = entryString
            document.getElementById('entry').value = ""
            if(randomNum ==  entry){
                document.getElementById('gameMessage').innerHTML = "Congratulations! You guessed right! Play Again?"
                document.getElementById('attemptCounter').innerHTML = 0
                setAttemptString(" ")
            }
            if(attemptsLeft <= 3){
                var hintString =' '
                    for (var i = 0 ; i < randomNum.length; i++){
                    if (randomNum.charAt(i) < 4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is less than 4")
                    }
                    else if (randomNum.charAt(i) >=4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is greater than or equal to 4")
                    }
                }
                    document.getElementById('hint').innerHTML = hintString

            }
            if((attemptsLeft == 0) && (randomNum !=  entry)){
                document.getElementById('gameMessage').innerHTML = "The correct sequence was " +randomNum + ". Play Again?"
                setAttemptString(" ")
            }
            if(attemptsLeft == 1){
                document.getElementById('attemptCounter').style.color = "Red"
            }
             
        }
        if(numInts == 7){
            var randomNum = getRandNum()
            
            
            array = compareEntry(entry,randomNum, array)
            

            attemptsLeft -= 1

            entryString = entryString.concat( "<br/> Your entry: " + entry + "<br/> Attempts Left: " + attemptsLeft+ "<br/>")
            
            setAttemptString(entryString)
            //update elements and print out the user's guesses
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')
            document.getElementById('gameMessage').innerHTML = entryString
            document.getElementById('entry').value = ""
            if(randomNum ==  entry){
                document.getElementById('gameMessage').innerHTML = "Congratulations! You guessed right! Play Again?"
                document.getElementById('attemptCounter').innerHTML = 0
                setAttemptString(" ")
            }
            if((attemptsLeft == 0) && (randomNum !=  entry)){
                document.getElementById('gameMessage').innerHTML = "The correct sequence was " +randomNum + ". Play Again?"
                setAttemptString(" ")
            }
            if(attemptsLeft == 1){
                document.getElementById('attemptCounter').style.color = "Red"
            }
            if(attemptsLeft <= 3){
                var hintString =' '
                    for (var i = 0 ; i < randomNum.length; i++){
                    if (randomNum.charAt(i) < 4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is less than 4")
                    }
                    else if (randomNum.charAt(i) >=4){
                        hintString = hintString.concat("<br/>X number " + (i+1) + " is greater than or equal to 4")
                    }
                }
                    document.getElementById('hint').innerHTML = hintString

            }
            
        }
    }

}
// Generates A random sequence of numbers base on the gametype
function generateRandomNumber(numOfInts) {
    var randNumber = '';

    if (numOfInts == 3) {
        for (var i = 0; i < numOfInts; i++) {
            var randomNumber = Math.floor((Math.random() * (7 + 1)));
            randNumber += randomNumber;
        }
    }
    if (numOfInts == 5){
        for (var i = 0; i < numOfInts; i++) {
            var randomNumber = Math.floor((Math.random() * (7 + 1)));
            randNumber += randomNumber;
        }
    }
    if (numOfInts == 7){
        for (var i = 0; i < numOfInts; i++) {
            var randomNumber = Math.floor((Math.random() * (7 + 1)));
            randNumber += randomNumber;
        }      
    }
    return randNumber;

}

function runGame(){
    //resets Color of element to Black
    document.getElementById('attemptCounter').style.color = "Black"
    var attemptsLeft
    var array
    //selects gametype from selector on main 
    document.getElementById('gameMessage').innerHTML = null
    setAttemptString(" ")
    var gameType = document.querySelector("#gameSelect").value;

    if (gameType == '--Select Game--'){
        window.alert('Please select a valid game type!')
    }
    else{
        var numInts = parseInt(gameType);
        //Generate number of guesses, the random number sequence, and the array for the guesses.
        if(numInts == 3){
            var RandomNum = generateRandomNumber(numInts)
            setRandNum(RandomNum)
            
            array = ['X','X','X']
            attemptsLeft = 5
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')
        }
        if(numInts == 5){
            var RandomNum = generateRandomNumber(numInts)
            setRandNum(RandomNum)
            array = ['X','X','X','X','X']
            attemptsLeft = 6
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')
            
        }
        if(numInts == 7){
            var RandomNum = generateRandomNumber(numInts)
            setRandNum(RandomNum)
            array = ['X','X','X','X','X','X','X']
            attemptsLeft = 7  
            document.getElementById('attemptCounter').innerHTML = attemptsLeft
            document.getElementById('sequence').innerHTML = array.join(' ')

        }
    }//console.log(getRandNum()) <-- kept in for testing purposes

}

function getRandNum(){
    return this.randNum
}
function setRandNum(randNum){
    this.randNum = randNum
}

function getAttemptString(){
    return this.attemptString
}
function setAttemptString(attemptString){
    this.attemptString = attemptString
}

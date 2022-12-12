/****************** YOUR NAME: Kyler Axten | 000579267

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

var type = 1;
function sfunction() {
                var change = document.getElementById("model-text");
                if (change.innerHTML == "Model XYZ")
                {
                    change.innerHTML = "Model CPRG";
                    type = 2;
                }
                else {
                    change.innerHTML = "Model XYZ";
                    type = 1;
                }
            }

var bob = 0;
var calc = 0;
function ssfunction() {
                var change = document.getElementById("duration-text");
                var change2 = document.getElementById("calculated-cost");
                if (change.innerHTML == bob)
                {
                    bob = bob + 1;
                    change.innerHTML = bob;
                    if (type == 1)
                    {
                    calc = 100 * bob;
                    change2.innerHTML = calc;
                    }
                    else if (type == 2)
                    {
                    calc = 213 * bob;
                    change2.innerHTML = calc;
                    }

                    if (bob > 15)
                    {
                        bob = 0;
                        change.innerHTML = bob;
                        calc = 0;
                        change2.innerHTML = calc;
                    }
                }

            }

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE






/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE







/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE




// Prompt the user for their gender
    let gender = prompt("Enter your gender (Male or Female):");

    // Convert the input to lowercase for easier comparison
    //gender = gender.toLowerCase();

    // Check the user's gender
    function checkGender(){
     if(gender === "female") {
        alert("You are a girl! 👧🏽");
     }else if (gender === "male") {
        alert("You are a boy! 👦🏽");
     }else {
        alert("Please enter either Male or Female.");
     }
}

// Call the function
checkGender();

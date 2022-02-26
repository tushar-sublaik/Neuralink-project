function getBotResponse(input) {
    //normal questions
    if (input == "help me") {
        return "Sure, Please share your query";
    } else if (input == "What is coding") {
        return "Coding is something which is used in making websites, Applications, Softwares and many more things";
    } else if (input == "can you tell me the weather outside") {
        return "It's raining right now.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
} 

function janken(choice) {
    let resultElement = document.getElementById("ResultMessage");
    let PlayersChoiceElement = document.getElementById("PlayersChoice");

    switch (choice) {
        case 1:
            PlayersChoiceElement.innerHTML = "✊🏻";
            break;
    
        case 2:
            PlayersChoiceElement.innerHTML = "✌🏻";
            break;

    
        default:
                PlayersChoiceElement.innerHTML = "🖐🏻";
            break;
    }

    let PCsChoiceElemennt = document.getElementById("PCsChoice");
    


    resultElement.innerHTML = "かち";
}
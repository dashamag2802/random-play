function validation() {
    if (checkWinnersInput()){
       if (checkParticipantsInput()){
           if (checkNumberOfParticipants()){
                ruffle();
           }

       }

    }
}

function checkWinnersInput() {
    let noWinnersInput = document.getElementById('no-winners').value;
    if (noWinnersInput.length === 0){
        document.getElementById('error-massage').innerText = 'Please specify the number of winners';
    } else if (parseInt(noWinnersInput) < 1 || parseInt(noWinnersInput) > 999 || isNaN(noWinnersInput)){
        document.getElementById('error-massage').innerText = 'Enter number greater then 0 and smaller than 1000';
        } else {
            return true;
    }
}

function checkParticipantsInput() {
    let participantsInput = document.getElementById('participants').value;
    if (participantsInput.length === 0){
        document.getElementById('error-massage').innerText = 'Please specify the participants';
    } else {
        return true;
    }
}

function checkNumberOfParticipants() {
    let noWinnersInput = document.getElementById('no-winners').value;
    let participantsInput = document.getElementById('participants').value;
    let participansArray = participantsInput.split(',');
    if (parseInt(noWinnersInput) >= participansArray.length){
        document.getElementById('error-massage').innerText = 'Number of participants should be greater then the number of winners';
    } else {
        return true;
    }
}

function ruffle(){
    let noWinnersInput = parseInt(document.getElementById('no-winners').value);
    let participantsInput = document.getElementById('participants').value;
    let participansArray = participantsInput.split(',');
    let result = [];
    for(let i = 0; i < noWinnersInput; i++){
        let rundomElement = participansArray[Math.floor(Math.random() * participansArray.length)];
        if (!result.includes(rundomElement)){
        result.push(rundomElement)
    } else {
        i--;
    }
    }
    document.getElementById('winners').innerText = result.join(',');
}
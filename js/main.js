function teamReady() {
    const getReadyId = "get-ready";
    const getReadyElement = document.getElementById(getReadyId);
    if (getReadyElement == null) {
        console.error(`Couldn't find '${getReadyId}' element.`)
    }

    getReadyElement.classList.add("d-none");

    console.log("Team is ready!");
}


function answer(answerElement) {
    if (answerElement == null) {
        console.error("Cannot answer 'null'.")
    }

    console.log(`Answered: '${answerElement.innerText.trim()}'.`);

    const checkAnswerId = "check-answer";
    const checkAnswerElement = document.getElementById(checkAnswerId);
    if (checkAnswerElement == null) {
        console.error(`Couldn't find '${checkAnswerId}' element.`)
    }

    checkAnswerElement.classList.remove("d-none");
}

function passTurn() {
    const checkAnswerId = "check-answer";
    const checkAnswerElement = document.getElementById(checkAnswerId);
    if (checkAnswerElement == null) {
        console.error(`Couldn't find '${checkAnswerId}' element.`)
    }

    checkAnswerElement.classList.add("d-none");

    const getReadyId = "get-ready";
    const getReadyElement = document.getElementById(getReadyId);
    if (getReadyElement == null) {
        console.error(`Couldn't find '${getReadyId}' element.`)
    }

    getReadyElement.classList.remove("d-none");

    console.log("Answer checked!");
}

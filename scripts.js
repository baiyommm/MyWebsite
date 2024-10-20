// JavaScript for controlling voice playback using Web Speech API
function speakText(textId, voiceOption) {
    const text = document.getElementById(textId).value;

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;

    // Setting different voice options
    const voices = window.speechSynthesis.getVoices();
    const descriptionId = `description${textId.charAt(textId.length - 1)}`;

    switch (voiceOption) {
        case 1:
            msg.voice = voices[0]; // Pick a default voice or index 0
            displayDescription(descriptionId, "Voice 1: A calm, neutral voice.");
            break;
        case 2:
            msg.voice = voices[1] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Voice 2: An energetic, assertive voice.");
            break;
        case 3:
            msg.voice = voices[2] || voices[0]; // Pick another voice or default if not available
            displayDescription(descriptionId, "Voice 3: A warm, friendly voice.");
            break;
    }

    window.speechSynthesis.speak(msg);
}

// Function to show description box with smooth transition
function displayDescription(descriptionId, descriptionText) {
    const descriptionBox = document.getElementById(descriptionId);
    descriptionBox.textContent = descriptionText;
    descriptionBox.classList.add("show");
}

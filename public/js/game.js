let currentProblem = null;
let playerName = '';

// Initialize speech synthesis
const speechSynthesis = window.speechSynthesis;
let speaking = false;

function speak(text) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set properties for a child-friendly voice
    utterance.pitch = 1.2; // Slightly higher pitch
    utterance.rate = 0.9;  // Slightly slower rate
    utterance.volume = 1;  // Full volume
    
    // Try to find a friendly voice
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
        voice.name.includes('Samantha') || // macOS
        voice.name.includes('Female') ||   // Generic female voice
        voice.name.includes('Google UK Female') // Chrome
    );
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    // Speak the message
    speechSynthesis.speak(utterance);
}

function startGame() {
    const nameInput = document.getElementById('childName');
    playerName = nameInput.value.trim();
    
    if (!playerName) {
        alert('Please enter your child\'s name to start the game!');
        return;
    }
    
    // Show game screen and hide welcome screen
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    
    // Set player name in the game screen
    document.getElementById('playerName').textContent = playerName;
    
    // Welcome message
    speak(`Welcome ${playerName}! Let's count together!`);
    
    // Start fetching problems
    fetchProblem();
}

// Function to fetch a random word from the server
async function fetchProblem() {
    try {
        const response = await fetch('/api/problem');
        const data = await response.json();
        currentProblem = data;
        
        // Display the problem (emoji representation)
        document.getElementById('problemDisplay').textContent = currentProblem.problem;
        
        // Clear previous result
        document.getElementById('result').textContent = '';
        
    } catch (error) {
        console.error('Error fetching problem:', error);
        document.getElementById('problemDisplay').textContent = 'Loading...';
    }
}

// Function to trigger confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Array of encouraging messages
const encouragingMessages = [
    `Amazing job, {name}! You're doing great!`,
    `Fantastic counting, {name}! Keep shining!`,
    `Wonderful work, {name}! You're getting better every day!`,
    `Brilliant counting, {name}! You're becoming a math star!`,
    `Super smart, {name}! You make counting fun!`,
    `Beautiful work, {name}! You're learning so fast!`,
    `Out of this world, {name}! You're unstoppable!`,
    `You're shining bright, {name}! Keep going!`,
    `Perfect counting, {name}! You're getting so good at this!`,
    `Spectacular job, {name}! You're becoming a counting champion!`
];

// Function to get a random encouraging message
function getRandomMessage() {
    const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    return message.replace('{name}', playerName);
}

function checkAnswer(selectedNumber) {
    if (!currentProblem) return;
    
    const correctAnswer = currentProblem.answer.toString();
    
    if (selectedNumber === correctAnswer) {
        handleSuccess();
    } else {
        handleWrongAnswer();
    }
}

function handleSuccess() {
    // Get and display the message
    const message = getRandomMessage();
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.className = 'mt-6 text-2xl font-bold text-green-500';
    
    // Speak the congratulatory message
    speak(message);
    
    // Trigger confetti
    triggerConfetti();
    
    // Fetch new problem after a delay
    setTimeout(fetchProblem, 3000);
}

function handleWrongAnswer() {
    const message = `Let's try again, ${playerName}! Count one more time!`;
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.className = 'mt-6 text-2xl font-bold text-orange-500';
    
    // Speak the encouragement
    speak(message);
}

// Initialize voices when they are loaded
speechSynthesis.onvoiceschanged = () => {
    console.log('Voices loaded:', speechSynthesis.getVoices().length);
};

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // The welcome screen is shown by default
    // Game will start when the start button is clicked
}); 
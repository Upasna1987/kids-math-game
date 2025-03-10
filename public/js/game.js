let currentProblem = null;
let playerName = '';

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
    "🌟 Amazing job, {name}! 🌟",
    "🎉 You're a math star, {name}! 🎉",
    "🌈 Wonderful counting, {name}! 🌈",
    "🏆 Super smart, {name}! 🏆",
    "🎯 Perfect answer, {name}! 🎯",
    "🚀 Math genius, {name}! 🚀"
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
    // Show success message
    const resultElement = document.getElementById('result');
    resultElement.textContent = getRandomMessage();
    resultElement.className = 'mt-6 text-2xl font-bold text-green-500';
    
    // Trigger confetti
    triggerConfetti();
    
    // Fetch new problem after a delay
    setTimeout(fetchProblem, 2000);
}

function handleWrongAnswer() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Try again, ${playerName}! Let's count together! 💪`;
    resultElement.className = 'mt-6 text-2xl font-bold text-orange-500';
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // The welcome screen is shown by default
    // Game will start when the start button is clicked
}); 
// Store words in memory - Curated for 3-4 year olds
const wordsList = [
    // Family (most familiar faces)
    'mom', 'dad', 

    // People they know
    'boy', 'kid',

    // Animals (common and easy to recognize)
    'cat', 'dog', 'pig', 'cow', 'hen', 

    // Food (daily items)
    'pie', 'egg', 'bun', 'jam', 'ice',

    // Toys and Play
    'toy', 'dol', 'bal', 'car', 'box',

    // Body Parts (familiar terms)
    'eye', 'ear', 'leg', 'arm',

    // Actions (things they do)
    'run', 'hop', 'nap', 'hug', 'eat',

    // Home Items (things they see daily)
    'bed', 'cup', 'hat', 'bag', 'pot',

    // Nature (simple concepts)
    'sun', 'sky', 'mud', 'wet',

    // Colors (basic ones)
    'red', 'blu',

    // Simple Objects
    'pen', 'map', 'fan',

    // Easy Feelings
    'sad', 'mad', 'fun',

    // Basic Concepts
    'big', 'hot', 'new', 'old'
];

function getRandomWord() {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
}

// Store math problems in memory - Curated for 3-4 year olds
const mathProblems = [
    // Cupcakes (1-10)
    { problem: '🧁', answer: '1', type: 'count' },
    { problem: '🧁 🧁', answer: '2', type: 'count' },
    { problem: '🧁 🧁 🧁', answer: '3', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁', answer: '4', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁', answer: '5', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁 🧁', answer: '6', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁 🧁 🧁', answer: '7', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁', answer: '8', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁', answer: '9', type: 'count' },
    { problem: '🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁', answer: '10', type: 'count' },

    // Butterflies (1-10)
    { problem: '🦋', answer: '1', type: 'count' },
    { problem: '🦋 🦋', answer: '2', type: 'count' },
    { problem: '🦋 🦋 🦋', answer: '3', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋', answer: '4', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋', answer: '5', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋 🦋', answer: '6', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋 🦋 🦋', answer: '7', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋', answer: '8', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋', answer: '9', type: 'count' },
    { problem: '🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋', answer: '10', type: 'count' },

    // Cars (1-10)
    { problem: '🚗', answer: '1', type: 'count' },
    { problem: '🚗 🚗', answer: '2', type: 'count' },
    { problem: '🚗 🚗 🚗', answer: '3', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗', answer: '4', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗', answer: '5', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗 🚗', answer: '6', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗 🚗 🚗', answer: '7', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗', answer: '8', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗', answer: '9', type: 'count' },
    { problem: '🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗', answer: '10', type: 'count' },

    // Trains (1-10)
    { problem: '🚂', answer: '1', type: 'count' },
    { problem: '🚂 🚂', answer: '2', type: 'count' },
    { problem: '🚂 🚂 🚂', answer: '3', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂', answer: '4', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂', answer: '5', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂 🚂', answer: '6', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂 🚂 🚂', answer: '7', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂', answer: '8', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂', answer: '9', type: 'count' },
    { problem: '🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂', answer: '10', type: 'count' },

    // Unicorns (1-10)
    { problem: '🦄', answer: '1', type: 'count' },
    { problem: '🦄 🦄', answer: '2', type: 'count' },
    { problem: '🦄 🦄 🦄', answer: '3', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄', answer: '4', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄', answer: '5', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄 🦄', answer: '6', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄 🦄 🦄', answer: '7', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄', answer: '8', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄', answer: '9', type: 'count' },
    { problem: '🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄', answer: '10', type: 'count' },

    // Cakes (1-10)
    { problem: '🎂', answer: '1', type: 'count' },
    { problem: '🎂 🎂', answer: '2', type: 'count' },
    { problem: '🎂 🎂 🎂', answer: '3', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂', answer: '4', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂', answer: '5', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂 🎂', answer: '6', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂 🎂 🎂', answer: '7', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂', answer: '8', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂', answer: '9', type: 'count' },
    { problem: '🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂', answer: '10', type: 'count' },

    // Candles (1-10)
    { problem: '🕯️', answer: '1', type: 'count' },
    { problem: '🕯️ 🕯️', answer: '2', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️', answer: '3', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️', answer: '4', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '5', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '6', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '7', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '8', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '9', type: 'count' },
    { problem: '🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️ 🕯️', answer: '10', type: 'count' },

    // Sparkles (1-10)
    { problem: '✨', answer: '1', type: 'count' },
    { problem: '✨ ✨', answer: '2', type: 'count' },
    { problem: '✨ ✨ ✨', answer: '3', type: 'count' },
    { problem: '✨ ✨ ✨ ✨', answer: '4', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨', answer: '5', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨ ✨', answer: '6', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨ ✨ ✨', answer: '7', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨', answer: '8', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨', answer: '9', type: 'count' },
    { problem: '✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨', answer: '10', type: 'count' },

    // Simple Addition with Objects (sums up to 10)
    { problem: '🧁 + 🧁', answer: '2', type: 'add' },
    { problem: '🦋 + 🦋 + 🦋', answer: '3', type: 'add' },
    { problem: '🚗 + 🚗 + 🚗', answer: '3', type: 'add' },
    { problem: '🦄 + 🦄', answer: '2', type: 'add' },
    { problem: '🎂 + 🎂 + 🎂', answer: '3', type: 'add' },
    { problem: '✨ + ✨ + ✨', answer: '3', type: 'add' }
];

function getRandomProblem() {
    return mathProblems[Math.floor(Math.random() * mathProblems.length)];
}

module.exports = {
    getRandomWord,
    getRandomProblem
}; 
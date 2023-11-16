document.addEventListener('DOMContentLoaded', () => {
    const clueText = document.getElementById('clue-text');
    const startButton = document.getElementById('start-button');
    const emojiContainer = document.getElementById('emoji-container');
    const hiddenMessage = document.getElementById('hidden-message');

    const clues = [
        "🔍 Clue 1: I am a high-level programming language known for my readability and simplicity. Developers love me!",
        "🔍 Clue 2: I am a design pattern that ensures a class has only one instance and provides a global point to this instance.",
        "🔍 Clue 3: I am a fundamental principle in object-oriented programming. I describe the relationship between a superclass and its subclasses.",
        "🔍 Clue 4: I am a method that calls a copy of the method itself. I often lead to elegant, concise code.",
        "🔍 Clue 5: I am a popular version control system, known for my distributed and fast nature.",
        "🔍 Clue 6: I am a data structure that follows the Last In, First Out (LIFO) principle.",
        "🔍 Clue 7: I am a secure way to store and transmit data between two parties. HTTPS relies on me.",
        "🔍 Clue 8: I am a concept in functional programming where a function is passed as an argument to another function.",
    ];

    const emojis = [
        { icon: "🚁", answer: 17 },   // Clue: I am a type of aircraft that uses rotating blades to fly.
        { icon: "🍣", answer: 15 },   // Clue: I am a Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice.
        { icon: "🔒", answer: 6 }, // Clue 7: SSL/TLS
        { icon: "🚀", answer: 10 },  // Clue: I am a mode of transportation used to reach outer space.
        { icon: "📡", answer: 24 },   // Clue: I am a device used to transmit television or radio signals.
        { icon: "🏄", answer: 34 },   // Clue: I am a water sport in which a person rides a board on the crest of a wave.
        { icon: "🎤", answer: 20 },   // Clue: I am a device used to amplify and transmit sound, especially the human voice.
        { icon: "📦", answer: 2 }, // Clue 3: Encapsulation
        { icon: "🚨", answer: 21 },  // Clue: I am a police car light, indicating emergencies or critical issues in code.
        { icon: "📬", answer: 13 },  // Clue: I am a mailbox, representing notifications and communication in coding.
        { icon: "⚙️", answer: 3 },   // Clue: I am a gear, often associated with the inner workings of a system.
        { icon: "💡", answer: 16 },  // Clue: I am a lightbulb, symbolizing a moment of inspiration in coding.
        { icon: "🌊", answer: 47 },   // Clue: I am a body of saltwater that covers most of the Earth's surface.
        { icon: "🐍", answer: 0 }, // Clue 1: Python
        { icon: "🎧", answer: 27 },   // Clue: I am a device worn over the ears to listen to audio signals.
        { icon: "🔍", answer: 35 },   // Clue: I am a tool used for finding hidden objects or information.
        { icon: "💬", answer: 17 },  // Clue: I am a speech balloon, indicating communication or comments in code.
        { icon: "🔄", answer: 3 }, // Clue 4: Recursion
        { icon: "🎮", answer: 53 },   // Clue: I am a device or platform used for playing video games.
        { icon: "🔬", answer: 24 },  // Clue: I am a microscope, suggesting a close examination of code details.
        { icon: "🎤", answer: 20 },   // Clue: I am a device used to amplify and transmit sound, especially the human voice.
        { icon: "🚲", answer: 21 },   // Clue: I am a two-wheeled vehicle propelled by pedaling.
        { icon: "🏰", answer: 1 }, // Clue 2: Singleton
        { icon: "🌈", answer: 22 },   // Clue: I am a meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.
        { icon: "🛡️", answer: 23 },   // Clue: I am a protective covering worn in battle.
        { icon: "📡", answer: 24 },   // Clue: I am a device used to transmit television or radio signals.
        { icon: "🔬", answer: 26 },   // Clue: I am an instrument used for viewing small objects or details.
        { icon: "🎧", answer: 27 },   // Clue: I am a device worn over the ears to listen to audio signals.
        { icon: "🌲", answer: 4 }, // Clue 5: Git
        { icon: "🏆", answer: 28 },   // Clue: I am a symbol of victory or achievement.
        { icon: "🍜", answer: 29 },   // Clue: I am a type of Asian noodle soup.
        { icon: "🔑", answer: 30 },   // Clue: I am a small metal object used to unlock doors or other locked devices.
        { icon: "🌌", answer: 31 },   // Clue: I am a complex and vast assemblage of stars, galaxies, and other celestial entities.
        { icon: "🛋️", answer: 32 },   // Clue: I am a piece of furniture for seating more than one person.
        { icon: "➰", answer: 7 }, // Clue 8: Higher Order Function
        { icon: "🍕", answer: 33 },   // Clue: I am a popular Italian dish consisting of a yeasted flatbread topped with various ingredients.
        { icon: "🏄", answer: 34 },   // Clue: I am a water sport in which a person rides a board on the crest of a wave.
        { icon: "🔍", answer: 35 },   // Clue: I am a tool used for finding hidden objects or information.
        { icon: "📌", answer: 36 },   // Clue: I am a small pointed instrument used for fastening items to a surface.
        { icon: "🧩", answer: 37 },   // Clue: I am a game or toy in which pieces must be fitted together to create a picture or design.
        { icon: "🕰️", answer: 38 },   // Clue: I am a timekeeping device with a swinging pendulum.
        { icon: "🚤", answer: 39 },   // Clue: I am a motorized watercraft typically used for recreation.
        { icon: "🍇", answer: 40 },   // Clue: I am a small, sweet fruit, often used to make wine.
        { icon: "🎹", answer: 42 },   // Clue: I am a musical instrument with keys.
        { icon: "🔭", answer: 43 },   // Clue: I am an optical instrument used to observe distant objects.
        { icon: "🍔", answer: 44 },   // Clue: I am a popular fast-food item consisting of a ground meat patty in a bun.
        { icon: "🚁", answer: 45 },   // Clue: I am a type of aircraft that uses rotating blades to fly.
        { icon: "🌍", answer: 46 },   // Clue: I am the third planet from the sun in our solar system.
        { icon: "📚", answer: 5 }, // Clue 6: Stack
        { icon: "🌊", answer: 47 },   // Clue: I am a body of saltwater that covers most of the Earth's surface.
      
    ];
    


    // const emojis = [
        // { icon: "🐍", answer: 0 }, // Clue 1: Python
        // { icon: "🏰", answer: 1 }, // Clue 2: Singleton
        // { icon: "📦", answer: 2 }, // Clue 3: Encapsulation
        // { icon: "🔄", answer: 3 }, // Clue 4: Recursion
        // { icon: "🌲", answer: 4 }, // Clue 5: Git
        // { icon: "📚", answer: 5 }, // Clue 6: Stack
        // { icon: "🔒", answer: 6 }, // Clue 7: SSL/TLS
        // { icon: "➰", answer: 7 }, // Clue 8: Higher Order Function
        // { icon: "🚀", answer: 10 },   // Clue: I am a mode of transportation used to reach outer space.
        // { icon: "🎭", answer: 11 },   // Clue: I am a form of theatrical entertainment with masked performers.
        // { icon: "🧬", answer: 12 },   // Clue: I am the molecule that contains genetic instructions for the development of living organisms.
        // { icon: "🗽", answer: 13 },   // Clue: I am a colossal neoclassical sculpture in New York Harbor.
        // { icon: "🎨", answer: 14 },   // Clue: I am the activity or profession that produces paintings, sculptures, and other artistic works.
        // { icon: "🍣", answer: 15 },   // Clue: I am a Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice.
        // { icon: "🌋", answer: 16 },   // Clue: I am an opening in the Earth's crust from which lava, ash, and gases erupt.
        // { icon: "🚁", answer: 17 },   // Clue: I am a type of aircraft that uses rotating blades to fly.
        // { icon: "📚", answer: 18 },   // Clue: I am a collection of written or printed works, typically consisting of novels, poems, and essays.
        // { icon: "🌌", answer: 23 },  // Clue: I am a galaxy, symbolizing the vastness of coding knowledge.
        // { icon: "🔬", answer: 24 },  // Clue: I am a microscope, suggesting a close examination of code details.
        // { icon: "🎤", answer: 20 },   // Clue: I am a device used to amplify and transmit sound, especially the human voice.
        // { icon: "🚲", answer: 21 },   // Clue: I am a two-wheeled vehicle propelled by pedaling.
        // { icon: "🌈", answer: 22 },   // Clue: I am a meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.
        // { icon: "🛡️", answer: 23 },   // Clue: I am a protective covering worn in battle.
        // { icon: "📡", answer: 24 },   // Clue: I am a device used to transmit television or radio signals.
        // { icon: "🌲", answer: 25 },   // Clue: I am a tall perennial plant typically with a single main stem.
        // { icon: "🔬", answer: 26 },   // Clue: I am an instrument used for viewing small objects or details.
        // { icon: "🎧", answer: 27 },   // Clue: I am a device worn over the ears to listen to audio signals.
        // { icon: "🏆", answer: 28 },   // Clue: I am a symbol of victory or achievement.
        // { icon: "🍜", answer: 29 },   // Clue: I am a type of Asian noodle soup.
        // { icon: "🔑", answer: 30 },   // Clue: I am a small metal object used to unlock doors or other locked devices.
        // { icon: "🌌", answer: 31 },   // Clue: I am a complex and vast assemblage of stars, galaxies, and other celestial entities.
        // { icon: "🛋️", answer: 32 },   // Clue: I am a piece of furniture for seating more than one person.
        // { icon: "🍕", answer: 33 },   // Clue: I am a popular Italian dish consisting of a yeasted flatbread topped with various ingredients.
        // { icon: "🏄", answer: 34 },   // Clue: I am a water sport in which a person rides a board on the crest of a wave.
        // { icon: "🔍", answer: 35 },   // Clue: I am a tool used for finding hidden objects or information.
        // { icon: "📌", answer: 36 },   // Clue: I am a small pointed instrument used for fastening items to a surface.
        // { icon: "🧩", answer: 37 },   // Clue: I am a game or toy in which pieces must be fitted together to create a picture or design.
        // { icon: "🕰️", answer: 38 },   // Clue: I am a timekeeping device with a swinging pendulum.
        // { icon: "🚤", answer: 39 },   // Clue: I am a motorized watercraft typically used for recreation.
        // { icon: "🍇", answer: 40 },   // Clue: I am a small, sweet fruit, often used to make wine.
        // { icon: "🔑", answer: 41 },   // Clue: I am a tool used for unlocking locks.
        // { icon: "🎹", answer: 42 },   // Clue: I am a musical instrument with keys.
        // { icon: "🔭", answer: 43 },   // Clue: I am an optical instrument used to observe distant objects.
        // { icon: "🍔", answer: 44 },   // Clue: I am a popular fast-food item consisting of a ground meat patty in a bun.
        // { icon: "🚁", answer: 45 },   // Clue: I am a type of aircraft that uses rotating blades to fly.
        // { icon: "🌍", answer: 46 },   // Clue: I am the third planet from the sun in our solar system.
        // { icon: "🌊", answer: 47 },   // Clue: I am a body of saltwater that covers most of the Earth's surface.
        // { icon: "🔒", answer: 48 },   // Clue: I am a device used to secure something.
    // ];

    let currentClueIndex = 0;

    function startGame() {
        const randomizedEmojis = shuffleArray(emojis);
        emojiContainer.innerHTML = "";

        clueText.textContent = clues[currentClueIndex];
        startButton.disabled = true;
    
        // Display emojis and make them clickable
        emojis.forEach((emoji, index) => {
            const emojiElement = document.createElement('div');
            emojiElement.classList.add('emoji');
            emojiElement.textContent = emoji.icon;
            emojiElement.addEventListener('click', () => revealNextClue(emoji.answer));
            emojiContainer.appendChild(emojiElement);
        });
    
        emojiContainer.classList.remove('hidden');
    }
    
    function revealNextClue(index) {
        // Check if the clicked emoji matches the current clue
        if (index === currentClueIndex) {
            currentClueIndex++;
    
            // Display the next clue or finish the game
            if (currentClueIndex < clues.length) {
                clueText.textContent = clues[currentClueIndex];
            } else {
                finishGame();
            }
        }
    }
    
    function finishGame() {
        emojiContainer.classList.add('hidden');
        hiddenMessage.classList.remove('hidden');
    }
    

    function shuffleArray(array) {
        // Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startButton.addEventListener('click', startGame);



});







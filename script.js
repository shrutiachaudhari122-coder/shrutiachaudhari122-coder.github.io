// ========================================
// BEFORE YOU POLLUTE
// MAIN JAVASCRIPT
// ========================================


// ========================================
// START EXPERIENCE BUTTON
// ========================================

const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {

        const story = document.getElementById("story");

        if (story) {
            story.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}


// ========================================
// BOTTLE CHALLENGE
// ========================================

let impactScore = 0;

const choices = document.querySelectorAll(".choice");

const result = document.getElementById("result");

const score = document.getElementById("score");

const stages = document.querySelectorAll(".journey-stage");

const consequenceTitle =
    document.getElementById("consequenceTitle");

const consequenceText =
    document.getElementById("consequenceText");


// ========================================
// BOTTLE CHOICE BUTTONS
// ========================================

choices.forEach(function (choice) {

    choice.addEventListener("click", function () {

        const points =
            Number(choice.dataset.points);

        const type =
            choice.dataset.result;


        // Update score
        impactScore += points;

        if (score) {
            score.textContent = impactScore;
        }


        // Remove previous effects

        document.body.classList.remove(
            "polluted",
            "recycled",
            "reused"
        );


        // Reset journey

        stages.forEach(function (stage) {

            stage.classList.remove("active");

        });


        // =================================
        // WRONG CHOICE
        // =================================

        if (type === "wrong") {

            document.body.classList.add("polluted");


            if (result) {

                result.innerHTML = `
                    <strong>It didn't disappear.</strong><br><br>
                    That bottle still has somewhere to go... 🌊
                `;

            }


            if (consequenceTitle) {

                consequenceTitle.textContent =
                    "You threw it away.";

            }


            if (consequenceText) {

                consequenceText.textContent =
                    "But there is no magical place called 'away'.";

            }


            animatePollutionJourney();


            setTimeout(function () {

                const consequence =
                    document.getElementById("consequence");

                if (consequence) {

                    consequence.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 700);

        }


        // =================================
        // GOOD CHOICE - RECYCLE
        // =================================

        else if (type === "good") {

            document.body.classList.add("recycled");


            if (result) {

                result.innerHTML = `
                    <strong>Good choice. ♻️</strong><br><br>
                    You gave the bottle a better chance of being handled correctly.
                `;

            }


            if (consequenceTitle) {

                consequenceTitle.textContent =
                    "You chose the correct bin. ♻️";

            }


            if (consequenceText) {

                consequenceText.textContent =
                    "A responsible choice can help prevent pollution.";

            }


            animatePositiveJourney();


            setTimeout(function () {

                const consequence =
                    document.getElementById("consequence");

                if (consequence) {

                    consequence.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 700);

        }


        // =================================
        // BEST CHOICE - REUSE
        // =================================

        else {

            document.body.classList.add("reused");


            if (result) {

                result.innerHTML = `
                    <strong>That's an even better choice. 🌱</strong><br><br>
                    Reusing keeps an item useful for longer.
                `;

            }


            if (consequenceTitle) {

                consequenceTitle.textContent =
                    "You chose to reuse it. 🌱";

            }


            if (consequenceText) {

                consequenceText.textContent =
                    "You prevented waste before it was created.";

            }


            animatePositiveJourney();


            setTimeout(function () {

                const consequence =
                    document.getElementById("consequence");

                if (consequence) {

                    consequence.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 700);

        }

    });

});


// ========================================
// POLLUTION JOURNEY ANIMATION
// ========================================

function animatePollutionJourney() {

    stages.forEach(function (stage, index) {

        setTimeout(function () {

            stage.classList.add("active");

        }, index * 700);

    });

}


// ========================================
// POSITIVE JOURNEY ANIMATION
// ========================================

function animatePositiveJourney() {

    stages.forEach(function (stage, index) {

        setTimeout(function () {

            stage.classList.add("active");

        }, index * 400);

    });

}


// ========================================
// A NORMAL DAY GAME
// ========================================

let greenScore = 0;

let currentQuestion = 1;

const greenScoreDisplay =
    document.getElementById("greenScore");

const dayQuestion =
    document.getElementById("dayQuestion");

const dayNumber =
    document.getElementById("dayNumber");

const dayResult =
    document.getElementById("dayResult");


// ========================================
// DAY GAME
// ========================================

function setupDayChoices() {

    const dayChoices =
        document.querySelectorAll(".day-choice");


    dayChoices.forEach(function (choice) {

        choice.addEventListener("click", function () {

            const points =
                Number(choice.dataset.points);

            greenScore += points;


            if (greenScoreDisplay) {

                greenScoreDisplay.textContent =
                    greenScore;

            }


            // =================================
            // QUESTION 1 → QUESTION 2
            // =================================

            if (currentQuestion === 1) {

                if (dayQuestion) {

                    dayQuestion.textContent =
                        "You're buying a drink. What will you choose?";

                }


                if (dayNumber) {

                    dayNumber.textContent =
                        "CHOICE 2 OF 3";

                }


                const choicesContainer =
                    document.querySelector(".day-choices");


                if (choicesContainer) {

                    choicesContainer.innerHTML = `

                        <button class="day-choice" data-points="3">
                            🥤 Reusable bottle
                        </button>

                        <button class="day-choice" data-points="2">
                            ♻️ Recyclable container
                        </button>

                        <button class="day-choice" data-points="0">
                            🧴 Single-use plastic bottle
                        </button>

                    `;

                }


                if (dayResult) {

                    dayResult.textContent =
                        "Good! Your first choice has been recorded.";

                }


                currentQuestion = 2;

                setupDayChoices();

            }


            // =================================
            // QUESTION 2 → QUESTION 3
            // =================================

            else if (currentQuestion === 2) {

                if (dayQuestion) {

                    dayQuestion.textContent =
                        "You have an old item you don't use anymore. What will you do?";

                }


                if (dayNumber) {

                    dayNumber.textContent =
                        "CHOICE 3 OF 3";

                }


                const choicesContainer =
                    document.querySelector(".day-choices");


                if (choicesContainer) {

                    choicesContainer.innerHTML = `

                        <button class="day-choice" data-points="3">
                            🔧 Repair it
                        </button>

                        <button class="day-choice" data-points="2">
                            🔄 Give it another use
                        </button>

                        <button class="day-choice" data-points="0">
                            🗑️ Throw it away
                        </button>

                    `;

                }


                if (dayResult) {

                    dayResult.textContent =
                        "Nice choice! One more decision.";

                }


                currentQuestion = 3;

                setupDayChoices();

            }


            // =================================
            // FINAL RESULT
            // =================================

            else {

                if (dayNumber) {

                    dayNumber.textContent =
                        "CHALLENGE COMPLETE";

                }


                if (dayQuestion) {

                    dayQuestion.textContent =
                        "Your choices leave a mark.";

                }


                const choicesContainer =
                    document.querySelector(".day-choices");


                if (choicesContainer) {

                    choicesContainer.innerHTML = "";

                }


                if (dayResult) {

                    dayResult.innerHTML =
                        "<strong>Your Green Score: " +
                        greenScore +
                        " / 9 🌱</strong><br><br>" +
                        "Small choices can become big changes.";

                }


                showFinalResult();

            }

        });

    });

}


// Start game

setupDayChoices();


// ========================================
// FINAL IMPACT
// ========================================

function showFinalResult() {

    const finalScore =
        document.getElementById("finalScore");

    const finalTitle =
        document.getElementById("finalTitle");

    const finalMessage =
        document.getElementById("finalMessage");


    if (finalScore) {

        finalScore.textContent =
            greenScore;

    }


    // =================================
    // HIGH SCORE
    // =================================

    if (greenScore >= 8) {

        if (finalTitle) {

            finalTitle.textContent =
                "You're thinking beyond yourself. 🌱";

        }


        if (finalMessage) {

            finalMessage.textContent =
                "Your choices show that small actions can become meaningful environmental habits.";

        }

    }


    // =================================
    // MEDIUM SCORE
    // =================================

    else if (greenScore >= 5) {

        if (finalTitle) {

            finalTitle.textContent =
                "You're on the right path. 🌍";

        }


        if (finalMessage) {

            finalMessage.textContent =
                "A few better choices can make your everyday impact even stronger.";

        }

    }


    // =================================
    // LOW SCORE
    // =================================

    else {

        if (finalTitle) {

            finalTitle.textContent =
                "Now you know the difference. 💭";

        }


        if (finalMessage) {

            finalMessage.textContent =
                "The next choice is yours. Think before you throw.";

        }

    }


    // Scroll

    setTimeout(function () {

        const finalImpact =
            document.getElementById("finalImpact");

        if (finalImpact) {

            finalImpact.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 1000);

}


// ========================================
// RESTART BUTTON
// ========================================

const restartButton =
    document.getElementById("restartButton");


if (restartButton) {

    restartButton.addEventListener("click", function () {


        // Reset scores

        impactScore = 0;

        greenScore = 0;


        if (score) {

            score.textContent = "0";

        }


        if (greenScoreDisplay) {

            greenScoreDisplay.textContent = "0";

        }


        // Reset game

        currentQuestion = 1;


        if (dayNumber) {

            dayNumber.textContent =
                "CHOICE 1 OF 3";

        }


        if (dayQuestion) {

            dayQuestion.textContent =
                "You're going to college. How will you travel?";

        }


        if (dayResult) {

            dayResult.textContent = "";

        }


        const choicesContainer =
            document.querySelector(".day-choices");


        if (choicesContainer) {

            choicesContainer.innerHTML = `

                <button class="day-choice" data-points="3">
                    🚌 Public transport
                </button>

                <button class="day-choice" data-points="2">
                    🚶 Walk / Cycle
                </button>

                <button class="day-choice" data-points="0">
                    🚗 Travel alone by car
                </button>

            `;

        }


        setupDayChoices();


        // Go back

        const normalDay =
            document.getElementById("normalDay");


        if (normalDay) {

            normalDay.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ========================================
// LANGUAGE SELECTOR
// ========================================

const languageSelect =
    document.getElementById("languageSelect");


const translations = {

    en: {

        heroSmall: "A CHOICE. A CONSEQUENCE.",
        heroTitle: "BEFORE YOU POLLUTE",
        heroTagline: "Every choice leaves a mark.",
        start: "START THE EXPERIENCE",

        storySmall: "THINK ABOUT THIS",
        storyTitle: "You threw something away.",
        storyText: "But where does 'away' actually exist?",

        consequence: "THE CONSEQUENCE",
        impact: "LOOK CLOSER",
        otherSide: "THE OTHER SIDE",
        control: "CONTROL THE POLLUTION",
        normalDay: "A NORMAL DAY",
        yourImpact: "YOUR IMPACT"

    },


    hi: {

        heroSmall: "एक चुनाव। एक परिणाम।",
        heroTitle: "प्रदूषण करने से पहले सोचें",
        heroTagline: "हर चुनाव अपनी छाप छोड़ता है।",
        start: "अनुभव शुरू करें",

        storySmall: "इसके बारे में सोचें",
        storyTitle: "आपने कुछ फेंक दिया।",
        storyText: "लेकिन 'दूर' नाम की जगह वास्तव में कहाँ है?",

        consequence: "परिणाम",
        impact: "ध्यान से देखें",
        otherSide: "दूसरी तरफ",
        control: "प्रदूषण को नियंत्रित करें",
        normalDay: "एक सामान्य दिन",
        yourImpact: "आपका प्रभाव"

    },


    mr: {

        heroSmall: "एक निवड. एक परिणाम.",
        heroTitle: "प्रदूषण करण्यापूर्वी विचार करा",
        heroTagline: "प्रत्येक निवड आपली छाप सोडते.",
        start: "अनुभव सुरू करा",

        storySmall: "याचा विचार करा",
        storyTitle: "तुम्ही काहीतरी फेकून दिले.",
        storyText: "पण 'दूर' अशी जागा खरंच कुठे आहे?",

        consequence: "परिणाम",
        impact: "जरा जवळून पाहा",
        otherSide: "दुसरी बाजू",
        control: "प्रदूषण नियंत्रित करा",
        normalDay: "एक सामान्य दिवस",
        yourImpact: "तुमचा प्रभाव"

    }

};


// ========================================
// CHANGE LANGUAGE
// ========================================

function changeLanguage(language) {

    const text =
        translations[language];

    if (!text) return;


    // =================================
    // HERO
    // =================================

    const hero =
        document.querySelector(".hero");


    if (hero) {

        const heroSmall =
            hero.querySelector(".small-text");

        const heroTitle =
            hero.querySelector("h1");

        const heroTagline =
            hero.querySelector(".tagline");


        if (heroSmall) {

            heroSmall.textContent =
                text.heroSmall;

        }


        if (heroTitle) {

            heroTitle.innerHTML =
                text.heroTitle;

        }


        if (heroTagline) {

            heroTagline.textContent =
                text.heroTagline;

        }

    }


    // =================================
    // START BUTTON
    // =================================

    if (startButton) {

        startButton.textContent =
            text.start;

    }


    // =================================
    // STORY
    // =================================

    const story =
        document.getElementById("story");


    if (story) {

        const storySmall =
            story.querySelector(".story-small, .small-text");

        const storyTitle =
            story.querySelector("h2");

        const storyText =
            story.querySelector("p:not(.story-small):not(.small-text)");


        if (storySmall) {

            storySmall.textContent =
                text.storySmall;

        }


        if (storyTitle) {

            storyTitle.textContent =
                text.storyTitle;

        }


        if (storyText) {

            storyText.textContent =
                text.storyText;

        }

    }


    // =================================
    // CONSEQUENCE
    // =================================

    const consequenceSmall =
        document.querySelector(
            "#consequence .story-small, #consequence .small-text"
        );


    if (consequenceSmall) {

        consequenceSmall.textContent =
            text.consequence;

    }


    // =================================
    // IMPACT
    // =================================

    const impactSmall =
        document.querySelector(
            "#impact .story-small, #impact .small-text"
        );


    if (impactSmall) {

        impactSmall.textContent =
            text.impact;

    }


    // =================================
    // OTHER SIDE
    // =================================

    const otherSideSmall =
        document.querySelector(
            ".other-side .story-small, .other-side .small-text"
        );


    if (otherSideSmall) {

        otherSideSmall.textContent =
            text.otherSide;

    }


    // =================================
    // 5R
    // =================================

    const controlSmall =
        document.querySelector(
            ".five-r-section .story-small, .five-r-section .small-text"
        );


    if (controlSmall) {

        controlSmall.textContent =
            text.control;

    }


    // =================================
    // NORMAL DAY
    // =================================

    const daySmall =
        document.querySelector(
            "#normalDay .story-small, #normalDay .small-text"
        );


    if (daySmall) {

        daySmall.textContent =
            text.normalDay;

    }


    // =================================
    // FINAL
    // =================================

    const finalSmall =
        document.querySelector(
            "#finalImpact .story-small, #finalImpact .small-text"
        );


    if (finalSmall) {

        finalSmall.textContent =
            text.yourImpact;

    }

}


// ========================================
// LANGUAGE EVENT
// ========================================

if (languageSelect) {

    languageSelect.addEventListener(
        "change",
        function () {

            changeLanguage(
                languageSelect.value
            );

        }
    );

}/* ========================================
   INTERACTIVE POLLUTION CHALLENGE
======================================== */

let challengeScore = 0;
let challengeQuestion = 1;

const challengeNumber =
    document.getElementById("challengeNumber");

const challengeIcon =
    document.getElementById("challengeIcon");

const challengeQuestionText =
    document.getElementById("challengeQuestion");

const challengeResult =
    document.getElementById("challengeResult");

const challengeScoreDisplay =
    document.getElementById("challengeScore");


const challengeData = [

    {
        icon: "🛍️",

        question:
            "You're shopping and the shopkeeper offers you a single-use plastic bag.",

        options: [
            ["👜 Use a reusable bag", 3],
            ["♻️ Take the plastic bag and reuse it", 1],
            ["🛍️ Take a new plastic bag", 0]
        ]
    },

    {
        icon: "🚗",

        question:
            "You need to travel a short distance. What will you choose?",

        options: [
            ["🚶 Walk or cycle", 3],
            ["🚌 Use public transport", 2],
            ["🚗 Travel alone by car", 0]
        ]
    },

    {
        icon: "🥤",

        question:
            "You finish a plastic bottle. What will you do next?",

        options: [
            ["🔄 Reuse it", 3],
            ["♻️ Put it in the correct recycling bin", 2],
            ["🗑️ Throw it anywhere", 0]
        ]
    }

];


function loadChallenge() {

    const data =
        challengeData[challengeQuestion - 1];

    if (!data) return;


    challengeNumber.textContent =
        "SITUATION " +
        challengeQuestion +
        " OF 3";


    challengeIcon.textContent =
        data.icon;


    challengeQuestionText.textContent =
        data.question;


    challengeResult.textContent = "";


    const options =
        document.querySelector(".challenge-options");


    options.innerHTML = "";


    data.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className =
            "challenge-option";

        button.textContent =
            option[0];

        button.dataset.points =
            option[1];

        button.addEventListener(
            "click",
            handleChallengeChoice
        );

        options.appendChild(button);

    });

}


function handleChallengeChoice() {

    const points =
        Number(this.dataset.points);

    challengeScore += points;


    challengeScoreDisplay.textContent =
        challengeScore;


    if (points === 3) {

        challengeResult.innerHTML =
            "🌱 Great choice! You chose an option that can help reduce pollution.";

    }

    else if (points === 2) {

        challengeResult.innerHTML =
            "♻️ Good choice! There is still a positive way to improve your impact.";

    }

    else {

        challengeResult.innerHTML =
            "💭 Think about the impact this choice can create.";

    }


    const buttons =
        document.querySelectorAll(".challenge-option");


    buttons.forEach(function(button) {

        button.disabled = true;

        button.style.opacity = "0.5";

    });


    setTimeout(function() {

        if (challengeQuestion < 3) {

            challengeQuestion++;

            loadChallenge();

        }

        else {

            challengeNumber.textContent =
                "CHALLENGE COMPLETE";

            challengeIcon.textContent =
                "🌍";

            challengeQuestionText.textContent =
                "Your everyday choices can become part of the solution.";

            document.querySelector(
                ".challenge-options"
            ).innerHTML = "";

            challengeResult.innerHTML =
                "<strong>Your Eco Score: " +
                challengeScore +
                " / 9 🌱</strong><br><br>" +
                "Small actions can create meaningful change.";

        }

    }, 1200);

}


loadChallenge();


/* ========================================
   ECOGUARD — SCROLL ANIMATION SYSTEM
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        "section h2, " +
        "section h3, " +
        ".waste-item, " +
        ".organization-card, " +
        ".r-card, " +
        ".impact-card, " +
        ".day-card, " +
        ".pollution-card, " +
        ".story-small"
    );


    animatedElements.forEach((element, index) => {

        if (!element.classList.contains("story-small")) {

            element.classList.add("reveal");

            element.style.transitionDelay =
                `${(index % 4) * 0.08}s`;
        }

    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            observer.observe(element);

        });


    /* ---------- MOUSE PARALLAX ---------- */

    const cards = document.querySelectorAll(
        ".waste-item, .organization-card"
    );


    document.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 800) return;


        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        cards.forEach((card, index) => {

            const strength =
                index % 2 === 0 ? 3 : -3;


            card.style.setProperty(
                "--mouse-x",
                `${x * strength}px`
            );


            card.style.setProperty(
                "--mouse-y",
                `${y * strength}px`
            );

        });

    });


    /* ---------- SMOOTH CARD MOVEMENT ---------- */

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            if (window.innerWidth < 800) return;


            card.style.transform =
                "translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0) translateY(-12px) scale(1.02)";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

});


/* ========================================
   ECOGUARD — FLOATING PARTICLES
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("div");


        particle.className =
            "eco-particle";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.animationDuration =
            10 + Math.random() * 15 + "s";


        particle.style.animationDelay =
            Math.random() * 10 + "s";


        const size =
            3 + Math.random() * 5;


        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        document.body.appendChild(particle);

    }


    /* Create floating leaf shapes */

    for (let i = 0; i < 7; i++) {

        const leaf =
            document.createElement("div");


        leaf.className =
            "eco-leaf";


        leaf.style.left =
            Math.random() * 100 + "vw";


        leaf.style.animationDuration =
            14 + Math.random() * 12 + "s";


        leaf.style.animationDelay =
            Math.random() * 12 + "s";


        document.body.appendChild(leaf);

    }

});


/* ========================================
   ECOGUARD — SCROLL PROGRESS
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const progressBar =
        document.createElement("div");


    progressBar.className =
        "eco-scroll-progress";


    document.body.appendChild(progressBar);


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;


        progressBar.style.width =
            progress + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();

});


/* ========================================
   ECOGUARD — MOUSE GLOW
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth <= 800) return;


    const glow =
        document.createElement("div");


    glow.className =
        "eco-mouse-glow";


    document.body.appendChild(glow);


    document.addEventListener("mousemove", (event) => {

        glow.style.left =
            event.clientX + "px";


        glow.style.top =
            event.clientY + "px";

    });

});


/* ========================================
   ECOGUARD — HERO PARTICLES
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero =
        document.querySelector(".hero");


    if (!hero) return;


    for (let i = 0; i < 15; i++) {

        const dust =
            document.createElement("div");


        dust.className =
            "floating-dust";


        dust.style.left =
            Math.random() * 100 + "%";


        dust.style.animationDuration =
            6 + Math.random() * 10 + "s";


        dust.style.animationDelay =
            Math.random() * 8 + "s";


        const size =
            2 + Math.random() * 4;


        dust.style.width =
            size + "px";


        dust.style.height =
            size + "px";


        hero.appendChild(dust);

    }

});


/* ========================================
   ECOGUARD — POLLUTION DUST
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const story =
        document.querySelector(".story-section");


    if (!story) return;


    for (let i = 0; i < 10; i++) {

        const dust =
            document.createElement("span");


        dust.className =
            "story-dust";


        dust.style.left =
            Math.random() * 100 + "%";


        dust.style.top =
            Math.random() * 100 + "%";


        dust.style.animationDelay =
            Math.random() * 8 + "s";


        story.appendChild(dust);

    }

});


/* ========================================
   ECOGUARD — POLLUTION INFORMATION
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const pollutionData = {

        "Air Pollution": {

            icon: "🌫️",

            description:
                "Air pollution occurs when harmful gases, smoke and tiny particles enter the atmosphere and reduce air quality.",

            points: [
                "Vehicle exhaust releases harmful gases.",
                "Factories and industries can release smoke and pollutants.",
                "Burning waste can add harmful particles to the air.",
                "Air pollution can affect humans, animals and plants."
            ]

        },


        "Water Pollution": {

            icon: "💧",

            description:
                "Water pollution happens when harmful substances enter rivers, lakes, oceans and other water sources.",

            points: [
                "Plastic and other waste can enter water bodies.",
                "Industrial chemicals can contaminate water.",
                "Sewage can reduce water quality.",
                "Polluted water can harm aquatic life."
            ]

        },


        "Land Pollution": {

            icon: "🌍",

            description:
                "Land pollution occurs when waste and harmful substances accumulate on or enter the soil.",

            points: [
                "Improper disposal of waste damages land.",
                "Plastic can remain in the environment for a long time.",
                "Chemical waste can affect soil quality.",
                "Land pollution can damage plants and ecosystems."
            ]

        },


        "Noise Pollution": {

            icon: "🔊",

            description:
                "Noise pollution is excessive or unwanted sound that can disturb people, animals and the surrounding environment.",

            points: [
                "Heavy traffic can create excessive noise.",
                "Construction and machines can produce loud sounds.",
                "Very loud environments can disturb wildlife.",
                "Reducing unnecessary noise helps create healthier surroundings."
            ]

        }

    };


    const overlay =
        document.createElement("div");


    overlay.className =
        "pollution-info-overlay";


    overlay.innerHTML = `

        <div class="pollution-info-box">

            <button class="pollution-close">
                ×
            </button>

            <div class="pollution-info-icon"></div>

            <h2></h2>

            <p class="info-description"></p>

            <div class="info-points"></div>

        </div>

    `;


    document.body.appendChild(overlay);


    const icon =
        overlay.querySelector(
            ".pollution-info-icon"
        );


    const title =
        overlay.querySelector("h2");


    const description =
        overlay.querySelector(
            ".info-description"
        );


    const points =
        overlay.querySelector(
            ".info-points"
        );


    document
        .querySelectorAll(".pollution-card")
        .forEach(card => {

            const link =
                card.querySelector("a");


            if (!link) return;


            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const heading =
                        card.querySelector("h3");


                    if (!heading) return;


                    const pollutionName =
                        heading.textContent.trim();


                    const data =
                        pollutionData[pollutionName];


                    if (!data) return;


                    icon.textContent =
                        data.icon;


                    title.textContent =
                        pollutionName;


                    description.textContent =
                        data.description;


                    points.innerHTML = "";


                    data.points.forEach(point => {

                        const item =
                            document.createElement("div");


                        item.className =
                            "info-point";


                        item.textContent =
                            point;


                        points.appendChild(item);

                    });


                    overlay.classList.add("active");


                    document.body.style.overflow =
                        "hidden";

                }
            );

        });


    overlay
        .querySelector(".pollution-close")
        .addEventListener(
            "click",
            closePopup
        );


    overlay.addEventListener(
        "click",
        event => {

            if (event.target === overlay) {

                closePopup();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                overlay.classList.contains("active")
            ) {

                closePopup();

            }

        }
    );


    function closePopup() {

        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }

});
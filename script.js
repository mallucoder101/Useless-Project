
function scrollToSection() {
  document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
}
function createStars() {
    const container = document.querySelector('.container');
    const starCount = 100; 

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        
        const size = Math.random() * 3 + 1;

        
        const delay = Math.random() * 3;

        const opacity = Math.random() * 0.8 + 0.2;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            animation: twinkle 3s infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 1;
        `;

        container.appendChild(star);
    }
}

function addStarAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}


const breakupData = {
    "Aswathi-Pooram": {
        "Long distance": {
            "exam": [
                "നിന്റെ Saturn 7th house-ൽ കേറി ഇരുന്ന് WiFi password മാറ്റി. Long distance-ന്റെ connection തീർന്നു.",
                "Mars retrograde ആയപ്പോ നിന്റെ messages-ന് blue tick വരാതായി. ഇനി carrier pigeon ആണ് option.",
                "Shukra dosham കാരണം video call-ൽ filter ഇല്ലാതെ കണ്ടപ്പോ reality hit ആയി."
            ],
            "relationship": [
                "നിന്റെ അമ്മയുടെ sixth sense + WhatsApp last seen = Game Over.",
                "ചൊവ്വാ ദോഷം detect ചെയ്തു. അമ്മ Facebook-ൽ 'suitable alliance' തപ്പാൻ തുടങ്ങി.",
                "നിന്റെ horoscope-ൽ 'ദൂരെ പോകരുത്' എന്ന് warning ഉണ്ടായിരുന്നു. ഇപ്പൊ മനസ്സിലായോ?"
            ]
        }
    },
    "Bharani-Makham": {
        "Situation": {
            "career": [
                "നിന്റെ LinkedIn profile കണ്ടപ്പോ partner-ന്റെ expectations Mars-ലേക്ക് migrate ചെയ്തു.",
                "Career-ൽ clarity ഇല്ലാത്തവർക്ക് relationship-ലും clarity വരില്ല.",
                "നിന്റെ resume-ലെ 'gap year' പോലെ ആണ് ഈ relationship - explain ചെയ്യാൻ പറ്റില്ല."
            ],
            "procrastination": [
                "Tomorrow പറഞ്ഞ് പറഞ്ഞ് relationship-ന്റെ expiry date കഴിഞ്ഞു.",
                "നീ assignment submit ചെയ്യുന്ന പോലെ ആണ് love express ചെയ്യുന്നത് - last minute-ൽ, low quality."
            ]
        }
    },
    "Rohini-Uthram": {
        "One sided": {
            "existential": [
                "നിന്റെ 3 AM thoughts പോലെ ആണ് ഈ relationship - deep ആണെന്ന് തോന്നും, പക്ഷെ pointless.",
                "Partner-ന് നീ notification ആണ്, നിനക്ക് അവൻ/അവൾ whole app ആണ്. Cosmic imbalance detected.",
                "നിന്റെ feelings Schrödinger's cat പോലെ ആണ് - simultaneously ഉണ്ട്, ഇല്ല."
            ],
            "sleep": [
                "2 AM-ന് 'You up?' അയക്കുന്നവർക്ക് Saturn direct hit തരും.",
                "Sleep schedule-ഉം relationship schedule-ഉം തമ്മിൽ 12 മണിക്കൂർ time difference."
            ]
        }
    },
    "Makeeryam-Thiruvaathira": {
        "Frnds with benefits": {
            "procrastination": [
                "Benefits മാത്രം നോക്കിയാൽ feelings-ന്റെ GST അടക്കേണ്ടി വരും.",
                "Netflix password share ചെയ്യുന്ന പോലെ emotions share ചെയ്യാൻ പറ്റില്ല.",
                "Friend zone-ൽ നിന്ന് benefit zone-ലേക്ക് upgrade ചെയ്തപ്പോ warranty void ആയി."
            ],
            "nothing": [
                "Vibes മാത്രം കൊണ്ട് relationship നടക്കില്ല. ഇത് physics, metaphysics അല്ല.",
                "നിന്റെ 'chill' attitude relationship-നെ freeze ചെയ്തു."
            ]
        }
    },
    "Punartham-Pooyyam": {
        "Marriage": {
            "parents": [
                "നിന്റെ kundali-യിൽ 'arranged marriage' yoga ഉണ്ട്. Current relationship auto-logout ആകും.",
                "അമ്മായി WhatsApp-ൽ biodata forward ചെയ്യാൻ തുടങ്ങിയാൽ game over.",
                "Parents meeting-ന് പോയപ്പോ horoscope match ചെയ്തു. Result: 404 compatibility not found."
            ],
            "financial": [
                "Bank balance-ഉം love balance-ഉം inversely proportional ആണെന്ന് ഗുരു transit പറയുന്നു.",
                "EMI അടക്കാൻ പറ്റാത്തവർക്ക് emotional installments handle ചെയ്യാൻ പറ്റില്ല."
            ]
        }
    },
    "Aayilyam-Makham": {
        "Rebound": {
            "sleep": [
                "Rebound relationship പോലെ ആണ് afternoon nap - temporary relief, permanent confusion.",
                "Ex-ന്റെ memory clear ചെയ്യാതെ new relationship install ചെയ്താൽ system crash ആകും."
            ],
            "relationship": [
                "Previous relationship-ന്റെ backup restore ചെയ്യാൻ നോക്കിയപ്പോ current file corrupt ആയി.",
                "Rebound ആണെന്ന് stars മുന്നറിയിപ്പ് നൽകിയിരുന്നു. നീ gravity-യെ challenge ചെയ്തു."
            ]
        }
    },
    "default": [
        "ഗുരു 7th house-ൽ വക്രഗതി. Partner-ന്റെ WhatsApp dp-യിൽ നിന്ന് നിന്റെ photo disappear ആകും.",
        "നക്ഷത്രം തമ്മിൽ യോജിക്കുന്നില്ല. Instagram-ൽ unfollow ചെയ്ത് തുടങ്ങാം.",
        "ശനി ദശ കാരണം 'Seen at 11:45 PM' ആയി relationship freeze ആകും.",
        "ചൊവ്വ ദോഷം strong ആണ്. Partner നിന്റെ calls reject ചെയ്യാൻ തുടങ്ങും.",
        "രാഹു കാലം തെറ്റി message അയച്ചു. എല്ലാം screenshot എടുത്തു വെച്ചിട്ടുണ്ട്.",
        "ശുക്രൻ retrograde ആയപ്പോ love playlist-ൽ നിന്ന് breakup songs മാത്രം play ആകുന്നു.",
        "Sade Sathi effect: 7.5 വർഷം കാത്തിരുന്നാലും 'It's not you, it's me' കേൾക്കേണ്ടി വരും.",
        "മംഗള ദോഷം കാരണം couple photos-ൽ automatic filter apply ആകും - blur mode.",
        "കേതു transit: Partner-ന്റെ phone-ൽ നിന്റെ contact 'Maybe: (Your Name)' ആയി മാറും.",
        "അഷ്ടമ ശനി effect: Joint account close ചെയ്ത് solo trip plan ചെയ്യും."
    ]
};
// Generate random future date
function getRandomFutureDate() {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + Math.floor(Math.random() * 365) + 1); // 1-365 days from now
    return futureDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Get breakup prediction based on inputs
function getBreakupPrediction(userName, userNakshatram, partnerName, partnerNakshatram, relationshipType, stressFactor) {
    const key = `${userNakshatram}-${partnerNakshatram}`;

    // Try to find specific prediction
    if (breakupData[key] && breakupData[key][relationshipType] && breakupData[key][relationshipType][stressFactor]) {
        const messages = breakupData[key][relationshipType][stressFactor];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Try relationship type specific
    if (breakupData[key] && breakupData[key][relationshipType]) {
        const relationshipMessages = breakupData[key][relationshipType];
        const stressKeys = Object.keys(relationshipMessages);
        const randomStress = stressKeys[Math.floor(Math.random() * stressKeys.length)];
        const messages = relationshipMessages[randomStress];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Try nakshatram combination specific
    if (breakupData[key]) {
        const combinationMessages = breakupData[key];
        const relationshipKeys = Object.keys(combinationMessages);
        const randomRelationship = relationshipKeys[Math.floor(Math.random() * relationshipKeys.length)];
        const stressKeys = Object.keys(combinationMessages[randomRelationship]);
        const randomStress = stressKeys[Math.floor(Math.random() * stressKeys.length)];
        const messages = combinationMessages[randomRelationship][randomStress];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Return default message
    const defaultMessages = breakupData.default;
    return defaultMessages[Math.floor(Math.random() * defaultMessages.length)];
}

// Generate fake astrology reason
function getAstrologyReason(userNakshatram, partnerNakshatram) {
    const reasons = [
        `${userNakshatram} നക്ഷത്രം വളരെയധികം "അഹങ്കാരിയാ", അതുകൊണ്ടാണ് ${partnerNakshatram} പലപ്പോഴും മൊബൈൽ mute ചെയ്തിരുന്നത്.`,
        `${partnerNakshatram} നക്ഷത്രത്തിൽ രാഹുവും കെട്ടുപോയ feelings-ഉം തമ്മിൽ direct collision ആയിരുന്നു.`,
        `${userNakshatram} നക്ഷത്രത്തിന്റെ ശനി, ${partnerNakshatram} നക്ഷത്രത്തിന്റെ ആശയവിനിമയത്തെ obstruct ചെയ്തു.`,
        `${userNakshatram} ന് ഏത് ദശയും ശരിയല്ല. പക്ഷേ ${partnerNakshatram} ന്റെ WhatsApp status കാണുമ്പോൾ മാത്രം ശാന്തി കിട്ടുന്നുണ്ട്.`,
        `നക്ഷത്രം പറയുന്നത്: കളിയാക്കരുത്. ഈ relasyon *Retrograde Shadow Period* ലാണ്.`,
        `${partnerNakshatram} നക്ഷത്രത്തിൽ നീ പോയപ്പോൾ ചന്ദ്രൻ തന്നെ സ്വയം blocked ചെയ്തു.`,
        `${userNakshatram} നക്ഷത്രം വേറെ orbital path-ൽ ആണ്. ആശയം clash ആകുന്നത് ശരിയാണു.`,
        `ജാതകം ശരിയാണെങ്കിലും chemistry work ആക്കാത്തത് because compatibility planet Pluto എന്നത് തന്നെ cosmic tragedy ആണ്.`,
        `വ്യാഴം നിന്റെ seventh house-ൽ കുറച്ച് കുഴപ്പമുണ്ടാക്കി. അതാണ് ഇതിന്റെ root cause.`,
        `ഇത് emotional astrology അല്ല. ഈ relasyon-ന് ആക്കം കാണിച്ചില്ല.`
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
}

// Roast messages in Malayalam
const roastMessages = [
    "Bro… നീ clearly single ആണ്. Fake data കൊണ്ട് fate test ചെയ്യരുത്.",
    "നിന്റെ crush-ന്റെ പേര് ഉപയോഗിക്കുന്നത് നിർത്ത്. ഇത് ChatGPT Astrology Simulator™ അല്ല.",
    "Dosham blocked. Real situationship വരുമ്പോൾ വരൂ.",
    "Rahu പോലും ഇത് കണ്ട് ചിരിക്കുന്നു.",
    "Nakshatra Nirnayam നിന്റെ low-effort heartbreak reject ചെയ്തു.",
    "Real names ഉപയോഗിക്ക് da. Astrology bots-നും feelings ഉണ്ട്.",
    "നിന്റെ breakup-ന് muhurtham ഇല്ല. Come back later.",
    "ഈ attempt കണ്ട് ചന്ദ്രൻ പോലും ചിരിക്കുന്നു.",
    "Fake relationship ആണെങ്കിൽ fake prediction ആണ്.",
    "നിന്റെ cosmic energy ഇതിന് suitable അല്ല.",
    "ഈ relationship-ന് horoscope ഇല്ല.",
    "നിന്റെ stars align ആകുന്നില്ല ഈ attempt-ന്.",
    "Dosham detected. Please try again with real data.",
    "നിന്റെ breakup prediction-ന് perfect timing ഇല്ല.",
    "ഈ relationship-ന് cosmic approval ഇല്ല."
];

// Handle form submission
function handleBreakupCalculation() {
    // Get form values
    const userName = document.getElementById('name').value;
    const userNakshatram = document.getElementById('star').value;
    const partnerName = document.getElementById('partner-name').value;
    const partnerNakshatram = document.getElementById('partner-star').value;
    const relationshipType = document.getElementById('relationship').value;
    const stressFactor = document.getElementById('stress').value;

    // Validate inputs
    if (!userName || !userNakshatram || !partnerName || !partnerNakshatram || !relationshipType || !stressFactor) {
        alert('ദയവായി എല്ലാ വിവരങ്ങളും നൽകുക!');
        return;
    }

    // 25% chance for "Dosham Blocked" mode
    const isDoshamBlocked = Math.random() < 0.25;

    if (isDoshamBlocked) {
        // Display roast message
        displayRoastMessage();
    } else {
        // Generate prediction
        const breakupDate = getRandomFutureDate();
        const breakupMessage = getBreakupPrediction(userName, userNakshatram, partnerName, partnerNakshatram, relationshipType, stressFactor);
        const astrologyReason = getAstrologyReason(userNakshatram, partnerNakshatram);

        // Display result
        displayBreakupResult(breakupDate, breakupMessage, astrologyReason, userName, partnerName);
    }
}

// Display roast message
function displayRoastMessage() {
    // Remove existing result if any
    const existingResult = document.querySelector('.breakup-result');
    if (existingResult) {
        existingResult.remove();
    }

    // Get random roast message
    const roastMessage = roastMessages[Math.floor(Math.random() * roastMessages.length)];

    // Create roast card
    const roastCard = document.createElement('div');
    roastCard.className = 'breakup-result';
    roastCard.innerHTML = `
        <div class="result-card roast-card">
            <div class="result-header">
                <h3>🚫 Dosham Blocked</h3>
            </div>
            <div class="result-content">
                <div class="result-item">
                    <span class="result-icon">🤖</span>
                    <div class="result-text">
                        <strong>System Message:</strong> ${roastMessage}
                    </div>
                </div>
                <div class="result-item">
                    <span class="result-icon">💫</span>
                    <div class="result-text">
                        <strong>Cosmic Advice:</strong> Real relationship ആണെങ്കിൽ real prediction ആണ്. Try again with authentic data!
                    </div>
                </div>
            </div>
            <div class="result-actions">
                <button class="share-button roast-share" onclick="shareRoastMessage('${roastMessage}')">
                    📋 Share this Roast
                </button>
            </div>
        </div>
    `;

    // Insert after form actions
    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(roastCard, formActions.nextSibling);

    // Scroll to result
    roastCard.scrollIntoView({ behavior: 'smooth' });
}

// Display breakup result
function displayBreakupResult(breakupDate, breakupMessage, astrologyReason, userName, partnerName) {
    // Remove existing result if any
    const existingResult = document.querySelector('.breakup-result');
    if (existingResult) {
        existingResult.remove();
    }

    // Create result card
    const resultCard = document.createElement('div');
    resultCard.className = 'breakup-result';
    resultCard.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <h3>🔮 നിങ്ങളുടെ Breakup Prediction</h3>
            </div>
            <div class="result-content">
                <div class="result-item">
                    <span class="result-icon">📆</span>
                    <div class="result-text">
                        <strong>Breakup Date:</strong> ${breakupDate}
                    </div>
                </div>
                <div class="result-item">
                    <span class="result-icon">💔</span>
                    <div class="result-text">
                        <strong>Breakup Message:</strong> ${breakupMessage}
                    </div>
                </div>
                <div class="result-item">
                    <span class="result-icon">🔮</span>
                    <div class="result-text">
                        <strong>Astrology Reason:</strong> ${astrologyReason}
                    </div>
                </div>
            </div>
            <div class="result-actions">
                <button class="share-button" onclick="shareBreakupResult('${breakupDate}', '${breakupMessage}', '${astrologyReason}', '${userName}', '${partnerName}')">
                    📋 Share this Dosham
                </button>
            </div>
        </div>
    `;

    // Insert after form actions
    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(resultCard, formActions.nextSibling);

    // Scroll to result
    resultCard.scrollIntoView({ behavior: 'smooth' });
}

// Share roast message
function shareRoastMessage(roastMessage) {
    const shareText = `🚫 Nakshatra Nirnayam Dosham Blocked 🚫

🤖 System Message: ${roastMessage}
💫 Cosmic Advice: Real relationship ആണെങ്കിൽ real prediction ആണ്. Try again with authentic data!

*Even astrology bots have feelings! Use real data next time!*

Made with 💔 and cosmic frustration by Nakshatra Nirnayam™`;

    // Copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        alert('Roast message copied to clipboard! 📋');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Roast message copied to clipboard! 📋');
    });
}

// Share breakup result
function shareBreakupResult(breakupDate, breakupMessage, astrologyReason, userName, partnerName) {
    const shareText = `🔮 Nakshatra Nirnayam Breakup Prediction 🔮

${userName} & ${partnerName} ന്റെ Breakup Prediction:

📆 Breakup Date: ${breakupDate}
💔 Breakup Message: ${breakupMessage}
🔮 Astrology Reason: ${astrologyReason}

*Results are for entertainment purposes only. Please don't actually break up based on planetary positions!*

Made with 💔 and cosmic frustration by Nakshatra Nirnayam™`;

    // Copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        alert('Breakup prediction copied to clipboard! 📋');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Breakup prediction copied to clipboard! 📋');
    });
}

// Initialize stars when page loads
document.addEventListener('DOMContentLoaded', function () {
    addStarAnimation();
    createStars();

    // Add event listener to calculate button
    const calculateButton = document.querySelector('.calculate-breakup');
    if (calculateButton) {
        calculateButton.addEventListener('click', handleBreakupCalculation);
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#starRating .star");
  const message = document.getElementById("rateMessage");

  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener("mouseover", () => {
      const value = parseInt(star.dataset.value);
      highlightStars(value);
    });

    star.addEventListener("mouseout", () => {
      highlightStars(selectedRating);
    });

    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.value);
      highlightStars(selectedRating);
      showRateMessage(selectedRating);
    });
  });

  function highlightStars(rating) {
    stars.forEach(star => {
      star.classList.remove("hovered", "selected");
      if (parseInt(star.dataset.value) <= rating) {
        star.classList.add("selected");
      }
    });
  }

  function showRateMessage(rating) {
    const replies = {
      1: "🌚 Chovva dosham detected in UI. We’ll fix it!",
      2: "🥰 Was hoping for a cosmic slap. Got a gentle nudge instead.",
      3: "😌 Okay okay... Mid like your relationship?",
      4: "😍 We made you smile! Shubha dosham!",
      5: "😬 If my ex saw this, they’d have come back out of pity."
    };
    message.textContent = replies[rating] || "Thanks for the feedback!";
  }
});

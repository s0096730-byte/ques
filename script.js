const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

// बटन भगाने का लॉजिक
function moveButton() {
    // अब हम बटन को 'fixed' कर देंगे ताकि वह स्क्रीन पर कहीं भी जा सके
    noBtn.style.position = "fixed"; 
    
    // मोबाइल स्क्रीन की लिमिट निकालना
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// 1. डेस्कटॉप (Mouse) के लिए
noBtn.addEventListener("mouseover", moveButton);

// 2. मोबाइल (Touch) के लिए
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); 
    moveButton();
});

// 3. Fail Safe (अगर कोई क्लिक कर दे तो भी Yes हो जाए)
noBtn.addEventListener("click", nextPage);

// Yes बटन का फंक्शन
function nextPage() {
    document.body.innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <h1 style="font-size: 2.5rem; color: white;">Yay! I knew it! ❤️🥰</h1>
            <p style="font-size: 1.2rem; color: white;">(My love is inescapable! 😉)</p>
            <img src="ic.gif" alt="My Valentine" style="width: 200px;">
        </div>
    `;
    // बैकग्राउंड पूरी तरह लाल/गुलाबी हो जाए
    document.body.style.backgroundColor = "#ff4d6d";
    
    // Flex को हटाकर नार्मल ब्लॉक कर देंगे ताकि लेआउट न बिगड़े
    document.body.style.display = "block";
    document.body.style.paddingTop = "100px";
}
document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const text = document.getElementById('emailInput').value;
    const resultBox = document.getElementById('result');
    const btn = document.getElementById('analyzeBtn');

    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    // 1. UI ko "Scanning" state mein daalein
    btn.innerText = "🔍 SCANNING ...";
    btn.disabled = true; // Button freeze kar dein
    btn.style.opacity = "0.7";
    resultBox.style.display = "none";

    try {
        // 2. Artificial Delay (2 seconds) taaki AI feel aaye
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. Flask API call karein
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email_text: text })
        });

        const data = await response.json();
        
        // 4. Result dikhayein
        resultBox.style.display = "block";
        if (data.prediction === "spam") {
            resultBox.className = "result-box spam";
            resultBox.innerHTML = "🚨 SPAM DETECTED<br><small>Spam patterns found in our neural network.</small>";
        } else {
            resultBox.className = "result-box safe";
            resultBox.innerHTML = "✅ EMAIL IS SAFE<br><small>No malicious signatures detected.</small>";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Connection Error!");
    } finally {
        // 5. Button wapas normal karein
        btn.innerText = "Analyze Now";
        btn.disabled = false;
        btn.style.opacity = "1";
    }
});
function analyzePassword() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");

    let strength = 0;

    if (password.length > 6) strength++;
    if (password.length > 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    let colors = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e"];
    let messages = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

    strengthBar.style.width = (strength * 20) + "%";
    strengthBar.style.background = colors[strength - 1] || "#334155";
    strengthText.textContent = messages[strength - 1] || "";
}

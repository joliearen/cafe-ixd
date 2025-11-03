function get_answer() {
    const answers = [
        '#8ba888 (Matcha) Latte 🍵',
        '#9a87b8 (London Fog) Latte ☁️',
        '#e9a447 (Turmeric) Latte 🧡',
        '#e1ccb1 (Chai) Latte 🫖',
        '#efd6da (Rose) Latte 🌷',
    ];

    response = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('clickhere').innerHTML = "Not up for it? Pick another:"
    document.getElementById('suggestion').innerHTML = "Our suggestion: " + response;

}
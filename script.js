let score = 0;
const messages = [
    "Hebat sekali! 🎉", 
    "Wah, kamu pintar! 🌟", 
    "Lagi, dong! Keren! 🚀", 
    "Yeay, dapat bintang! ⭐"
];

function catchStar() {
    score += 1;
    document.getElementById("score").innerText = score;
    
    // Pilih pesan acak untuk apresiasi anak
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMsg;
    
    // Efek tombol membesar sedikit saat diklik
    const btn = document.getElementById("spawn-btn");
    btn.style.transform = "scale(1.1)";
    setTimeout(() => {
        btn.style.transform = "scale(1)";
    }, 100);
}

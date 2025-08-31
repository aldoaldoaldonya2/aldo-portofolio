// Initialize canvas
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas dengan DPR
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    ctx.scale(dpr, dpr); // biar koordinat sesuai ukuran CSS px
}
resizeCanvas();

// Particle properties
let particles = [];
let particleCount = window.innerWidth <= 768 ? 30 : 70;
const particleColor = 'rgba(173, 216, 230, 0.25)';
const connectionColor = 'rgba(173, 216, 230, 0.2)';
const connectionDistance = 100;

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) this.speedX = -this.speedX;
        if (this.y > window.innerHeight || this.y < 0) this.speedY = -this.speedY;
    }

    draw() {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles() {
    particles = [];
    particleCount = window.innerWidth <= 768 ? 30 : 80;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                ctx.strokeStyle = connectionColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let p of particles) {
        p.update();
        p.draw();
    }

    connectParticles();
    requestAnimationFrame(animate);
}

// Resize listener
window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});

// Init
createParticles();
animate();

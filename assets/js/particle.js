// Initialize canvas
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Function to resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Particle properties
let particles = [];
let particleCount = window.innerWidth <= 768 ? 30 : 70;
const particleColor = 'rgba(173, 216, 230, 0.6)'; // light blue with transparency
const connectionColor = 'rgba(173, 216, 230, 0.2)';
const connectionDistance = 150;

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off the walls
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
function createParticles() {
    particles = []; // reset array
    particleCount = window.innerWidth <= 768 ? 30 : 70; // update count
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Connect particles with lines when they're close
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

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    connectParticles();

    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', function () {
    resizeCanvas();
    createParticles(); // regenerate particles sesuai ukuran baru
});

// Initialize and start animation
createParticles();
animate();

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;
let score;
let interval;

function setup() {
    snake = new Snake();
    fruit = new Fruit();
    score = 0;
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                snake.setDirection(0, -1);
                break;
            case 'ArrowDown':
                snake.setDirection(0, 1);
                break;
            case 'ArrowLeft':
                snake.setDirection(-1, 0);
                break;
            case 'ArrowRight':
                snake.setDirection(1, 0);
                break;
        }
    });

    interval = setInterval(loop, 100); // Adjust this value to change the speed (higher is slower)
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    fruit.draw();
    checkCollision();
}

function checkCollision() {
    // Check if the snake has eaten the fruit
    if (snake.x === fruit.x && snake.y === fruit.y) {
        score++;
        snake.grow();
        fruit.pickLocation();
    }

    // Check if the snake has hit the walls or itself
    if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 || snake.y >= canvas.height || snake.hasCollided()) {
        clearInterval(interval); // Stop the game loop
        alert('Game Over! Your score: ' + score);
        document.location.reload();
    }
}

class Snake {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.tail = [];
        this.total = 0;
    }

    setDirection(x, y) {
        this.xSpeed = x * scale;
        this.ySpeed = y * scale;
    }

    update() {
        const head = { x: this.x, y: this.y };
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.tail.unshift(head);
        if (this.tail.length > this.total) {
            this.tail.pop();
        }
    }

    draw() {
        ctx.fillStyle = 'green';
        for (const segment of this.tail) {
            ctx.fillRect(segment.x, segment.y, scale, scale);
        }
        ctx.fillStyle = 'darkgreen';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    grow() {
        this.total++;
    }

    hasCollided() {
        for (const segment of this.tail) {
            if (this.x === segment.x && this.y === segment.y) {
                return true;
            }
        }
        return false;
    }
}

class Fruit {
    constructor() {
        this.pickLocation();
    }

    pickLocation() {
        this.x = Math.floor(Math.random() * columns) * scale;
        this.y = Math.floor(Math.random() * rows) * scale;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}

setup();
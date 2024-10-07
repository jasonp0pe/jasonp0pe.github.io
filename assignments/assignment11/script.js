// Bird class to store bird data
class Bird {
    constructor(title, image, size, lifespan, food, habitat, fact) {
        this.title = title;
        this.image = image;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    getSection() {
        return `
            <div class="bird-card w3-quarter" onclick="showModal('${this.title}')">
                <img src="images/${this.image}" alt="${this.title}">
                <h3 class="bird-card-title">${this.title}</h3>
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <img src="images/${this.image}" alt="${this.title}">
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan}</p>
            <p><strong>Food:</strong> ${this.food}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Interesting Fact:</strong> ${this.fact}</p>
        `;
    }
}

// Array of Bird objects
const birds = [
    new Bird("Hummingbird", "hummingbird.jpg", "2.5 inches", "3-5 years", "Nectar (Sugar water)", "Trees", "They're nicknamed 'Hummers'"),
    new Bird("Blue Jay", "bluejay.jpg", "9-12 inches", "7 years", "Nuts, seeds", "Forests", "Blue Jays are very social birds"),
    new Bird("Cardinal", "cardinal.jpg", "8-9 inches", "3 years", "Seeds, insects", "Woodlands", "Male cardinals are bright red to attract mates"),
    new Bird("Robin", "robin.jpg", "10 inches", "2 years", "Worms, fruits", "Gardens", "Robins are known for their bright orange-red chest")
];

// Function to add bird sections to the DOM
function loadBirds() {
    const birdContainer = document.getElementById("bird-container");
    birds.forEach(bird => {
        birdContainer.innerHTML += bird.getSection();
    });
}

// Function to display the modal with bird details
function showModal(birdTitle) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");

    const bird = birds.find(b => b.title === birdTitle);
    modalTitle.innerText = bird.title;
    modalContent.innerHTML = bird.getExpandedSection();

    modal.style.display = 'block';
}

// Load birds on page load
window.onload = loadBirds;

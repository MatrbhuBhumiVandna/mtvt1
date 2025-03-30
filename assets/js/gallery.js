// Patriots Gallery
const patriotsData = [
    {
        name: "Bhagat Singh",
        image: "assets/images/patriots/bhagat-singh.jpg",
        description: "Revolutionary who fought against British rule in India. Known for his bravery and sacrifice at a young age."
    },
    {
        name: "Rani Lakshmibai",
        image: "assets/images/patriots/rani-lakshmibai.jpg",
        description: "The Queen of Jhansi who led the Indian Rebellion of 1857 against the British East India Company."
    },
    {
        name: "Subhash Chandra Bose",
        image: "assets/images/patriots/subhash-bose.jpg",
        description: "Founder of the Indian National Army and a key figure in India's independence movement."
    },
    {
        name: "Sardar Vallabhbhai Patel",
        image: "assets/images/patriots/sardar-patel.jpg",
        description: "First Deputy Prime Minister of India who played a key role in the country's struggle for independence."
    },
    {
        name: "Mahatma Gandhi",
        image: "assets/images/patriots/mahatma-gandhi.jpg",
        description: "Leader of the Indian independence movement against British rule, known for nonviolent resistance."
    },
    {
        name: "Chandra Shekhar Azad",
        image: "assets/images/patriots/chandra-azad.jpg",
        description: "Revolutionary who reorganised the Hindustan Republican Association after the death of its founder."
    }
];

function loadPatriotsGallery() {
    const galleryContainer = document.getElementById('patriotsGallery');
    
    patriotsData.forEach(patriot => {
        const patriotCard = document.createElement('div');
        patriotCard.className = 'patriot-card';
        
        patriotCard.innerHTML = `
            <img src="${patriot.image}" alt="${patriot.name}" class="patriot-img">
            <div class="patriot-info">
                <h3>${patriot.name}</h3>
                <p>${patriot.description}</p>
            </div>
        `;
        
        galleryContainer.appendChild(patriotCard);
    });
}

// Load gallery when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadPatriotsGallery);

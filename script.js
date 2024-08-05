const researchTopics = [
    { name: 'Hoplites', cost: 4 },
    { name: 'Plow', cost: 5 },
    { name: 'Bireme', cost: 3 },
    { name: 'Espionage', cost: 6 },
    { name: 'Democracy', cost: 7 },
    // Add more topics as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const topicsContainer = document.getElementById('research-topics');
    researchTopics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.classList.add('topic');
        topicDiv.innerHTML = `${topic.name} - Cost: ${topic.cost} points`;
        topicsContainer.appendChild(topicDiv);
    });
});

function calculateResearchPoints() {
    const academyLevel = document.getElementById('academy-level').value;
    const researchPoints = academyLevel * 4;
    document.getElementById('research-points').textContent = researchPoints;
}

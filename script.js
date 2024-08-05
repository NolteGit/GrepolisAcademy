// Ensure the researchTopics array is included from researchTopics.js
let availableResearchPoints = 0;
let selectedResearch = [];

document.addEventListener('DOMContentLoaded', () => {
    calculateResearchPoints();
});

function calculateResearchPoints() {
    const academyLevel = parseInt(document.getElementById('academy-level').value);
    availableResearchPoints = academyLevel * 4;
    document.getElementById('research-points').textContent = availableResearchPoints;
    updateResearchTopics(academyLevel);
    updateSelectedResearch();
}

function updateResearchTopics(level) {
    const topicsContainer = document.querySelector('.research-grid');
    if (!topicsContainer) {
        console.error("Error: .research-grid element not found");
        return;
    }
    topicsContainer.innerHTML = '';

    researchTopics.forEach(topic => {
        if (topic.level <= level) {
            const topicDiv = document.createElement('div');
            topicDiv.classList.add('research-item');
            topicDiv.innerHTML = `
                ${topic.name} - Cost: ${topic.cost} points
                <button onclick="selectResearch(${topic.id})">Select</button>
            `;
            topicsContainer.appendChild(topicDiv);
        }
    });
}

function selectResearch(id) {
    const topic = researchTopics.find(t => t.id === id);

    if (availableResearchPoints >= topic.cost && !selectedResearch.includes(id)) {
        availableResearchPoints -= topic.cost;
        selectedResearch.push(id);
    } else if (selectedResearch.includes(id)) {
        availableResearchPoints += topic.cost;
        selectedResearch = selectedResearch.filter(tid => tid !== id);
    }

    document.getElementById('research-points').textContent = availableResearchPoints;
    updateSelectedResearch();
}

function updateSelectedResearch() {
    const selectedResearchNames = selectedResearch.map(id => {
        const topic = researchTopics.find(t => t.id === id);
        return topic.name;
    });

    document.getElementById('selected-research').textContent = selectedResearchNames.join(', ') || 'None';
}

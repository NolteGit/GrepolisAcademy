// Ensure the researchTopics array is included from researchTopics.js
let availableResearchPoints = 0;
let selectedResearch = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('academy-level').addEventListener('input', calculateResearchPoints);
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

    let currentLevel = 1;
    while (currentLevel <= level) {
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('level-container');

        researchTopics.forEach(topic => {
            if (topic.level === currentLevel) {
                const topicDiv = document.createElement('div');
                topicDiv.classList.add('research-item');
                topicDiv.textContent = `${topic.name} (${topic.cost})`;
                topicDiv.onclick = () => selectResearch(topic.id);
                if (selectedResearch.includes(topic.id)) {
                    topicDiv.classList.add('selected');
                }
                levelContainer.appendChild(topicDiv);
            }
        });

        if (levelContainer.childElementCount > 0) {
            const levelHeader = document.createElement('h3');
            levelHeader.textContent = `Level ${currentLevel}`;
            topicsContainer.appendChild(levelHeader);
            topicsContainer.appendChild(levelContainer);
        }
        
        currentLevel += 3; // Move to the next level that unlocks new research topics
    }
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
    updateResearchTopics(parseInt(document.getElementById('academy-level').value));
    updateSelectedResearch();
}

function updateSelectedResearch() {
    const selectedResearchNames = selectedResearch.map(id => {
        const topic = researchTopics.find(t => t.id === id);
        return topic.name;
    });

    document.getElementById('selected-research').textContent = selectedResearchNames.join(', ') || 'None';
}

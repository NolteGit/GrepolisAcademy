// Ensure the researchTopics array is included from researchTopics.js
let availableResearchPoints = 0;
let selectedResearch = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('academy-level').addEventListener('input', calculateResearchPoints);
    document.getElementById('academy-level').value = 1; // Set default level to 1
    calculateResearchPoints();
});

function increaseLevel() {
    const academyLevelInput = document.getElementById('academy-level');
    let academyLevel = parseInt(academyLevelInput.value);
    if (academyLevel < 37) {
        academyLevel++;
        academyLevelInput.value = academyLevel;
        calculateResearchPoints();
    }
}

function decreaseLevel() {
    const academyLevelInput = document.getElementById('academy-level');
    let academyLevel = parseInt(academyLevelInput.value);
    if (academyLevel > 1) {
        academyLevel--;
        academyLevelInput.value = academyLevel;
        calculateResearchPoints();
    }
}

function calculateResearchPoints() {
    const academyLevel = parseInt(document.getElementById('academy-level').value);
    const totalResearchPoints = academyLevel * 4;
    
    // Calculate used research points
    const usedResearchPoints = selectedResearch.reduce((sum, id) => {
        const topic = researchTopics.find(t => t.id === id);
        return sum + (topic ? topic.cost : 0);
    }, 0);

    availableResearchPoints = totalResearchPoints - usedResearchPoints;
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

    for (let i = 1; i <= level; i += 3) {
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('level-container');

        researchTopics.forEach(topic => {
            if (topic.level === i || topic.level === i + 1 || topic.level === i + 2) {
                const topicDiv = document.createElement('div');
                topicDiv.classList.add('research-item');
                topicDiv.textContent = `${topic.name} (${topic.cost})`;
                topicDiv.onclick = () => selectResearch(topic.id);
                if (selectedResearch.includes(topic.id)) {
                    topicDiv.classList.add('selected');
                }
                const tooltip = document.createElement('span');
                tooltip.classList.add('tooltip');
                tooltip.textContent = topic.description;
                topicDiv.appendChild(tooltip);

                levelContainer.appendChild(topicDiv);
            }
        });

        if (levelContainer.childElementCount > 0) {
            topicsContainer.appendChild(levelContainer);
        }
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

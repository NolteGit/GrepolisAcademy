const researchTopics = [
    { id: 1, name: 'Schleuderer', cost: 4, level: 1 },
    { id: 2, name: 'Bogenschütze', cost: 8, level: 1 },
    { id: 3, name: 'Stadtwache', cost: 3, level: 1 },
    { id: 4, name: 'Hoplit', cost: 8, level: 4 },
    { id: 5, name: 'Diplomatie', cost: 3, level: 4 },
    { id: 6, name: 'Meteorologie', cost: 4, level: 4 },
    { id: 7, name: 'Spionage', cost: 3, level: 7 },
    { id: 8, name: 'Beute', cost: 3, level: 7 },
    { id: 9, name: 'Loyalität der Dorfbewohner', cost: 6, level: 7 },
    { id: 10, name: 'Keramik', cost: 4, level: 7 },
    { id: 11, name: 'Reiter', cost: 8, level: 10 },
    { id: 12, name: 'Architektur', cost: 6, level: 10 },
    { id: 13, name: 'Ausbilder', cost: 4, level: 10 },
    { id: 14, name: 'Bireme', cost: 8, level: 13 },
    { id: 15, name: 'Baukran', cost: 4, level: 13 },
    { id: 16, name: 'Schiffbauer', cost: 6, level: 13 },
    { id: 17, name: 'Kolonieschiff', cost: 0, level: 13 },
    { id: 18, name: 'Streitwagen', cost: 8, level: 16 },
    { id: 19, name: 'Feuerschiff', cost: 8, level: 16 },
    { id: 20, name: 'Wehrpflicht', cost: 4, level: 16 },
    { id: 21, name: 'Brander', cost: 8, level: 19 },
    { id: 22, name: 'Katapult', cost: 8, level: 19 },
    { id: 23, name: 'Kryptographie', cost: 6, level: 19 },
    { id: 25, name: 'Schnelles Transportboot', cost: 8, level: 22 },
    { id: 26, name: 'Pflug', cost: 4, level: 22 },
    { id: 27, name: 'Kojen', cost: 6, level: 22 },
    { id: 28, name: 'Trireme', cost: 8, level: 25 },
    { id: 29, name: 'Phalanx', cost: 9, level: 25 },
    { id: 30, name: 'Durchbruch', cost: 6, level: 25 },
    { id: 31, name: 'Mathematik', cost: 6, level: 25 },
    { id: 32, name: 'Eroberung', cost: 0, level: 28 },
    { id: 34, name: 'Rammbock', cost: 10, level: 28 },
    { id: 35, name: 'Kartographie', cost: 8, level: 28 },
    { id: 36, name: 'Steinhagel', cost: 4, level: 31 },
    { id: 37, name: 'Tempelplünderung', cost: 6, level: 31 },
    { id: 38, name: 'Göttliche Auslese', cost: 10, level: 31 },
    { id: 39, name: 'Kampferfahrung', cost: 6, level: 34 },
    { id: 40, name: 'Starker Wein', cost: 4, level: 34 },
    { id: 41, name: 'Segel setzen', cost: 8, level: 34 },
];

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
        updateSelectedResearch();
    } else if (selectedResearch.includes(id)) {
        availableResearchPoints += topic.cost;
        selectedResearch = selectedResearch.filter(tid => tid !== id);
        updateSelectedResearch();
    }

    document.getElementById('research-points').textContent = availableResearchPoints;
}

function updateSelectedResearch() {
    const selectedResearchNames = selectedResearch.map(id => {
        const topic = researchTopics.find(t => t.id === id);
        return topic.name;
    });

    document.getElementById('selected-research').textContent = selectedResearchNames.join(', ') || 'None';
}

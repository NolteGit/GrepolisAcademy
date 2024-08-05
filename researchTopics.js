const researchTopics = [
    // Level 1
    { id: 1, level: 1, name: "Schleuderer", description: "Ermöglicht die Ausbildung von Schleuderern.", cost: 4 },
    { id: 2, level: 1, name: "Bogenschütze", description: "Ermöglicht die Ausbildung von Bogenschützen.", cost: 8 },
    { id: 3, level: 1, name: "Stadtwache", description: "Die Stadtwache verstärkt deine Miliz mit fünf Kämpfern je Bauernhofstufe.", cost: 3 },

    // Level 4
    { id: 4, level: 4, name: "Hoplit", description: "Ermöglicht die Ausbildung von Hopliten.", cost: 8 },
    { id: 6, level: 4, name: "Meteorologie", description: "Alle in der Kaserne ausgebildeten Einheiten bewegen sich um 10% schneller.", cost: 4 },

    // Level 7
    { id: 7, level: 7, name: "Spionage", description: "Ein abgeschickter Spion wird einen Bonus in Höhe von 20% zusätzlicher Silbermünzen erhalten.", cost: 3 },
    { id: 9, level: 7, name: "Loyalität der Dorfbewohner", description: "Bauerndörfer liefern nun 115% Ressis, verdoppeln allerdings auch die Abklingzeit (nur beim neuen Bauerndorfsystem).", cost: 6 },
    { id: 10, level: 7, name: "Keramik", description: "Dein Lager kann 2500 weitere Rohstoffe lagern.", cost: 4 },

    // Level 10
    { id: 11, level: 10, name: "Reiter", description: "Ermöglicht die Ausbildung von Reitern.", cost: 8 },
    { id: 12, level: 10, name: "Architektur", description: "Durch die Entwicklung der Architektur können die Rohstoffkosten für Gebäude um 15% gesenkt werden.", cost: 6 },
    { id: 13, level: 10, name: "Ausbilder", description: "Ausbilder fördern die Ausbildung deiner Soldaten. Deine Kaserne arbeitet 10% schneller.", cost: 4 },

    // Level 13
    { id: 14, level: 13, name: "Bireme", description: "Ermöglicht den Bau von Biremen.", cost: 8 },
    { id: 15, level: 13, name: "Baukran", description: "Erhöht die Baugeschwindigkeit im Senat um 15%.", cost: 4 },
    { id: 16, level: 13, name: "Schiffbauer", description: "Schiffbauer unterstützen deine Werftarbeiter. Der Hafen arbeitet 10% schneller.", cost: 6 },
    { id: 17, level: 13, name: "Kolonieschiff", description: "Ermöglicht den Bau eines Kolonieschiffs. Voraussetzung: Hafen Stufe 10.", cost: 0 },

    // Level 16
    { id: 18, level: 16, name: "Streitwagen", description: "Ermöglicht den Bau von Streitwagen.", cost: 8 },
    { id: 19, level: 16, name: "Feuerschiff", description: "Ermöglicht den Bau von Feuerschiffen.", cost: 8 },
    { id: 20, level: 16, name: "Wehrpflicht", description: "Durch die Einführung der Wehrpflicht sinken die Kosten (Ressourcen-Kosten: Holz, Stein und Silber) für Landeinheiten um 10%.", cost: 4 },

    // Level 19
    { id: 21, level: 19, name: "Brander", description: "Ermöglicht den Bau von Brandern.", cost: 8 },
    { id: 22, level: 19, name: "Katapult", description: "Ermöglicht den Bau von Katapulten.", cost: 8 },
    { id: 23, level: 19, name: "Kryptographie", description: "Wann immer deine Stadt Silbermünzen wegen eines feindlichen Spions verliert, verlierst du 10% weniger.", cost: 6 },

    // Level 22
    { id: 25, level: 22, name: "Schnelles Transportboot", description: "Ermöglicht den Bau von schnellen Transportschiffen.", cost: 8 },
    { id: 26, level: 22, name: "Pflug", description: "Der Bauernhof kann 200 weitere Einwohner versorgen.", cost: 4 },
    { id: 27, level: 22, name: "Kojen", description: "Deine Transportschiffe können 6 weitere Einheiten transportieren.", cost: 6 },

    // Level 25
    { id: 28, level: 25, name: "Trireme", description: "Ermöglicht den Bau von Triremen.", cost: 8 },
    { id: 29, level: 25, name: "Phalanx", description: "Deine Truppen bilden eine mächtige Phalanx und kämpfen so 10% stärker.", cost: 9 },
    { id: 30, level: 25, name: "Durchbruch", description: "Ermöglicht den Angriff Durchbruch. Deine Schiffe ermöglichen einen besseren Durchbruch deiner Transportboote zum Land. Dadurch kämpfen deine Schiffe allerdings 50% schlechter.", cost: 6 },
    { id: 31, level: 25, name: "Mathematik", description: "Durch die Entwicklung der Mathematik können die Rohstoffkosten für Schiffe um 10% gesenkt werden.", cost: 6 },

    // Level 28
    { id: 33, level: 28, name: "Revolte", description: "Ermöglicht das Erobern feindlicher Städte (nur auf Welten mit dem Eroberungssystem Revolte).", cost: 0 },
    { id: 34, level: 28, name: "Rammbock", description: "Die Kampfkraft deiner Schiffe erhöht sich um 10%.", cost: 10 },
    { id: 35, level: 28, name: "Kartographie", description: "Durch die Entwicklung der Kartographie können deine Schiffe besser navigieren und sind 10% schneller.", cost: 8 },

    // Level 31
    { id: 36, level: 31, name: "Steinhagel", description: "Ermöglicht es deinen Katapulten zusätzlich zur Stadtmauer ein zufälliges Gebäude zu beschädigen (außer Spezialgebäude). Pro Katapult wird die Wahrscheinlichkeit um 10% erhöht.", cost: 4 },
    { id: 37, level: 31, name: "Tempelplünderung", description: "Deine mythischen Einheiten können Gunst aus feindlichen Tempeln erbeuten (5 Gunst pro Einheit mit Ausnahme von Hydren und Sirenen).", cost: 6 },
    { id: 38, level: 31, name: "Göttliche Auslese", description: "Deine mythischen Einheiten kämpfen im Angriff und in der Verteidigung 10% besser.", cost: 10 },

    // Level 34
    { id: 39, level: 34, name: "Kampferfahrung", description: "Du erhältst für 10% deiner verlorenen Einheiten zusätzliche Kampfpunkte.", cost: 6 },
    { id: 40, level: 34, name: "Starker Wein", description: "Die Dauer eines Stadtfestes und der Olympischen Spiele verkürzt sich um 15%.", cost: 4 },
    { id: 41, level: 34, name: "Segel setzen", description: "Deine Kolonieschiffe verfügen über größere Segel und erreichen ihr Ziel 10% schneller.", cost: 8 }
];

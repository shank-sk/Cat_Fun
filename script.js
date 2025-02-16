const facts = [
    "Whisker Sensitivity: Cats have highly sensitive whiskers that can detect even the slightest changes in their environment, helping them navigate and hunt in the dark.",
    "Purring Mystery: While cats often purr when they're content, they also purr when they're frightened, in pain, or even when they're healing. The frequency of their purrs has been shown to have therapeutic effects.",
    "Unique Nose Prints: Just like human fingerprints, each cat's nose print is unique and can be used to identify them.",
    "High Jumpers: Cats can jump up to six times their body length in one leap, thanks to their powerful leg muscles.",
    "Sleepy Heads: On average, cats sleep for about 13 to 16 hours a day, which means they spend approximately two-thirds of their lives sleeping.",
    "Communication: Cats have a wide range of vocalizations, with over 100 different sounds, compared to dogs' 10. They use these sounds to communicate with humans and other cats.",
    "Ancient Companions: Cats were domesticated around 9,000 years ago, and they were revered in ancient Egypt, where they were often depicted in art and even mummified.",
    "Flexible Bodies: Cats have a flexible spine and a unique collarbone that allows them to squeeze through tight spaces and land on their feet when they fall.",
    "Grooming Experts: Cats spend a significant amount of time grooming themselves, which helps them regulate their body temperature and keep their fur clean.",
    "Night Vision: Cats have excellent night vision, allowing them to see in light levels six times lower than what a human needs. This makes them excellent nocturnal hunters."
];

document.getElementById('showFactButton').addEventListener('click', function() {
    const factsList = document.getElementById('factsList');
    factsList.innerHTML = ''; // Clear any existing fact

    const listItem = document.createElement('li');
    const randomIndex = Math.floor(Math.random() * facts.length); // Get a random fact
    listItem.textContent = facts[randomIndex];
    factsList.appendChild(listItem);
});

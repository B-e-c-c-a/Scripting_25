console.log("We are inside!!");
document.getElementById('storyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    generateStory();
});

// Main function to generate the story
function generateStory() {
    // Create variables and assign user input
    const heroName = document.getElementById('heroName').value;
    const sidekickName = document.getElementById('sidekickName').value;
    const heroTrait = document.getElementById('heroTrait').value;
    const magicalItem = document.getElementById('magicalItem').value;
    const villainName = document.getElementById('villainName').value;
    const kingdom = document.getElementById('kingdom').value;
    const quest = document.getElementById('quest').value;
    const obstacle = document.getElementById('obstacle').value;
    const reward = document.getElementById('reward').value;
    const creature = document.getElementById('creature').value;
    const storyTone = document.getElementById('storyTone').value;
    const timeOfDay = document.querySelector('input[name="timeOfDay"]:checked').value;

    // Logic: Conditional statements for customization
    let storyOpening = '';
    let storyImage = '';
    let timeDescription = '';
    let toneModifier = '';

    // Time of day conditional
    if (timeOfDay === 'dawn') {
        timeDescription = 'As the first rays of sunlight pierced through the morning mist';
        storyImage = 'https://i.pinimg.com/736x/87/39/3f/87393f4fc30d56d46315d8d801dddbc6.jpg';
    } else if (timeOfDay === 'midday') {
        timeDescription = 'Under the blazing midday sun';
        storyImage = 'https://i.pinimg.com/736x/69/c3/87/69c38781efba44ef9e8528e63370ac48.jpg';
    } else if (timeOfDay === 'dusk') {
        timeDescription = 'As twilight painted the sky in shades of orange and purple';
        storyImage = 'https://i.pinimg.com/736x/57/0c/85/570c85324f4afb28fd6f461a8ac2b9f3.jpg';
    } else {
        timeDescription = 'Under the mysterious glow of the full moon';
        storyImage = 'https://i.pinimg.com/736x/de/cb/57/decb5717317c49800c4a4ba233300f2a.jpg';
    }

    // Story tone conditional
    if (storyTone === 'epic') {
        storyOpening = '<p><strong>' + timeDescription + ', a legendary adventure was about to unfold.</strong></p>';
        toneModifier = 'With unwavering determination and legendary courage';
    } else if (storyTone === 'mysterious') {
        storyOpening = '<p><em>' + timeDescription + ', shadows whispered of an ancient prophecy.</em></p>';
        toneModifier = 'Through cunning and mysterious powers';
    } else {
        storyOpening = '<p>' + timeDescription + ', an exciting and whimsical journey began!</p>';
        toneModifier = 'With cheerful spirits and playful tactics';
    }

    // Generate the story
    const storyHTML = `
        ${storyOpening}
        
        <img src="${storyImage}" alt="Adventure Scene" class="story-image">
        
        <p>In the magnificent kingdom of <strong>${kingdom}</strong>, there lived a ${heroTrait} hero named <strong>${heroName}</strong>. ${heroName} was known throughout the land for being exceptionally ${heroTrait}, a trait that would soon be put to the ultimate test.</p>
        
        <p>One fateful day, ${heroName} received word that the evil <strong>${villainName}</strong> had risen to power and threatened the peace of ${kingdom}. The only way to stop ${villainName} was to ${quest}, but the path was treacherous and filled with danger.</p>
        
        <p>${heroName} knew they couldn't do this alone. They sought out their trusted companion, <strong>${sidekickName}</strong>, who agreed without hesitation to join the quest. Together, they retrieved the legendary <strong>${magicalItem}</strong>, an artifact of immense power that would aid them on their journey.</p>
        
        <p>Their adventure led them through ${obstacle}, where they encountered a majestic <strong>${creature}</strong>. ${toneModifier}, ${heroName} and ${sidekickName} befriended the ${creature}, who shared ancient wisdom and guided them toward ${villainName}'s stronghold.</p>
        
        <p>The final confrontation was intense. ${villainName} wielded dark magic and seemed invincible, but ${heroName}'s ${heroTrait} nature and the power of the ${magicalItem} proved stronger. With ${sidekickName}'s help and the blessing of the ${creature}, they defeated ${villainName} once and for all!</p>
        
        <p class="mt-4"><strong>The kingdom of ${kingdom} was saved! As a reward for their bravery, ${heroName} and ${sidekickName} were granted ${reward}. They were celebrated as heroes, and their tale was told for generations to come.</strong></p>
        
        <p class="text-center mt-4"><em> The End </em></p>
    `;

    // Display the story
    document.getElementById('storyContent').innerHTML = storyHTML;
    document.getElementById('storyDisplay').classList.add('active');

    // Smooth scroll to story
    document.getElementById('storyDisplay').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
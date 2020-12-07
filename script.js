const projects = [
    {
        name: 'four-card-feature-section',
        github: 'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/four-card-feature-section'
    },
    {
        name: 'faq-accordion-card',
        github: 'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/faq-accordion-card'
    },
    {
        name: 'fylo-data-storage-component',
        github: 'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/fylo-data-storage-component'
    },
    {
        name: 'fylo-landing-page',
        github: 'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/fylo-landing-page'
    },
    {
        name: 'social-proof-section',
        github: 'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/social-proof-section'
    },
    {
        name:'intro-component-with-signup-form',
        github:'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/intro-component-with-signup-form'
    },
    {
        name:'social-media-dashboard-with-theme-switcher',
        github:'https://github.com/jigarp4tel/frontend-mentor-challenges/tree/main/social-media-dashboard-with-theme-switcher'
    }
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `<a href = "./${name}/index.html">
    <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
    <p>${i + 1}. ${formatProjectName(name)}</p>
    </a>
    <div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github">
            <i class="fab fa-github"></i>
			</a>
		</div>
    `;

    list.appendChild(listItem)
}
);

function formatProjectName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}
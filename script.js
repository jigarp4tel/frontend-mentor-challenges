const projects = [
    {
        name: 'four-card-feature-section',
        github: 'https://github.com/jigarp4tel/four-card-feature-section'
    },
    {
        name: 'faq-accordion-card',
        github: 'https://github.com/jigarp4tel/faq-accordion-card'
    },
    {
        name: 'fylo-data-storage-component',
        github: 'https://github.com/jigarp4tel/fylo-data-storage-component'
    },
    {
        name: 'fylo-landing-page',
        github: 'https://github.com/jigarp4tel/fylo-landing-page'
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
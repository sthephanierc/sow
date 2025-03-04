document.addEventListener('DOMContentLoaded', function () {
	const websiteList = document.getElementById('website-list');
	const iframeDisplay = document.getElementById('iframe-display');

	// Fetch the JSON data
	fetch('./data/fdw-25.json')
		.then((response) => response.json())
		.then((data) => {
			data.forEach((site) => {
				let listItem = document.createElement('li');
				listItem.textContent = site.user;
				listItem.title = site.description;

				// Change iframe on click
				listItem.addEventListener('click', () => {
					iframeDisplay.src = site.url;
				});

				websiteList.appendChild(listItem);
			});

			// Load the first site by default
			if (data.length > 0) {
				iframeDisplay.src = data[0].url;
			}
		})
		.catch((error) => console.error('Error loading JSON:', error));
});

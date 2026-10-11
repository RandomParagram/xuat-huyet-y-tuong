window.onload = function() {	
const brandPanel = document.getElementById('brandPanel');
const toggleBtn = document.getElementById('togglePanelBtn');
const toggleIcon = document.getElementById('toggleIcon');


toggleBtn.addEventListener('click', () => {
    // Toggles the 'minimized' class on the panel
    const isMinimized = brandPanel.classList.toggle('minimized');
    // Change the arrow icon based on state
    toggleIcon.textContent = isMinimized ? '▲' : '▼';
});

// 2. Switch Branding
const brandButtons = document.querySelectorAll('.brand-btn');

brandButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the preset name from the clicked button (e.g., 'brand-b')
        const selectedBrand = button.getAttribute('data-preset');

        // Apply it to the <html> tag
        document.documentElement.setAttribute('data-brand', selectedBrand);
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', (e => {
    e.preventDefault();
	}));
}

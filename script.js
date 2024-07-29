document.addEventListener('DOMContentLoaded', () => {
    const quickViewButtons = document.querySelectorAll('.quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            const projectImage = projectCard.querySelector('img').src;
            openModal(projectImage);
        });
    });

    function openModal(imageSrc) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${imageSrc}" alt="Quick View Image">
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenContent = document.getElementById('hiddenContent');

    toggleButton.addEventListener('click', () => {

        if (hiddenContent.style.display === 'block') {
            hiddenContent.style.display = 'none';
            toggleButton.textContent = 'Показать дополнительную информацию';

        } else {
            hiddenContent.style.display = 'block';
            toggleButton.textContent = 'Свернуть дополнительную информацию';
        }
    });
});

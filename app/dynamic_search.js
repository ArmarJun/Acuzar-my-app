function filterList() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
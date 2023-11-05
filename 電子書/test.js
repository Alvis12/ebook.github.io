// storybook.js

const totalPages = 10;  // 总页数
let currentPage = 1;

const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

function showPages(currentPage) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.style.display = 'none';
        page.classList.remove('odd', 'even');
        if (index >= currentPage - 1 && index <= currentPage + 2) {
            page.style.display = 'block';
            page.classList.add(index % 2 === 0 ? 'even' : 'odd');
        }
    });
}


nextPageButton.addEventListener('click', () => {
    if (currentPage + 2 <= totalPages) {
        currentPage += 2; // 翻两页
        prevPageButton.disabled = false;
        showPages(currentPage);
        if (currentPage + 2 >= totalPages) {
            nextPageButton.disabled = true;
        }
    }
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage -= 2; // 翻两页
        nextPageButton.disabled = false;
        showPages(currentPage);
        if (currentPage === 1) {
            prevPageButton.disabled = true;
        }
    }
});

showPages(currentPage);

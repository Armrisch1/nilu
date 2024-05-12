const swiper = new Swiper('.swiper-container', {
    loop: true, // Включает бесконечный цикл
    pagination: {
        el: '.swiper-pagination', // Пагинация
        clickable: true, // Возможность клика по точкам пагинации
    },
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "следующий"
        prevEl: '.swiper-button-prev', // Кнопка "предыдущий"
    },
});
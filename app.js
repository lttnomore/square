 
const square = document.getElementById("square");

square.addEventListener("click", () => {
    // Генерируем случайное смещение для квадрата
    const randomX = Math.random() * 100 - 50; // Случайное число от -50 до 50
    const randomY = Math.random() * 100 - 50; // Случайное число от -50 до 50

    // Применяем смещение к квадрату
    square.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Отключаем анимацию после завершения
    setTimeout(() => {
        square.style.transform = "translate(0, 0)";
    }, 200);
});

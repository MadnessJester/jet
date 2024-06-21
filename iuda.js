const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    const startingCount = +counter.textContent;
    const countInterval = setInterval(() => {
        const currentCount = +counter.textContent;
        if (currentCount < target) {
            counter.textContent = currentCount + 1;
        } else {
            clearInterval(countInterval);
        }
    }, 10);
});

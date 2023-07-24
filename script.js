document.body.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`#${event.key}`);
    if (!audio) { return; }
    audio.currentTime = 0;
    audio.play();
    const button = document.querySelector([`button[data-key=${event.key}]`]);
    button.classList.add('playing');
    setTimeout(() => {
        button.classList.remove('playing');
    }, audio.duration * 1000 - 100)
})

document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('click', () => {
        const dataKey = key.getAttribute('data-key')
        const audio = document.querySelector(`#${dataKey}`);
        if (!audio) { return; }
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        setTimeout(() => {
            key.classList.remove('playing');
        }, audio.duration * 1000 - 100)
    })
})

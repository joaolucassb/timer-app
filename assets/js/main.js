function timer () {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    const watch = document.querySelector('#relogio');
    let seconds = 0;
    let timer;

    function startTimer() {
        timer = setInterval(function() {
            seconds++;
            watch.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target

        if (el.classList.contains('iniciar')) {
            watch.classList.remove('pausado');
            clearInterval(timer)
            startTimer();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            watch.classList.add('pausado');
        }

        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            watch.innerHTML = '00:00:00';
            watch.classList.remove('pausado');
            seconds = 0;
        }
    });

}  

timer();
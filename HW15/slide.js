document.querySelectorAll('.slides').forEach(function (element) {
    var slideSize = element.clientWidth;
        currentPosition = 0;
        last = document.querySelector('.buttonLast');
        next = document.querySelector('.buttonNext');

    var timerId = setInterval(function () {
        currentPosition += slideSize;

        if (currentPosition >= element.scrollWidth) {
            currentPosition = 0;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});

    }, 3000);

    last.onclick = function () {
        clearInterval(timerId);

        currentPosition -= slideSize;

        if (currentPosition < 0) {
            currentPosition = element.scrollWidth - slideSize;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    }; 

    next.onclick = function () {
        clearInterval(timerId);

        currentPosition += slideSize;

        if (currentPosition >= element.scrollWidth) {
            currentPosition = 0;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    };

});

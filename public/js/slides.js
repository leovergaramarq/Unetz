const INTERVAL = 5000;
const TRANSITION_DURATION = 1000;
const sliders = {};

export default function slides() {
    sliding(document.querySelector('#banner-prom .slider'));
}

function sliding($slider) {
    const $slides = $slider.querySelector('ul');
    if ($slides.children.length < 2) return;

    sliders[$slider.id] = {
        interval: startInterval($slides, $slider.id)
    };

    const arrows = $slider.querySelectorAll('.arrow');
    for (let arrow of arrows) {
        arrow.addEventListener('click', e => {
            if (e.target.parentNode.classList.contains('arrow-left')) {
                previous($slides, $slider.id);
            } else {
                next($slides, $slider.id);
            }
            clearInterval(sliders[$slider.id].interval);
            sliders[$slider.id].interval = startInterval($slides, $slider.id);
        });
    }
}

function startInterval($slides, id) {
    return setInterval(() => next($slides, id), INTERVAL);
}

function previous($slides, id) {
    move($slides, -1, id);
}

function next($slides, id) {
    move($slides, 1, id);
}

function move($slides, dir, id) {
    if(sliders[id].moving) {
        console.log('already moving');
        return;
    }
    sliders[id].moving = true;

    if (dir < 0) { //move left
        const $last = $slides.lastElementChild;
        $slides.insertAdjacentElement('afterbegin', $last);
        // $last.style.animation = 'slide-right 1s';
        $last.style.animation = `slide-right ${TRANSITION_DURATION}ms`;

        setTimeout(() => {
            $last.style.animation = 'none';
            sliders[id].moving = false;
        }, TRANSITION_DURATION);

    } else { //move right
        const $first = $slides.firstElementChild;
        // $first.style.animation = 'slide-left 1s';
        $first.style.animation = `slide-left ${TRANSITION_DURATION}ms`;
        
        setTimeout(() => {
            $slides.insertAdjacentElement('beforeend', $first);
            $first.style.animation = 'none';
            sliders[id].moving = false;
        }, TRANSITION_DURATION);
    }
}

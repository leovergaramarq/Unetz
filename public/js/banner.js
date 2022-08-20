// let currentProm = 0;
// let interval;

export default function banner() {
    // document.querySelector('#banner-prom ul').remove
    bannerSliding(document.querySelector('#banner-prom ul'));
}

function bannerSliding($banner) {
    // console.log($banner.children);
    if($banner.children.length < 2) return;
    startInterval($banner);
}

function startInterval($banner) {
    return setInterval(() => {
        next($banner);
    }, 2000);
}

function previous($banner) {
    move($banner, -1);
}

function next($banner) {
    move($banner, 1);
}

function move($banner, dir) {
    if(dir > 0) {
        const $first = $banner.firstElementChild;
        const $last = $banner.lastElementChild;

        $banner.removeChild($last);
        $banner.insertAdjacentElement('afterbegin', $last);

        $last.style.animation = 'slide-right 1s';
        // $first.style.animation = 'slide-right 1s';
    }
}

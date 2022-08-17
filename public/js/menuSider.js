export default function menuSider() {
    const $navSider = document.querySelector('#nav-sider');
    const $darkArea = document.querySelector('#dark-area');
    const $openNavSider = document.querySelector('#open-nav-sider');

    $openNavSider.addEventListener('click', () => {
        $navSider.setAttribute('displayed', true);
        $darkArea.setAttribute('visible', true);
    });

    document.querySelector('#close-nav-sider').addEventListener('click', () => {
        $navSider.removeAttribute('displayed');
        $darkArea.removeAttribute('visible');
    });

    document.addEventListener('click', e => {
        if ($navSider.hasAttribute('displayed') && e.target !== $navSider
            && !hasAncestor(e.target, $navSider) && e.target !== $openNavSider.firstElementChild) {
            // 
            $navSider.removeAttribute('displayed');
            $darkArea.removeAttribute('visible');
        }
    });
}

function hasAncestor($elem, $ancestor) {
    if ($elem.parentNode == $ancestor) return true;
    else if ($elem === document.body) return false;
    return hasAncestor($elem.parentNode, $ancestor);
}

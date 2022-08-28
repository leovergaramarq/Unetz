export default function selectorMainContent() {
    const $options = document.querySelector('#selector-prod-primary').children;

    for(let $op of $options) {
        $op.addEventListener('click', () => {
            for(let $op2 of $options) if($op !== $op2) $op2.removeAttribute('selected');
            $op.setAttribute('selected', true);
        });
    }
}

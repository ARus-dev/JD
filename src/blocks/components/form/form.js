const labels = document.querySelectorAll('.form__label')

for(let label of labels) {
    let input = document.getElementById(label.getAttribute('for'))
    input.onchange = () => {
        if(input.value !== '') {
            label.classList.add('form__label_active')
        } else {
            label.classList.remove('form__label_active')
        }
    }
}
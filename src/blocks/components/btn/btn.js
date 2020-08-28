const buttons = document.querySelectorAll('.btn')

for(let btn of buttons) {
    if(btn.dataset.link) {
        btn.addEventListener('click', () => {
            document.querySelector('#contacts').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
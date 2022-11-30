const buttonUp = {
    el: document.querySelector('.up'),
    show() {
        this.el.classList.remove('hide');
    },
    hide() {
        this.el.classList.add('hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > window.innerHeight / 2) {
                this.show();
            }
            else {
                this.hide();    
            }
        });
        document.querySelector('.up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

buttonUp.addEventListener();
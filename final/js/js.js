const items =   document.querySelectorAll('.ListServices__item');
for ( let i = 0; i < items.length; i++ ) {
        items[i].onclick = function() {
            if (this.classList.contains('ListServices__item-active')){
                this.classList.remove('ListServices__item-active');
            }
            else{
                for ( let i = 0; i < items.length; i++ ) {
                    items[i].classList.remove('ListServices__item-active');
                }
                this.classList.toggle('ListServices__item-active');
            }
        }
}
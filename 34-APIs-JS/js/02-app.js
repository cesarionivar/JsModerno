document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        // console.log(entries);

        if(entries[0].isIntersecting) {
            console.log('Ya esta visible');
        } else {
            console.clear();
        }
    });

    observer.observe(document.querySelector('.premium'));

});
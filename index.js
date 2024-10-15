document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const aboutH1 = document.querySelector('.about h1');
    const text = "Welcome to the About Section!";
    let index = 0;

    function type() {
        if (index < text.length) {
            aboutH1.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                aboutH1.textContent = "";
                index = 0;
                type();
            }, 3000); 
        }
    }

    type();
});
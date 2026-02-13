

// ------------------ OBSERVER PROJETS ------------------
const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.project-card').forEach(card => projectObserver.observe(card));

// ------------------ OBSERVER COMPÉTENCES ------------------
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const skill = entry.target;
            const circles = skill.querySelectorAll('circle');
            const percent = skill.dataset.percent;
            const offset = 314 - (314 * percent) / 100;

            // Ajouter le gradient si manquant
            if(!circles[1].getAttribute('stroke')) {
                const gradientId = skill.querySelector('linearGradient').id;
                circles[1].setAttribute('stroke', `url(#${gradientId})`);
            }

            circles[1].style.transition = 'stroke-dashoffset 1.2s ease';
            circles[1].style.strokeDashoffset = offset;
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-circle').forEach(skill => skillObserver.observe(skill));

// ------------------ OBSERVER ABOUT & CONTACT ------------------
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-card');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.about-card, .contact-card')
    .forEach(card => cardObserver.observe(card));

// ------------------ ANIMATION TEXT TYPING HERO ------------------
const typingText = document.querySelector('.typing');
if (typingText) {
    const text = typingText.textContent.replace('|','').trim();
    typingText.textContent = '';
    let index = 0;

    const type = () => {
        if(index < text.length){
            typingText.textContent += text[index];
            index++;
            setTimeout(type, 80);
        } else {
            typingText.innerHTML += '<span>|</span>';
            setInterval(() => {
                const cursor = typingText.querySelector('span');
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    type();
}

// Optional interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Add active state to pricing options
    const optionBtns = document.querySelectorAll('.option-btn');
    
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            optionBtns.forEach(b => {
                b.style.backgroundColor = 'var(--bg-light)';
                b.style.color = 'var(--primary-color)';
            });
            
            // Add active styles to clicked
            btn.style.backgroundColor = 'var(--primary-color)';
            btn.style.color = 'var(--text-light)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Copy to clipboard
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const codeEl = document.querySelector('.code-block code');
            const text = codeEl.textContent.replace(/\$ /g, '');
            navigator.clipboard.writeText(text.trim()).then(() => {
                const copyIcon = document.getElementById('copyIcon');
                const checkIcon = document.getElementById('checkIcon');
                copyIcon.style.display = 'none';
                checkIcon.style.display = 'block';
                setTimeout(() => {
                    copyIcon.style.display = 'block';
                    checkIcon.style.display = 'none';
                }, 2000);
            });
        });
    }
});

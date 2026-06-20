document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Copy to clipboard functionality
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const codeText = document.querySelector('.code-block code').innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                const icon = copyBtn.querySelector('i');
                icon.classList.remove('fa-copy', 'far');
                icon.classList.add('fa-check', 'fas');
                
                setTimeout(() => {
                    icon.classList.remove('fa-check', 'fas');
                    icon.classList.add('fa-copy', 'far');
                }, 2000);
            });
        });
    }
});

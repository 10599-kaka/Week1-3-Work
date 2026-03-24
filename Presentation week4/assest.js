// FAQ Accordion (Non-button version)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.classList.remove('open');
                item.style.maxHeight = null;
            }
        });

        // Toggle current answer
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
            answer.style.maxHeight = null;
        } else {
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
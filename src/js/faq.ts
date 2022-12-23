export {};
declare global {
    interface Window {
        handleFaq: Function;
    }
}
window.handleFaq = () => {
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach((faq) => {
        if (!faq.hasAttribute('handled')) {
            faq.setAttribute('handled', '1');
            const opener: HTMLDivElement = faq.querySelector('div.opener');
            opener.addEventListener('click', async () => {
                const typeing = document.createElement('div');
                typeing.classList.add('typing');
                for (let x = 0; x < 3; x++) {
                    let dot = document.createElement('div');
                    dot.classList.add('typing_dot');
                    typeing.append(dot);
                }
                opener.style.visibility = 'hidden';
                const answerBar = faq.querySelector('.answer-bar');
                answerBar.append(typeing);

                await new Promise((r) => setTimeout(r, 2000));
                answerBar.removeChild(typeing);
                const answer: HTMLDivElement = answerBar.querySelector('.answer');
                answer.style.display = 'block';
                answer.classList.add('open');
            });
        }
    });
};

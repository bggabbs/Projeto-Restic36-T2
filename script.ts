document.addEventListener('DOMContentLoaded', () => {
    // Aqui eu estou pegando o formulário e o elemento de feedback
    const essayForm = document.getElementById('essayForm') as HTMLFormElement;
    const feedbackElement = document.getElementById('feedback') as HTMLDivElement;

    if (essayForm) {
        essayForm.addEventListener('submit', (event: Event) => {
            event.preventDefault(); // Previne o comportamento padrão de envio do formulário

            // Pegando os valores dos campos do formulário
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const essay = (document.getElementById('essay') as HTMLTextAreaElement).value;
            const feedbackMethod = (document.getElementById('feedback-method') as HTMLSelectElement).value;
            const specialConsiderations = (document.getElementById('special-considerations') as HTMLTextAreaElement).value;
            const difficulties = (document.getElementById('difficulties') as HTMLTextAreaElement).value;

            // Verificando se todos os campos obrigatórios estão preenchidos
            if (name && email && essay) {
                feedbackElement.textContent = 'Sua redação foi enviada com sucesso!';
                feedbackElement.className = 'feedback-message success'; // Aplica o estilo de sucesso
            } else {
                feedbackElement.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                feedbackElement.className = 'feedback-message error'; // Aplica o estilo de erro
            }

            // Exibe a mensagem de feedback
            feedbackElement.style.opacity = '1';
            feedbackElement.style.transform = 'translateY(0)';
        });
    }
});

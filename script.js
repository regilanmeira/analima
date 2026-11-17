document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile Responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Filtro da Galeria por Tipo de Foto
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (filterValue === 'todos' || filterValue === itemCategory) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }

    // 3. Lightbox para Visualização Ampliada das Fotos
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('.photo-title').textContent;
                lightboxImg.src = img.src;
                lightboxCaption.textContent = title;
                lightbox.classList.add('open');
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('open');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('open');
            }
        });
    }

    // 4. Validação e Envio Simulado do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        // Preenche automaticamente o pacote se vier pela URL (ex: contato.html?pacote=Editorial)
        const urlParams = new URLSearchParams(window.location.search);
        const pacoteSelecionado = urlParams.get('pacote');
        const selectPacote = document.getElementById('pacote');

        if (pacoteSelecionado && selectPacote) {
            selectPacote.value = pacoteSelecionado;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();

            formFeedback.style.display = 'block';
            formFeedback.textContent = `Obrigada, ${nome}! Recebi sua mensagem e responderei em até 24 horas para conversarmos sobre o ensaio de vocês.`;
            contactForm.reset();
        });
    }
});

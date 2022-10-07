const onglets = document.querySelectorAll(".onglet");
const contenu = document.querySelectorAll(".contenu");


onglets.forEach((onglet, index) => {
    onglet.addEventListener('click', () => {
        console.log(onglet);
        console.log(index);
        if (onglet.classList.contains('active')) {
            return;
        }
        onglet.classList.add('active');
        contenu[index].classList.add('activeContenu');

        for (let i = 0; i < onglets.length; i++) {
            if (i != index) {
                onglets[i].classList.remove('active');
                contenu[i].classList.remove('activeContenu');
            }
        }
    }
    )
})




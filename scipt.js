const contentWrapper = document.querySelector('.content-wrapper');

function navigateTo(pageIndex) {
    const slideWidth = 100 * pageIndex;
    contentWrapper.style.transform = `translateX(-${slideWidth}%)`; }

    function scrollToSection(index) {
        const sections = document.querySelectorAll('section'); 
        const targetSection = sections[index]; 
        const offset = targetSection.offsetTop; 
    
       
        window.scrollTo({
            top: offset - 60, 
            behavior: 'smooth'
        });
    }
    const rankSelect = document.getElementById('rank-select');
    rankSelect.addEventListener('change', function() {
        const rank = rankSelect.value;
        if (rank === "Diamond") {
            alert('You are in the top 0.5%! Here are some pro tips...');
        }
    });
    

function openModal() {
    const modal = document.getElementById('signUpModal');
    modal.style.display = 'flex';
    modal.classList.add('show'); 
    document.getElementById('content').style.pointerEvents = 'none'; 
}

function closeModal() {
    const modal = document.getElementById('signUpModal');
    modal.classList.remove('show'); 
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 500); 
    document.getElementById('content').style.pointerEvents = 'auto'; 
}

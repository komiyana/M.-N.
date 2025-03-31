const contentWrapper = document.querySelector('.content-wrapper');

function navigateTo(pageIndex) {
    const slideWidth = 100 * pageIndex; // Calculate the translate value
    contentWrapper.style.transform = `translateX(-${slideWidth}%)`; }// Apply sliding effect

    function scrollToSection(index) {
        const sections = document.querySelectorAll('section'); // Get all sections
        const targetSection = sections[index]; // Find the target section
        const offset = targetSection.offsetTop; // Calculate its offset from the top
    
        // Smooth scroll to the section
        window.scrollTo({
            top: offset - 60, // Adjust for the height of the nav bar
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
    
// Modal functions
function openModal() {
    const modal = document.getElementById('signUpModal');
    modal.style.display = 'flex';
    modal.classList.add('show'); // Add the show class to trigger the animation
    document.getElementById('content').style.pointerEvents = 'none'; // Disable interaction with the background
}

function closeModal() {
    const modal = document.getElementById('signUpModal');
    modal.classList.remove('show'); // Remove the show class to hide the modal
    setTimeout(() => {
        modal.style.display = 'none'; // Hide modal after animation completes
    }, 500); // This should match the duration of the animation (0.5s)
    document.getElementById('content').style.pointerEvents = 'auto'; // Re-enable interaction with the background
}

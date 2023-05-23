/* for show more button*/
document.addEventListener('DOMContentLoaded', function() {
    let showMoreBtn = document.querySelector('.button-wrapper button'); /*assigns button element in a showmorebtn variable*/
    let divs = document.querySelectorAll('.destination .main .div'); /*assigns main div of destination in a divs variable*/
    let currentItem = 2;
    const itemsToShow = 2; 
  
    function showNextItems() {
      for (let i = currentItem; i < currentItem + itemsToShow && i < divs.length; i++) {
        divs[i].style.display = 'inline-flex';
      }
      currentItem += itemsToShow;
  
      if (currentItem >= divs.length) {
        showMoreBtn.style.display = 'none';
      }
    }
  
    showMoreBtn.addEventListener('click', showNextItems); /*to display next two items when clicked on show more*/
  
    showNextItems();
  });


/*toggle button*/
/* selects the element of toggle-btn by id and add event listener to the menu toggle button*/
document.getElementById('toggle-btn').addEventListener('click', function() {
/* selects the ul of navbar by query selector and Toggle the class to show/hide the mobile menu */
document.querySelector('ul.navbar').classList.toggle('navbar-selected');
});


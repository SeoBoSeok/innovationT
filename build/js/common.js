const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

/** search */
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});
/** search input */
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// this Year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
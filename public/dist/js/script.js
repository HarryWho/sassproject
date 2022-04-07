const aside = document.getElementsByTagName('aside')
document.getElementById('hamburger').addEventListener('click', (e) => {

  e.preventDefault();
  if (aside[0].classList.contains('collapse')) {
    aside[0].classList.remove('collapse')
  } else {
    aside[0].classList.add('collapse')
  }
})
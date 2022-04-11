const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
let containerElement = document.querySelector('.modal__inner');
let iframe_tag = containerElement.querySelector( 'iframe');

buttonsModal.forEach((item, i) => {
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
  })
})

modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  if ( iframe_tag) {
    let iframeSrc = iframe_tag.src;
    iframe_tag.src = iframeSrc; 
  }
  
})

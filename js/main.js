'use strict';

{
  const tabItems = document.querySelectorAll('.tab li');
  const contents = document.querySelectorAll('.content');

  tabItems.forEach(clickedItem => {
    clickedItem.addEventListener('click',e => {
      e.preventDefault();

      tabItems.forEach(item => {
        item.classList.remove('active');
      })
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });

      document.getElementById(clickedItem.dataset.id).classList.add('active');


    });
  });
}

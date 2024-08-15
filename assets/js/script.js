/* 
    Theme: SEO Landing Page
    Version: 1.0
    Author: Aakash Sharma
*/

// JS For Tabber Section

var tabs = document.querySelectorAll('[data-tab-target]')
var tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// JS For Accordion

var accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  var items = document.querySelectorAll('.js-acc-item');
  var thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}

// JS For Current Year

document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  var yearElement = document.querySelector('.currentyear');
  
  if (yearElement) {
      yearElement.textContent = currentYear;
  }
});
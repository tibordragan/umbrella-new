var toggle = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var closeClick = document.querySelector('.mobile-nav-item');

toggle.addEventListener('click', function(){
  mobileNav.style.display = 'block';
});

closeClick.addEventListener('click', function(){
    mobileNav.style.display = 'none';
});



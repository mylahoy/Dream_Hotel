
// Simple JS for nav toggle and contact form handling
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      nav.classList.toggle('open');
      if(nav.classList.contains('open')) nav.style.display = 'flex';
      else nav.style.display = '';
    });
  }

  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.elements['name'].value.trim();
      var email = form.elements['email'].value.trim();
      var msg = form.elements['message'].value.trim();
      if(!name || !email || !msg){
        alert('Please fill all fields.');
        return;
      }
      alert('Thanks, ' + name + '! We received your message.');
      form.reset();
    });
  }
});

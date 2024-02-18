document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('byTickets');
  var targetDiv = document.querySelector('.busName');

  button.addEventListener('click', function() {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });

});

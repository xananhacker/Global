function sendFeedback(){
  let msg = document.getElementById('feedback').value;
  if(msg.trim() === ""){
    alert("Please write your feedback first");
    return;
  }
  let whatsappURL = `https://wa.me/255617585318?text=Feedback:%20${encodeURIComponent(msg)}`;
  window.open(whatsappURL, '_blank');
  document.getElementById('feedback').value = "";
}

function loadMore(){
  document.querySelectorAll('.card.hidden').forEach(card => {
    card.classList.remove('hidden');
  });
  document.querySelector('.see-more').style.display = 'none';
}

function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('show');
}

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

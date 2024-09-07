const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

function openGallery(work) {
  var modal = document.getElementById("galleryModal");
  var img1 = document.getElementById("galleryImg1");
  var img2 = document.getElementById("galleryImg2");
  var img3 = document.getElementById("galleryImg3");

  if (work === 'SupraKiosk') {
    img1.src = 'img/webview1.png';
    img2.src = 'img/webview2.png';
    img3.src = 'img/webview3.png';
  } else if (work === 'SupraControl') {
    img1.src = 'img/supracontrol1.jpeg';
    img2.src = 'img/supracontrol2.jpeg';
    img3.src = 'img/supracontrol3.jpeg';
  } else if (work === 'AIMA') {
    img1.src = 'img/aima1.jpeg';
    img2.src = 'img/aima2.jpeg';
    img3.src = 'img/aima3.jpeg';
  } else if (work === 'TVBar') {
    img1.src = 'img/tvbarlogo.png';
    img2.src = 'img/tvbar3.png';
    img3.src = 'img/tvbarlogo.png';
  }

  modal.style.display = "block";
}

function closeGallery() {
  var modal = document.getElementById("galleryModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("galleryModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openVideo(work) {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");

  if (work === 'Belen360') {
    videoPlayer.src = 'videos/belen360.mp4';
  } else if (work === 'camyen360') {
    videoPlayer.src = 'videos/camyen360.mp4';
  } else if (work === 'BilletesArgentinos') {
    videoPlayer.src = 'videos/billetesargentinos.mp4';
  }

  modal.style.display = "block";
}

function closeVideo() {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("videoModal");
  if (event.target == modal) {
    closeVideo();
  }
}

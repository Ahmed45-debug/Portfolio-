

    // Scroll to top functionality
    let scrollBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
  <!-- jab reload ho tab bhi dark mode hi rahy ga -->
 
const toggleBtn = document.getElementById('mode-toggle');

// Check saved mode or default to light
const currentMode = localStorage.getItem('mode') || 'light';

if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle mode on button click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
});  
  <!-- skills bar animation -->
   function getColor(percent) {
  if (percent <= 25) return '#ef4444';     // Red
  if (percent <= 40) return '#eab308';     // Yellow
  
  if (percent <= 50) return '#f97316';     // Orange
  if (percent <= 60) return '#eab308';     // Yellow
 if (percent <= 75) return 'green';     // Green    
  if (percent <= 80) return '#22c55e';     // Green
  if (percent <= 90) return '#0ea5e9';     // Blue
  return '#a855f7';                        // Purple (for above 90%)
}

    window.addEventListener("load", () => {
      const fills = document.querySelectorAll(".skill-fill");

      fills.forEach(fill => {
        const percent = parseInt(fill.getAttribute("data-percent"));
        const percentText = fill.querySelector(".skill-percent");
      //  const label = fill.parentElement.previousElementSibling.querySelector(".percent-text");

        // Set color based on percent
        const color = getColor(percent);
        fill.style.background = color;
        fill.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        let count = 0;
        fill.style.width = percent + "%";

        const interval = setInterval(() => {
          if (count >= percent) {
            clearInterval(interval);
          } else {
            count++;
            percentText.textContent = count + "%";
          //  label.textContent = count + "%";
          }
        }, 20);
      });
    });
    
    
  

/* Circle bar */
// Function to get color based on the percentage
function getColor(percent) {
  if (percent <= 25) return '#ef4444';     // Red
  if (percent <= 40) return '#eab308';     // Yellow
  if (percent <= 50) return '#f97316';     // Orange
  if (percent <= 60) return '#eab308';     // Yellow
  if (percent <= 75) return '#22c55e';     // Green    
  if (percent <= 80) return '#22c55e';     // Green
  if (percent <= 90) return '#0ea5e9';     // Blue
  return '#a855f7';                        // Purple (for above 90%)
}

// Applying the progress circle and setting color dynamically
document.querySelectorAll('.circle-box').forEach(box => {
  const percent = parseInt(box.getAttribute('data-percent'));
  const label = box.getAttribute('data-label');
  const dashArray = 440;
  const offset = dashArray - (dashArray * percent) / 100;
  const color = getColor(percent);  // Get color based on percentage

  box.innerHTML = `
    <svg>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${color}"/>
        </linearGradient>
      </defs>
      <circle class="circle-bg" cx="80" cy="80" r="70"/>
      <circle class="circle-progress" cx="80" cy="80" r="70" stroke="${color}"/>
    </svg>
    <div class="percent">${percent}%</div>
    <div class="skill-label">${label}</div>
  `;

  setTimeout(() => {
    box.querySelector('.circle-progress').style.strokeDashoffset = offset;
  }, 200);
});

  /* what i do section */ 
 const track = document.getElementById('track');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

rightBtn.onclick = () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
};

leftBtn.onclick = () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
};

/* blog section */
const btn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');

btn.addEventListener('click', () => {
  moreText.classList.toggle('show');
  btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});
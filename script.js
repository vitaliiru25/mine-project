// Small script: theme toggle, smooth scroll, auto year
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  // Load theme
  const stored = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  if(stored === 'dark') root.classList.add('dark');
  btn.textContent = root.classList.contains('dark') ? '☀️' : '🌙';

  btn.addEventListener('click', ()=>{
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth scroll for links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      a.classList.add('animating');
      setTimeout(()=>{
        a.classList.remove('animating');
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if(target) {
          // Custom smooth scroll (longer duration)
          const y = target.getBoundingClientRect().top + window.scrollY - 24;
          const startY = window.scrollY;
          const distance = y - startY;
          const duration = 400;
          let start;
          function step(ts) {
            if(!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            window.scrollTo(0, startY + distance * progress);
            if(progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          target.classList.add('section-animate');
          setTimeout(()=>target.classList.remove('section-animate'), 700);
        }
      }, 400);
    });
  });

  // Year
  const y = new Date().getFullYear();
  const yearElm = document.getElementById('year');
  if(yearElm) yearElm.textContent = y;
})();

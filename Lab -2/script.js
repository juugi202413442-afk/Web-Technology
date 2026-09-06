  const form = document.getElementById('regForm');
  const successCard = document.getElementById('successCard');
  const successSummary = document.getElementById('successSummary');
  const againBtn = document.getElementById('againBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const name = data.get('name') || 'Participant';
    const events = data.getAll('events');
    const day = data.get('day');
    const category = data.get('category');

    successSummary.innerHTML =
      '<div><span style="color:#7a7188">Name</span> &mdash; <b>' + escapeHtml(name) + '</b></div>' +
      '<div><span style="color:#7a7188">Registering as</span> &mdash; <b>' + escapeHtml(category) + '</b></div>' +
      '<div><span style="color:#7a7188">Events</span> &mdash; <b>' + (events.length ? escapeHtml(events.join(', ')) : 'None selected') + '</b></div>' +
      '<div><span style="color:#7a7188">Day</span> &mdash; <b>' + escapeHtml(day) + '</b></div>';

    form.hidden = true;
    successCard.hidden = false;
    successCard.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});

    if(!reduceMotion){ launchConfetti(); }
  });

  againBtn.addEventListener('click', function(){
    form.reset();
    form.hidden = false;
    successCard.hidden = true;
    form.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});
  });

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  /* lightweight confetti burst, no dependencies */
  function launchConfetti(){
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#F5A524','#E23670','#1E9E8C','#7C5CBF','#F3F0FA'];
    const pieces = Array.from({length: 140}).map(() => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.3,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 10,
      color: colors[Math.floor(Math.random()*colors.length)],
      speed: 2 + Math.random() * 3,
      drift: (Math.random() - 0.5) * 2,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.2
    }));
    let frame = 0;
    const maxFrames = 220;

    function tick(){
      frame++;
      ctx.clearRect(0,0,canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.speed;
        p.x += p.drift;
        p.rotation += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        ctx.restore();
      });
      if(frame < maxFrames){
        requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0,0,canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

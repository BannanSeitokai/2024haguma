// Production
const area = document.getElementById('area');
const areaimg = document.getElementById('areaimg');
const desks2 = document.getElementById('desks2');
const desks2img = document.getElementById('desks2img');
const desks3 = document.getElementById('desks3');
const desks3img = document.getElementById('desks3img');

area.addEventListener('click', function() { areaimg.classList.toggle('hidden'); });
desks2.addEventListener('click', function() { desks2img.classList.toggle('hidden'); });
desks3.addEventListener('click', function() { desks3img.classList.toggle('hidden'); });
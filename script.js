// Header
fetch("/2024haguma/top.html").then((response) => response.text()).then((data) => document.querySelector(".top").innerHTML = data);

// Footer
fetch("/2024haguma/footer.html").then((response) => response.text()).then((data) => document.querySelector(".footer").innerHTML = data);

// Index
const list = document.getElementById('list');
document.getElementById('indexopen').addEventListener('click', function() { list.classList.toggle('active'); });

// ToggleImages
const area = document.getElementById('area');
const areaimg = document.getElementById('areaimg');
const orgpic = document.getElementById('orgpic');
const orgpicimg = document.getElementById('orgpicimg');
const division = document.getElementById('division');
const divisionimg = document.getElementById('divisionimg');
const timetablepic = document.getElementById('timetablepic');
const timetablepicimg = document.getElementById('timetablepicimg');

area.addEventListener('click', function() { areaimg.classList.toggle('hidden'); });
orgpic.addEventListener('click', function() { orgpicimg.classList.toggle('hidden'); });
division.addEventListener('click', function() { divisionimg.classList.toggle('hidden'); });
timetablepic.addEventListener('click', function() { timetablepicimg.classList.toggle('hidden'); });
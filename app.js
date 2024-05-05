let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;
        if(tab !== null && tab !== active){

            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('nav a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

const jobRoles = ["Portfolio Designer", "UI/UX Designer", "Web Developer"];
let index = 0;
const jobRoleElement = document.getElementById('job-role');
const cursorElement = document.querySelector('.cursor');

function typeJobRole() {
    const currentJobRole = jobRoles[index];
    const typedText = currentJobRole.substring(0, jobRoleElement.textContent.length + 1);
    jobRoleElement.textContent = typedText;
    if (typedText === currentJobRole) {
        setTimeout(eraseJobRole, 4000);
    } else {
        cursorElement.style.display = 'inline-block';
        setTimeout(typeJobRole, 100);
    }
}
function eraseJobRole() {
    const currentJobRole = jobRoleElement.textContent;
    const erasedText = currentJobRole.substring(0, currentJobRole.length - 1);
    jobRoleElement.textContent = erasedText;
    if (erasedText === "") {
        index = (index + 1) % jobRoles.length;
        setTimeout(typeJobRole, 500);
    } else {
        cursorElement.style.display = 'inline-block';
        setTimeout(eraseJobRole, 50);
    }
}
typeJobRole();

// scroller
const tabLinks = document.querySelectorAll('nav a');
window.addEventListener('wheel', (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;

    let currentIndex = Array.from(tabLinks).findIndex(tabLink => tabLink.classList.contains('active'));

    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
        nextIndex = 0;
    } else if (nextIndex >= tabLinks.length) {
        nextIndex = tabLinks.length - 1;
    }

    tabLinks[currentIndex].classList.remove('active');
    tabLinks[nextIndex].classList.add('active');

    const nextTabId = tabLinks[nextIndex].getAttribute('data-tab');
    const nextTabContent = document.getElementById(nextTabId);
    nextTabContent.scrollIntoView({ behavior: 'smooth' });
    tabLinks[nextIndex].click();
});
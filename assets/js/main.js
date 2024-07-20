/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click',()=>
    {
        navMenu.classList.toggle('show-menu');
    });

}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click',()=>
    {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');
function linkAction()
{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*==================== CHANGE BACKGROUND HEADER ====================*/
 function scrollHeader()
 {
    const header = document.getElementById('header');

    if(this.scrollY >= 110) header.classList.add('scroll-header');  
    else header.classList.remove('scroll-header');
 }

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp()
 {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');  
    else scrollUp.classList.remove('show-scroll');
 }

 window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]') 
tabContents = document.querySelectorAll('[data-content]')


tabs.forEach((tab) => {
    tab.addEventListener('click', ()=>
    {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent)=>
        {
        tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab)=>
        {
            tab.classList.remove('tab__active');
        
        });

        tab.classList.add('tab__active');
    });

});
/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    ErrorMessage = document.getElementById('error-message');


    //  for sending email we use Emailjs service liabary 
const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '') {

        //show Message
        ErrorMessage.textContent = 'Write All the Required information in fields ';
    } else {
        // Service ID, template ID, form - Public key 
        emailjs.sendForm('service_oictlxe', 'template_l5tik0k', '#contact-form', 'LIo-IOJzi3b0l_WnG')
            .then(() => {
                // send message and add color window dot to open emoji 
                ErrorMessage.classList.add('color-first');
                ErrorMessage.textContent = 'Message Sent ✔️';

                //remove message after 5 seconsds 
                setTimeout(() => {
                    ErrorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! Something Went Wrong.....!', error);
            });
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};
contactForm.addEventListener('submit', sendEmail);
/*=============== PORTFOLIO SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

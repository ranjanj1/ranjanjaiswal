
//remove class

const filter = document.getElementById('nav-icon1');
const shelf = document.getElementById('navigation');
document.onclick = function (e) {
    if (e.target.id != 'navigation' && e.target.id != 'nav-icon1') {
        filter.classList.remove('open');
        shelf.classList.remove('responsive');
    }
}
  // preloader
  setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1000);
///dsfsaf

$(function () {
    $("form[name='contactForm']").validate({
        rules: {
            name: "required",
            email: "required",
            subject: "required",
            message: "required",
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: "Please provide a valid name.",
            email: {
                required: "Please enter your email",
                minlength: "Please enter a valid email address"
            },
            subject: "Please enter subject",
            message: "Please enter your message"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

$(document) .ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1sR6DpzN34zSU8NmvE6oyKnTNi6cCakj7/view?usp=drive_link';  // Make sure to replace with your actual CV file path
        link.download = 'My_CV.pdf';  // The name the file will be saved as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');
        if( $(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
        

    });
    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,

        },
        500,
        'linear'
    );
    });
});
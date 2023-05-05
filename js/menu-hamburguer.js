$(document).ready( ()=>{
    $(window).resize(()=>{
        if ($(window).width() >= 768){
            $('#bt-hamburguer').css('display', 'none');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'flex');
        }else {
            $('#bt-hamburguer').css('display', 'inline');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'none');
        }
    });

    $('#bt-hamburguer').click(()=>{
        $('#bt-hamburguer').css('display', 'none');
        $('#bt-fechar').css('display', 'inline');
        $('.menu-principal').css('display', 'flex');
    });

    $('#bt-fechar').click(()=>{
        $('#bt-hamburguer').css('display', 'inline');
        $('#bt-fechar').css('display', 'none');
        $('.menu-principal').css('display', 'none');

    });  
});


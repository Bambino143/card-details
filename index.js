$(document).ready(()=> {
    $('#confirm').on('click', (x)=> {
        x.preventDefault()
    })
    $('#Continue').click(()=> {
        $('form').submit();
    })
    let result;
    let year;
    let test;
    let name;
    $("#number").on('input', ()=> {
       let displayNum = $('#number').val();
       let rg = /^.{0,16}$/g;
       let display = displayNum.match(rg);
       let finalDisplay = display[0].replace(/(.{4})/g, '$1 ');

       let reg = /[a-zA-Z]/g;

       result = reg.test(display)
       if (result === true) {
        $("#error").addClass('error')
        $("#error").text('Wrong format, numbers only')
        $('#number').addClass('error-input')

       } else {
        $("#error").removeClass('error')
        $('#number').removeClass('error-input')

        $("#error").text('')


       }
    

        $("#display-num").text(finalDisplay);
        
    });

    $("#name").on('input', ()=> {
       let displayName = $('#name').val();
       $("#display-name").text(displayName);
       let reggy = /\d/;
       test = reggy.test(displayName);
       console.log(result)

       if (test){
        $("#🤧").addClass('error')
        $("#🤧").text(`you can't have numbers in your name`)
        $('#confirm').prop('disabled', true);


       } else {
        $("#🤧").text('')
        $("#🤧").removeClass('error')


       }


    })
    
     $(".cvc").on('input', ()=> {
        let displayName = $('.cvc').val();
        let reg = /^.{0,3}$/g;
        let display = displayName.match(reg);
        $("#cvc-back").text(display);
        if(displayName.length > 3){
            $('#💕').text(`3 digits only`)
            $('#💕').addClass('error')

        } else {
            $('#💕').text('')
            $('#💕').removeClass('error')
        }
       
 
     })

     $(".mm").on('input', ()=> {
        let displayName = $('.mm').val();
        let reg = /^.{0,2}$/g;
        let display = displayName.match(reg);
        $("#mm").text(display);
        
       
 
     })

     $(".yy").on('input', ()=> {
        let displayName = $('.yy').val();
        let reg = /^.{0,2}$/g;
        let display = displayName.match(reg);
        $("#yy").text(display);
        
       
 
     })

    $('#confirm').on('click', ()=> {
        name = $('#name').val();
        if(name === '') {
            $('#confirm').prop('disabled', true);

        }
        year = $('.year').map(function() {
            return $(this).val();
        }).get();
        
        if(year[0] == '' || year[1] == '') {
            $('#❤').text(`can't be blank`)
            $('#❤').addClass('error')
            $('#💣').addClass('error-input')

        } else {
            $('#❤').removeClass('error')
            $('#💣').removeClass('error-input')
            $('#❤').text(``)

        }


        if(year[2] == '') {
            $('#💕').text(`can't be blank`)
            $('#💕').addClass('error')
            $('#cvc').addClass('error-input')

        } else {
            $('#💕').removeClass('error')
            $('#💣').removeClass('error-input')
            $('#💕').text(``)

        }
        let reggy = /[a-zA-Z]/;
        let test = year.some((x) => reggy.test(x));

        if (test) {
            $('#confirm').prop('disabled', true);
            $('#❤').text(`numbers only plss`);
            $('#💕').text(`numbers only plss`);
            $('#💕').addClass('error');
            $('#❤').addClass('error');
        } 

        if(result==true){
            $('#confirm').prop('disabled', true);

        }
        

        if(result == false && year[0] != '' && year[1] != '' && year[2] != '' && name != '') {
            $('form').css('display', 'none');
            $('#thank-you').css('display', 'block')
        }
        


    })

    $('input').on('input', ()=> {
        $('#confirm').prop('disabled', false);

    })

    
})

$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:2
                
            },
            place:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mobile:{
                required:true,

            },
            message:{
                required:true
            }


        }
       
    })
})
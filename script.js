$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:2
            },
            place:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            mobile:{
                required:true,
                minlength:10,
                maxlength:10

            }
            
        },
        messages:{
            fname:{
                minlength:"enter a valid name"
            },
            place:{
                minlength:"enter a valid place"
            },
            mobile:{
                minlength:"enter a valid number",
                maxlength:"enter a valid number"
            }
            
        }
    })
})

$(document).ready(function () {
    
$.ajax({
    type: "Get",
    url: "http://localhost:61501/api/Role/",
    data: "data",

    success: function (result) {
        
result.map((x,y)=>{

$("#role").append(`<div class="form-group">
               
<div class="custom-control custom-checkbox mb-3">
 
  <input type="checkbox" class="custom-control-input" id="customCheck${y}" name="example1">
  <label class="custom-control-label" for="customCheck${y}">${x.UserRole}</label> 
  
</div>
</div>`);


})


    }
});













$.validator.setDefaults({
    submitHandler: function() {
        
     
            var data = new FormData();
            console.log(data)
            var imgsave =$("#File11").get(0).files;
            var UserName= $("#Name1").val();
            var UserEmail= $("#Email1").val();
           
             data.append("imgeee" ,imgsave[0] );
            data.append("Name" ,UserName);
            data.append("Email" , UserEmail);
            
            
            $.ajax({
                type: "POST",
                url: "http://localhost:61501/api/RoleASsign",
                contentType:false,
               
                processData:false,
            
                data: data,
            
                success: function (data) {
                   
                  console.log(data)
            
            
                }
            });
            
            
            
            
            
           
        
    }
});



































});



$(document).ready(function () {
  
    $("#submit_form").validate ({
       
rules:{

    Name1:{

        required:true,
        minlength:4,
        maxlength:8,
       nowhitespace:true,
       lettersonly:true,
    }  ,

    Email1:{

        required:true,
        email:true,
        minlength:4,
        maxlength:20,
        nowhitespace:true,
        
    }  ,
    File11:{

        required:true,
       
    }  

   

},
messages:{


    Name1:{

        required: "RoleType is mandatory *" ,
      
    },  
    Email1:{

        required: "Display Name is mandatory *" ,
      
    }  
    
},




    });


  
   
    




});
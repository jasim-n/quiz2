$(function () {

    $("#myForm").submit(handleFormSubmit);
  });
  
  function handleFormSubmit(e) {
    var name = $("#name").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    var nameWarning=$("#nameWarning");

    if (!name.length) {
        $("#name").addClass("error");
        nameWarning.html("Name Error");
        nameWarning.css("visibility" , "visible");
        e.preventDefault();
        
    }else{
    if (name.length<8) {
        $("#name").addClass("error");
        nameWarning.html("name length atleast be 8 charachter long");
        nameWarning.css("visibility" , "visible");
        e.preventDefault();
        
    }else{
        $("#name").removeClass("error");
        nameWarning.css("visibility" , "hidden");
    }}
    if (password.length < 8) {
        $("#password").addClass("error");
        $("#passwordWarning").html("passwords length should be least 8 characters ");
        $("#passwordWarning").css("visibility" , "visible");

        e.preventDefault();
        
    }else $("#passwordWarning").css("visibility" , "hidden");

    if  ((password!=confirm_password) || !(confirm_password.length)){
        $("#confirmWarning").html("password dont match");
            $("#confirm_password").addClass("error");
            $("#confirmWarning").css("visibility" , "visible");
            e.preventDefault();
           
        }else {
            $("#confirmWarning").css("visibility" , "hidden");
            $("#confirm_password").removeClass("error");}
            if(!($("#email").val)){
                $("#email").addClass("error");
                $("#emailwarning").css("visibility" , "visible");
            }else{
                $("#email").removeClass("error");
                $("#emailwarning").css("visibility" , "hidden");
            }
            e.preventDefault();
    
}

  
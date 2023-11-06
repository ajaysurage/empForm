
$("#submit").click( a => {
    let email = $("#email").val();
    let pass = $("#pass").val();

    $("#emailData").html(email);
    $("#paasData").html(pass);
})

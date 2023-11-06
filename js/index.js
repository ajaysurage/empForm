
$("#submit").click( a => {
    let email = $("#email").value();
    let pass = $("#pass").val();

    $("#emailData").html(email);
    $("#paasData").html(pass);
})

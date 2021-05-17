$(document).ready(function () {

    $('#carsalesForm').validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        }
    });

    $(".btn-outline-primary").on("click", ()=> {
        $("#page .content").toggleClass("container-fluid").toggleClass("container")
    });
});
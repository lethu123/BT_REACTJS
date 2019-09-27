$(document).ready(function () {
    $('button').click(function () {
        $('#Calculater').validate({
            rules: {
                price: "required",
                evaluate: "required",
                people: "required"
            },
            messages: {
                price: "Please enter your bill",
                evaluate: "Please choose an evaluate type ",
                people: "Please enter number people"
            }
        });

        let price = $("input[name='price']").val();
        let evaluate = $('#evaluate option:selected').val();
        let numberPeople = $("input[name='people']").val();

        if(!price) {
            $("input[name='price']").siblings("label").css({"display": "block"});
        }
        if(!evaluate) {
            $("#evaluate").siblings("label").css({"display": "block"});
        }
        if(!numberPeople) {
            $("input[name='people']").siblings("label").css({"display": "block"});
        }


        let total = (price*evaluate)/numberPeople;
        $('#total').html(total);
        
    })

    
   
});
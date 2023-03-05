// foucs textarea
$(function () { 
    $('#buat-pantun-textbox').focus();
});
// fake content personal data
$('#submit-personal-data').click(function (params) {
    var name = $('#form-nama').val();
    var email = $('#form-email').val();
    var igName = $('#form-ig-name').val();
    var title = $(html).filter('title').text();

    try {
        if (title == 'Buat Pantun') {
            $('#form-nama').val(name);
            $('#form-email').val(email);
            $('#form-ig-name').val(igName);
            console.log(name);
        }
    } catch (error) {
        
    }
})

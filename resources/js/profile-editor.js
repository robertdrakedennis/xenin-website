let avatar = $('#avatar');

avatar.on('change',function(){
    //get the file name
    let fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
});

$('#background').on('change',function(){
    //get the file name
    let fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#avatarImg').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

avatar.change(function(){
    readURL(this);
});
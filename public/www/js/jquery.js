$(document).ready(function (){
    $('#front').on('click', '.button', function() {
        let value = $('#task').val();
        let add = `<li>${value}  <input type='button' id='delete'><hr></li>`;
        $('#result ol').prepend(add);
    })
    $('#result').on('click','#delete',function(){  
        let check = confirm('Are you sure you want to delete this?');
        if(!check) return false;
        $(this).parent().remove();              
    })
});
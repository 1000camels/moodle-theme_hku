YUI().use('event', function(Y) {
    
    var submit_buttons = Y.all('form.mform input');
    
    submit_buttons.each(function(button) {
        button.on('click', submit_form);
    });
        
    function submit_form(e) {
        
        // we're canceling the event, so let it go (i.e. #id_cancel)
        if(e.target.get('id') == 'id_cancel') return true;
        
        if(Y.one('.error')) {
            alert('You have not filled in all the required fields. Please correct them first.');
        }
        
        return false;

    }
    
});
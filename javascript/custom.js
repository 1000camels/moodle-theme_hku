YUI().use('event', function(Y) {
    
    var submit_forms = Y.all('form.mform');
    
    submit_forms.each(function(form) {
        //console.log('registering form '+form.get('id')+' for event');
        form.on('submit', submit_form);
    });
    
    
    /**
     * Alert when there are validation errors in the submitted form
     */
    function submit_form(e) {
        
        if(Y.one('.error')) {
            alert('You have not filled in all the required fields. Please correct them first.');
        }
        
        return false;

    }
    
});
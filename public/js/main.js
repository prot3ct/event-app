/* globals document  $ */
$(document).ready(function(){
    $(".btn-join").on("click", function() {
        let eventName = $(this).attr('data-event-name');

        $.post('/events/join', { eventName })
            .then((event) =>{
                $(this).attr('disabled', 'disabled');
                $(this).attr('value', 'Joined');
            });
    });
});

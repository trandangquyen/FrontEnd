(function($) {
    $(document).ready(function() {

        var correctCards = 0;
        $(init);

        function init() {

            // Hide the success message
            $('#successMessage').hide();
            $('#successMessage').css({
                left: '580px',
                top: '250px',
                width: 0,
                height: 0
            });

            // Reset the game
            correctCards = 0;
            $('#tag-choice').html('');
            $('#cardSlots').html('');

            // Create the pile of shuffled cards
            var numbers = ['Finance', 'Food', 'Health', 'Kids', 'Organisation', 'Rooms', 'Sport', 'Trip', 'Tutor', 'Student'];
            numbers.sort(function() { return Math.random() - .5 });

            for (var i = 0; i < 10; i++) {
                $('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#tag-choice').draggable({
                    containment: '#content',
                    stack: '#tag-choice div',
                    cursor: 'move',
                    revert: true
                });
            }

            // Create the card slots
            var words = ['Finance', 'Food', 'Health', 'Kids', 'Organisation', 'Rooms', 'Sport', 'Trip', 'Tutor', 'Student'];
            for (var i = 1; i <= 10; i++) {
            	// console.log('#cardSlots-'+words[i - 1])
                $('<div>' + words[i - 1] + '</div>').data('number', words[i - 1]).appendTo('#cardSlots-'+words[i - 1]).droppable({
                    accept: '#tag-choice div',
                    hoverClass: 'hovered',
                    drop: handleCardDrop,
                    out: handleCardDropOut

                });
            }

        }

        function handleCardDrop(event, ui) {
        	console.log($(this).data('number'))
        	// console.log(ui.draggable.data('number'))
            var slotNumber = $(this).data('number');
            var cardNumber = ui.draggable.data('number');

            // If the card was dropped to the correct slot,
            // change the card colour, position it directly
            // on top of the slot, and prevent it being dragged
            // again

            if (slotNumber == cardNumber) {
                ui.draggable.addClass('correct');
                ui.draggable.draggable('enable');
                $(this).droppable('enable');
                ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
                ui.draggable.draggable('option', 'revert', false);
                correctCards++;
                ui.draggable.draggable( "enable" );
                
            }
          

            // If all the cards have been placed correctly then display a message
            // and reset the cards for another go

            if (correctCards == 10) {
                $('#successMessage').show();
                $('#successMessage').animate({
                    left: '380px',
                    top: '200px',
                    width: '400px',
                    height: '100px',
                    opacity: 1
                });
            }

        }
        function handleCardDropOut(event, ui) {
        	console.log(ui);
        	console.log(ui.draggable.position().top)
        	console.log(ui.draggable)
        	// ui.context.context.offset.top = 999;
        	// console.log(ui.draggable.offset.top)
        	
        }

    });
})(jQuery);
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
                $('<div>' + numbers[i] + '</div>').data({'number': numbers[i],'curParent':'','prevParent':''}).attr('id', 'card' + numbers[i]).appendTo('#tag-choice').draggable({
                    containment: '#content',
                    stack: '#tag-choice div',
                    cursor: 'move',
                    drag: function( event, ui ) {
                    	// console.log($(this));
                    },
                    revert: function(event, ui) {
			            // on older version of jQuery use "draggable"
			            // $(this).data("draggable")
			            // on 2.x versions of jQuery use "ui-draggable"
			            // $(this).data("ui-draggable")
			            // console.log( $(this).data("uiDraggable"));
			            $(this).data("uiDraggable").originalPosition = {
			                top : 0,
			                left : 0
			            };
			            // console.log( $(this).data("uiDraggable"));
			            // return boolean
			            return !event;
			            // that evaluate like this:
			            // return event !== false ? false : true;
			        }
                });
            }

            // Create the card slots
            var words = ['Finance', 'Food', 'Health', 'Kids', 'Organisation', 'Rooms', 'Sport', 'Trip', 'Tutor', 'Student'];
            for (var i = 1; i <= 10; i++) {
            	// console.log('#cardSlots-'+words[i - 1])
                $('<div>' + words[i - 1] + '</div>').data({'number': words[i - 1], 'emlDropped': ''}).appendTo('#cardSlots-'+words[i - 1]).droppable({
                    accept: '#tag-choice div',
                    hoverClass: 'hovered',
                    drop: handleCardDrop,
                    over: function(event, ui) {
                        var $this = $(this);
                    },
                    out: function(event, ui) {
			            // on older version of jQuery use "draggable"
			            // $(this).data("draggable")
			            // on 2.x versions of jQuery use "ui-draggable"
			            // $(this).data("ui-draggable")
			            // console.log(ui)
			            ui.draggable.originalPosition = {
			                top : 0,
			                left : 0
			            };
			            // return boolean
			            return !event;
			            // that evaluate like this:
			            // return event !== false ? false : true;
			        }

                });
            }

        }

        function handleCardDrop(event, ui) {
        	// console.log($(this).data('number'))
        	// console.log(ui.draggable.data('number'))
        	//element dropped
        	if ($(this).data('prevParent') == '' )
        	{
        		prevParent = $(this).parent().attr('id') ;
        		ui.draggable.data('prevParent',prevParent);
        	}
        	else {

        	}



        	console.log($(this).data('emlDropped'));
        	//check if parent has no element
        	if ($(this).data('emlDropped') == '') {
    			var emlDropped = ui.draggable.data('number') || '';
	    		//asign name element dropped for this parent 
	    		$(this).data('emlDropped', emlDropped);
	    		console.log($(this).data('emlDropped'));
	    		//parent of this drag
	    		//asign prev parent

	    		var curParent = $(this).parent().attr('id');
	    		console.log(curParent);
	    		
	    		
	    		//asign parent for this drag item 
	    		ui.draggable.data('curParent',curParent);
	    		
    		}
    		// else if parent has an element
    		else {
    			//swap the position of an existing element
    			// console.log($(this).parent());
    			$('#card'+$(this).data('emlDropped')).position({ of:$(this).parent(), my: 'left top', at: 'left top' });
    		}

    		// check if this parent has element
    		
            var slotNumber = $(this).data('number');
            var cardNumber = ui.draggable.data('number');
            var $this = $(this);
            console.log($this)
            var li1 = ui.draggable.text()
            // console.log(li1);
         	var li2 = $(this).text();
     		// console.log(li2);
     		// console.log( emldropped);
     		// console.log($('#cardTutor'));
     		// $('#cardTutor').css({
     		// 	top: 0,
     		// 	left: 0
     		// });
            // If the card was dropped to the correct slot,
            // change the card colour, position it directly
            // on top of the slot, and prevent it being dragged
            // again

            // if (slotNumber == cardNumber) {
                ui.draggable.addClass('correct');
                ui.draggable.draggable('enable');
                $(this).droppable('enable');
                ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
                $('#cardTutor').position({ of: $('#cardSlots-Rooms'), my: 'left top', at: 'left top' });
                // ui.draggable.draggable('option', 'revert', false);
                // correctCards++;
                // ui.draggable.draggable( "enable" );
                
            // }
          

            // If all the cards have been placed correctly then display a message
            // and reset the cards for another go

            // if (correctCards == 10) {
            //     $('#successMessage').show();
            //     $('#successMessage').animate({
            //         left: '380px',
            //         top: '200px',
            //         width: '400px',
            //         height: '100px',
            //         opacity: 1
            //     });
            // }

        }
        function handleCardDropOut(event, ui) {
        	// console.log(ui);
        	// console.log(ui.draggable.offset().top)
        	// console.log(ui.draggable)
        	// ui.context.context.offset.top = 999;
        	// console.log(ui.draggable.offset.top)
        	console.log(ui.draggable);
        	// ui.draggable.draggable('option', 'revert', true);
        }

    });
})(jQuery);
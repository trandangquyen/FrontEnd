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
            // numbers.sort(function() { return Math.random() - .5 });

            for (var i = 0; i < numbers.length; i++) {
                $('<div>' + numbers[i] + '</div>').data({'number': numbers[i],'curParent':'','prevParent':'','onBar': true}).attr('id', 'card' + numbers[i]).appendTo('#tag-choice').draggable({
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
                        // console.log($(this).data());
                        // console.log( $(this).data("uiDraggable").originalPosition );
                        // console.log($(this));
			            $(this).data("uiDraggable").originalPosition = {
			                top : 0,
			                left : 0
			            };
			            
			            // return boolean
                        // console.log(!event);
                        // console.log($(this).data());
                        var className = $(this).data('ParentOld')
                        if(!event) {
                            $(this).css({
                                position: 'relative',
                                top : '0',
                                left: '0'
                            });
                            $(this).data('onBar', true)
                            $(this).removeClass(className)

                        }
                        else {
                            $(this).data('onBar', false)
                        }
                        console.log($(this).data('onBar'));
			            return !event;
			            // that evaluate like this:
			            // return event !== false ? false : true;
			        }
                });
            }

            // Create the word slots
            var words = ['Finance', 'Food', 'Health', 'Kids', 'Organisation', 'Rooms', 'Sport', 'Trip', 'Tutor', 'Student'];
            for (var i = 1; i <= words.length ; i++) {
            	// console.log('#cardSlots-'+words[i - 1])
                $('<div>' + words[i - 1] + '</div>').data({'number': words[i - 1], 'onBar': true}).appendTo('#cardSlots-'+words[i - 1]).droppable({
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
                       console.log(ui)
                       // ui.draggable.removeAttr('class')
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
        	// if ($(this).data('prevParent') == '' )
        	// {
        	// 	prevParent = $(this).parent().attr('id') ;
        	// 	ui.draggable.data('prevParent',prevParent);
        	// }
        	// else {

        	// }



        	// console.log($(this).data('emlDropped'));
        	//check if parent has no element
       //  	if ($(this).data('emlDropped') == '') {
    			// var emlDropped = ui.draggable.data('number') || '';
	    		//asign name element dropped for this parent 
	    		// $(this).data('emlDropped', emlDropped);
	    		// console.log($(this).data('emlDropped'));
	    		//parent of this drag
	    		//asign prev parent

	    		// var curParent = $(this).parent().attr('id');
	    		// console.log(curParent);
	    		
	    		
	    		//asign parent for this drag item 
	    	// 	ui.draggable.data('curParent',curParent);
	    		
    		// }
    		// else if parent has an element
    		// else {
    			//swap the position of an existing element
    			// console.log($(this).parent());
    			// $('#card'+$(this).data('emlDropped')).position({ of:$(this).parent(), my: 'left top', at: 'left top' });
    		// }

    		// check if this parent has element
    		
            var slotNumber = $(this).data('number');
            var cardNumber = ui.draggable.data('number');
            var $this = $(this);
            // console.log($this)
            // var li1 = ui.draggable.text()
            // console.log(li1);
         	// var li2 = $(this).text();
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
                // ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
                // $('#cardTutor').position({ of: $('#cardSlots-Rooms'), my: 'left top', at: 'left top' });
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
            console.log(ui.draggable.data('onBar'));
            var currentParentId =  $(this).parent().attr('id');
            console.log(currentParentId)
            var dataParentOld = ui.draggable.data('ParentOld') ? ui.draggable.data('ParentOld') : currentParentId;
            // console.log(dataParentOld)
            ui.draggable.data('ParentOld',currentParentId)
            // console.log(ui.draggable.data('ParentOld'))
            // console.log( ui.draggable.attr('class'))
            // ui.draggable.data('onBar',false)
            console.log( ui.draggable.data('onBar'));

            // nếu phần tử được kéo từ trên bar
            if (ui.draggable.data('onBar')) {
            	console.log(123)
            	// console.log(ui.draggable.attr('class'))
                
                //đưa phần tử đã có về vị trí trên bar
            	$('.'+currentParentId).css({
            		top: '0',
            		left: '0'
            	});
                // $('.'+currentParentId).position({ of: $('#'+dataParentOld), my: 'left top', at: 'left top' });
            	// $('.'+currentParentId).removeAttr('class').addClass('top');
                //đổi position cho phần tử đã có.
                $('.'+currentParentId).css('position', 'relative'); 
                $('.'+currentParentId).data('onBar',true).removeClass(currentParentId);

                
                // $('.top').data('onBar',true);
                // định vị phần tử đang kéo 
                // ui.draggable.removeAttr('class').addClass(currentParentId)
                ui.draggable.removeClass(dataParentOld).addClass(currentParentId)
                //đổi position cho phần tử đang kéo
                ui.draggable.css('position', 'absolute');
                ui.draggable.position({ of: $(this), my: 'center center', at: 'center center' });

            }
            //nếu phần tử không phải ở trên bar
            else {
                //Nếu có class Cha
                if($('.'+currentParentId).length !=0 ) {
                    console.log(456)
                    // $('.'+currentParentId).position({ of: $('#'+dataParentOld), my: 'left top', at: 'left top' });
                    ui.draggable.position({ of: $(this), my: 'center center', at: 'center center' });
                    $('.'+currentParentId).position({ of: $('#'+dataParentOld), my: 'center center', at: 'center center' });
                    
                    $('.'+currentParentId).data('ParentOld',dataParentOld)
                    //xoá class 
                    // $('.'+currentParentId).removeAttr('class').addClass(dataParentOld)
                    $('.'+currentParentId).removeClass(currentParentId).addClass(dataParentOld)

                    ui.draggable.removeAttr('class').addClass(currentParentId)
                }
                // Nếu không có class Cha
                else {
                    console.log(789)
                    // ui.draggable.removeAttr('class').addClass(currentParentId)
                    ui.draggable.removeClass(dataParentOld).addClass(currentParentId)
                    ui.draggable.position({ of: $(this), my: 'center center', at: 'center center' });
                }
            }
            

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
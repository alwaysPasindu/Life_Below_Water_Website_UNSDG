
    // Get all elements with IDs starting with "myImg"
    var images = document.querySelectorAll('[id^="myImg"]');
    
    // Iterate through each image and add click event listener
    images.forEach(function(img) {
        img.onclick = function() {
            var modalId = 'myModal' + this.id.slice(-1);
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });
    
    // Get all elements with class "close"
    var closeButtons = document.getElementsByClassName("close");
    
    // Iterate through each close button and add click event listener
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            var modal = this.closest('.modal');
            modal.style.display = "none";
        }
    }
    
    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }


    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.button-group .button');
        const thumbnails = document.querySelectorAll('.Thumbnail');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                thumbnails.forEach(thumbnail => {
                    if (filter === 'all' || thumbnail.getAttribute('data-filter') === filter) {
                        thumbnail.style.display = 'inline-block';
                    } else {
                        thumbnail.style.display = 'none';
                    }
                });
            });
        });
    });



    

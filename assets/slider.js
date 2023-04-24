$(document).ready(function() {
    $('#image-slider').on('change', function(event) {
        var value = event.target.value;
        var image = document.getElementById('image');
        image.src = 'assets/image' + value + '.jpg';
    });
});

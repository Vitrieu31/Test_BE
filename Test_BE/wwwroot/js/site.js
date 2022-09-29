// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//$(function () {
//    var PlaceHolderElement = $('#PlaceHolderHere');
//    $('button[data-toggle="ajax-modal"]').click(function (event) {
//        var url = $(this).data('url');
//        $.get(url).done(function (data) {
//            PlaceHolderElement.html(data);
//            PlaceHolderElement.find('modal').modal('show');
//        })
//    })

//})
//// Get the modal
//var modal = document.getElementById("myModal");

//// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

//// When the user clicks on the button, open the modal
//btn.onclick = function () {
//    modal.style.display = "block";
//}

//// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//    modal.style.display = "none";
//}

//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}
ShowInPopup = (url, title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $('#form-modal .modal-body').html(res);
            $('#form-modal .modal-title').html(title);
            $('#form-modal').modal('show');
        }
    })
}
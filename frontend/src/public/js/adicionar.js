$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$("#navbarSupportedContent").on('show.bs.collapse', function() {
  $('a.nav-link').click(function() {
      $("#navbarSupportedContent").collapse('hide');
  });
});

$(document).ready(function() {
  $(document).on('click', '.nav-item a', function (e) {
      $(this).parent().addClass('active').siblings().removeClass('active');
  });
});
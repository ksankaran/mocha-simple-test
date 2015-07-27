(function($) {
  $("#add_button").click(function() {
    $("#result").html(
      GLOBAL.package.math.add(
        parseInt($("#num1").val()) || 0,
        parseInt($("#num2").val()) || 0
      )
    );
  });
})(jQuery);

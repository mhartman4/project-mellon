$ ->
  $("select").change ->
    x = $("#x-select").val()
    y = $("#y-select").val()
    unless x == y
      location.href = "/linear_regression?x=#{x}&y=#{y}"

$(document).ready(function () {
  // Accordion
  $(".accordion-body").first().show();
  $(".accordion-header").click(function () {
    $(this).next(".accordion-body").slideToggle();
    $(".accordion-body").not($(this).next()).slideUp();
  });

  // Dynanamic LIst
  $("#addItem").click(function () {
    var itemText = $("#itemInput").val().trim();
    if (itemText !== "") {
      $("#itemList").append(
        "<li>" + itemText + ' <button class="remove-btn">Remove</button></li>'
      );
      $("#itemInput").val("");
    }
  });

  $("#itemList").on("click", ".remove-btn", function () {
    $(this).parent().remove();
  });

  // Bg color
  $("#changeBg").click(function () {
    let colors = ["#f8d7da", "#d4edda", "#cce5ff", "#fff3cd"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("body").css("background-color", randomColor);
  });

  // Sidebar toggle
  $("#toggleSidebar").click(function () {
    $("#sidebar").addClass("active");
    $("#content").addClass("shifted");
  });

  $("#closeSidebar").click(function () {
    $("#sidebar").removeClass("active");
    $("#content").removeClass("shifted");
  });

  // Close sidebar when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest("#sidebar, #toggleSidebar").length) {
      $("#sidebar").removeClass("active");
      $("#content").removeClass("shifted");
    }
  });
});

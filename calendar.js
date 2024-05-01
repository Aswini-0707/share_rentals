$(document).ready(function() {
    $("#datepicker-btn").datepicker({
      dateFormat: "yy-mm-dd", // Set the date format
      onSelect: function(dateText) {
        // Handle the selected date
        alert("Selected date: " + dateText);
      }
    });
  });
  
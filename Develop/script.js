$('document').ready(function(){

    // Variable Definitions
    
    // Reference to the DOM Elements
    var hourNine = $("#hour-9");
    var hourTen = $("#hour-10");
    var hourEleven = $("#hour-11");
    var hourTwelve = $("#hour-12");
    var hourThirteen = $("#hour-13");
    var hourFourteen = $("#hour-14");
    var hourFifteen = $("#hour-15");
    var hourSixteen = $("#hour-16");
    var hourSeventeen = $("#hour-17");
    var saveButton = $(".saveBtn");


    // Show the current date
    var presentDate = moment().format('dddd, MMMM Do, YYYY');
    var currentDate = document.querySelector("#currentDay");
    currentDate.append(presentDate);

    // Current Time
    var currentTime = moment().hours();
    console.log(currentTime);


    // Function to check if time slots are past, present, or future
    function updatedHour() {
            $(".time-block").each(function() {
            var hourRows = parseInt($(this).attr("id").split("-")[1]);

            if (hourRows < currentTime) {
                $(this).addClass("past");
            }

            else if (hourRows === currentTime) {
                $(this).removeClass("past");

                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");

                $(this).removeClass("present");

                $(this).addClass("future");
            }

        });
    }

    updatedHour();

    // Interval to refresh the hour every 10 minutes
    var interval = setInterval(updatedHour, 10000);


    // Save Button click function
    $(saveButton).on("click", function () {
        var value = $(this).siblings(".description").val().trim();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });


    // Get the data from the localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


});
$(document).ready(function() {
    // Add eventlistener to save button when clicked
    //  Allow a user to enter an event when they click a timeblock
    $(".saveButton").on("click", function () {
        let timeID = $(this).parent().attr("id");

        let value = $(this).siblings(".description").val();

        // Save the event in local storage when the save button is clicked in that timeblock.
        
        localStorage.setItem(timeID, value);

        $(".notification").addClass("showNotification");

        setTimeout (function () {
            $(".notification").removeClass("showNotification");
        }, 5000)
    })

    function hourUpdate () {
        let currentHour = moment().hours();

        // Use .each() to loop through the timeblocks using class- time-block to access the numbers in each id.
        $(".time-block").each(function () {
            let blockHour = parseInt($(this).attr("id").split("-")[1]); 

        // OR USE A FOR LOOP TO GET THE HOURS FOR EACH TIMEBLOCK
        // for (let i = 0; i < $(".time-block").length; i++) {
        //     let blockHour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1]);
        //     console.log(blockHour) 
        // }
            
        // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
        })

        
    }

    hourUpdate();

    // Persist events between refreshes of a page


    // $("#hour-0 .description").val(localStorage.getItem("hour-0"));
    // $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    // $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    // $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    // $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    // $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    // $("#hour-15 .description").val(localStorage.getItem("hour-15"));$("#hour-16 .description").val(localStorage.getItem("hour-16"));$("#hour-17 .description").val(localStorage.getItem("hour-17"));$("#hour-18 .description").val(localStorage.getItem("hour-18"));$("#hour-19 .description").val(localStorage.getItem("hour-19"));$("#hour-20 .description").val(localStorage.getItem("hour-20"));$("#hour-21 .description").val(localStorage.getItem("hour-21"));$("#hour-22 .description").val(localStorage.getItem("hour-22"));
    // $("#hour-23 .description").val(localStorage.getItem("hour-23"));
    

    // Display the current day at the top of the calender when a user opens the planner.
    $("#currentDay").text(moment("dddd, MMM DD YYYY LTS").format("dddd, MMM DD YYYY"));

})


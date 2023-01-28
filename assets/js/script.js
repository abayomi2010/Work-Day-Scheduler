$(document).ready(function() {
    // Add eventlistener to save button when clicked
    $(".saveButton").on("click", function () {
        let timeID = $(this).parent().attr("id");

        let value = $(this).siblings(".description").val();
        
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
            
        if (blockHour < currentHour) {
            $
        }
        })

        // OR USE A FOR LOOP TO GET THE HOURS FOR EACH TIMEBLOCK
        // for (let i = 0; i < $(".time-block").length; i++) {
        //     let blockHour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1]);
        //     console.log(blockHour) 
        // }
    }

    hourUpdate();
})


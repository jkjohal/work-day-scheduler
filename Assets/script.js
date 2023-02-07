
//display current date at top of page
var currentDate = moment().format("MMM Do YY");

$("#currentDay").text(currentDate)


//use save button to save text entries to local storage
$('.saveBtn').on('click', function(){

    var key=$(this).parent().attr('id')
    var value=$(this).siblings('textarea').val()

    localStorage.setItem(key, value)
});


//use local storage.getitem to retrive content from local storage and make sure that it stays on the page when we reload
$("textarea").val(function(){
    
    var key=$(this).parent().attr('id')

    var lastEntry = localStorage.getItem(key);
    return lastEntry;
});


//change color of timeblocks according to current time
$("textarea").addClass(function(){
    var blockHour = $(this).parent().attr("id");
    var currentHour = moment().hours();
    
    if (blockHour < currentHour) {
        return "past";
    } else if (blockHour == currentHour){
        return "present";
    } else if (blockHour > currentHour ) {
        return "future";
    }
});
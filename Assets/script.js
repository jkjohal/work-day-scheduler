var currentDate = moment().format("MMM Do YY");

$("#currentDay").text(currentDate)

$('.saveBtn').on('click', function(){

    var key=$(this).parent().attr('id')
    var value=$(this).siblings('textarea').val()

    localStorage.setItem(key, value)
});


//use local storage.getitem to retrive content from local storage and make sure that it stays on the page when we reload. 

// function loadEntries = localStorage.getItem("textarea")

$("textarea").val(function(){
    
    var key=$(this).parent().attr('id')

    var lastEntry = localStorage.getItem(key);
    return lastEntry;
});


//change color of timeblocks according to current time

// var blockHour = $("textarea").parent().attr("id");
// var currentHour = moment().hours();

//console.log(currentHour)

// if (blockHour < currentHour) {
//     $("textarea").addClass("past");
// } else if (blockHour == currentHour) {
//     $("textarea").addClass("present");
// } else {
//     $("textarea").css("future");  
// };
    
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



// 1. You need to use your $() selector to target the textarea you’re want the data to show back up inside of. You’ll need to look at your HTML and figure out how to make sure you’re targeting the right one. I’ll give you a hint that you might need to reference both the id you used when you saved the item into local storage AND some type of selector to target the right element.
// 2. Check out the jQuery .val() method you used to get data out of that textarea. You can actually use it to put data back into an input as well!
// 3. Think about the data you want to put back into that textarea. It’s coming from localStorage and you already know how to get items out of it. So now it’s just a matter of getting that data back out of localStorage and passing it back into the box you’ve targeted.

// And one last hint - you’ll have to do this for every one of your hour rows. Or build a function that can do it dynamically somehow. Up to you!

//create a function that will check the current time vs the timeblock time ...hint use the ID and add the appropriate class of past present or future 
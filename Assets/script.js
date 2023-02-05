var currentDate = moment().format("MMM Do YY");

$("#currentDay").text(currentDate)

$('.saveBtn').on('click', function(){

    var key=$(this).parent().attr('id')
    var value=$(this).siblings('textarea').val()

    localStorage.setItem(key, value)
});


//use local storage.getitem to retrive content from local storage and make sure that it stays on the page when we reload. 

// function loadEntries = localStorage.getItem("textarea")

$("textarea").on("load", function(){
    
    var key=$(this).parent().attr('id')

    var lastEntry = localStorage.getItem(key)
    (this).textContent = lastEntry
});

//create a function that will check the current time vs the timeblock time ...hint use the ID and add the appropriate class of past present or future 
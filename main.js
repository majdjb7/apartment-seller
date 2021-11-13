
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y") //PARK
    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) //PARK
    renderApts(relevantApts)
})





const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    // if(apartments.length==0) {
    //     alert("H")
    // }
    //Your code goes here.

    const source = $('#apartment-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({apartments});
    $('#results').append(newHTML);
}

renderApts(apartments) //renders apartments when page loads

//change name
// $("body").on("click", "button", function() {
//     alert("clicked")
//     renderApts(apartments)
// })
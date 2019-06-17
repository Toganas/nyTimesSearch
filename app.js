var searchTerm;
var numRecords;
var startYear;
var endYear;

function resetSearch() {
    searchTerm = null;
    numRecords = null;
    startYear = null;
    endYear = null;
    $('#search').val('');
    $('#startYear').val('');
    $('#startYear').val('');
    $('#endYear').val('');
    $('#number').val(1);
}

function search() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    if(startYear.length === 0 && endYear.length === 0) {
    $.ajax({
        url: queryURL, //source,
        method: 'GET',
        data: {
            q: searchTerm, // Search Terms
            "api-key": "EbCVmbtJGP2O1Hd0YGaYA5AXeI84v1lu",
            fq: {
                source: "The New York Times", // filter query: forces to be NYT search
            }
        }   
        }).then(function (response) {
            console.log(response); // log response to see what it returns
            //console.log("invalid date");
        });
    } else {
        $.ajax({
        url: queryURL, //source,
        method: 'GET',
        data: {
            q: searchTerm, // Search Terms
            begin_date: startYear + "0101", // Dates (optional)
            end_date: endYear + "1231", // Dates (optional)
            "api-key": "EbCVmbtJGP2O1Hd0YGaYA5AXeI84v1lu",
            fq: {
                source: "The New York Times", // filter query: forces to be NYT search
            }
        }   
        }).then(function (response) {
            console.log(response); // log response to see what it returns
            //console.log("valid date");
        });
    }
}

$("#searchButton").click(function () {	
    // Grab the values and log the results
    searchTerm = $("#search").val();
    console.log("searchTerm = " + searchTerm);
    numRecords = $("#number").val();
    console.log("numRecords = " + numRecords);
    startYear = $("#startYear").val();
    console.log("startYear = " + startYear);
    endYear = $("#endYear").val();
    console.log("endYear = " + endYear);   

    // Sum their lenghts to ensure there is a valid in at least one field
    var validSearch = searchTerm.length + startYear.length + endYear.length;

    if(validSearch > 0) {
        search();
    }


});

$("#clearResults").click(function () {	
    resetSearch(); 
});



// Working Query
/*var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
$.ajax({
    url: queryURL, //source,
    method: 'GET',
    data: {
        q: "election", // Search Terms
        begin_date: "", // Dates (optional)
        end_date: "", // Dates (optional)
        "api-key": "EbCVmbtJGP2O1Hd0YGaYA5AXeI84v1lu",
        fq: {
            source: "The New York Times", // filter query: forces to be NYT search
        }
    }
}).then(function (response) {
    console.log(response); // log response to see what it returns
});
*/
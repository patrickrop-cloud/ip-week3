$("#design").hover(
    function() {
         $("#description-design").toggle()
         $("#design").toggle()
     }, 
     function() {
         $("#description-design").toggle()
         $("#design").toggle()
     }
);
$("#develope").hover(
    function() {
        $("#description-develope").toggle()
        $("#develope").toggle()

    },
    function() {
        $("#description-develope").toggle()
        $("#develope").toggle()
    }
);
$("#product").hover(
    function() {
        $("#description-product").toggle()
        $("#product").toggle()
    },
    function() {
        $("#description-product").toggle()
        $("#product").toggle()
    }
);
$(".button").click(function(){
    alert("Dear User we have recieved your message.Thank you for reaching out to us.");
});
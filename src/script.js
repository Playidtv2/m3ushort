$(document).ready(function(){
  $("#btn").click(function(){
    go();
  });
});

function go(){
  $("#output").html("loading...");
  $.get('https://cors-anywhere.herokuapp.com/https://airbox.edimaxcloud.com/query_history?id=74DA38EBF830&token=2cf933ee-4d2f-4a87-b146-6ef4ac344769', function(data){
    $("#output").html(JSON.stringify(data));  
  });    
}
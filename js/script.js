$(document).ready( function(){
    apiBase = 'https://jsonplaceholder.typicode.com/photos/';
});

// Make a get repuest and load images onto the browser.
$('.button').on('click', function(){
axios.get(apiBase).then(function(response){
var photoList = response.data.map(function(photo){

      var url = photo.url;
      var title = photo.title;

  return $('<div>').addClass('photo').html('<img src='+url+' alt='+title+' width="100" height="100"> <p>'+title+'</p>');
     });
     $('#tasks').html(photoList);
   });
  $('#tasks').html('<p>please wait...</p>');
});
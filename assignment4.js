// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  $('.flexsearch-input').keyup(function() {
    var search = $('.flexsearch-input').val();
    if (search == '') {
      return;
    }
    $('#inputSuggestions').empty();
    $.ajax({
      type: "get",
      url: "http://www.mattbowytz.com/simple_api.json",
      data: {
        data: "all"
      },
      success: function (data) {
        // console.log(data);
        $.each(data.data, function(array, subarr){
          $.each(subarr, function(index, option){
            // console.log(option);
            if(option.substring(0, search.length).toLowerCase() == search) {
              var result = "<li><a href=https://www.google.com/search?q=" + option + ">" + option + "</li>";
              $('#inputSuggestions').append(result);

              console.log(option);
            }
          });
        });
      }
      // }).done(function(data) {
      //   console.log(data);
    });
  });
})();
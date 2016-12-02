(function() {
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
            }
          });
        });
      }
    });
  });
})();
$(document).ready(function () {
  $('#button').click(() => {
    $.ajax({
      url: '/users'
    }).done(result => {
      console.log(result)
    }).fail(err => {
      console.log('Error', err)
    }).always(() => {
    });
  });
});
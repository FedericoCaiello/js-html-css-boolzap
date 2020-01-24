$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });
});

function sendMessage () {
  var textMessage = $('input.send-message').val();

  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message_text').text(textMessage);


    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.message_time').text(time);
    newMessage.addClass('sent');
    $('.main_background_img').append(newMessage);
    console.log(newMessage);

    $('input.send-message').val('');
  }
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

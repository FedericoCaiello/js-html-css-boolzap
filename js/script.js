$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });
});

function sendMessage () {
  var textMessage = $('input.send-message').val();

  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();

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

    // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
    setTimeout(function () {
      var messaggioAmico = $('.template .message').clone();
      console.log(messaggioAmico);

      messaggioAmico.find('.message_text').text('okay');
      messaggioAmico.find('.message_time').text(time);
      messaggioAmico.addClass('received');
      $('.main_background_img').append(messaggioAmico);
      console.log(messaggioAmico);

    }, 1000);
  }
}
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

$(document).ready(function () {
  $('.nav_search_inline .fa-search').click(function () {
    // qui sotto va il valore
    var ricerca = $('.nav_search').val().toLowerCase();
    // ciclo while con lunghezza del nome
    // variabili con il testo all'interno dell'attributo(parole in rosso)
    var i = 0;
    while (i < $('.contact-name').length) {
      var nome = $('.contatti_list h3').eq(i).text().toLowerCase();
      var cancellaContatto = $('.contatti_list li').eq(i);
      if ( nome.includes(ricerca)) {
        cancellaContatto.show();
      }
      else {
        cancellaContatto.hide();
      }
      i++;
    }
  });
  $('.bar_search input').keyup(function () {
    var ricerca = $('.nav_search').val().toLowerCase();
    var i = 0;
    while (i < $('.contact-name').length) {
      var nome = $('.contatti_list h3').eq(i).text().toLowerCase();
      var cancellaContatto = $('.contatti_list li').eq(i);
      if ( nome.includes(ricerca)) {
        cancellaContatto.show();
      }
      else {
      cancellaContatto.hide();
      }
      i++;
    }
  });
  $('.contatti li').click(function (){
    var posizioneUtente = $(this).index();
    var chatNascondere = $('.main_background_img.active');
    chatNascondere.removeClass('active');
    var chatVar = $('.main_background_img').eq(posizioneUtente);
    chatVar.addClass('active');

  });
  $('.main_background_img .message_top').click(function (){
     var posizione = $(this).find('ul');
     posizione.toggleClass('display-none');
    console.log('cicaico');
  });
  $('.main_background_img .message a').click(function (){
    var cancellaMessaggio = $(this).parents('message_top');
    cancellaMessaggio.remove();
  });
});

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

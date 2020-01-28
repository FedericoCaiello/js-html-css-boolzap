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
  $(document).on('click', '.main_background_img .message_top', function (){
     var posizione = $(this).find('ul');
     console.log('posizione');
     posizione.toggleClass('display-none');
    console.log('cicaico');
  });
  $(document).on('click','.main_background_img .message a', function (){
    var cancellaMessaggio = $(this).parents('.message');
    cancellaMessaggio.remove();
  });
  $(document).on('click', ' ul li', function(){
    var data = $(this).attr('data-contact');
    var selector = '.main_background_img[data-contact="'+ data +'"]';
    $('.main_background_img').removeClass('.active');
    $(selector).addClass('active');
    $(' ul li').removeClass('.active');
    $(this).addClass('active');

    var name = $(this).find('.contact-name').text();
    var time = $(this).find('.orario').text();
    var img = $(this).find('.avatar_notifica_left img').attr('src');
    $('.navbar_main_right .avatar_notifica_rigth h3').text(name);
    $('.navbar_main_right .avatar_notifica_rigth p').text(time);
    $('.navbar_main_right .AAAheader_flex_avatar img'). attr('src', img);
  });
});

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

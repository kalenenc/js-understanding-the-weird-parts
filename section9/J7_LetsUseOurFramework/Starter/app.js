var g = G$('John', 'Doe');

g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
  var loginGrtr = G$('Kalene', 'Csefalvay');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});

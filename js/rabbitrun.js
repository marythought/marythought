$('#runButton').on('click', function() {
  var userName = $('#nameInput').val();
  var userSpeed = $('#speedInput').val();
  var userFocus = $('#focusInput').val();

  var Racer = function(speed, focus, name) {
    this.speed = speed;
    this.focus = focus;
    this.name = name;
    this.position = 0;
    this.report = function() {
      return this.name + " is at " + this.position;
    };
    this.run = function() {
      if(this.focus >= (Math.random() * 10)) {
        this.position += this.speed;
      }
    };  
  }
    
  var user = new Racer(Number(userSpeed), Number(userFocus), userName);
  var rabbit = new Racer(8,3,"Peter Rabbit");
  var distance = 75;
  var winner;
  var message;

  while(user.position < distance && rabbit.position < distance) {
    user.run();
    rabbit.run();
  };

  if(rabbit.position > user.position) {
    winner = rabbit.name;
    message = "The rabbit beat you! Maybe you should drink some more coffee...";

  } else {
    winner = user.name;
    message = "You outran the rabbit! Time for a nap...";
  };
  
  console.log(rabbit.report());
  console.log(user.report());

  $('#results').text(message);

});

$('#bunnicula').click(function(){
  if ($("#rabbitpic").attr("src", "images/rabbit.jpg")) {
    $("#rabbitpic").removeAttr("src", "images/rabbit.jpg").attr("src", "images/rabbit2.jpg");
  } else {
    $("#rabbitpic").removeAttr("src", "images/rabbit2.jpg").attr("src", "images/rabbit.jpg");
  }
});
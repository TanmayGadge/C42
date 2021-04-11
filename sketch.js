function setup() {
  createCanvas(800, 400);
  var name;
  var num = 25;
  var bool = true;
  var test = null;

  name = "Tanmay";
  console.log(21);
  console.log("Tanmay Gadge");
  console.log(name);
  console.log(name.length);
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(num);
  console.log(parseInt("123"));
  console.log(parseFloat("123.757"));

  console.log(num + 25);
  console.log(num - 20);
  console.log(num * 5);
  console.log(num / 5);
  console.log(num % 5);

  console.log("Hi" + name);
  console.log("Hi" - name);
  console.log("Hi" / name);
  console.log("Hi" * name);
  console.log("Hi" % name);

  console.log(num / 0);
  console.log(bool);

  console.log(5 === 4);
  console.log(test);


  if (3 > 2) {
    console.log("Happy");
  }
  else {
    console.log("Not Happy");
  }

  switch (name) {
    case "Tanmay":
      console.log("Condition1");
      break;

    case "tanmay":
      console.log("Condition2");
      break;

    default:
      console.log("None of the conditions");
      break;
  }

  for (var i = 0; i<=5; i++) {
    console.log(i);
  }

  var x = 0;

  while (x<=5){
    console.log(x);
    x++;
  }

  var friends = ["Rohit", "Kshitij", "Raj"];
  console.log(friends[0]);

  for (var friend in friends){
    console.log(friends[friend]);
  }
  console.log(friends.length);
  friends.push("Mohan");
  console.log(friends);

  friends.pop();
  console.log(friends);

  friends[1] = "Tanmay";
  console.log(friends);
  
  function circumference(radius){
    var circumference = 2*3.14*radius;
    return circumference;
  }

  console.log(circumference(1));

  var paddle = new Object();
  paddle.length = 60;
  
  paddle.showLength = function(){
    console.log(paddle.length);
  }
  paddle.showLength();
  console.log(paddle);

}

function draw() {
  background(255, 255, 255);

}
  
    var msg;
    var wsbroker = "broker.hivemq.com";  //mqtt websocket enabled broker
    var wsport = 8000 // port for above
    var client = new Paho.MQTT.Client(wsbroker, wsport,
        "myclientid_" + parseInt(Math.random() * 100, 10));
    
    client.onConnectionLost = function (responseObject) {
      console.log("connection lost: " + responseObject.errorMessage);
    };
    client.onMessageArrived = function (message) {
      console.log(message.destinationName, ' -- ', message.payloadString);
       var msg=message.payloadString;
       var pol1=msg.substring(0, 1);
       var pol2=msg.substring(1,2);
       var pol3=msg.substring(2,3);
       var pol4=msg.substring(3,4);
	   var pol5=msg.substring(4,5);
       var a1= parseInt(pol1);
       var a2= parseInt(pol2);
       var a3= parseInt(pol3);
       var a4= parseInt(pol4);
	   var a5= parseInt(pol5);
	
	
       
	 if(a1==1){
	document.getElementById("slot1").src="images/car.png";	}
	else{
	document.getElementById("slot1").src="images/nope.png";	}

	 if(a2==1){
	document.getElementById("slot2").src="images/car.png";	}
	else{
	document.getElementById("slot2").src="images/nope.png";	}

	 if(a3==1){
	document.getElementById("slot3").src="images/car.png";	}
	else{
	document.getElementById("slot3").src="images/nope.png";	}
	
	 if(a4==1){
	document.getElementById("slot4").src="images/car.png";	}
	else{
	document.getElementById("slot4").src="images/nope.png";	}
	
	 if(a5==1){
	document.getElementById("slot5").src="images/car.png";	}
	else{
	document.getElementById("slot5").src="images/nope.png";	}
    };


    var options = {
      timeout: 3,
      onSuccess: function () {
        console.log("mqtt connected");
        // Connection succeeded; subscribe to our topic, you can add multile lines of these
        client.subscribe('/World', {qos: 1});

        //use the below if you want to publish to a topic on connect
        message = new Paho.MQTT.Message("11111");
        message.destinationName = "/World";
        client.send(message);
      },
      onFailure: function (message) {
        console.log("Connection failed: " + message.errorMessage);
      }
    };
  function init() {
      client.connect(options);
  }

  function ledon()  {
	
  	message = new Paho.MQTT.Message("a");
        message.destinationName = "/Led";
        client.send(message);

   }

  function ledoff()  {
	
  	message = new Paho.MQTT.Message("b");
        message.destinationName = "/Led";
        client.send(message);

   }

function check()
{
if(document.getElementById("icd").checked==false)
ledoff();
else 
ledon();
}

function check2()
{
if(document.getElementById("icd2").checked==false)
{

message = new Paho.MQTT.Message("d");
        message.destinationName = "/Led";
        client.send(message);

}
else 
{
message = new Paho.MQTT.Message("c");
        message.destinationName = "/Led";
        client.send(message);


}

}


function check3()
{
if(document.getElementById("icd3").checked==false)
{
message = new Paho.MQTT.Message("f");
        message.destinationName = "/Led";
        client.send(message);
}
else 
{

message = new Paho.MQTT.Message("e");
        message.destinationName = "/Led";
        client.send(message);


}
}

function check4()
{
if(document.getElementById("icd4").checked==false)
{
message = new Paho.MQTT.Message("h");
        message.destinationName = "/Led";
        client.send(message);


}
else 
{
message = new Paho.MQTT.Message("g");
        message.destinationName = "/Led";
        client.send(message);


}
}


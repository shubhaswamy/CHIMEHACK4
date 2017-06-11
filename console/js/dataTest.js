
    var recentMessage = "https://AC73c0f05c54908502f431b96dec41b002:823c192b7667903774b4d28713e31a8d@api.twilio.com/2010-04-01/Accounts/AC73c0f05c54908502f431b96dec41b002/SMS/Messages.json";
    

    var lastText = null;

setInterval(function() {
    $.ajax({
    	url: recentMessage,
    	username: 'AC73c0f05c54908502f431b96dec41b002',
    	password:'823c192b7667903774b4d28713e31a8d',
    	  headers: {
    "Authorization": "Basic " + btoa('AC73c0f05c54908502f431b96dec41b002:823c192b7667903774b4d28713e31a8d'),
  },
    	success: function(data){
          console.log(data);
          var newText = data.sms_messages[0].body;
          console.log('got', newText)
          if (newText !== lastText) {
            lastText = newText;
                      $($('div.conversation-start')[0].parentElement).prepend('<div class="bubble you">'+lastText+'</div>');

          }
        }
     });
 }, 500);


//    var obj = JSON.parse(recentMessage);
  //  document.getElementById("demo").innerHTML = obj.body;
    

   
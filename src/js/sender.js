let xhr = new XMLHttpRequest();
let url = "https://chatapi.viber.com/pa/set_webhook";

let data = {
    "url": webAppUrl,
   "event_types":[
      "delivered",
      "seen",
      "failed",
      "subscribed",
      "unsubscribed",
      "conversation_started"
   ],
   "send_name": true,
   "send_photo": true
}

xhr.open('POST', url );
xhr.setRequestHeader('X-Viber-Auth-Token', '');
xhr.send(data);

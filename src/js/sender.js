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
xhr.setRequestHeader('X-Viber-Auth-Token', '502e748825a7e3b8-ccd095a47f2cdba5-29d9a2c12ec4cdc5');
xhr.send(data);
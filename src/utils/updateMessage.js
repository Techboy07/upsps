const { VITE_API_TOKEN, VITE_CHAT_ID } = import.meta.env;

export function updateMyMessage(myMessage, obj) {
  myMessage.value += encodeURI("\n");
  myMessage.value += obj;
  //this.myMessage += encodeURI("\n");
}

export function fetchSend(myMessage, fn) {
  const url = `https://api.telegram.org/bot${VITE_API_TOKEN}/sendMessage?chat_id=${VITE_CHAT_ID}&text=${myMessage}`;
  fetch(url).then(() => fn());
}

const chatWidget = document.querySelector(".chat-widget")
const chatWidgetInput = document.getElementById("chat-widget__input")
const chat = document.querySelector('.chat-widget__messages');
// const botMessage = document.querySelector(".chat-widget__side");
const clientMessage = document.querySelector(".message_client");
const clientMessageText = document.querySelector(".message__text");


const botMessages = ["алё, это Пакистан?!", "вас не слышно", "перезвоните позже", "это телефон АТС?!"]

chatWidget.addEventListener("click", function() {
  chatWidget.classList.add("chat-widget_active")
})

chatWidgetInput.addEventListener("keydown", function(item) {
  if (item.keyCode === 13 && chatWidgetInput.value != "") {
    let randomBotMessage = Math.floor(Math.random() * botMessages.length);
    let botMessage = botMessages[randomBotMessage];
function GetTime() {
  let time;
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      time = `${hours}:${minutes}`;
      return time
}
chat.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${GetTime()}</div>
                    <div class="message__text">${chatWidgetInput.value}</div>
                </div>
            `;

chatWidgetInput.value = '';

chat.innerHTML += `
        <div class="message">
            <div class="message__time">${GetTime()}</div>
            <div class="message__text">${botMessage}</div>
        </div>
    `;
  }
})

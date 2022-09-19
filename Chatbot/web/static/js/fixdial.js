window.addEventListener('dfMessengerLoaded', function (event) {
        const dfMessenger = document.querySelector('df-messenger'); 
        const style = document.createElement('style');
    
        const nonMobileMinWidth = 200; // Breakpoint where DF Messenger switches between mobile/non-mobile styles
        
        style.textContent = '@media screen and (min-width: ' + nonMobileMinWidth + 'px) { .chat-wrapper { max-height: 65% } }';
    
        dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.appendChild(style);
})
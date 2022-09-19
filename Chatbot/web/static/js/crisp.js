const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('df-messenger-loaded', function () {
        $r1 = document.querySelector("df-messenger");
        $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");

        var style = document.createElement( 'style' );
        style.innerHTML = 'div.chat-wrapper[opened="true"]{height:480px;max-height:480px;}';
        $r2.shadowRoot.appendChild( style );
});
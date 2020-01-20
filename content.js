
function isHidden(el) {
    return (el.offsetParent === null)
}

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg === 'do_accept') {
        var acceptSpan = document.getElementById('acceptSpan');
        if (acceptSpan != null) {
            if (!isHidden(acceptSpan)) {
                document.activeElement.blur()
                var el = document.createElement('script');
                el.innerHTML = "handleAcceptButton()"
                document.head.appendChild(el);
            }
        }
    }
});
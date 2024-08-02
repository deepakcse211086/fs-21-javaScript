document.addEventListener('keydown', function(event) {
    // Get the key and keycode values
    const key = event.key;
    const keycode = event.keyCode;

    // Update the UI with the key and keycode values
    document.getElementById('key').textContent = key;
    document.getElementById('keycode').textContent = keycode;
});

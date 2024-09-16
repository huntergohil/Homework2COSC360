function submitName() {
    var name = document.getElementById('userName').value;
    document.getElementById('displayName').innerText = "Hello, " + name + "!";
    document.getElementById('nameField').style.display = 'none';
}
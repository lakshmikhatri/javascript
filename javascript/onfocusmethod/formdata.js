function focusHandler() {
    document.getElementById("abc").innerHTML = 'red'
}

function changeCase() {
    let name = document.getElementById("uname").value;
    console.log(name)
    document.getElementById("uname").value = name.toUpperCase()
}
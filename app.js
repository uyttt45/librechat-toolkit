function hex(bytes){
const arr=new Uint8Array(bytes)
crypto.getRandomValues(arr)
return [...arr].map(b=>b.toString(16).padStart(2,"0")).join("")
}

function generateCreds(){
document.getElementById("key").value=hex(32)
document.getElementById("iv").value=hex(16)
document.getElementById("jwt").value=hex(32)
document.getElementById("refresh").value=hex(32)
}

function generateAPI(){
document.getElementById("apikey").value=hex(32)
}

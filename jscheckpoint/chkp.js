const mycheckbox = document.getElementById("mycheckbox")
const radiobtn1 = document.getElementById("radiobtn1")
const radiobtn2 = document.getElementById("radiobtn2")
const radiobtn3 = document.getElementById("radiobtn3")
const mysubmitbtn = document.getElementById("mysubmitbtn")
const chksub = document.getElementById("chksub")
const subradio = document.getElementById("subradio")

mysubmitbtn.onclick = function() {
    if (mycheckbox.checked) {
    chksub.textContent = "ALL good!"
    } else {
    chksub.textContent = "not so good!"
    }
    if (radiobtn1.checked) {
    subradio.textContent = " feeling not so good!"
    }else {
    subradio.textContent = "feeling gooood"
    }
    if (radiobtn2.checked){
        chkradio.textContent = "feeling not so bad!"
    }else{
        chkradio.textContent = "feeling badd"
    }
}
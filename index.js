const textarea = document.querySelector('.text_input')

const signal_num = document.querySelector('.signal_num')

const limit_num = document.querySelector('.limit_num')


let b = +limit_num.textContent-1

console.log(b);


textarea.addEventListener('input', function () {
    let wordlength = textarea.value.length

    signal_num.textContent = wordlength

    if (wordlength > b) {
        textarea.value = textarea.value.slice(0, b)
    }

    if (wordlength>b) {
        textarea.style.outlineColor = 'red'
        textarea.style.color = 'red'
    }

})

//ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
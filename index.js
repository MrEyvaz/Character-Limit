const textarea = document.querySelector('.text_input')

const signal_num = document.querySelector('.signal_num')

const limit_num = document.querySelector('.limit_num')


textarea.addEventListener('input', function () {
    let wordlength = textarea.value.length

    signal_num.textContent = wordlength

    if (wordlength > limit_num) {
        textarea.value = textarea.value.slice(0, limit_num)
    }

    if (wordlength>limit_num) {
        textarea.style.borderColor = 'red'
        textarea.style.color = 'red'
    }

})

//ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
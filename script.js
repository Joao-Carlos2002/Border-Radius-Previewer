const borderRange = document.querySelectorAll('#switch-4-container .border-range');
const border_one_Range = document.getElementById('border-1-range');
const rangeInput = document.getElementById('range-1-value');
const label = document.querySelector('label[for="border-1-range"]');
const valueCss = document.getElementById('value-css');

window.addEventListener('load', () => {
    border_one_Range.addEventListener('change', () => {
        label.textContent = border_one_Range.value + ' %'
        rangeInput.value = border_one_Range.value
        document.getElementById('border').style.borderRadius = border_one_Range.value + '%'
        valueCss.textContent = 'border-radius: ' + document.getElementById('border').style.borderRadius + ';'
    })
    rangeInput.addEventListener('change', () => {
        border_one_Range.value = rangeInput.value
        rangeInput.value = border_one_Range.value
        label.textContent = border_one_Range.value + ' %'
        document.getElementById('border').style.borderRadius = border_one_Range.value + '%'
    })
    borderRange.forEach((range) => {
        range.addEventListener('change', () => {
            const border = document.getElementById('border');
            if (range.id === 'border-range1') {
                document.querySelector('#switch-4-container label[for="' + range.id + '"]').textContent = range.value + ' %'
                document.getElementById('border').style.borderTopLeftRadius = range.value + '%'
            } else if (range.id === 'border-range2') {
                document.querySelector('#switch-4-container label[for="' + range.id + '"]').textContent = range.value + ' %'
                document.getElementById('border').style.borderTopRightRadius = range.value + '%'
            } else if (range.id === 'border-range3') {
                document.querySelector('#switch-4-container label[for="' + range.id + '"]').textContent = range.value + ' %'
                document.getElementById('border').style.borderBottomLeftRadius = range.value + '%'
            } else {
                document.querySelector('#switch-4-container label[for="' + range.id + '"]').textContent = range.value + ' %'
                document.getElementById('border').style.borderBottomRightRadius = range.value + '%'
            } valueCss.textContent = 'border-radius: ' + border.style.borderTopLeftRadius + ' ' + border.style.borderTopRightRadius + ' ' + border.style.borderBottomLeftRadius + ' ' + border.style.borderBottomRightRadius    
        })
    })
    document.getElementById('copy-paste').addEventListener('click', () => {
        navigator.clipboard.writeText(valueCss.textContent)
    })
})

const borderRange = document.getElementById('border-range');
const rangeValue = document.getElementById('range-value');
const label = document.querySelector('label')
window.addEventListener('load', () => {
    borderRange.addEventListener('change', () => {
        label.textContent = borderRange.value + ' %'
        rangeValue.value = borderRange.value
        document.getElementById('border').style.borderRadius = borderRange.value + '%'
    })
    rangeValue.addEventListener('change', () => {
        borderRange.value = rangeValue.value
        rangeValue.value = borderRange.value
        label.textContent = borderRange.value + ' %'
        document.getElementById('border').style.borderRadius = borderRange.value + '%'
    })
})
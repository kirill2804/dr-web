const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];    
const date = new Date()
const dayWeek = date.getDate()
const day = date.getDay()

const getMonthNameInGenitiveCase = (date = new Date) =>
date.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
}).split(' ')[1];

function time(){
    const now = new Date();
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    const h = (hour < 10) ? `0${hour}` : hour
    const m = (min < 10) ? `0${min}` : min
    
    const s = (sec%2 == 0) ? 'show' : 'hide'

    document.querySelectorAll('.time')[0].innerHTML = `<span class='hour'>${h}</span><span class=${s}>:</span><span>${m}</span>`
    document.querySelectorAll('.time')[1].innerHTML = `<span class='hour'>${h}</span><span class=${s}>:</span><span>${m}</span>`

}
setInterval(time, 1000)


document.querySelectorAll('.date')[0].textContent = `${days[day]} ${dayWeek} ${getMonthNameInGenitiveCase()}`
document.querySelectorAll('.date')[1].textContent = `${days[day]} ${dayWeek} ${getMonthNameInGenitiveCase()}`
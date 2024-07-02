let selectMenu = document.querySelectorAll('select');
let timBox = document.querySelector('.time');
let setAlarmBtn = document.querySelector('button');
let alarmTime;
let alarmState = 'noset';
let ringtone = new Audio('./assets/sound/ringtone.mp3');
let content = document.querySelector('.content');

for(let i = 23; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i ;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
    
}

for(let i = 59; i >= 0 ; i--){
    i = i < 10? '0' + i : i ;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
    
}

/* To set our numbers be refreshed every second and show us the new time */
setInterval(() => {
     let date = new Date();
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();

     h = h < 10 ? '0' + h : h ;
     m = m < 10 ? '0' + m : m ;
     s = s < 10 ? '0' + s : s ;

    timBox.innerHTML = `${h}:${m}:${s}`;
    if(alarmTime == `${h}:${m}`) {
        ringtone.play();
        ringtone.loop = true ;
        }

}, 1000);



setAlarmBtn.addEventListener('click', ()=>{
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('please choose the time correctly');
    }
   
    checkState(alarmState);
    
})

function checkState(state){
    if(state == 'noset'){
        content.classList.add('disable');
        setAlarmBtn.innerText = 'Clear Alarm';
        alarmState = 'set';
    }else {
        content.classList.remove('disable');
        alarmTime = "";
        ringtone.pause();
        alarmState = 'noset';
        setAlarmBtn.innerText = 'Set Alarm';
    }
}
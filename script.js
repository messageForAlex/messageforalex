function checkTest(){
    const text = document.getElementById("text");
    const label = document.getElementsById("label");
    const button = document.getElementById("button")

    if(text.value = "Тяжело" || "тяжело"){
        
        label.style.visibility="none";
        button.style.visibility="none";

        text.value = "Да я 'домоглася' до тебя в интернете, да ты мне интересна, но не как личность, а как человек. Я могу лишь надеяться, что у тебя осталось больше хороших воспоминаний, нежели плохих или хотя бы они не вызывают отвращения. Что моя личность не вызывает отрицательных эмоций. Просто пойми - в интернете большинство общается раскрепощеннее. Иногда говорят то, чего в жизни никогда не скажут. Позволяют больше, чем могут в жизни. Ведут порой себя как идиоты. Я полностью уверен, где-то пошёл не туда и почему-то не решился возвращаться. Возможно это моё желание побороть страх общения выматало тебя, но это уже моя ошибка и я в полной мере понесу наказание. В любом случае спасибо за те 2 дня в Минске и, местами, приятное общение с тобой. Полностью уважаю тебя и твой выбор."

}
    else{
        text.value = "Ты точно то пишешь?";
    }
}

function clear(){
    const text = document.getElementById("text");
    text.value="";
}
const setDeadLine = '20 January 2023 12:50 AM';

const inputsItem = document.querySelectorAll('input');

const countDown = () => {
    const deadLine = new Date(setDeadLine);
    const presentTime = new Date();
    const remainingTime = (deadLine - presentTime) / 1000;

    inputsItem[0].value = Math.floor(remainingTime / 3600 / 24);
    inputsItem[1].value = Math.floor(remainingTime / 3600) % 24;
    inputsItem[2].value = Math.floor(remainingTime / 60) % 24;
    inputsItem[3].value = Math.floor(remainingTime % 60);
}

countDown();

setInterval(
    () => {
        countDown()
    },
    1000
)
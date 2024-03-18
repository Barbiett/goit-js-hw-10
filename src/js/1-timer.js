

// Инициализируйте flatpickr на элементе выбора даты с указанием параметров, включая метод onClose для
// обработки выбранной даты.

// Напишите функцию обработчик для метода onClose, в которой проверяйте выбранную дату.Если она находится в
// прошлом, сделайте кнопку "Start" неактивной и покажите сообщение об ошибке с помощью iziToast.
// Если дата корректна, активируйте кнопку "Start".

// Создайте функцию для добавления ведущего нуля к числу, если оно состоит из одной цифры.

// Напишите функцию для расчета оставшегося времени до выбранной даты на основе разницы между текущим временем
//  и выбранной датой.

// Создайте функцию для обновления интерфейса таймера с учетом оставшегося времени.

// Назначьте обработчик события click на кнопку "Start", который будет запускать таймер.
//  Внутри обработчика делайте кнопку неактивной, запускайте таймер и выводите оставшееся время на страницу.

// Напишите логику для остановки таймера, когда оставшееся время достигнет нуля.


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const selector = document.querySelector("#datetime-picker");

const dataStart = document.querySelector("[data-start]");

let userSelectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate < currentDate) {
      iziToast.warning({
        color: "red",
        message: "Please choose a date in the future.",
        position: "topRight"
      });
      dataStart.setAttribute("disabled");
    } else {
      dataStart.removeAttribute("disabled");
    }
  }
};
flatpickr(selector, options);

const timer = document.querySelector(".timer");

dataStart.addEventListener("click", startTimer);

function startTimer() {
  let msDifference = userSelectedDate - new Date();
  const intervalId = setInterval(() => {
    let { days, hours, minutes, seconds } = convertMs(msDifference);
    document.querySelector('[data-days]').textContent = addZeroOnStart(days);
    document.querySelector('[data-hours]').textContent = addZeroOnStart(hours);
    document.querySelector('[data-minutes]').textContent = addZeroOnStart(minutes);
    document.querySelector('[data-seconds]').textContent = addZeroOnStart(seconds);
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      dataStart.removeAttribute("disabled");
      selector.removeAttribute("disabled");
    }
    msDifference -= 1000;
  }, 1000);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZeroOnStart(value) {
  return value < 10 ? "0" + value : value;
}

// 


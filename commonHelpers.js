import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const d=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]");let u=0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){u=t[0],u<new Date?(h.warning({color:"red",message:"Please choose a date in the future.",position:"topRight"}),r.setAttribute("disabled","true")):r.removeAttribute("disabled")}};f(d,y);document.querySelector(".timer");r.addEventListener("click",S);function S(){let t=u-new Date;const n=setInterval(()=>{let{days:a,hours:s,minutes:c,seconds:e}=b(t);document.querySelector("[data-days]").textContent=o(a),document.querySelector("[data-hours]").textContent=o(s),document.querySelector("[data-minutes]").textContent=o(c),document.querySelector("[data-seconds]").textContent=o(e),a===0&&s===0&&c===0&&e===0&&(clearInterval(n),r.removeAttribute("disabled",!0),d.removeAttribute("disabled",!0)),t-=1e3},1e3)}function b(t){const e=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:i,minutes:l,seconds:m}}function o(t){return t<10?"0"+t:t}
//# sourceMappingURL=commonHelpers.js.map
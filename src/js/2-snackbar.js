import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form-snackbar");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const inputDelay = parseInt(document.querySelector('input[name="delay"]').value);
    const selectedCheckbox = document.querySelector('input[name="state"]:checked').value;
    const promise = new Promise((resolve, reject) => {
        if (selectedCheckbox === "fulfilled") {
            setTimeout(() => resolve(inputDelay), inputDelay);
        } else {
            setTimeout(() => reject(inputDelay), inputDelay);
        }
    });
    promise.then(
        () => {
            iziToast.success({ message: `✅ Fulfilled promise in ${inputDelay}ms`, position: "topRight" });
        }
    ).catch(() => {
        iziToast.error({ message: `❌ Rejected promise in ${inputDelay}ms`, position: "topRight" })
    });
    form.reset();

}  





 

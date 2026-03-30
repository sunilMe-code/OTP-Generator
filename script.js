let inputs = document.querySelectorAll(".otp-box input");
let otpResend = document.getElementById("otpResend")
let timer = document.getElementById("timer");
let OTPbtn = document.getElementById("OTPbtn");
let code = document.getElementById("code");

let interval; // Store interval
let OTP = "";

// INPUT LOGIC
inputs.forEach((input, index) => {

   // Move forward
   input.addEventListener("input", () => {
      if (input.value && index < inputs.length - 1) {
         inputs[index + 1].focus();
      }
   });

   // backspace move back
   input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
         inputs[index - 1].focus();
      }
   });

});

// GENNERATE OTP 
function generateOTP() {
   for (let i = 0; i < inputs.length; i++) {
      let num = Math.floor(Math.random() * 10);
      inputs[i].value = num;
   }
}

// GENERATE OTP WITH TIMER
function generateOTP() {
   clearInterval(interval); //  Stop Old Timer
   OTPbtn.disabled = true;
   OTPbtn.style.background = "#141414c1";
   OTP = "";

   for (let i = 0; i < inputs.length; i++) {
      let num = Math.floor(Math.random() * 10);
      inputs[i].value = num;
      OTP += num;
   }

   alert(); // OTP Notification
   startTimer(); //  Start Timer
}

// TIMER FUNCTION
function startTimer() {
   let count = 5;

   clearInterval(interval); //  Stop Previous Timer
   otpResend.style.color = "#a6a6a6";
   timer.textContent = "00:05";

   interval = setInterval(() => {

      if (count > 0) {
         count--;
         let display = String(count).padStart(2, '0');
         timer.textContent = "00:" + display;
      }

      if (count === 0) {
         clearInterval(interval); //  Stop Loop
         OTPbtn.disabled = false;
         otpResend.style.color = "#090404";
         document.querySelector(".alert").style.top = "-100%";
         OTPbtn.style.background = "linear-gradient(90deg, rgb(0, 3, 41) 0%, rgb(0, 69, 143) 100%)";
      }

   }, 1000);
}

// OTP NOTIFICATION FUNCTION
function alert() {
   code.textContent = OTP;
   document.querySelector(".alert").style.top = "0px";
};



const form = document.getElementById("authForm");
const heading = document.getElementById("heading");
const subtitle = document.getElementById("subtitle");
const submitBtn = document.getElementById("submitBtn");
const toggle = document.getElementById("toggleMode");
const switchText = document.getElementById("switchText");
const notice = document.getElementById("notice");
const forgot = document.getElementById("forgot");

let isSignup = false;

toggle.addEventListener("click", () => {
  isSignup = !isSignup;

  heading.textContent = isSignup
    ? "Create your account" : "Welcome back";

  subtitle.textContent = isSignup
    ? "Start your next chapter with us."
    : "Sign in to continue your journey.";

  submitBtn.innerHTML = isSignup
    ? 'Create account <span>→</span>'
    : 'Sign in <span>→</span>';

  switchText.textContent = isSignup
    ? "Already have an account?" : "New here?";

  toggle.textContent = isSignup
    ? "Sign in" : "Create account";

  notice.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  notice.textContent = isSignup
    ? "Form validated! Connect a backend to create your account."
    : "Form validated! Connect an authentication service to sign in.";
});

forgot.addEventListener("click", (event) => {
  event.preventDefault();
  notice.textContent =
    "Password reset needs a configured authentication service.";
});
  
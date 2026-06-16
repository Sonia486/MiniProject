// ....ELEMENTS
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let checkBox = document.getElementById("check");
let btn = document.getElementById("signupBtn");

// ERROR MESSAGE (LEFT ADJUSTED FIX)
let error = document.createElement("p");
error.style.color = "red";
error.style.marginTop = "5px";
error.style.marginBottom = "5px";
error.style.textAlign = "left";     // 🔥 align left
error.style.paddingLeft = "5px";    // 🔥 slight left positioning

btn.insertAdjacentElement("afterend", error);

// ENABLE BUTTON
checkBox.addEventListener("change", () => {
    btn.disabled = !checkBox.checked;
});

// SIGNUP CLICK
btn.addEventListener("click", function () {

    error.style.color = "red";
    error.innerText = "";

    if (nameInput.value.trim() === "") {
        error.innerText = "⚠ Please enter your name";
        return;
    }

    if (emailInput.value.trim() === "") {
        error.innerText = "⚠ Please enter your email";
        return;
    }

    if (!emailInput.value.includes("@")) {
        error.innerText = "⚠ Invalid email format";
        return;
    }

    if (passwordInput.value.length < 6) {
        error.innerText = "⚠ Password must be at least 6 characters";
        return;
    }

    // SAVE USER
    localStorage.setItem("username", nameInput.value);

    // SUCCESS
    error.style.color = "green";
    error.innerText = "✅ Signup successful!";

    // REMOVE OLD BUTTON
    let oldBtn = document.getElementById("goBtn");
    if (oldBtn) oldBtn.remove();

    // WRAPPER
    let wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "space-between";
    wrapper.style.marginTop = "5px";
    wrapper.style.gap = "10px";

    let signinText = document.querySelector(".signin-text");

    // LET'S GO BUTTON
    let goBtn = document.createElement("button");
    goBtn.innerText = "Let's Go";
    goBtn.id = "goBtn";

    goBtn.style.width = "120px";
    goBtn.style.padding = "8px";
    goBtn.style.background = "rgb(65, 102, 65)";
    goBtn.style.color = "white";
    goBtn.style.border = "none";
    goBtn.style.borderRadius = "6px";
    goBtn.style.cursor = "pointer";

    goBtn.onclick = () => {
        window.location.href = "Assignment3.html";
    };

    wrapper.appendChild(signinText.cloneNode(true));
    wrapper.appendChild(goBtn);

    signinText.replaceWith(wrapper);

    btn.disabled = true;
});

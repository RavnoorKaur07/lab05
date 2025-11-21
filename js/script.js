/* THEME TOGGLE */
(function () {
  const toggle1 = document.getElementById("toggle-theme");
  const toggle2 = document.getElementById("toggle-theme-excel");

  function applyTheme(theme) {
    document.body.classList.remove("pastel-theme", "night-theme");
    document.body.classList.add(theme);
  }

  function toggleTheme() {
    const night = document.body.classList.contains("night-theme");
    const newTheme = night ? "pastel-theme" : "night-theme";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (toggle1) toggle1.checked = newTheme === "night-theme";
    if (toggle2) toggle2.checked = newTheme === "night-theme";
  }

  if (toggle1) toggle1.addEventListener("change", toggleTheme);
  if (toggle2) toggle2.addEventListener("change", toggleTheme);

  const saved = localStorage.getItem("theme") || "pastel-theme";
  applyTheme(saved);

  if (toggle1) toggle1.checked = saved === "night-theme";
  if (toggle2) toggle2.checked = saved === "night-theme";
})();



/* INDEX FORM */
(function () {
  const sendBtn = document.getElementById("sendBtn");
  const output = document.getElementById("output");
  const msg = document.getElementById("msg");

  if (!sendBtn) return;

  sendBtn.addEventListener("click", () => {
    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const addr = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const prov = document.getElementById("province").value.trim();

    const mem = document.querySelector("input[name='membership']:checked")?.value;

    if (!first || !last || !email) {
      alert("Fill First Name, Last Name & Email");
      return;
    }

    output.innerHTML = `
      <div class="card-muted">
        <p><strong>Full Name:</strong> ${first} ${last}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${addr} · ${city}, ${prov}</p>
        <p><strong>Membership:</strong> ${mem}</p>
      </div>
    `;

    msg.classList.add("show");
    setTimeout(() => msg.classList.remove("show"), 1500);
  });
})();



/* EXCEL PAGE */
(function () {
  const btn = document.getElementById("calcBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const numbers = document.getElementById("numbers").value.trim().split(/\s+/).map(Number);
    if (!numbers.length || numbers.some(isNaN)) return alert("Enter valid numbers");

    const resultField = document.getElementById("result");

    if (document.getElementById("sum").checked)
      resultField.value = numbers.reduce((a,b)=>a+b,0);

    else if (document.getElementById("avg").checked)
      resultField.value = (numbers.reduce((a,b)=>a+b,0) / numbers.length).toFixed(2);

    else if (document.getElementById("max").checked)
      resultField.value = Math.max(...numbers);

    else if (document.getElementById("min").checked)
      resultField.value = Math.min(...numbers);
  });
})();

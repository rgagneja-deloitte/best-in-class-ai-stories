const focusToggle = document.getElementById("focus-toggle");
const problemGrid = document.getElementById("problem-grid");
const payPalTabButtons = Array.from(document.querySelectorAll(".tab-button"));
const payPalPanels = Array.from(document.querySelectorAll(".tab-panel"));

if (focusToggle && problemGrid) {
  focusToggle.addEventListener("click", () => {
    const nextFocus = problemGrid.dataset.focus === "problem" ? "build" : "problem";
    const showingBuild = nextFocus === "build";
    problemGrid.dataset.focus = nextFocus;
    focusToggle.textContent = showingBuild
      ? "Highlight the client problem"
      : "Highlight the build story";
    focusToggle.setAttribute("aria-pressed", String(showingBuild));
  });
}

for (const button of payPalTabButtons) {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    for (const tabButton of payPalTabButtons) {
      const isActive = tabButton === button;
      tabButton.classList.toggle("is-active", isActive);
      tabButton.setAttribute("aria-selected", String(isActive));
    }

    for (const panel of payPalPanels) {
      const isActive = panel.id === targetId;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    }
  });
}

const toggleButton = document.getElementById("toggle-view");
const workflowCompare = document.getElementById("workflow-compare");
const workflowAfter = document.getElementById("workflow-after");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
const collapsibleTriggers = Array.from(document.querySelectorAll("[data-collapsible-trigger]"));

if (toggleButton && workflowCompare && workflowAfter) {
  toggleButton.addEventListener("click", () => {
    const showingAfter = workflowAfter.hidden;
    workflowAfter.hidden = !showingAfter;
    workflowCompare.dataset.mode = showingAfter ? "after" : "before";
    toggleButton.textContent = showingAfter
      ? "Show Sarah's original workflow"
      : "Show Sarah's transformed workflow";
    toggleButton.setAttribute("aria-pressed", String(showingAfter));
  });
}

for (const button of tabButtons) {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    for (const tabButton of tabButtons) {
      const isActive = tabButton === button;
      tabButton.classList.toggle("is-active", isActive);
      tabButton.setAttribute("aria-selected", String(isActive));
    }

    for (const panel of tabPanels) {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    }
  });
}

for (const trigger of collapsibleTriggers) {
  trigger.addEventListener("click", () => {
    const targetId = trigger.dataset.collapsibleTrigger;
    const content = document.getElementById(targetId);
    const icon = trigger.querySelector(".collapsible-icon");
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;

    if (!content) {
      return;
    }

    trigger.setAttribute("aria-expanded", String(nextExpanded));
    content.hidden = !nextExpanded;

    if (icon) {
      icon.textContent = nextExpanded ? "−" : "+";
    }
  });
}

const GmailFactory = require("gmail-js");
const jQuery = require("jquery");
const gmail = new GmailFactory.Gmail(jQuery);
gmail.observe.on("load", () => {
  initializeOverlay();
  gmail.observe.on("compose", (compose) => {
    gmail.tools.add_compose_button(
      compose,
      "x",
      function () {
        openOverlay();
      },
      "automail-open-button"
    );
  });
});
const openOverlay = () => {
  document.querySelector(".automail-overlay").classList.add("show");
};
const closeOverlay = () => {
  document.querySelector(".automail-overlay").classList.remove("show");
};
const initializeOverlay = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("automail-overlay");

  const closeBtn = document.createElement("button");
  closeBtn.addEventListener("click", () => {
    closeOverlay();
  });
  closeBtn.innerHTML = "Close Overlay";
  closeBtn.classList.add("automail-overlay-close-btn");
  overlay.append(closeBtn);
  document.body.append(overlay);
};

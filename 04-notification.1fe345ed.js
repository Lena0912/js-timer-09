!function(){var i=null,t={notification:document.querySelector(".js-alert")};function o(){t.notification.remove(".is-visible")}t.notification.addEventListener("click",(function(){o(),clearTimeout(i)})),t.notification.classList.add(".is-visible"),i=setTimeout((function(){console.log("to close alert"),o()}),3e3)}();
//# sourceMappingURL=04-notification.1fe345ed.js.map

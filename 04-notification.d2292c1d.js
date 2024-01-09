let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.remove(".is-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add(".is-visible"),i=setTimeout((()=>{console.log("to close alert"),e()}),3e3);
//# sourceMappingURL=04-notification.d2292c1d.js.map

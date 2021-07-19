const { ipcRenderer } = require("electron");

const messageEl = document.querySelector("#message");
const versionEl = document.querySelector("#version");

ipcRenderer.invoke("check-version").then((x) => {
  console.log(x.version);
  if (versionEl) {
    versionEl.innerHTML = x.version;
  }
});

ipcRenderer.on("update-available", (x) => {
  console.log("update-available", x);
  if (messageEl) {
    // @ts-ignore
    messageEl.innerHTML = `New version available: <strong>${x.version}</strong>`;
  }
});

ipcRenderer.on("update-not-available", (x) => {
  console.log("update-not-available", x);
  if (messageEl) {
    // @ts-ignore
    messageEl.innerHTML = `You're already on the latest version.`;
  }
});

const { ipcRenderer } = require("electron");

const versionEl = document.querySelector("#version");

ipcRenderer.invoke("check-version").then((x) => {
  console.log(x.version);
  if (versionEl) {
    versionEl.innerHTML = x.version;
  }
});

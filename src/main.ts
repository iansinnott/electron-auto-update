/**
 *  __  __    _    ___ _   _
 * |  \/  |  / \  |_ _| \ | |
 * | |\/| | / _ \  | ||  \| |
 * | |  | |/ ___ \ | || |\  |
 * |_|  |_/_/   \_\___|_| \_|
 *
 * The main process. You're in a full node env here.
 */

import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("build/index.html");
}

app.whenReady().then(() => {
  createWindow();
});

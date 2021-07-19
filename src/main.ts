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
import { autoUpdater } from "electron-updater";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("resources/index.html");
}

// In the docs they use the `whenReady` promise, but I prefer treating the app
// as an EventEmitter and using the standard `on` method since there are many,
// many event emitters you will deal with when using electron and they won't all
// have a special method for the specific event you're interested in.
//
// @note to self, also not using the point free style here since that can be
// confusing to people less-accustomed to functional programming.
app.on("ready", () => {
  // A bit of cross-platform code here. When you close all windows on a Mac the
  // system behavior is not to quit the app but to leave it open and allow the
  // user to "reactivate" it by clicking the dock icon.
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  autoUpdater.currentVersion;

  // This is alos to support the above cross platform functionality. On macOS
  // when the dock icon is clicked the `activate` event will fire. Listening for
  // that lets us re-create a window when the user clicks the icon.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Initialize the app for the first time
  createWindow();

  // Check for updates. Send a system notification
  autoUpdater.checkForUpdatesAndNotify();
});

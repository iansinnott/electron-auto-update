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

// In the docs they use the `whenReady` promise, but I prefer treating the app
// as an EventEmitter and using the standard `on` method since there are many,
// many event emitters you will deal with when using electron and they won't all
// have a special method for the specific event you're interested in.
//
// @note to self, also not using the point free style here since that can be
// confusing to people less-accustomed to functional programming.
app.on("ready", () => {
  createWindow();
});

import { ElectronApplication, Page, _electron as electron } from 'playwright'
import { test, expect } from "@playwright/test";
import {
  clickMenuItemById,
  findLatestBuild,
  ipcMainCallFirstListener,
  ipcRendererCallFirstListener,
  parseElectronApp,
  ipcMainInvokeHandler,
  ipcRendererInvoke
} from 'electron-playwright-helpers'
test('has title', async () => {
  const electronApp = await electron.launch({ executablePath: 'C:/Users/Simon/AppData/Local/Obsidian/Obsidian.exe' });

  const window = await electronApp.firstWindow();
  console.log(await window.title());
  console.log(window.url());

  // const note = await window.getByText("Test 123")
  // await expect(note).toBeDefined()
  // console.log(note)
  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  // require('electron').ipcRenderer.send('new-window')

  await window.goto('obsidian://vault/Test Vault') // Does not work
  // await page.evaluate(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   require('electron').ipcRenderer.send('new-window')
  // })
  // const newPage = await electronApp.waitForEvent('window')
  // expect(newPage).toBeTruthy()
  // expect(await newPage.title()).toBe('Window 4')
  // const result = await ipcRendererInvoke(window, 'vaultOpen')
  // expect(result).toBe(4)
});



// (async () => {
//   // Launch Electron app.
//   const electronApp = await electron.launch({ executablePath: 'C:/Users/Simon/AppData/Local/Obsidian/Obsidian.exe' });
//
//   // Evaluation expression in the Electron context.
//   const appPath = await electronApp.evaluate(async ({ app }) => {
//     // This runs in the main Electron process, parameter here is always
//     // the result of the require('electron') in the main app script.
//     return app.getAppPath();
//   });
//   console.log(appPath);
//
//   // Get the first window that the app opens, wait if necessary.
//   const window = await electronApp.firstWindow();
//   // Print the title.
//   console.log(await window.title());
//   // Capture a screenshot.
//   await window.screenshot({ path: 'intro.png' });
//   // Direct Electron console to Node terminal.
//   window.on('console', console.log);
//   // Click button.
//   await window.click('text=Click me');
//   // Exit app.
//   await electronApp.close();
// })();
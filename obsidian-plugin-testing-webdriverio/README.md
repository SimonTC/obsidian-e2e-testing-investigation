# End-to-end testing Obsidian plugins with Webdriver.io
This project is used to investigate how to do end-to-end testing of Obsidian plugins using Webriver.io.

I have investigated two ways of starting electron for testing:
- Update capabilities in the config to start electron
- Add electron service

## Update capabilities in the config to start electron
Update the capabilities part of `wdio.conf.js` to specify the binary that should be executed:
```
capabilities: [{
    (...)
    browserName: 'chrome',
        "goog:chromeOptions": {
            binary: 'C:/Users/Simon/AppData/Local/Obsidian/Obsidian.exe',
        },
    (...)
}],
```

### Observations:
- When using this approach I am getting `net::ERR_ABORTED at obsidian://vault/Test Vault` errors.
- The test vault specified in the test is opened, but the test script does not have a "connection" to the test vault. The vault is not closed when the test ends.
- The test is failing

## Add electron service
Update the services part of `wdio.conf.js` to use the electron service:

```
services: [
  'chromedriver',
    [
        'electron',
        {
            binaryPath:'C:/Users/Simon/AppData/Local/Obsidian/Obsidian.exe',
            appArgs: ['foo', 'bar=baz'],
        },
    ],
],
```

This is the approach that is active currently. 

Note that the package `wdio-chromedriver-service` needs to be added for this to work.
More information about the electron service can be found [here](https://webdriver.io/docs/wdio-electron-service/). 

### Observations:
- Test vault is opened. Is not closed when test finishes.
- Obsidian vault selector is opened. Is closed when the test finishes.
- Test is passing. This makes sense since it is testing if there is an element with the test "Open" somewhere in the window. Since the test process has access to the vault selector window it finds a button with that text
- ChromeDriver does throw an exception, but it is only reported as a warning and does not influence on the test result. The error is `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

## How to run test
The test is in `test/specs/example.e2e.js`. Run the test using the command `npm run wdio`

 
describe('My test', () => {
    it('Should be able to open as specific vault', async () => {
        // Test starts by opening the Obsidian vault selection window
        // Then
        await browser.navigateTo(`obsidian://vault/Test Vault`) // Opens the test vault, but this does not happen in the already opened window. It opens a new window with the test vault.

        // These tests are executed on the Obsidian vault selection window.
        await expect($('aria/Open')).toBeExisting()
        const title = await browser.getTitle();
        await expect(title).toBe("Obsidian")
        await browser.pause(5000) // Added a pause to see what window was opened by the test.
    })
})


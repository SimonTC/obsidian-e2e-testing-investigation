describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //
        // await $('aria/Open').click()
        //
        // await expect($('aria/Open')).toBeExisting()

        await browser.navigateTo(`obsidian://vault/Test Vault`)
        await expect($('aria/Open')).toBeExisting()
        const title = await browser.getTitle();
        await expect(title).toBe("Obsidian")
        await browser.pause(5000)
        const handles = browser.getWindowHandles()
        console.log("Handles", handles);
        //
        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()
        //
        // await expect($('#flash')).toBeExisting()
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})


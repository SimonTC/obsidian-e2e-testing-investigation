import { PlaywrightTestConfig } from '@playwright/test'

const config = {
  testDir: './tests',
  retries: 1,
  use: {
    trace: 'on',
  },
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
}

export default config
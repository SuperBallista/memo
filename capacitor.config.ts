import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  "appId": "com.example.memoapp",
  "appName": "Memo App",
  "webDir": "dist",
  "server": {
    "androidScheme": "https"
  },
  "bundledWebRuntime": false
}


export default config;

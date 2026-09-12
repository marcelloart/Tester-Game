import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.marcelloart.tangkapbintang',
  appName: 'Tangkap Bintang',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#312e81',
    allowMixedContent: false,
  },
};

export default config;

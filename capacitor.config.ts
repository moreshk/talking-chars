import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
,
    android: {
       buildOptions: {
          keystorePath: '/Users/pranavpatel/Downloads/chattabox-app-key',
          keystoreAlias: 'chattabox-app-key',
       }
    }
  };

export default config;

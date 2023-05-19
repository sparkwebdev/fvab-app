import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.forthvalleyopenstudios.app',
  appName: 'FVAB \'23',
  webDir: 'dist',
  plugins: {
    'SplashScreen': {
      'launchShowDuration': 0
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;

import { ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
}

export const firebase: ModuleWithProviders = AngularFireModule.initializeApp(firebaseConfig);
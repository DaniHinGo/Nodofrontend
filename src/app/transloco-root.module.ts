import {
    provideTransloco,
    TranslocoModule
} from '@jsverse/transloco';
import { Injectable, isDevMode, NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
    exports: [ TranslocoModule ],
    providers: [
        provideTransloco({
            config: {
                availableLangs: ['en', 'es'],
                defaultLang: 'es',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader
        }),
    ],
})
export class TranslocoRootModule {}
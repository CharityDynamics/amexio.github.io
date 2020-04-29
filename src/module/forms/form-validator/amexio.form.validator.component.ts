import { ViewChild } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';

export class AmexioFormValidator {

    // @ViewChild(NgModel) model: NgModel;

    // public validate(c: FormControl) {
    //     return (this.model.valid ) ? null : {
    //         jsonParseError: {
    //             valid: true,
    //         },
    //     };
    // }

    createCompId(inputType: any, name: any) {
        const browserCrypto = window.crypto || (window['msCrypto'] as Crypto);
        return inputType + '_' + name + '_' + browserCrypto.getRandomValues(new Uint32Array(1))[0];
    }
}

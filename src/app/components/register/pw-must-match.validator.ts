import { ValidatorFn, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

//Custom validator

// get pw, retype pw controls as args
// compare the values of the two
// let other default validators also do the job
// if errer -- set error
// else -- set null

export function mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
      const pw = control.get(controlName)?.value;
      const cpw = control.get(matchingControlName)?.value;

      // set errors
      if(pw !== cpw) {
        return {passwordMismatch: true};
      } else {
         return null;
      }
   }
}
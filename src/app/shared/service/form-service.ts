import { Injectable } from '@angular/core';
import { FieldFormBase } from './field-base';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  toForm(Field: FieldFormBase<string>[]) {
    const group: any = {};
    Field.forEach((p) => {
      group[p.key] = new FormControl(p.value || '');
    });
    console.log(group)

    return new FormGroup(group);
  }
}

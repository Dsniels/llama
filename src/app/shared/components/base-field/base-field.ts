/** @format */

import {Component, Input} from "@angular/core";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FieldFormBase} from "../../service/field-base";
import {CommonModule} from "@angular/common";
import {NzInputModule} from "ng-zorro-antd/input";

@Component({
	selector: "llama-base-field",
	imports: [CommonModule, ReactiveFormsModule, NzInputModule],
	templateUrl: "./base-field.html",
	styleUrl: "./base-field.css",
})
export class BaseField {
	@Input() field!: FieldFormBase<string>;
	@Input() form!: FormGroup;
}

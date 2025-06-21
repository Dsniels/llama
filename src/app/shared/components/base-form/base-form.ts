/** @format */

import {CommonModule} from "@angular/common";
import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BaseField} from "../base-field/base-field";
import {FieldFormBase} from "../../service/field-base";
import {FormService} from "../../service/form-service";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
	selector: "llama-base-form",
	imports: [CommonModule, NzButtonModule, ReactiveFormsModule, BaseField],
	templateUrl: "./base-form.html",
	styleUrl: "./base-form.css",
})
export class BaseForm implements OnInit {
	formGroup!: FormGroup;
	@Input() fields!: FieldFormBase<string>[];
	@Input() Submit!: (args: any) => any;

	constructor(private formService: FormService) {
		console.log(this.fields)
	}
	ngOnInit(): void {
		this.formGroup = this.formService.toForm(this.fields);
	}

	onSubmit() {
		const value = this.formGroup.getRawValue();
		this.Submit(value);
	}
}

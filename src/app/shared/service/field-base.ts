/** @format */

export class FieldFormBase<T> {
	key: string;
	label: string;
	controlType: string;
	type?: string;
	value?: T;
	placeholder: string;
	disabled: boolean;

	constructor(options: {
		key?: string;
		label?: string;
		value?: T;
		type?: string;
		controlType: string;
		placeholder?: string;
		disabled?: boolean;
	}) {
		this.key = options.key || "";
		this.controlType = options.controlType;
		this.label = options.label || "";
		this.type = options.type;
		this.value = options.value;
		this.placeholder = options.placeholder || "";
		this.disabled = !!options.disabled;
	}
}

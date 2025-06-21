/** @format */

import {FieldFormBase} from "./field-base";

export class TextBox extends FieldFormBase<string> {
	override controlType: string = "textbox";
}

/** @format */

import {CommonModule} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {ChatFacade} from "../../services/websocket/facades/chat-facade";
import {BaseComponent} from "../../shared/components/base-component/base-component";
import {Message} from "../../interfaces/message";
import {takeUntil} from "rxjs";
import {TextBox} from "../../shared/service/TextBox";
import {BaseForm} from "../../shared/components/base-form/base-form";
import { FieldFormBase } from "../../shared/service/field-base";

@Component({
	selector: "llama-chat-component",
	imports: [CommonModule, BaseForm],
	templateUrl: "./chat-component.html",
	styleUrl: "./chat-component.css",
})
export class ChatComponent extends BaseComponent implements OnInit {
	messages!: Message[];
	field : FieldFormBase<string>[]= [
		new TextBox({
			value: "",
			key: "Content",
			type: "text",
			placeholder: "sendMessage",
			controlType: "",
		}),
	];

	constructor(private ChatFacade: ChatFacade) {
		super();
	}

	ngOnInit(): void {
		this.ChatFacade.onReceiveMessage();
		this.ChatFacade.startAsync().then();
		this.ChatFacade.messages$
			.pipe(takeUntil(this.$Destroy))
			.subscribe((messages) => (this.messages = messages));
	}

	sendMessage = (message: Message) => {
		this.ChatFacade.sendMessage(message);
	};
}

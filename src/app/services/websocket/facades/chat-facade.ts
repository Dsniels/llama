/** @format */

import {Injectable} from "@angular/core";
import {Message} from "../../../interfaces/message";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store";
import {SelectMessages} from "../../../store/selectors";
import {ChatActions} from "../../../store/chat/chat.actions";
import { Websocket } from "../services/websocket";

@Injectable({
	providedIn: "root",
})
export class ChatFacade {
	messages$;
	constructor(private ws: Websocket, private store: Store<AppState>) {
		this.messages$ = store.select(SelectMessages);
	}

	async sendMessage(message: Message) {
		await this.ws.invokeAsync("SendMessage", message);
	}

	async joinGroup(){
		await this.ws.invokeAsync("JoinChat")
	}

	async onReceiveMessage() {
		this.ws.onInvokeAsync("receiveMessage", (message: Message) => {
			console.log(message);
			this.store.dispatch(
				ChatActions.receive_message({payload: message}),
			);
			return;
		});
	}

	async startAsync() {
		await this.ws.startAsync();
		await this.joinGroup();
	}

	async stopAsync() {
		await this.ws.stopAsync();
	}
}

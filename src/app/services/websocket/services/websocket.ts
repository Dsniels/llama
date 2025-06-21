/** @format */

import {Injectable, signal} from "@angular/core";
import {
	HttpTransportType,
	HubConnection,
	HubConnectionBuilder,
	TransferFormat,
} from "@microsoft/signalr";

@Injectable({
	providedIn: "root",
})
export class Websocket {
	private connected = signal(false);

	private _connection!: HubConnection;
	constructor() {
		this._connection = new HubConnectionBuilder()
			.withUrl("http://localhost:5038", {
				skipNegotiation: true,
				transport: HttpTransportType.WebSockets,
			})
			.build();
	}

	async startAsync() {
		return this._connection.start().then(() => this.connected.set(true));
	}

	async stopAsync() {
		return this._connection.stop().then(() => {
			this.connected.set(false);
			this._connection.start();
		});
	}

	onInvokeAsync(method: string, callback: (args: any) => void): void {
		this._connection.on(method, callback);
	}

	async invokeAsync<T>(method: string, args?: T) {
		if (args) this._connection.invoke(method, args).catch(console.log);
		else {
			this._connection.invoke(method).catch(console.log);
		}
	}

	async readStream() {
		// this._connection.stream("SendMessageStream").subscribe({next: console.log()})
	}
}

/** @format */

import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./features/chat-component/chat-component").then(
				(c) => c.ChatComponent,
			),
	},
];

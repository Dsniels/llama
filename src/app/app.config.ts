/** @format */

import {
	ApplicationConfig,
	inject,
	provideAppInitializer,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from "@angular/core";
import {provideRouter} from "@angular/router";
import {
	MenuFoldOutline,
	MenuUnfoldOutline,
	FormOutline,
	DashboardOutline,
} from "@ant-design/icons-angular/icons";
import {routes} from "./app.routes";
import {NzConfig, provideNzConfig} from "ng-zorro-antd/core/config";
import {provideNzIcons} from "ng-zorro-antd/icon";
import {en_US, provideNzI18n} from "ng-zorro-antd/i18n";
import {Websocket} from "./services/websocket/services/websocket";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { ChatEffects } from "./store/chat/chat.effects";
import { reducers } from "./store";
const ngZorroConfig: NzConfig = {
	message: {nzTop: 120},
	notification: {nzTop: 240},
};

const onInit = () => {
	const ws = inject(Websocket);
	// ws.startAsync();
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideAppInitializer(onInit),
		provideBrowserGlobalErrorListeners(),
		provideStore(reducers),
		provideEffects([ChatEffects]),
		provideZonelessChangeDetection(),
		provideRouter(routes),
		provideNzI18n(en_US),
		provideNzConfig(ngZorroConfig),
		provideNzIcons([
			MenuFoldOutline,
			MenuUnfoldOutline,
			DashboardOutline,
			FormOutline,
		]),
	],
};

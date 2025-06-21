/** @format */
import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ChatActions} from "./chat.actions";
import {map} from "rxjs";

export class ChatEffects {
	receiveMessage = createEffect((action$ = inject(Actions)) => {
		return action$.pipe(
			ofType(ChatActions.receive_message),
			map(({payload}) => ChatActions.receive_message_success({payload})),
		);
	});
}

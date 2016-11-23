import {Deadline } from "./deadline.model"

export interface AppState {
	deadlines : Deadline[]
}

export interface DataListener {
	update(): void;
}
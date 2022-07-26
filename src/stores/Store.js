import { writable } from 'svelte/store';

export const numberStore = writable(0);
numberStore.update((value) => value + 1);

export const stringStore = writable(['albert']);

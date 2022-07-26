import { writable } from 'svelte/store';

export const User = writable({
	userId: 123456,
	name: 'Kevin',
	email: 'kevin@hack.net'
});

<script>
	export let userId;
	export let name;
	export let email;

	// https://svelte.dev/docs#run-time-svelte-createeventdispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function remove() {
		dispatch('remove', { userId });
	}
</script>

<p>{userId} // {name} // {email} // <button on:click={remove}>🗑</button></p>

<script>
	import Child from '../components/Child.svelte';
	import { User } from '../stores/User';

	// https://svelte.dev/docs#run-time-svelte-createeventdispatcher
	function remove(event) {
		alert('Child component fired an event to remove: ' + event.detail.userId);
	}
</script>

<svelte:head>
	<title>Components - SveleteKit</title>
</svelte:head>

<Child userId={$User.userId} name={$User.name} email={$User.email} on:remove={remove} />

<!-- Prefix stores with $ to access their values -->
<Child {...$User} on:remove={remove} />

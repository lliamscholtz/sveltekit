<script>
	import { numberStore, stringStore } from '../stores/Store';
</script>

<svelte:head>
	<title>Stores - SveleteKit</title>
</svelte:head>

<!-- Prefix stores with $ to access their values
https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values
-->

<main>
	<h1>Stores</h1>
	<h2>numberStore:</h2>
	<pre>{$numberStore}</pre>
	<button on:click={() => numberStore.set(4)}>Set numberStore</button>

	<h2>stringStore:</h2>
	<pre>{$stringStore}</pre>
	<button on:click={() => stringStore.update((value) => [...value, 'kevin'])}
		>Add 'kevin' to stringStore</button
	>
</main>

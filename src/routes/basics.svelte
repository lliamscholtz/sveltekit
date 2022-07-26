<script>
	// Variables
	let random = Math.random();
	function setRandom() {
		random = Math.random();
	}
	$: result = Math.round(random) ? '🎉' : '💩';

	// Binding
	let typed = 'hello';

	// Transitions
	import { fade, fly } from 'svelte/transition';
	let unique = {};
	function animate() {
		unique = {};
	}

	// Reactivity
	let reactive = [''];
	function addReaction() {
		reactive = [...reactive, '☣️'];
	}

	// Promises
	function delay(ms = 2000) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	let ready = delay(2000).then((v) => "I'm ready!");

	export const items = [
		{ text: 'This is a completed item.', complete: true },
		{ text: 'This is an incomplete item.', complete: false }
	];
</script>

<svelte:head>
	<title>Basics - SveleteKit</title>
</svelte:head>

<h1>Svelte Basics</h1>

<div class="block">
	<h2>Variables</h2>
	<p>The random number is {random} {result}</p>
	<button on:click={setRandom}>Randomize</button>
</div>

<div class="block">
	<h2>Conditions</h2>
	{#if result === '🎉'}
		<p>Winner winner 🍗 dinner!</p>
	{:else}
		<p>Better 🍀 next time!</p>
	{/if}
</div>

<div class="block">
	<h2>Bindings</h2>
	<p>You have typed: {typed}</p>
	<input type="text" bind:value={typed} />
</div>

<div class="block">
	<h2 transition:fade>Transitions</h2>
	<div>
		{#key unique}
			<div
				class="🧟‍♂️"
				in:fly={{ delay: 500, x: 100, duration: 5000 }}
				out:fly={{ x: -100, duration: 500 }}
			>
				🧟‍♂️
			</div>
		{/key}
	</div>
	<button on:click={animate}>Animate</button>
</div>

<div class="block">
	<h2>Reactivity</h2>
	<button on:click={addReaction}>React</button>
	{#each reactive as reaction}
		<span>{reaction}</span>
	{/each}
</div>

<div class="block">
	<h2>Promises</h2>
	{#await ready}
		<p>Are you ready yet?</p>
	{:then ready}
		<p>{ready}</p>
	{:catch error}
		<p>Look's like something went wrong: {error}</p>
	{/await}
</div>

<div class="block">
	<h2>Dynamic Classes</h2>
	{#each items as item}
		<p class:complete={item.complete}>{item.text}</p>
	{/each}
</div>

<style>
	h2 {
		margin-top: 0;
	}
	.block {
		margin: 15px 0;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 15px;
	}
	.🧟‍♂️ {
		display: inline-block;
		font-size: 40px;
	}
	.complete {
		text-decoration: line-through;
	}
</style>

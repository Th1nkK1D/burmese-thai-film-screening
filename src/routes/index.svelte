<script lang="ts">
	import Hero from '../components/landing/hero.svelte';
	import Program from '../components/landing/program.svelte';
	import programs from '../data/programs.json';
</script>

<svelte:head>
	<title>Burmese-Thai Film Screening</title>
	<meta
		name="description"
		content="A films screening of Thai and Burmese political films under military government"
	/>
</svelte:head>

<Hero />

{#each programs as program}
	<Program {...program} />
{/each}

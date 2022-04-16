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

<div class="container bg-black space-y-24 md:space-y-48 px-0">
	{#each programs as program}
		<Program {...program} />
	{/each}
</div>

<div class="bg-wheat">
	<div class="container max-w-screen-md space-y-12">
		<h2 class="typo-h2">About the Project</h2>
		<div class="typo-b1 leading-normal space-y-6">
			<p>
				Against the tendency of human rights, Southeast Asian military states, including Thailand
				and Myanmar, attempt to control the communication of the media in order to maintain their
				power. Under difficult situations, censorships, and restrictions enforced by the military
				states, the filmmakers seek a way to raise their voices, addressing political issues through
				the moving images.
			</p>
			<p>
				Through the film screening and conversations, Untitled event would like to address these
				issues and elaborate the understanding of historical, political, and cultural context of
				Thailand and Myanmar.
			</p>
		</div>
		<div class="flex justify-center items-center">
			<a class="flex flex-row items-center space-x-2 p-2 text-orange hover:text-yellow" href="/#">
				<span class="typo-b2">Follow us on</span>
				<svg class="w-8 h-8" viewBox="0 0 512 512"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31Z"
					/></svg
				></a
			>
		</div>
	</div>
</div>

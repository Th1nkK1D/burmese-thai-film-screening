<script lang="ts">
	const images = ['Mr. Zero', 'Letter to san Zaw Htway', 'Ferris Wheel', 'Red Aninsri'];
</script>

<div class="relative">
	<div
		class="container max-w-screen-xl min-h-screen space-y-8 pt-12 -md:text-center md:(space-y-24 pt-24)"
	>
		<div class="flex flex-row">
			<h1 class="typo-title">Burmese-Thai Film Screening</h1>
			<div class="typo-subtitle text-orange text-right space-y-4 -md:hidden">
				<p class="font-bold">
					20.05.21<br />27.05.21
				</p>
				<p>SuperNova Cinema, TLU</p>
			</div>
		</div>

		<div class="space-y-4">
			<p class="typo-subtitle max-w-3xl">
				Thai and Burmese political films under military government
			</p>
			<p class="typo-subtitle text-orange md:hidden">
				<span class="font-bold">20.05.22 and 27.05.22</span>
				<br />
				@ SuperNova Cinema, Tallinn University
			</p>
		</div>

		<div class="grid grid-cols-2 grid-rows-4 gap-8 md:(grid-cols-4 grid-rows-2 gap-20)">
			{#each images as alt, index}
				<img src="/images/hero/{index + 1}.png" {alt} />
			{/each}

			<img src="https://via.placeholder.com/250x250?text=waiting" class="rounded-full" alt="" />

			<button class="action-button bg-orange text-white hover:bg-yellow">
				<span>Get FREE ticket</span>
				<svg
					viewBox="0 0 512 512"
					fill="none"
					stroke="currentColor"
					stroke-miterlimit="10"
					stroke-width="32"
					stroke-linecap="square"
					><path
						d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
					/><path
						d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
					/></svg
				>
			</button>

			<button
				class="action-button border-3 md:border-4 border-orange text-orange hover:(border-yellow text-yellow)"
			>
				<span>See the programs</span>
				<svg viewBox="0 0 512 512"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="square"
						stroke-miterlimit="10"
						stroke-width="48"
						d="m112 268l144 144l144-144M256 392V100"
					/></svg
				>
			</button>
		</div>
	</div>

	<div class="bg-wheat absolute inset-0 -z-1 overflow-hidden">
		<div class="bg-ring w-70vw h-70vw -left-20vw -top-10vh md:(w-50vw h-50vw -left-10vw)" />
		<div class="bg-ring w-120vw h-120vw -right-50vw top-40vh md:(w-70vw h-70vw -right-10vw)" />
	</div>
</div>

<style>
	.action-button {
		@apply flex flex-col space-y-4 justify-center items-center rounded-full p-4;
	}

	.action-button svg {
		@apply w-8 h-8 md:(w-12 h-12);
	}

	.action-button span {
		@apply typo-b1 font-bold;
	}

	.bg-ring {
		@apply absolute rounded-full border-2 border-yellow;
	}
</style>

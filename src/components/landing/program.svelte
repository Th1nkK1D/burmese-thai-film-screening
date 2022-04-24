<script lang="ts">
	import FilmCover from './film-cover.svelte';
	import FilmDetail from './film-detail.svelte';
	import PanelistCard from './panelist-card.svelte';
	interface Film {
		name: string;
		poster: string;
		year: number;
		screenshot: string;
		summary: string[];
		awards: string[];
		director: string;
		country: string;
		duration: number;
		trailerLink: string;
	}

	interface Panelist {
		name: string;
		background: string;
		picture: string;
	}

	export let name: string;
	export let date: string;
	export let time: string;
	export let location: string;
	export let locationLink: string;
	export let films: Film[];
	export let panelists: Panelist[];
	export let facebookEvent: string;
	export let ticketLink: string;

	let selectedFilm: Film = null;
</script>

<div>
	<div class="bg-black text-white">
		<div class="container max-w-screen-lg space-y-16 md:space-y-24 pb-12 pt-0">
			<div class="space-y-6">
				<h2 class="typo-h1">{name}</h2>

				<div class="typo-subtitle space-y-3">
					<p>
						<span class="font-bold">
							{new Date(date).toLocaleDateString('EN-en', { dateStyle: 'full' })}
						</span><br />
						{time}
					</p>
					<p class="text-orange">
						@ <a href={locationLink} class="hover:underline" target="_blank">{location}</a>
					</p>
				</div>
			</div>
			<div class="space-y-6">
				<h3 class="typo-h2">Films</h3>
				<div class="flex flex-row overflow-y-hidden overflow-x-auto -mx-8 px-8 md:(-mx-16 px-16)">
					{#each films as film}
						<FilmCover
							{...film}
							inactive={selectedFilm && selectedFilm.name !== film.name}
							on:click={() => (selectedFilm = selectedFilm?.name === film.name ? null : film)}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>

	{#if selectedFilm}
		<FilmDetail {...selectedFilm} on:close={() => (selectedFilm = null)} />
	{/if}

	<div class="bg-black text-white">
		<div class="container max-w-screen-lg pt-12 pb-0 space-y-24">
			<div class="space-y-6">
				<h3 class="typo-h2">Panelists</h3>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					{#each panelists as panelist}
						<PanelistCard {...panelist} />
					{/each}
					{#if !panelists?.length}
						To be announced
					{/if}
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
				<a
					href={ticketLink}
					target="_blank"
					class="action-button bg-orange text-white hover:bg-yellow"
				>
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
					><span>Get FREE ticket</span>
				</a>
				{#if facebookEvent}
					<a href={facebookEvent} class="action-button text-orange hover:text-yellow">
						<svg viewBox="0 0 512 512"
							><path
								d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
								fill="currentColor"
							/></svg
						>
						<span>Go to Facebook event</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.action-button {
		@apply rounded px-6 py-3 typo-b1 font-bold border-orange border-2 hover:border-yellow flex flex-row items-center justify-center space-x-2;
	}

	.action-button svg {
		@apply w-6 h-6;
	}
</style>

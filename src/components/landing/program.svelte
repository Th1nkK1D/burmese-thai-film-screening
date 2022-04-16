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

	interface Panellist {
		name: string;
		background: string;
		picture: string;
	}

	export let name: string;
	export let date: string;
	export let time: string;
	export let location: string;
	export let films: Film[];
	export let panellists: Panellist[];
	export let facebookEvent: string;
</script>

<div class="bg-black text-white">
	<div class="container max-w-screen-lg space-y-24 pb-12">
		<div class="space-y-6">
			<h2 class="typo-h1">{name}</h2>

			<div class="text-orange typo-subtitle space-y-3">
				<p class="font-bold">
					{new Date(date).toLocaleDateString('EN-en', { dateStyle: 'full' })} <br />
					{time}
				</p>
				<p>@ {location}</p>
			</div>
		</div>
		<div class="space-y-6">
			<h3 class="typo-h2">Films</h3>
			<div class="flex flex-row overflow-y-hidden overflow-x-auto -mx-8 px-8 md:(-mx-16 px-16)">
				{#each films as film}
					<FilmCover {...film} />
				{/each}
			</div>
		</div>
	</div>
</div>

<FilmDetail {...films[1]} />

<div class="bg-black text-white">
	<div class="container max-w-screen-lg pt-12 space-y-6">
		<h3 class="typo-h2">Panellists</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each panellists as panellist}
				<PanelistCard {...panellist} />
			{/each}
		</div>
	</div>
</div>

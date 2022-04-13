<script>
	import FilmCover from './film-cover.svelte';
	import FilmDetail from './film-detail.svelte';
	import PanelistCard from './panelist-card.svelte';
</script>

<div class="bg-black text-white">
	<div class="container max-w-screen-lg space-y-24 pb-12">
		<div class="space-y-6">
			<h2 class="typo-h1">Program 1</h2>

			<div class="text-orange typo-subtitle space-y-3">
				<p class="font-bold">
					Friday 20<sup>th</sup>
					May 2022 <br />
					17:00-19:00
				</p>
				<p>@ SuperNova Cinema, Tallinn University</p>
			</div>
		</div>
		<div class="space-y-6">
			<h3 class="typo-h2">Films</h3>
			<div class="flex flex-row overflow-y-hidden overflow-x-auto -mx-8 px-8 md:(-mx-16 px-16)">
				<FilmCover />
				<FilmCover />
				<FilmCover />
			</div>
		</div>
	</div>
</div>

<FilmDetail />

<div class="bg-black text-white">
	<div class="container max-w-screen-lg pt-12 space-y-6">
		<h3 class="typo-h2">Panellists</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<PanelistCard />
			<PanelistCard />
		</div>
	</div>
</div>

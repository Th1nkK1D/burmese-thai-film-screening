<script lang="ts">
	export let name: string;
	export let poster: string;
	export let year: number;
	export let inactive = false;
</script>

<button
	class="flex-shrink-0 mr-4 w-auto md:mr-6 transition duration-200 transform origin-top-left hover:(scale-104) {inactive
		? 'opacity-50'
		: ''}"
	on:click
>
	<img src={poster} class="h-64 md:h-96 w-auto" alt={name} />
	<div class="typo-b1 text-left py-3 md:py-4 space-y-1">
		<p class="font-bold">{name}</p>
		<p>{year}</p>
	</div>
</button>

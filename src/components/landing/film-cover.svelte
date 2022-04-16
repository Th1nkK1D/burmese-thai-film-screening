<script lang="ts">
	export let name: string;
	export let poster: string;
	export let year: number;
	export let inactive = false;
</script>

<button
	class="flex-shrink-0 mr-3 w-48 md:(mr-4 w-64) transition duration-200 transform origin hover:(scale-105) {inactive
		? 'opacity-50'
		: ''}"
	on:click
>
	<img src={poster} alt={name} />
	<p class="typo-b1 text-left py-2 md:py-4"><span class="font-bold">{name}</span> ({year})</p>
</button>

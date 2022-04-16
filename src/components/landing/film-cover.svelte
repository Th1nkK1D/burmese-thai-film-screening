<script lang="ts">
	export let name: string;
	export let poster: string;
	export let year: number;
</script>

<button class="flex-shrink-0 mr-3 w-48 md:(mr-4 w-64)">
	<img src={poster} alt={name} />
	<p class="typo-b1 text-left py-2 md:py-4"><span class="font-bold">{name}</span> ({year})</p>
</button>

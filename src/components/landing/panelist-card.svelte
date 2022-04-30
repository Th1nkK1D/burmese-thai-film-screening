<script lang="ts">
	export let name: string;
	export let background: string;
</script>

<div class="typo-b1 space-y-2">
	<p class="font-bold">{name}</p>
	<div>
		{#each background as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

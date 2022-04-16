<script lang="ts">
	export let name: string;
	export let background: string;
	export let picture: string;
</script>

<div class="flex flex-row space-x-3 items-center">
	<img class="w-20 h-20 object-cover rounded-full" src={picture} alt={name} />
	<div class="flex-1 typo-b1 space-y-2">
		<p class="font-bold">{name}</p>
		<p>{background}</p>
	</div>
</div>

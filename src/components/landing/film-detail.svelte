<script lang="ts">
	export let name: string;
	export let poster: string;
	export let year: number;
	export let screenshot: string;
	export let summary: string[];
	export let awards: string[];
	export let director: string;
	export let country: string;
	export let duration: number;
	export let trailerLink: string;
</script>

<div class="bg-black -mb-1">
	<div class="container max-w-screen-lg py-0">
		<svg
			width="52"
			height="35"
			viewBox="0 0 52 35"
			class="fill-wheat"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M26 0L51.9808 34.5H0.0192375L26 0Z" />
		</svg>
	</div>
</div>

<div class="bg-wheat typo-b1">
	<div class="container max-w-screen-lg py-8 space-y-6 md:(py-18 space-y-12)">
		<h4 class="typo-h3"><span class="font-bold">{name}</span> ({year})</h4>
		<div class="flex flex-col-reverse md:(flex-row space-x-8)">
			<div class="flex flex-col space-y-4 -md:mt-8">
				<img src={screenshot} alt="{name} screenshot" />
				<img src="https://via.placeholder.com/436x248?text=interview" alt="{name} interview" />
			</div>
			<div class="flex-1 typo-b1 leading-normal space-y-4">
				{#each summary as paragraph}
					<p>
						{paragraph}
					</p>
				{/each}

				{#if awards?.length > 0}
					<div>
						<p class="font-bold">Awards:</p>
						<ul class="list-circle list-inside">
							{#each awards as award}
								<li>{award}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<p>
					<span class="font-bold">Director</span>: {director}
				</p>
				<p>
					<span class="font-bold">Country</span>: {country}
				</p>
				<p>
					<span class="font-bold">Duration</span>: {duration} minutes
				</p>
				<div>
					<a
						href={trailerLink}
						class="flex flex-row items-center space-x-1 text-orange underline hover:text-yellow"
						><span>Watch trailer</span>
						<svg
							class="w-5 h-5"
							viewBox="0 0 512 512"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							><path
								d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40"
							/><path d="m272 336l80-80l-80-80M48 256h288" /></svg
						></a
					>
				</div>
			</div>
		</div>
	</div>
</div>

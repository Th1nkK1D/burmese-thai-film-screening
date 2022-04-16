<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let name: string;
	export let year: number;
	export let screenshot: string;
	export let summary: string[];
	export let awards: string[];
	export let director: string;
	export let country: string;
	export let duration: number;
	export let trailerLink: string;

	const dispatch = createEventDispatcher();
</script>

<div transition:slide>
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
			<div class="flex flex-row items-start">
				<h4 class="typo-h3 flex-1"><span class="font-bold">{name}</span> ({year})</h4>
				<button class="text-orange hover:text-yellow" on:click={() => dispatch('close')}>
					<svg
						class="w-6 h-6 md:(w-8 h-8)"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 512 512"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M368 368L144 144m224 0L144 368"
						/></svg
					>
				</button>
			</div>
			<div class="flex flex-col-reverse md:(flex-row space-x-8)">
				<div class="flex-1 flex flex-col space-y-4 -md:mt-8">
					<img src={screenshot} alt={name} />
					<!-- <img src="https://via.placeholder.com/436x248?text=interview" alt="{name} interview" /> -->
				</div>
				<div class="flex-1 typo-b1 leading-normal space-y-4">
					{#each summary as paragraph}
						<p class="indent">
							{paragraph}
						</p>
					{/each}

					{#if awards?.length > 0}
						<div>
							<p class="font-bold">Awards:</p>
							<ul class="list-circle ml-6">
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
					{#if trailerLink}
						<div>
							<a
								href={trailerLink}
								target="_blank"
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
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Hero from '../components/landing/hero.svelte';
	import Program from '../components/landing/program.svelte';
	import programs from '../data/programs.json';

	const partners = [
		{ name: 'Tallinn University', image: '/images/partners/tlu.png', link: 'https://www.tlu.ee/' },
		{ name: 'ELU', image: '/images/partners/life.png', link: 'https://elu.tlu.ee/en' },
		{ name: 'BFM School', image: '/images/partners/bfm.png', link: 'https://www.tlu.ee/en/bfm' }
	];

	let programSection: HTMLDivElement;
</script>

<Hero on:scrolltoprogram={() => programSection.scrollIntoView({ behavior: 'smooth' })} />

<div bind:this={programSection} class="container bg-black space-y-24 md:space-y-48 px-0">
	{#each programs as program}
		<Program {...program} />
	{/each}
</div>

<div
	class="bg-wheat bg-cover bg-bottom bg-no-repeat pb-60 md:pb-96"
	style="background-image: url(/images/footer-bg.png);"
>
	<div class="container max-w-screen-md space-y-24">
		<div class="typo-b1 leading-normal space-y-6 bg-wheat p-2 rounded">
			<h2 class="typo-h2">About the Project</h2>

			<p class="indent">
				Despite the human rights, Southeast Asian military states, including Thailand and Myanmar,
				attempt to control the communication of the media in order to maintain their power. Under
				the censorships, and restrictions enforced by the military states, the filmmakers seek a way
				to raise their voices, addressing political issues through the use of moving images.
			</p>
			<p class="indent">
				Burmese-Thai Film Screening would like to address these issues and elaborate the
				understanding of the historical, political, and cultural context of Burmese and Thai
				military states. The event is a two-days program featuring five short films related to
				political issues in Myanmar and Thailand following by discussion panels after the screening.
			</p>
		</div>
		<div class="flex justify-center items-center">
			<a
				class="flex flex-row items-center space-x-2 p-2 text-orange hover:text-yellow bg-wheat"
				href="https://www.facebook.com/Burmese-Thai-Film-Screening-107534211931969"
				target="_blank"
			>
				<span class="typo-b2">Follow us on</span>
				<svg class="w-8 h-8" viewBox="0 0 512 512"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31Z"
					/></svg
				></a
			>
		</div>
		<div class="flex flex-row justify-center items-center space-x-6 md:space-x-12">
			{#each partners as { name, link, image }}
				<a href={link} target="_blank">
					<img src={image} alt={name} class="h-14 md:h-24" />
				</a>
			{/each}
		</div>
	</div>
</div>

<footer class="text-center typo-b2 p-12 bg-black text-white">
	&copy; Burmese-Thai Film Screening {new Date().getFullYear()} - All rights reserved
</footer>

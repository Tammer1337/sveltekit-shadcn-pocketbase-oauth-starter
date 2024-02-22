<script lang="ts">
	import { Button } from '$lib/index';

	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: ({ providers } = data);
</script>

{#if providers}
	{#each providers.authProviders as provider}
		<Button
			href="/oauth?provider={provider.name}"
			class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
		>
			{#if provider.name === 'google'}
				<div class="flex space-x-2">
					<span>Connect with</span>
					<img
						src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
						alt="Google"
						srcset=""
						class="h-5 w-5"
					/>
				</div>
			{/if}
		</Button>
	{/each}
{/if}

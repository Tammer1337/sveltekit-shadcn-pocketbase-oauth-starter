<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: ({ providers } = data);
	$: console.log(providers);
</script>

<h1>Connect via OAuth</h1>

{#if providers}
	{#each providers.authProviders as provider}
		<a href="/oauth?provider={provider.name}">Connect with {provider.name}</a>
	{/each}
{/if}

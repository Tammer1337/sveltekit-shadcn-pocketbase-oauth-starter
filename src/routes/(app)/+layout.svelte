<script lang="ts">
	import { Avatar } from '$lib/index';
	import { Button } from '$lib/index';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
	import { UtensilsCrossed, Sun, MoonStar } from 'lucide-svelte';

	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<ModeWatcher />
<main>
	<header
		class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-14 items-center">
			<div class="mr-4 flex">
				<a href="/" class="mr-6 flex items-center space-x-2"
					><UtensilsCrossed class="text-primary" />
					<span class="text-[15px] text-base font-bold">Eaty</span></a
				>
			</div>
			<div class="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
				{#if data.user === undefined}
					<div class="items-center space-x-2">
						<Button href="/signin">
							<span>Register</span>
						</Button>
					</div>
				{:else}
					<div>
						<div class="items-center space-x-2">
							<form action="/logout" method="post">
								<Button type="submit">Sign out</Button>
							</form>
						</div>
					</div>
					<a href="/settings">
						<Avatar.Root class="h-8 w-8 ring-2 ring-primary">
							{#if data.user?.oauthImage}
								<Avatar.Image
									src={data.user.oauthImage}
									alt="User Avatar"
									referrerpolicy="no-referrer"
								/>
							{:else}
								<Avatar.Fallback>{data.user?.username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
							{/if}
						</Avatar.Root>
					</a>
				{/if}

				<!-- Light/Dark -->
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<MoonStar
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</div>
	</header>
	<div class="flex-1">
		<div class="relative md:container">
			<div class="mt-8 px-4 text-center md:mt-10">
				<slot />
			</div>
		</div>
	</div>
</main>

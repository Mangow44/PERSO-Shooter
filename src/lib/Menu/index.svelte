<script>
	import Button from '$lib/utils/Button.svelte';

	import { goto } from '$app/navigation';
</script>

<div
	id="menu"
	class="flex h-screen w-full m-auto
         overflow-hidden bg-c-black"
>
	<Button text={'play'} foo={() => goto('/game')} />
</div>

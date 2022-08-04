<script>
	import { goto } from '$app/navigation';
</script>

<div
	id="menu"
	class="flex h-screen w-full m-auto
         overflow-hidden bg-c-black"
>
	<button
		class="m-auto h-12 w-24 
        bg-white uppercase font-franchise text-2xl
        hover:scale-110 cursor-pointer"
		on:click={() => goto('/game')}
	>
		play
	</button>
</div>

<script>
	export let player = { ammunition: 0 };

	$: ammunition = 100 - player.ammunition * 10;
</script>

<div
	class="flex h-[3rem] w-full
		text-c-white bg-c-dark-gray"
>
	<span
		class="h-4 w-48 m-auto relative 
			bg-gray-500 overflow-hidden"
	>
		<span class="h-full w-full bg-white absolute translate" style="--translation:{-ammunition}%;" />
	</span>
</div>

<style>
	.translate {
		transition: 0.5s ease;
		transform: translateX(var(--translation));
	}
</style>

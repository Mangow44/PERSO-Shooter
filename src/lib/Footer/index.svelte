<script>
	export let player = { ammunition: 0 };

	$: ammunition = player.ammunition;
</script>

<div
	class="flex h-[3rem] w-full
		text-c-white bg-c-dark-gray"
>
	<div class="flex h-full w-[10rem] mx-auto">
		<p class="m-auto">ammunition : {ammunition}</p>
	</div>
</div>

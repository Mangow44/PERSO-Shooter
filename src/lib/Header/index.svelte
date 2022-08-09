<script>
	export let player = { score: 0 };
</script>

<div
	class="flex h-[3rem] w-full 
		text-c-white bg-c-dark-gray"
>
	<h2 class="flex m-auto uppercase font-retrogaming text-4xl">
		<img class="h-[100%] w-[2rem] mr-4" src="/pictures/coin.png" alt="coin" />
		{player.score}
	</h2>
</div>

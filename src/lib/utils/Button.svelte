<script>
	export let foo = () => {};
	export let text = '';
</script>

<button
	class="m-auto h-24 w-48
        bg-white uppercase font-retrogaming text-5xl
        hover:scale-110 cursor-pointer transition-all
		custom-box-shadow"
	on:click={() => foo()}
>
	{text}
</button>

<style>
	.custom-box-shadow {
		box-shadow: 0px 0px 15px 2px white;
	}
</style>

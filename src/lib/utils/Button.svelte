<script>
	export let foo = () => {};
	export let text = '';
</script>

<button
	class="m-auto h-24 w-48
        bg-white uppercase font-franchise text-5xl
        hover:scale-110 cursor-pointer"
	on:click={() => foo()}
>
	{text}
</button>

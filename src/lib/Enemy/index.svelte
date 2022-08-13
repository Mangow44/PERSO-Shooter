<script>
	export let id = '';
	export let name = '';
	export let score = 0;
	export let speed = 0;
	export let delay = 0;
	export let size = { height: 0, width: 0 };
	export let coordinates = { xA: 0, yA: 0, translationX: 0, translationY: 0 };
	export let onClick = () => {
		return false;
	};

	let visible = false;

	setTimeout(() => {
		visible = true;
	}, delay * 1000);

	setTimeout(() => {
		visible = false;
	}, (delay + speed) * 1000);
</script>

{#if visible}
	<div
		{id}
		draggable="false"
		class="animateEnemy absolute bg-c-white z-10
			{name == 'circle' ? 'rounded-full' : ''}"
		style="height:{size.height}px;width:{size.width}px;
				left:{coordinates.xA}px;top:{coordinates.yA}px;
				--xB:{coordinates.translationX}px;--yB:{coordinates.translationY}px;
				--speed:{speed}s;"
		on:click|self={(e) => {
			e.preventDefault();
			visible = !onClick();
		}}
	/>
{/if}

<style>
	.animateEnemy {
		animation: movement var(--speed) linear forwards;
	}

	@keyframes movement {
		100% {
			transform: translate(var(--xB), var(--yB));
		}
	}
</style>

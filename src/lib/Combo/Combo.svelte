<script>
	export let combo = 0;
	let animation = false;

	$: if (combo > 0) {
		animation = true;
		setTimeout(() => {
			animation = false;
		}, 500);
	}
</script>

<p id="combo" class="text-3xl {animation ? 'shake-anim' : ''}">
	x{combo}
</p>

<style>
	.shake-anim {
		animation: shake 0.5s ease;
	}

	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: scale(1.3);
			transform: rotate(20deg);
		}
		50% {
			transform: scale(1.3);
			transform: rotate(-20deg);
		}
		100% {
			transform: scale(1);
			transform: rotate(0deg);
		}
	}
</style>

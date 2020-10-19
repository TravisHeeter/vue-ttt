<template>
	<h1 v-else>Next Up: {{ playerValue }}</h1>
	<div class="board">
		<span class="vertical-line-1"></span>
		<span class="vertical-line-2"></span>
		<Square v-for="(square, i) in board" :key="`square-${i}" :label="`square-${i}" :value="square"
			@click="markSquare(i)" />
	</div>
</template>

<script>
	import Square from "./Square.vue"

  export default {
    name: "Board",
    components: {
      Square,
    }
  };
</script>
<style>
	scoped .board {
		position: relative;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	.board::before,
	.board::after {
		background: linear-gradient(to right, #41b883, #35495e);
	}

	.vertical-line-1,
	.vertical-line-2 {
		background: linear-gradient(to right, #41b883, #35495e)
	}

	.board::before,
	.board::after {
		content: "";
		width: 100%;
		height: 5px;
		position: absolute;
		border-radius: 1rem;
	}

	.board::before {
		top: 33%;
	}

	.board::after {
		top: 66%;
	}

	.vertical-line-1,
	.vertical-line-2 {
		position: absolute;
		width: 100%;
		height: 5px;
		top: 50%;
		border-radius: 1rem;
		transform: translate(-50%, -50%) rotate(90deg);
	}

	.vertical-line-1 {
		left 33%
	}

	.vertical-line-2 {
		left 66%;
	}
</style>
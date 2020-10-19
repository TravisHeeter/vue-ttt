import { createApp } from "vue";
import Board from "./components/Board";
import Square from "./components/Square";

const app = createApp({
  /* options */
});

app.component("tic-tac-toe", Board);

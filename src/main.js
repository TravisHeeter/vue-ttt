import { createApp } from "vue";
import TicTacToe from "./components/TicTacToe";
import Cell from "./components/Cell";

const app = createApp({
  /* options */
});

app.component("tic-tac-toe", TicTacToe);

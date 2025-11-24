import { Routes } from '@angular/router';
import { CandyTextGame } from './candy-text-game/candy-text-game';
import { EightPuzzle } from './eight-puzzle/eight-puzzle';
import { BasicMath } from './math/basic-math/basic-math';
import { FourOperations } from './math/four-operations/four-operations';
import { Fractions } from './math/fractions/fractions';
import { MazeGame } from './maze-game/maze-game';

export const routes: Routes = [
  { path: '', redirectTo: 'maze', pathMatch: 'full' },
  { path: 'maze', component: MazeGame, data: { text: 'Maze Puzzle' } },
  { path: 'candy', component: CandyTextGame, data: { text: 'Candy Text' } },
  { path: 'math1', component: BasicMath, data: { text: 'Basic Math' } },
  { path: 'math2', component: Fractions, data: { text: 'Fractions' } },
  { path: 'math3', component: FourOperations, data: { text: '4 Operations' } },
  { path: '8-puzzle', component: EightPuzzle, data: { text: '8 Puzzle' } },
  { path: '**', redirectTo: '' },
];

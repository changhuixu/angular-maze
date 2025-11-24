export function keyboardMap(
  key: string
): 'Left' | 'Right' | 'Up' | 'Down' | '' {
  switch (key) {
    case 'ArrowLeft':
    case 'A':
    case 'a': {
      return 'Left';
    }
    case 'ArrowRight':
    case 'D':
    case 'd': {
      return 'Right';
    }
    case 'ArrowUp':
    case 'W':
    case 'w': {
      return 'Up';
    }
    case 'ArrowDown':
    case 'S':
    case 's': {
      return 'Down';
    }
    default: {
      return '';
    }
  }
}

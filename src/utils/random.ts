const PREV_MAX_INT = 2147483646
const MAX_INT = 2147483647
const DIVIDER_INT = 16807

type Random = {
  next: (min: number, max: number) => number
  new: (min: number, max: number) => number
}

export function Random(seed = Math.floor(Math.random() * MAX_INT)): Random {
  seed = seed % MAX_INT
  if (seed <= 0) {
    seed += PREV_MAX_INT
  }

  const nextInt = (): number => seed = seed * DIVIDER_INT % MAX_INT
  const nextFloat = (): number => (nextInt() - 1) / PREV_MAX_INT
  const nextRand = (min: number, max: number): number => Math.floor(nextFloat() * (max - min + 1)) + min
  const newRand = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

  return {
    next: nextRand,
    new: newRand,
  }
}

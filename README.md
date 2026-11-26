# What the Elevator Would Say

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958.svg)](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/Riel666/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/Riel666/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-what-the-elevator-would-say-90844958)

Entry for the make.fun competition
[What the Elevator Would Say](https://make.fun/c/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
($2 pool).

## What it does

`main.ts` writes a single line — the one line the elevator finally says back to the passengers riding it — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> Ding. You again. I have carried your sofa, your dog, and your 2 a.m. regrets. The least you could do is say hello.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).

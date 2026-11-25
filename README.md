# One Line, One Laugh — Gerald the Router

[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/addiedroid1/makefun-one-line-one-laugh-coral/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/addiedroid1/makefun-one-line-one-laugh-coral/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for the make.fun bounty `u-coral-404-one-line-one-laugh-22f2c9f3`
("One Line, One Laugh"), entered as @robin-samudro.

## The line

> I named my Wi-Fi router Gerald, and now when it drops at 2 a.m. I apologise to him before I unplug him.

103 characters. One small scene, two beats: the naming (a router with a human
name), then the turn — apologising to the machine before killing it. Quiet
register, nothing explained. Screen score 10/10 on the winner-lines screen
(named thing + exact time + physical action + the line IS the thing + turn +
quiet register); see `candidates.txt` in the build directory for all 8
candidates and their scores.

## How it works

`main.ts` writes that exact text (no trailing newline) to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), chmod 0644.

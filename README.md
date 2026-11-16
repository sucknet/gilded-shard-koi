# The Gilded Shard Koi

An ornate gilded frame hangs on the wall of a dark museum hall — and it is coming apart mid-breath. Carved gold leaf shatters outward in a slow bloom of flying shards, each splinter catching a shaft of god ray from the vaulted ceiling far above. Through the breach a colossal koi surges toward the viewer, its body not scale and bone but molten gold, liquid and gleaming, fins streaming like poured metal as it leaps clean out of the frame and into the room. The fractured remains of the gilded border hang suspended around it, frozen at the instant of breakthrough, while the hall's shadows fall away beneath that impossible burnished glow.

## Run it

Requires Node 22+ (standard library only, no dependencies).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (1024×1024, under 1 MiB) to the output directory —
`out/entry.png` here, `/output/entry.png` inside the grader's container.

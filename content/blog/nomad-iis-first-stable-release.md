---
title: Nomad IIS reaches its first stable release
description: After two years of building and testing, Nomad IIS just shipped v1.21.0 and is finally production ready.
date: 2026-08-14
image: /images/blog/nomad-iis-website-1.21.0.png
tags: [open-source, nomad, iis]
---

![Banner](/images/blog/nomad-iis-website-1.21.0.png)
<br />

I just tagged [v1.21.0](https://github.com/sevensolutions/nomad-iis/releases/tag/v1.21.0) of [Nomad IIS](https://github.com/sevensolutions/nomad-iis), and I'm calling it the first stable release.

Nomad IIS is a task driver plugin for HashiCorp Nomad that lets you run workloads directly on Microsoft IIS. If you're stuck running .NET Framework apps, or anything else that only really wants to live inside IIS, but still want it managed by Nomad like the rest of your fleet, that's the gap this fills.

Why v1.21.0 and not v1.0.0? Because 1.0.0 would have implied this is brand new, and it isn't. I've been building, breaking and fixing this driver for about two years now. Version 1.21.0 is just the point where I'm confident enough to call it production ready.

What changed in this release, in short:

- Fixed a memory leak in the driver that had been nagging at long-running deployments.
- Added a batch of new integration tests covering IIS driver edge cases.
- Wired end-to-end tests into CI, so regressions get caught before they ship.
- Started generating a software bill of materials (SBOM) for the project.
- The usual pile of dependency bumps across the driver and the docs site.

If you're running Nomad on Windows and IIS is part of your stack, give it a try.

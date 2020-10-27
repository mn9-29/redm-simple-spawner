<h1 align="center">RedM Simple Spawner</h1>

<p align="center">
  <i>Simple and easily configurable spawning system for RedM.</i>
  <br>
  <br>
  <a href="https://github.com/Ascent-Gaming/redm-simple-spawner/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/Ascent-Gaming/redm-simple-spawner/commits/master">
    <img src="https://img.shields.io/github/last-commit/Ascent-Gaming/redm-simple-spawner.svg?style=flat" alt="Last commit">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/workflow/status/Ascent-Gaming/redm-simple-spawner/Node.js%20CI" alt="Workflow">
  </a>
</p>

## Overview

Provides a simple and configurable spawning system. This mainly exist as a way of seperating spawning functionality from the [`redm-user`](https://github.com/Ascent-Gaming/redm-user) resource. The gain being, restarts to the `user` resource will not respawn the player while a restart to the `simple-spawner` resource will.

## Dependencies

This resource depends on the following resource(s) and subsequently their dependencies.

- [`redm-user`](https://github.com/Ascent-Gaming/redm-user)

## Installation

1. Ensure you have installed all of this resource's **Dependencies**.
1. `clone` or download this repository into your server's `./resources/` directory.
2. Rename the directory (or specify a name when `cloning`) to your liking.
3. Aftering ensuring its installed, run `yarn install` in this resources's directory.
4. Build the resource using `yarn build`.
5. `ensure` this resource *after* any of its dependencies.

## Features

You can configure the starting spawn point and various other features from the `config.json` file. You should *not* need to touch any source code to get the range of this resource's intended offerings.

### `simple-spawner:playerSpawned` Event

> This event is fired client to client and server.

An `event` fired once a player has been successfully spawned in.

This event does not pass any arguments.

***Note: This event will fire each time the `simple-spawner` resource is restarted.***

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.

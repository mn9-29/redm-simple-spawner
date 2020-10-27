import * as Config from "../../config.json"
import { Delay } from "../util"

let UserSpawned = false

const SpawnPlayer = (playerPed) => {
  if (!UserSpawned) {
    DoScreenFadeIn(500)
    ShutdownLoadingScreen()
    SetEntityCoords(
      playerPed,
      Config.simpleSpawner.x.pos,         // x
      Config.simpleSpawner.y.pos,         // y
      Config.simpleSpawner.z.pos,         // z
      Config.simpleSpawner.x.flipAxis,    // x-flip
      Config.simpleSpawner.y.flipAxis,    // y-flip
      Config.simpleSpawner.z.flipAxis,    // z-flip
      Config.simpleSpawner.clearEntities, // clearEntities
    )
    SetEntityHeading(
      playerPed,
      Config.simpleSpawner.heading,
    )
    FreezeEntityPosition(playerPed, Config.simpleSpawner.freezePlayer)

    // Set a global variable to track the fact a user is spawned in.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    UserSpawned = true
  }
}

on("user:canSpawn", (event: Record<string, any>) => {
  SpawnPlayer(event.PlayerPedId)
})

const onGetIsNetworkActive = (isNetworkActive: boolean) => {
  if (isNetworkActive && !UserSpawned) {
    const
      playerPed = PlayerPedId()

    SpawnPlayer(playerPed)
  }
}

emit("user:isClientNetworkActive", onGetIsNetworkActive)

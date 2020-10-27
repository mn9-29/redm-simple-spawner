fx_version 'cerulean'
games {'rdr3'}

name 'Simple Spawner'
description 'Simple and easily configurable spawning system for RedM.'
author 'Ryan "Standal" Lockard'

dependencies {

}

client_scripts {
  'dist/client/*.client.js',
}
server_script {
  'dist/server/*.server.js',
  -- '@mysql-async/lib/MySQL.lua',
  -- ...
}

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

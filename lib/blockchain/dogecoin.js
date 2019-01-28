const path = require('path')

const coinUtils = require('../coin-utils')

const common = require('./common')

module.exports = {setup}

const coinRec = coinUtils.getCryptoCurrency('DOGE')

function setup (dataDir) {
  common.firewall([coinRec.defaultPort])
  const config = buildConfig()
  common.writeFile(path.resolve(dataDir, coinRec.configFile), config)
  const cmd = `/usr/local/bin/${coinRec.daemon} -datadir=${dataDir}`
  common.writeSupervisorConfig(coinRec, cmd)
}

function buildConfig () {
  return `rpcuser=tigrisserver
rpcpassword=${common.randomPass()}
rpcport=22556
rpcconnect=127.0.0.1
dbcache=500
server=1
connections=40
keypool=10000
prune=4000
daemon=0`
}

const dgram = require('dgram');

const getProxys = async () => {
  const response = await fetch('https://proxylist.geonode.com/api/proxy-list?limit=30&page=1&sort_by=lastChecked&sort_type=desc&protocols=socks5')
  const data = await response.json()
  //testProxys(data.data)
  return data.data
}

const testProxy = async (proxy, target) => {
  const { ip, port } = proxy
  // use proxy
  dgram.createSocket('udp4').send('', 8080);
}

getProxys()
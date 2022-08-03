import { Etcd3 } from 'etcd3'

export default defineNitroPlugin((nitroApp) => {
  const etcd = new Etcd3()

  console.log('Nitro plugin', nitroApp)
})

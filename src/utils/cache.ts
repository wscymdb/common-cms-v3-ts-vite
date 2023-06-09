enum CacheType {
  Local,
  Seession
}

class Cache {
  storage: Storage
  namespace: string
  constructor(type: CacheType, namespace: string) {
    this.namespace = namespace
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    let storage = this.getStorage()
    storage[key] = value

    this.storage.setItem(this.namespace, JSON.stringify(storage))
  }

  getCache(key: string) {
    return this.getStorage()[key]
  }

  removeCach(key: string) {
    let val = this.getStorage()
    delete val[key]

    this.storage.setItem(this.namespace, JSON.stringify(val))
  }

  clear() {
    this.storage.clear()
  }

  private getStorage() {
    return JSON.parse(this.storage.getItem(this.namespace) || '{}')
  }
}

const localCache = new Cache(CacheType.Local, 'cym-cms')
const sessionCache = new Cache(CacheType.Seession, 'cym-cms')

export { localCache, sessionCache }

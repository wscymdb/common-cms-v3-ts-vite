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

  removeCache(key: string) {
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

// 参数一表示是使用 localStorage还是sessionStorage
// 参数二 命名空间的名字
const localCache = new Cache(CacheType.Local, 'cym-cms')
const sessionCache = new Cache(CacheType.Seession, 'cym-cms')

export { localCache, sessionCache }

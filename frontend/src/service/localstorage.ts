
class LocalStorageService {
    ls_key: string
    constructor(key: string) {
        this.ls_key = key
    }

    getItem() {
        const item = localStorage.getItem(this.ls_key)
        if (item) {
            return JSON.parse(item)
        }

        return {}
    }

    setItem(data: any) {
        localStorage.setItem(this.ls_key, JSON.stringify(data))
    }

    clearLocalStorage() {
        localStorage.clear()
    }

    removeItem() {
        localStorage.removeItem(this.ls_key)
    }
}

export default LocalStorageService
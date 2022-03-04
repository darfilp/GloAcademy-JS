const f = {
    a: 'sdds',
    s: 0,
    sf: 5454
};

Object.defineProperty(f, 'full', {
    get() {
        return `${this.a}`
    },
    set(value) {
        this.cm = value
    }
})

f.a = 78

console.log(f.full)




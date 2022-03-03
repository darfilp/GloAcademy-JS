const f = [{
    a: 'sdds',
    s: 0,
    sf: 5454
}];

const d = f.map(item => {
    item = Object.entries(item).flat()
    const screen = item.find(i => {
        return i > 0
    })
    //console.log(screen)
})

function test() {
    return {
        log: () => {
            console.log(this.itemList, this.edgeList)
        },
        paintLine: () => {
            const { ctx } = this

            ctx.save()
            ctx.fillStyle = '#000'
            ctx.beginPath()
            ctx.arc(200, 200, 4, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        },
    }
}

export default test
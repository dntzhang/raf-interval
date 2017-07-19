/*!
 *  raf-interval v0.1.0 By dntzhang
 *  Github: https://github.com/dntzhang/raf-interval
 *  MIT Licensed.
 */
;(function() {

    var queue = [],
        id = -1,
        ticking = false,
        tickId = null

    window.setRafInterval = function (fn, interval) {
        id++
        queue.push({id: id, fn: fn, interval: interval, lastTime: new Date()})
        if (!ticking) {
            var tick = function () {
                tickId = requestAnimationFrame(tick)
                queue.forEach(function (item) {
                    if (item.interval < 17 || new Date - item.lastTime >= item.interval) {
                        item.fn()
                        item.lastTime = new Date()
                    }
                })
            }
            ticking = true
            tick()
        }
        return id
    }

    window.clearRafInterval = function (id) {
        var i = 0,
            len = queue.length

        for (; i < len; i++) {
            if (id === queue[i].id) {
                queue.splice(i, 1)
                break
            }
        }

        if (queue.length === 0) {
            cancelAnimationFrame(tickId)
            ticking = false
        }
    }
})();

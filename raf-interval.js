/*!
 *  raf-interval v0.2.0 By dntzhang
 *  Github: https://github.com/dntzhang/raf-interval
 *  MIT Licensed.
 */
;(function() {

    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime()
        }
    }

    var queue = [],
        id = -1,
        ticking = false,
        tickId = null,
        now = Date.now

    window.setRafInterval = function (fn, interval) {
        id++
        queue.push({id: id, fn: fn, interval: interval, lastTime: now()})
        if (!ticking) {
            var tick = function () {
                tickId = requestAnimationFrame(tick)
                queue.forEach(function (item) {
                    if (item.interval < 17 || now() - item.lastTime >= item.interval) {
                        item.fn()
                        item.lastTime = now()
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

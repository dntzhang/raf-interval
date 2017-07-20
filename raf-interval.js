/*!
 *  raf-interval v0.3.0 By dntzhang
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
        now = Date.now,
        lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x = 0

    for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = now()
            var timeToCall = Math.max(0, 16 - (currTime - lastTime))
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall)
            }, timeToCall)
            lastTime = currTime + timeToCall
            return id
        }
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
        }
    }

    window.setRafInterval = function (fn, interval) {
        id++
        queue.push({id: id, fn: fn, interval: interval, lastTime: now()})
        if (!ticking) {
            var tick = function () {
                tickId = requestAnimationFrame(tick)
                each(queue, function (item) {
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

    function each(arr, fn){
        if(Array.prototype.forEach){
            arr.forEach(fn)
        }else{
            var i= 0,
                len=arr.length
            for (; i < len; i++) {
                fn(arr[i],i)
            }
        }
    }
})();

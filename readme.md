# raf-interval

setRafInterval and clearRafInterval with requestAnimationFrame.

# Usage

before raf-interval:

```js
var i = 0
var interval = setInterval(function() {
    console.log(i++)
    if (i > 6) {
        clearInterval(interval)
    }
},1000)
```

after raf-interval:

```js
var i = 0
var rafInterval = setRafInterval(function() {
    console.log(i++)
    if (i > 6) {
        clearRafInterval(rafInterval)
    }
},1000)
```

# Features

* Support setRafInterval and clearRafInterval like setInterval and clearInterval
* Automatically stops when the user switches to a different tab
* High performance animation with simple API
* Automatic stop the loop when it is not needed 

# Install 

```
$ npm install raf-interval
```

or get it by CDN:

*[https://unpkg.com/raf-interval@0.1.0/raf-interval.js](https://unpkg.com/raf-interval@0.1.0/raf-interval.js)


# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

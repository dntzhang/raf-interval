# raf-interval

setRafInterval and clearRafInterval with requestAnimationFrame.

# features

* Support setRafInterval and clearRafInterval like setInterval and clearInterval
* Automatically stops when the user switches to a different tab
* High performance animation with simple API
* Automatic stop the loop when it is not needed 

# install 

```
$ npm install raf-interval
```

# usage

before raf-interval:

```
var i = 0
var interval = setInterval(function() {
    console.log(i++)
    if (i > 6) {
        clearInterval(interval)
    }
},1000)
```

after raf-interval:

```
var i = 0
var rafInterval = setRafInterval(function() {
    console.log(i++)
    if (i > 6) {
        clearRafInterval(rafInterval)
    }
},1000)
```

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.

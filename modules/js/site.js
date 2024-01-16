/*! For license information please see site.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    "/Mf1": function(e, t, i) {
        "use strict";
        i.r(t),
        function(e) {
            i("AYua"),
            i("Jgmz"),
            i("1Spn"),
            i("3yRE");
            var t = i("z/o8")
              , n = i("lCAa")
              , s = i("Haw6")
              , r = i("l777")
              , o = i("/OfD");
            t.gsap.registerPlugin(n.a),
            t.gsap.registerPlugin(s.a),
            e.gsap = t.gsap,
            e.ScrollTrigger = s.a;
            var a = new r.a({
                core: o.a
            });
            console.log("%cCrafted with ❤ by https://whiteboard.is", "background: #00B7E3; color: #ffffff; font-size: 13px; padding: 4px 8px;"),
            window.onload = function() {
                a.loadEvents()
            }
        }
        .call(this, i("yLpj"))
    },
    "/OfD": function(e, t, i) {
        "use strict";
        i("3yRE");
        var n = i("IXsZ")
          , s = i.n(n)
          , r = function() {
            for (var e = document.querySelectorAll(".data-card-slider-container"), t = 0; t < e.length; t++)
                i(e[t]);
            function i(e) {
                var t = e.querySelector("[data-card-slider]")
                  , i = new s.a(t,{
                    cellAlign: "right",
                    prevNextButtons: !1,
                    pageDots: !1,
                    imagesLoaded: !0
                });
                e.querySelector(".button--previous").addEventListener("click", (function() {
                    i.previous(),
                    event.preventDefault()
                }
                )),
                e.querySelector(".button--next").addEventListener("click", (function() {
                    i.next(),
                    event.preventDefault()
                }
                ))
            }
        }
          , o = function() {
            document.querySelectorAll("[data-contained-slider]").forEach((function(e) {
                new s.a(e,{
                    groupCells: "100%",
                    imagesLoaded: !0
                })
            }
            ))
        }
          , a = i("T7iU")
          , l = i.n(a)
          , c = function() {
            document.querySelectorAll("[data-video-player]").forEach((function(e) {
                new l.a(e.querySelector("[data-plyr]"),{
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"]
                })
            }
            ))
        }
          , h = function() {
            document.querySelectorAll("[data-message-hero]").forEach((function(e) {
                new l.a(e.querySelector("[data-plyr]"),{
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"],
                    autoplay: !0
                })
            }
            ))
        }
          , u = function() {
            document.querySelectorAll("[data-podcast-hero]").forEach((function(e) {
                new l.a(e.querySelector("[data-plyr]"),{
                    autoplay: !0,
                    invertTime: !1
                })
            }
            ))
        };
        i("022K"),
        t.a = {
            init: function() {
                r(),
                o(),
                c(),
                h(),
                u()
            },
            finalize: function() {}
        }
    },
    0: function(e, t, i) {
        i("/Mf1"),
        i("H6pT"),
        e.exports = i("mPeE")
    },
    "022K": function(e, t) {
        var i = document.getElementById("header");
        if (i) {
            var n = i.offsetHeight;
            window.scrollY;
            window.addEventListener("scroll", (function() {
                window.scrollY >= n ? i.classList.add("blend-difference") : i.classList.remove("blend-difference")
            }
            ))
        }
    },
    "1Spn": function(e, t, i) {
        (function(t, i) {
            var n;
            n = function() {
                "use strict";
                var e = function() {
                    if (!window.Alpine)
                        throw new Error("[Magic Helpers] Alpine is required for the magic helpers to function correctly.");
                    if (!window.Alpine.version || !function(e, t) {
                        for (var i = e.split("."), n = t.split("."), s = 0; s < i.length; s++)
                            if (!n[s] || parseInt(n[s]) < parseInt(i[s]))
                                return !1;
                        return !0
                    }("2.5.0", window.Alpine.version))
                        throw new Error("Invalid Alpine version. Please use Alpine version 2.5.0 or above")
                }
                  , n = function(e, t, i) {
                    return t.getAttribute("x-bind:data-last-refresh") || t.setAttribute("x-bind:data-last-refresh", "Date.now()"),
                    new Proxy(e,function e(n) {
                        return void 0 === n && (n = null),
                        {
                            get: function(i, s) {
                                var r;
                                if (null !== i[s] && "object" == typeof i[s]) {
                                    var o = n ? n + "." + s : s;
                                    return new Proxy(i[s],e(o))
                                }
                                return null === n && "function" == typeof i[s] && t.__x ? i[s].bind(t.__x.$data) : null === n && !i[s] && null != t && null != (r = t.__x) && r.$data[s] ? t.__x.$data[s] : i[s]
                            },
                            set: function(e, s, r) {
                                if (!t.__x)
                                    throw new Error("Error communicating with observed component");
                                var o = n ? n + "." + s : s;
                                return i.call(t, t.__x.$data, o, r),
                                !0
                            }
                        }
                    }())
                }
                  , s = function(e, t) {
                    e.getAttribute("x-bind:data-last-refresh") || e.setAttribute("x-bind:data-last-refresh", "Date.now()"),
                    new MutationObserver((function(i) {
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n].target.closest("[x-data]");
                            if (!s || s.isSameNode(e))
                                return void t()
                        }
                    }
                    )).observe(e, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                }
                  , r = function(e, t, i) {
                    return (t = t.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((function(e, i, n) {
                        return Object(e[i]) !== e[i] && (e[i] = Math.abs(t[n + 1]) >> 0 == +t[n + 1] ? [] : {}),
                        e[i]
                    }
                    ), e)[t[t.length - 1]] = i,
                    e
                }
                  , o = function(e, t) {
                    var i, n, s, r = e.__x ? e.__x.getUnobservedData() : (i = e.getAttribute("x-data"),
                    n = e,
                    void 0 === s && (s = {}),
                    "function" == typeof i ? i.call(n) : new Function(["$data"].concat(Object.keys(s)),"var __alpine_result; with($data) { __alpine_result = " + i + " }; return __alpine_result").apply(void 0, [n].concat(Object.values(s))));
                    return t ? (t = Array.isArray(t) ? t : [t]).reduce((function(e, t) {
                        return e[t] = r[t],
                        e
                    }
                    ), {}) : r
                };
                function a(e, t, i) {
                    return e.__x ? i() : (window.requestAnimationFrame((function() {
                        return t.__x.updateElements(t)
                    }
                    )),
                    n = {
                        get: function(e, t) {
                            return new Proxy((function() {
                                return ""
                            }
                            ),n)
                        }
                    },
                    new Proxy((function() {
                        return ""
                    }
                    ),n));
                    var n
                }
                var l = /^x-([a-z-]*)\b/i;
                function c(e) {
                    var t = e.name
                      , i = e.value
                      , n = t.match(l)
                      , s = t.match(/:([a-z0-9\-:]+)/i)
                      , r = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
                    return {
                        type: n ? n[1] : null,
                        value: s ? s[1] : null,
                        modifiers: r.map((function(e) {
                            return e.replace(".", "")
                        }
                        )),
                        expression: i
                    }
                }
                function h() {
                    window.Alpine && !window.AlpineMagicHelpers.__fatal && (window.AlpineMagicHelpers.__fatal = setTimeout((function() {
                        console.error("%c*** ALPINE MAGIC HELPER: Fatal Error! ***\n\n\nAlpine magic helpers need to be loaded before Alpine to avoid errors when Alpine initialises its component. \n\nMake sure the helper script is included before Alpine in your page when using the defer attribute", "font-size: 14px")
                    }
                    ), 200))
                }
                h();
                var u = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("parent", (function(e) {
                            if (void 0 !== e.$parent)
                                return e.$parent;
                            var t = e.parentNode.closest("[x-data]");
                            if (!t)
                                throw new Error("Parent component not found");
                            return a(t, e, (function() {
                                return e.$parent = n(o(t), t, r),
                                s(t, (function() {
                                    e.$parent = n(t.__x.getUnobservedData(), t, r),
                                    e.__x.updateElements(e)
                                }
                                )),
                                e.$parent
                            }
                            ))
                        }
                        )),
                        Alpine.addMagicProperty("component", (function(e) {
                            return function(t) {
                                var i = this;
                                if (void 0 !== this[t])
                                    return this[t];
                                var l = document.querySelector('[x-data][x-id="' + t + '"], [x-data]#' + t);
                                if (!l)
                                    throw new Error("Component not found");
                                return a(l, e, (function() {
                                    return i[t] = n(o(l), l, r),
                                    s(l, (function() {
                                        i[t] = n(l.__x.getUnobservedData(), l, r),
                                        e.__x.updateElements(e)
                                    }
                                    )),
                                    i[t]
                                }
                                ))
                            }
                        }
                        ))
                    }
                }
                  , d = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    u.start(),
                    d(e)
                }
                ;
                var p = function(e, t) {
                    return function() {
                        for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
                            i[n] = arguments[n];
                        return e.apply(t, i)
                    }
                }
                  , f = Object.prototype.toString;
                function m(e) {
                    return "[object Array]" === f.call(e)
                }
                function g(e) {
                    return void 0 === e
                }
                function y(e) {
                    return null !== e && "object" == typeof e
                }
                function v(e) {
                    if ("[object Object]" !== f.call(e))
                        return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }
                function b(e) {
                    return "[object Function]" === f.call(e)
                }
                function w(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]),
                        m(e))
                            for (var i = 0, n = e.length; i < n; i++)
                                t.call(null, e[i], i, e);
                        else
                            for (var s in e)
                                Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
                }
                var T = {
                    isArray: m,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === f.call(e)
                    },
                    isBuffer: function(e) {
                        return null !== e && !g(e) && null !== e.constructor && !g(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: y,
                    isPlainObject: v,
                    isUndefined: g,
                    isDate: function(e) {
                        return "[object Date]" === f.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === f.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === f.call(e)
                    },
                    isFunction: b,
                    isStream: function(e) {
                        return y(e) && b(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                    },
                    forEach: w,
                    merge: function e() {
                        var t = {};
                        function i(i, n) {
                            v(t[n]) && v(i) ? t[n] = e(t[n], i) : v(i) ? t[n] = e({}, i) : m(i) ? t[n] = i.slice() : t[n] = i
                        }
                        for (var n = 0, s = arguments.length; n < s; n++)
                            w(arguments[n], i);
                        return t
                    },
                    extend: function(e, t, i) {
                        return w(t, (function(t, n) {
                            e[n] = i && "function" == typeof t ? p(t, i) : t
                        }
                        )),
                        e
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    },
                    stripBOM: function(e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                        e
                    }
                };
                function E(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                var k = function(e, t, i) {
                    if (!t)
                        return e;
                    var n;
                    if (i)
                        n = i(t);
                    else if (T.isURLSearchParams(t))
                        n = t.toString();
                    else {
                        var s = [];
                        T.forEach(t, (function(e, t) {
                            null != e && (T.isArray(e) ? t += "[]" : e = [e],
                            T.forEach(e, (function(e) {
                                T.isDate(e) ? e = e.toISOString() : T.isObject(e) && (e = JSON.stringify(e)),
                                s.push(E(t) + "=" + E(e))
                            }
                            )))
                        }
                        )),
                        n = s.join("&")
                    }
                    if (n) {
                        var r = e.indexOf("#");
                        -1 !== r && (e = e.slice(0, r)),
                        e += (-1 === e.indexOf("?") ? "?" : "&") + n
                    }
                    return e
                };
                function S() {
                    this.handlers = []
                }
                S.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }),
                    this.handlers.length - 1
                }
                ,
                S.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }
                ,
                S.prototype.forEach = function(e) {
                    T.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }
                    ))
                }
                ;
                var C = S
                  , A = function(e, t, i) {
                    return T.forEach(i, (function(i) {
                        e = i(e, t)
                    }
                    )),
                    e
                }
                  , x = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
                  , P = function(e, t) {
                    T.forEach(e, (function(i, n) {
                        n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i,
                        delete e[n])
                    }
                    ))
                }
                  , _ = function(e, t, i, n, s) {
                    return function(e, t, i, n, s) {
                        return e.config = t,
                        i && (e.code = i),
                        e.request = n,
                        e.response = s,
                        e.isAxiosError = !0,
                        e.toJSON = function() {
                            return {
                                message: this.message,
                                name: this.name,
                                description: this.description,
                                number: this.number,
                                fileName: this.fileName,
                                lineNumber: this.lineNumber,
                                columnNumber: this.columnNumber,
                                stack: this.stack,
                                config: this.config,
                                code: this.code
                            }
                        }
                        ,
                        e
                    }(new Error(e), t, i, n, s)
                }
                  , L = T.isStandardBrowserEnv() ? {
                    write: function(e, t, i, n, s, r) {
                        var o = [];
                        o.push(e + "=" + encodeURIComponent(t)),
                        T.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()),
                        T.isString(n) && o.push("path=" + n),
                        T.isString(s) && o.push("domain=" + s),
                        !0 === r && o.push("secure"),
                        document.cookie = o.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
                  , D = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]
                  , M = T.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
                    function n(e) {
                        var n = e;
                        return t && (i.setAttribute("href", n),
                        n = i.href),
                        i.setAttribute("href", n),
                        {
                            href: i.href,
                            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                            host: i.host,
                            search: i.search ? i.search.replace(/^\?/, "") : "",
                            hash: i.hash ? i.hash.replace(/^#/, "") : "",
                            hostname: i.hostname,
                            port: i.port,
                            pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                        }
                    }
                    return e = n(window.location.href),
                    function(t) {
                        var i = T.isString(t) ? n(t) : t;
                        return i.protocol === e.protocol && i.host === e.host
                    }
                }() : function() {
                    return !0
                }
                  , O = function(e) {
                    return new Promise((function(t, i) {
                        var n = e.data
                          , s = e.headers;
                        T.isFormData(n) && delete s["Content-Type"];
                        var r = new XMLHttpRequest;
                        if (e.auth) {
                            var o = e.auth.username || ""
                              , a = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            s.Authorization = "Basic " + btoa(o + ":" + a)
                        }
                        var l, c, h = (l = e.baseURL,
                        c = e.url,
                        l && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c) ? function(e, t) {
                            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                        }(l, c) : c);
                        if (r.open(e.method.toUpperCase(), k(h, e.params, e.paramsSerializer), !0),
                        r.timeout = e.timeout,
                        r.onreadystatechange = function() {
                            if (r && 4 === r.readyState && (0 !== r.status || r.responseURL && 0 === r.responseURL.indexOf("file:"))) {
                                var n, s, o, a, l, c = "getAllResponseHeaders"in r ? (n = r.getAllResponseHeaders(),
                                l = {},
                                n ? (T.forEach(n.split("\n"), (function(e) {
                                    if (a = e.indexOf(":"),
                                    s = T.trim(e.substr(0, a)).toLowerCase(),
                                    o = T.trim(e.substr(a + 1)),
                                    s) {
                                        if (l[s] && D.indexOf(s) >= 0)
                                            return;
                                        l[s] = "set-cookie" === s ? (l[s] ? l[s] : []).concat([o]) : l[s] ? l[s] + ", " + o : o
                                    }
                                }
                                )),
                                l) : l) : null, h = {
                                    data: e.responseType && "text" !== e.responseType ? r.response : r.responseText,
                                    status: r.status,
                                    statusText: r.statusText,
                                    headers: c,
                                    config: e,
                                    request: r
                                };
                                !function(e, t, i) {
                                    var n = i.config.validateStatus;
                                    i.status && n && !n(i.status) ? t(_("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
                                }(t, i, h),
                                r = null
                            }
                        }
                        ,
                        r.onabort = function() {
                            r && (i(_("Request aborted", e, "ECONNABORTED", r)),
                            r = null)
                        }
                        ,
                        r.onerror = function() {
                            i(_("Network Error", e, null, r)),
                            r = null
                        }
                        ,
                        r.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                            i(_(t, e, "ECONNABORTED", r)),
                            r = null
                        }
                        ,
                        T.isStandardBrowserEnv()) {
                            var u = (e.withCredentials || M(h)) && e.xsrfCookieName ? L.read(e.xsrfCookieName) : void 0;
                            u && (s[e.xsrfHeaderName] = u)
                        }
                        if ("setRequestHeader"in r && T.forEach(s, (function(e, t) {
                            void 0 === n && "content-type" === t.toLowerCase() ? delete s[t] : r.setRequestHeader(t, e)
                        }
                        )),
                        T.isUndefined(e.withCredentials) || (r.withCredentials = !!e.withCredentials),
                        e.responseType)
                            try {
                                r.responseType = e.responseType
                            } catch (t) {
                                if ("json" !== e.responseType)
                                    throw t
                            }
                        "function" == typeof e.onDownloadProgress && r.addEventListener("progress", e.onDownloadProgress),
                        "function" == typeof e.onUploadProgress && r.upload && r.upload.addEventListener("progress", e.onUploadProgress),
                        e.cancelToken && e.cancelToken.promise.then((function(e) {
                            r && (r.abort(),
                            i(e),
                            r = null)
                        }
                        )),
                        n || (n = null),
                        r.send(n)
                    }
                    ))
                }
                  , N = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                function I(e, t) {
                    !T.isUndefined(e) && T.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var j, R = {
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (j = O),
                    j),
                    transformRequest: [function(e, t) {
                        return P(t, "Accept"),
                        P(t, "Content-Type"),
                        T.isFormData(e) || T.isArrayBuffer(e) || T.isBuffer(e) || T.isStream(e) || T.isFile(e) || T.isBlob(e) ? e : T.isArrayBufferView(e) ? e.buffer : T.isURLSearchParams(e) ? (I(t, "application/x-www-form-urlencoded;charset=utf-8"),
                        e.toString()) : T.isObject(e) ? (I(t, "application/json;charset=utf-8"),
                        JSON.stringify(e)) : e
                    }
                    ],
                    transformResponse: [function(e) {
                        if ("string" == typeof e)
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                        return e
                    }
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                T.forEach(["delete", "get", "head"], (function(e) {
                    R.headers[e] = {}
                }
                )),
                T.forEach(["post", "put", "patch"], (function(e) {
                    R.headers[e] = T.merge(N)
                }
                ));
                var q = R;
                function F(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                var z = function(e) {
                    return F(e),
                    e.headers = e.headers || {},
                    e.data = A(e.data, e.headers, e.transformRequest),
                    e.headers = T.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                    T.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    }
                    )),
                    (e.adapter || q.adapter)(e).then((function(t) {
                        return F(e),
                        t.data = A(t.data, t.headers, e.transformResponse),
                        t
                    }
                    ), (function(t) {
                        return x(t) || (F(e),
                        t && t.response && (t.response.data = A(t.response.data, t.response.headers, e.transformResponse))),
                        Promise.reject(t)
                    }
                    ))
                }
                  , H = function(e, t) {
                    t = t || {};
                    var i = {}
                      , n = ["url", "method", "data"]
                      , s = ["headers", "auth", "proxy", "params"]
                      , r = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"]
                      , o = ["validateStatus"];
                    function a(e, t) {
                        return T.isPlainObject(e) && T.isPlainObject(t) ? T.merge(e, t) : T.isPlainObject(t) ? T.merge({}, t) : T.isArray(t) ? t.slice() : t
                    }
                    function l(n) {
                        T.isUndefined(t[n]) ? T.isUndefined(e[n]) || (i[n] = a(void 0, e[n])) : i[n] = a(e[n], t[n])
                    }
                    T.forEach(n, (function(e) {
                        T.isUndefined(t[e]) || (i[e] = a(void 0, t[e]))
                    }
                    )),
                    T.forEach(s, l),
                    T.forEach(r, (function(n) {
                        T.isUndefined(t[n]) ? T.isUndefined(e[n]) || (i[n] = a(void 0, e[n])) : i[n] = a(void 0, t[n])
                    }
                    )),
                    T.forEach(o, (function(n) {
                        n in t ? i[n] = a(e[n], t[n]) : n in e && (i[n] = a(void 0, e[n]))
                    }
                    ));
                    var c = n.concat(s).concat(r).concat(o)
                      , h = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                        return -1 === c.indexOf(e)
                    }
                    ));
                    return T.forEach(h, l),
                    i
                };
                function B(e) {
                    this.defaults = e,
                    this.interceptors = {
                        request: new C,
                        response: new C
                    }
                }
                B.prototype.request = function(e) {
                    "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
                    (e = H(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                    var t = [z, void 0]
                      , i = Promise.resolve(e);
                    for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }
                    )),
                    this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    }
                    )); t.length; )
                        i = i.then(t.shift(), t.shift());
                    return i
                }
                ,
                B.prototype.getUri = function(e) {
                    return e = H(this.defaults, e),
                    k(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
                }
                ,
                T.forEach(["delete", "get", "head", "options"], (function(e) {
                    B.prototype[e] = function(t, i) {
                        return this.request(H(i || {}, {
                            method: e,
                            url: t,
                            data: (i || {}).data
                        }))
                    }
                }
                )),
                T.forEach(["post", "put", "patch"], (function(e) {
                    B.prototype[e] = function(t, i, n) {
                        return this.request(H(n || {}, {
                            method: e,
                            url: t,
                            data: i
                        }))
                    }
                }
                ));
                var U = B;
                function V(e) {
                    this.message = e
                }
                V.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }
                ,
                V.prototype.__CANCEL__ = !0;
                var W = V;
                function $(e) {
                    if ("function" != typeof e)
                        throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }
                    ));
                    var i = this;
                    e((function(e) {
                        i.reason || (i.reason = new W(e),
                        t(i.reason))
                    }
                    ))
                }
                $.prototype.throwIfRequested = function() {
                    if (this.reason)
                        throw this.reason
                }
                ,
                $.source = function() {
                    var e;
                    return {
                        token: new $((function(t) {
                            e = t
                        }
                        )),
                        cancel: e
                    }
                }
                ;
                var Y = $;
                function X(e) {
                    var t = new U(e)
                      , i = p(U.prototype.request, t);
                    return T.extend(i, U.prototype, t),
                    T.extend(i, t),
                    i
                }
                var K = X(q);
                K.Axios = U,
                K.create = function(e) {
                    return X(H(K.defaults, e))
                }
                ,
                K.Cancel = W,
                K.CancelToken = Y,
                K.isCancel = x,
                K.all = function(e) {
                    return Promise.all(e)
                }
                ,
                K.spread = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
                ,
                K.isAxiosError = function(e) {
                    return "object" == typeof e && !0 === e.isAxiosError
                }
                ;
                var G = K
                  , J = K;
                G.default = J;
                var Q = G;
                h();
                var Z = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("fetch", this.fetch.bind(null, null)),
                        Alpine.addMagicProperty("get", this.fetch.bind(null, "get")),
                        Alpine.addMagicProperty("post", this.fetch.bind(null, "post"))
                    },
                    fetch: function(e) {
                        return async function(t, i) {
                            function n(e) {
                                return Object.prototype.hasOwnProperty.call(e, "data") ? e.data : e
                            }
                            var s;
                            return void 0 === i && (i = {}),
                            e ? await Q((s = {
                                url: t,
                                method: e
                            },
                            s["post" === e ? "data" : "params"] = i,
                            s)).then((function(e) {
                                return n(e)
                            }
                            )) : "string" == typeof t ? await Q.get(t).then((function(e) {
                                return n(e)
                            }
                            )) : await Q(t)
                        }
                    }
                }
                  , ee = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    Z.start(),
                    ee(e)
                }
                ,
                h();
                var te = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("interval", (function(e) {
                            return function() {
                                for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                                    i[n] = arguments[n];
                                if ("function" != typeof i[0])
                                    return i[0];
                                var s = i[1]
                                  , r = 0
                                  , o = !1;
                                "object" == typeof i[1] && (Object.prototype.hasOwnProperty.call(i[1], "timer") && (s = i[1].timer),
                                Object.prototype.hasOwnProperty.call(i[1], "delay") && (r = i[1].delay),
                                Object.prototype.hasOwnProperty.call(i[1], "forceInterval") && (o = i[1].forceInterval));
                                var a = null
                                  , l = function t() {
                                    a = setTimeout((function() {
                                        i[0].call(e),
                                        o ? t() : requestAnimationFrame(t)
                                    }
                                    ), s)
                                };
                                a = setTimeout((function() {
                                    o ? l() : requestAnimationFrame(l)
                                }
                                ), r),
                                this.$watch("autoIntervalTest", (function(e) {
                                    e ? o ? l() : requestAnimationFrame(l) : clearTimeout(a)
                                }
                                ))
                            }
                        }
                        ))
                    }
                }
                  , ie = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    te.start(),
                    ie(e)
                }
                ,
                h();
                var ne = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("range", (function() {
                            return function(e, t, i) {
                                void 0 === i && (i = 1),
                                void 0 === t && (t = e,
                                e = e ? 1 : 0);
                                var n = e > t;
                                if (n) {
                                    var s = [t, e];
                                    e = s[0],
                                    t = s[1]
                                }
                                var r = Array.from({
                                    length: (t - e) / i + 1
                                }, (function(t, n) {
                                    return e + n * i
                                }
                                ));
                                return n ? r.reverse() : r
                            }
                        }
                        ))
                    }
                }
                  , se = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    ne.start(),
                    se(e)
                }
                ,
                h();
                var re = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("refresh", (function(e) {
                            return e.__x ? function(t) {
                                return void 0 === t && (t = e),
                                t.__x.updateElements(t)
                            }
                            : function() {}
                        }
                        ))
                    }
                }
                  , oe = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    re.start(),
                    oe(e)
                }
                ;
                var ae = new (function() {
                    function e() {
                        var e = this;
                        this.values = {
                            breakpoints: {
                                xs: 0,
                                sm: 640,
                                md: 768,
                                lg: 1024,
                                xl: 1280,
                                "2xl": 1536
                            }
                        },
                        document.addEventListener("readystatechange", (function() {
                            if ("interactive" === document.readyState && window.AlpineMagicHelpersConfig)
                                for (var t in window.AlpineMagicHelpersConfig)
                                    e.values[t] = window.AlpineMagicHelpersConfig[t]
                        }
                        ))
                    }
                    return e.prototype.get = function(e) {
                        return this.values[e] ? this.values[e] : null
                    }
                    ,
                    e
                }());
                h();
                var le = []
                  , ce = {
                    start: function() {
                        var t;
                        e(),
                        window.addEventListener("resize", (function() {
                            clearTimeout(t),
                            t = setTimeout((function() {
                                le.forEach((function(e) {
                                    return e && e.__x && e.__x.updateElements(e)
                                }
                                ))
                            }
                            ), 150)
                        }
                        )),
                        Alpine.addMagicProperty("screen", (function(e) {
                            return le.includes(e) || le.push(e),
                            function(e) {
                                var t = window.innerWidth;
                                if (Number.isInteger(e))
                                    return e <= t;
                                var i = ae.get("breakpoints");
                                if (void 0 === i[e])
                                    throw Error("Undefined $screen property: " + e);
                                return i[e] <= t
                            }
                        }
                        ))
                    }
                }
                  , he = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    ce.start(),
                    he(e)
                }
                ;
                var ue = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : {};
                function de(e) {
                    var t = {
                        exports: {}
                    };
                    return e(t, t.exports),
                    t.exports
                }
                var pe = de((function(e, t) {
                    e.exports = {
                        polyfill: function() {
                            var e = window
                              , t = document;
                            if (!("scrollBehavior"in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                                var i, n = e.HTMLElement || e.Element, s = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || a,
                                    scrollIntoView: n.prototype.scrollIntoView
                                }, r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now, o = (i = e.navigator.userAgent,
                                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                e.scroll = e.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? f.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : s.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                                }
                                ,
                                e.scrollBy = function() {
                                    void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                                }
                                ,
                                n.prototype.scroll = n.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== l(arguments[0])) {
                                            var e = arguments[0].left
                                              , t = arguments[0].top;
                                            f.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                                throw new SyntaxError("Value could not be converted");
                                            s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }
                                ,
                                n.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }
                                ,
                                n.prototype.scrollIntoView = function() {
                                    if (!0 !== l(arguments[0])) {
                                        var i = d(this)
                                          , n = i.getBoundingClientRect()
                                          , r = this.getBoundingClientRect();
                                        i !== t.body ? (f.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top),
                                        "fixed" !== e.getComputedStyle(i).position && e.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })) : e.scrollBy({
                                            left: r.left,
                                            top: r.top,
                                            behavior: "smooth"
                                        })
                                    } else
                                        s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }
                            function a(e, t) {
                                this.scrollLeft = e,
                                this.scrollTop = t
                            }
                            function l(e) {
                                if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior)
                                    return !0;
                                if ("object" == typeof e && "smooth" === e.behavior)
                                    return !1;
                                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }
                            function c(e, t) {
                                return "Y" === t ? e.clientHeight + o < e.scrollHeight : "X" === t ? e.clientWidth + o < e.scrollWidth : void 0
                            }
                            function h(t, i) {
                                var n = e.getComputedStyle(t, null)["overflow" + i];
                                return "auto" === n || "scroll" === n
                            }
                            function u(e) {
                                var t = c(e, "Y") && h(e, "Y")
                                  , i = c(e, "X") && h(e, "X");
                                return t || i
                            }
                            function d(e) {
                                for (; e !== t.body && !1 === u(e); )
                                    e = e.parentNode || e.host;
                                return e
                            }
                            function p(t) {
                                var i, n, s, o, a = (r() - t.startTime) / 468;
                                o = a = a > 1 ? 1 : a,
                                i = .5 * (1 - Math.cos(Math.PI * o)),
                                n = t.startX + (t.x - t.startX) * i,
                                s = t.startY + (t.y - t.startY) * i,
                                t.method.call(t.scrollable, n, s),
                                n === t.x && s === t.y || e.requestAnimationFrame(p.bind(e, t))
                            }
                            function f(i, n, o) {
                                var l, c, h, u, d = r();
                                i === t.body ? (l = e,
                                c = e.scrollX || e.pageXOffset,
                                h = e.scrollY || e.pageYOffset,
                                u = s.scroll) : (l = i,
                                c = i.scrollLeft,
                                h = i.scrollTop,
                                u = a),
                                p({
                                    scrollable: l,
                                    method: u,
                                    startTime: d,
                                    startX: c,
                                    startY: h,
                                    x: n,
                                    y: o
                                })
                            }
                        }
                    }
                }
                ));
                h(),
                pe.polyfill();
                var fe = {
                    start: function() {
                        e(),
                        Alpine.addMagicProperty("scroll", (function() {
                            return function(e, t) {
                                void 0 === t && (t = {});
                                var i = e
                                  , n = t.offset ? parseInt(t.offset, 10) : 0;
                                if (delete t.offset,
                                "string" == typeof e && /^[0-9]+?/g.test(e) && (e = parseInt(e, 10)),
                                "string" == typeof e && (e = document.querySelector(e)),
                                e instanceof Element && (e = Math.floor(e.getBoundingClientRect().top + window.pageYOffset)),
                                Number.isInteger(e) && (e = {
                                    top: e - n,
                                    behavior: "smooth"
                                }),
                                "object" != typeof e)
                                    throw Error("Unsupported $scroll target: ", i);
                                Object.assign(e, t),
                                window.scroll(e)
                            }
                        }
                        ))
                    }
                }
                  , me = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    fe.start(),
                    me(e)
                }
                ,
                h();
                var ge = {
                    start: function() {
                        var t = this;
                        e(),
                        Alpine.addMagicProperty("truncate", (function() {
                            return function() {
                                for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                                    i[n] = arguments[n];
                                return "string" != typeof i[0] ? i[0] : i[1] ? "object" != typeof i[1] ? t.appendEllipsis(i[0].slice(0, i[1]), i) : Object.prototype.hasOwnProperty.call(i[1], "words") && i[1].words ? t.appendEllipsis(i[0].split(" ").splice(0, i[1].words).join(" "), i) : Object.prototype.hasOwnProperty.call(i[1], "characters") && i[1].characters ? t.appendEllipsis(i[0].slice(0, i[1].characters), i) : i[0] : i[0]
                            }
                        }
                        ))
                    },
                    appendEllipsis: function(e, t) {
                        if (t[0].length <= e.length)
                            return e;
                        var i = "…";
                        return void 0 !== t[2] && (i = t[2]),
                        Object.prototype.hasOwnProperty.call(t[1], "ellipsis") && (i = t[1].ellipsis),
                        e + i
                    }
                }
                  , ye = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    ge.start(),
                    ye(e)
                }
                ;
                var ve = de((function(e, t) {
                    !function(t, i) {
                        var n = function(e) {
                            var t = ["N", "E", "A", "D"];
                            function i(e, t) {
                                e.super_ = t,
                                e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })
                            }
                            function n(e, t) {
                                Object.defineProperty(this, "kind", {
                                    value: e,
                                    enumerable: !0
                                }),
                                t && t.length && Object.defineProperty(this, "path", {
                                    value: t,
                                    enumerable: !0
                                })
                            }
                            function s(e, t, i) {
                                s.super_.call(this, "E", e),
                                Object.defineProperty(this, "lhs", {
                                    value: t,
                                    enumerable: !0
                                }),
                                Object.defineProperty(this, "rhs", {
                                    value: i,
                                    enumerable: !0
                                })
                            }
                            function r(e, t) {
                                r.super_.call(this, "N", e),
                                Object.defineProperty(this, "rhs", {
                                    value: t,
                                    enumerable: !0
                                })
                            }
                            function o(e, t) {
                                o.super_.call(this, "D", e),
                                Object.defineProperty(this, "lhs", {
                                    value: t,
                                    enumerable: !0
                                })
                            }
                            function a(e, t, i) {
                                a.super_.call(this, "A", e),
                                Object.defineProperty(this, "index", {
                                    value: t,
                                    enumerable: !0
                                }),
                                Object.defineProperty(this, "item", {
                                    value: i,
                                    enumerable: !0
                                })
                            }
                            function l(e, t, i) {
                                var n = e.slice((i || t) + 1 || e.length);
                                return e.length = t < 0 ? e.length + t : t,
                                e.push.apply(e, n),
                                e
                            }
                            function c(e) {
                                var t = typeof e;
                                return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
                            }
                            function h(e) {
                                var t = 0;
                                if (0 === e.length)
                                    return t;
                                for (var i = 0; i < e.length; i++)
                                    t = (t << 5) - t + e.charCodeAt(i),
                                    t &= t;
                                return t
                            }
                            function u(e) {
                                var t = 0
                                  , i = c(e);
                                if ("array" === i)
                                    return e.forEach((function(e) {
                                        t += u(e)
                                    }
                                    )),
                                    t + h("[type: array, hash: " + t + "]");
                                if ("object" === i) {
                                    for (var n in e)
                                        if (e.hasOwnProperty(n)) {
                                            var s = "[ type: object, key: " + n + ", value hash: " + u(e[n]) + "]";
                                            t += h(s)
                                        }
                                    return t
                                }
                                return t + h("[ type: " + i + " ; value: " + e + "]")
                            }
                            function d(e, t, i, n, l, h, p, f) {
                                i = i || [],
                                p = p || [];
                                var m = (l = l || []).slice(0);
                                if (null != h) {
                                    if (n) {
                                        if ("function" == typeof n && n(m, h))
                                            return;
                                        if ("object" == typeof n) {
                                            if (n.prefilter && n.prefilter(m, h))
                                                return;
                                            if (n.normalize) {
                                                var g = n.normalize(m, h, e, t);
                                                g && (e = g[0],
                                                t = g[1])
                                            }
                                        }
                                    }
                                    m.push(h)
                                }
                                "regexp" === c(e) && "regexp" === c(t) && (e = e.toString(),
                                t = t.toString());
                                var y, v, b, w, T = typeof e, E = typeof t, k = "undefined" !== T || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, h), S = "undefined" !== E || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, h);
                                if (!k && S)
                                    i.push(new r(m,t));
                                else if (!S && k)
                                    i.push(new o(m,e));
                                else if (c(e) !== c(t))
                                    i.push(new s(m,e,t));
                                else if ("date" === c(e) && e - t != 0)
                                    i.push(new s(m,e,t));
                                else if ("object" === T && null !== e && null !== t) {
                                    for (y = p.length - 1; y > -1; --y)
                                        if (p[y].lhs === e) {
                                            w = !0;
                                            break
                                        }
                                    if (w)
                                        e !== t && i.push(new s(m,e,t));
                                    else {
                                        if (p.push({
                                            lhs: e,
                                            rhs: t
                                        }),
                                        Array.isArray(e)) {
                                            for (f && (e.sort((function(e, t) {
                                                return u(e) - u(t)
                                            }
                                            )),
                                            t.sort((function(e, t) {
                                                return u(e) - u(t)
                                            }
                                            ))),
                                            y = t.length - 1,
                                            v = e.length - 1; y > v; )
                                                i.push(new a(m,y,new r(void 0,t[y--])));
                                            for (; v > y; )
                                                i.push(new a(m,v,new o(void 0,e[v--])));
                                            for (; y >= 0; --y)
                                                d(e[y], t[y], i, n, m, y, p, f)
                                        } else {
                                            var C = Object.keys(e)
                                              , A = Object.keys(t);
                                            for (y = 0; y < C.length; ++y)
                                                b = C[y],
                                                (w = A.indexOf(b)) >= 0 ? (d(e[b], t[b], i, n, m, b, p, f),
                                                A[w] = null) : d(e[b], void 0, i, n, m, b, p, f);
                                            for (y = 0; y < A.length; ++y)
                                                (b = A[y]) && d(void 0, t[b], i, n, m, b, p, f)
                                        }
                                        p.length = p.length - 1
                                    }
                                } else
                                    e !== t && ("number" === T && isNaN(e) && isNaN(t) || i.push(new s(m,e,t)))
                            }
                            function p(e, t, i, n, s) {
                                var r = [];
                                if (d(e, t, r, n, null, null, null, s),
                                i)
                                    for (var o = 0; o < r.length; ++o)
                                        i(r[o]);
                                return r
                            }
                            function f(e, t, i, n) {
                                var s = p(e, t, n ? function(e) {
                                    e && n.push(e)
                                }
                                : void 0, i);
                                return n || (s.length ? s : void 0)
                            }
                            function m(e, i, n) {
                                if (void 0 === n && i && ~t.indexOf(i.kind) && (n = i),
                                e && n && n.kind) {
                                    for (var s = e, r = -1, o = n.path ? n.path.length - 1 : 0; ++r < o; )
                                        void 0 === s[n.path[r]] && (s[n.path[r]] = void 0 !== n.path[r + 1] && "number" == typeof n.path[r + 1] ? [] : {}),
                                        s = s[n.path[r]];
                                    switch (n.kind) {
                                    case "A":
                                        n.path && void 0 === s[n.path[r]] && (s[n.path[r]] = []),
                                        function e(t, i, n) {
                                            if (n.path && n.path.length) {
                                                var s, r = t[i], o = n.path.length - 1;
                                                for (s = 0; s < o; s++)
                                                    r = r[n.path[s]];
                                                switch (n.kind) {
                                                case "A":
                                                    e(r[n.path[s]], n.index, n.item);
                                                    break;
                                                case "D":
                                                    delete r[n.path[s]];
                                                    break;
                                                case "E":
                                                case "N":
                                                    r[n.path[s]] = n.rhs
                                                }
                                            } else
                                                switch (n.kind) {
                                                case "A":
                                                    e(t[i], n.index, n.item);
                                                    break;
                                                case "D":
                                                    t = l(t, i);
                                                    break;
                                                case "E":
                                                case "N":
                                                    t[i] = n.rhs
                                                }
                                            return t
                                        }(n.path ? s[n.path[r]] : s, n.index, n.item);
                                        break;
                                    case "D":
                                        delete s[n.path[r]];
                                        break;
                                    case "E":
                                    case "N":
                                        s[n.path[r]] = n.rhs
                                    }
                                }
                            }
                            return i(s, n),
                            i(r, n),
                            i(o, n),
                            i(a, n),
                            Object.defineProperties(f, {
                                diff: {
                                    value: f,
                                    enumerable: !0
                                },
                                orderIndependentDiff: {
                                    value: function(e, t, i, n) {
                                        var s = n ? function(e) {
                                            e && n.push(e)
                                        }
                                        : void 0
                                          , r = p(e, t, s, i, !0);
                                        return n || (r.length ? r : void 0)
                                    },
                                    enumerable: !0
                                },
                                observableDiff: {
                                    value: p,
                                    enumerable: !0
                                },
                                orderIndependentObservableDiff: {
                                    value: function(e, t, i, n, s, r, o) {
                                        return d(e, t, i, n, s, r, o, !0)
                                    },
                                    enumerable: !0
                                },
                                orderIndepHash: {
                                    value: u,
                                    enumerable: !0
                                },
                                applyDiff: {
                                    value: function(e, t, i) {
                                        e && t && p(e, t, (function(n) {
                                            i && !i(e, t, n) || m(e, t, n)
                                        }
                                        ))
                                    },
                                    enumerable: !0
                                },
                                applyChange: {
                                    value: m,
                                    enumerable: !0
                                },
                                revertChange: {
                                    value: function(e, t, i) {
                                        if (e && t && i && i.kind) {
                                            var n, s, r = e;
                                            for (s = i.path.length - 1,
                                            n = 0; n < s; n++)
                                                void 0 === r[i.path[n]] && (r[i.path[n]] = {}),
                                                r = r[i.path[n]];
                                            switch (i.kind) {
                                            case "A":
                                                !function e(t, i, n) {
                                                    if (n.path && n.path.length) {
                                                        var s, r = t[i], o = n.path.length - 1;
                                                        for (s = 0; s < o; s++)
                                                            r = r[n.path[s]];
                                                        switch (n.kind) {
                                                        case "A":
                                                            e(r[n.path[s]], n.index, n.item);
                                                            break;
                                                        case "D":
                                                        case "E":
                                                            r[n.path[s]] = n.lhs;
                                                            break;
                                                        case "N":
                                                            delete r[n.path[s]]
                                                        }
                                                    } else
                                                        switch (n.kind) {
                                                        case "A":
                                                            e(t[i], n.index, n.item);
                                                            break;
                                                        case "D":
                                                        case "E":
                                                            t[i] = n.lhs;
                                                            break;
                                                        case "N":
                                                            t = l(t, i)
                                                        }
                                                    return t
                                                }(r[i.path[n]], i.index, i.item);
                                                break;
                                            case "D":
                                            case "E":
                                                r[i.path[n]] = i.lhs;
                                                break;
                                            case "N":
                                                delete r[i.path[n]]
                                            }
                                        }
                                    },
                                    enumerable: !0
                                },
                                isConflict: {
                                    value: function() {
                                        return "undefined" != typeof $conflict
                                    },
                                    enumerable: !0
                                }
                            }),
                            f.DeepDiff = f,
                            e && (e.DeepDiff = f),
                            f
                        }(t);
                        e.exports = n
                    }(ue)
                }
                ));
                h();
                var be = new WeakMap
                  , we = {
                    start: function() {
                        var t = this;
                        e(),
                        Alpine.addMagicProperty("track", (function(e) {
                            return function(i) {
                                var n;
                                i = null != (n = i) ? n : Object.keys(o(e)),
                                i = Array.isArray(i) ? i : [i];
                                var r = JSON.stringify(o(e, i));
                                s(e, (function() {
                                    be.has(e.__x) || t.store(e.__x, {
                                        props: i,
                                        previous: r
                                    });
                                    var n = o(e, be.get(e.__x).props)
                                      , s = JSON.parse(be.get(e.__x).previous)
                                      , a = ve.DeepDiff.diff(s, n, !0);
                                    a && a.length && (a = a.filter((function(t) {
                                        return be.get(e.__x).props.some((function(e) {
                                            return t.path.join(".").startsWith(e)
                                        }
                                        ))
                                    }
                                    )),
                                    be.get(e.__x).previous = JSON.stringify(n),
                                    be.get(e.__x).changes.push(a),
                                    e.__x.updateElements(e))
                                }
                                ))
                            }
                        }
                        )),
                        Alpine.addMagicProperty("undo", (function(e, i) {
                            return function() {
                                e !== i && (e = t.syncClone(e, i));
                                var n = be.get(e.__x).changes.pop()
                                  , s = JSON.parse(be.get(e.__x).previous);
                                if (n && n.forEach((function(t) {
                                    ve.DeepDiff.revertChange(s, o(e, be.get(e.__x).props), t)
                                }
                                )),
                                Object.keys(s).length) {
                                    var r = {};
                                    Object.entries(s).forEach((function(e) {
                                        r[e[0]] = e[1]
                                    }
                                    )),
                                    e.__x.$data = Object.assign(e.__x.$data, r)
                                }
                                be.get(e.__x).previous = JSON.stringify(o(e, be.get(e.__x).props))
                            }
                        }
                        )),
                        Alpine.addMagicProperty("history", (function(e, i) {
                            return i.__x ? (e !== i && (e = t.syncClone(e, i)),
                            be.has(e.__x) ? be.get(e.__x) : []) : []
                        }
                        ))
                    },
                    store: function(e, t) {
                        return be.set(e, Object.assign({
                            changes: [],
                            get length() {
                                return this.changes.length
                            }
                        }, t)),
                        be.get(e)
                    },
                    syncClone: function(e, t) {
                        return this.store(t.__x, {
                            props: be.get(e.__x).props,
                            previous: be.get(e.__x).previous,
                            changes: be.get(e.__x).changes
                        }),
                        t
                    }
                }
                  , Te = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                window.deferLoadingAlpine = function(e) {
                    Te(e),
                    we.start()
                }
                ,
                h();
                var Ee = function e(t) {
                    if (t.tagName && "script" === t.tagName.toLowerCase())
                        t.parentNode.replaceChild(function(e) {
                            var t = document.createElement("script");
                            t.text = e.innerHTML;
                            for (var i = 0; i < e.attributes.length; i++) {
                                var n = e.attributes[i];
                                t.setAttribute(n.name, n.value)
                            }
                            return t
                        }(t), t);
                    else
                        for (var i = 0; i < t.childNodes.length; i++)
                            e(t.childNodes[i]);
                    return t
                }
                  , ke = {
                    start: function() {
                        e(),
                        Alpine.onBeforeComponentInitialized((function(e) {
                            var t = e.resolveBoundAttributes;
                            e.resolveBoundAttributes = function(i, n, s) {
                                return void 0 === n && (n = !1),
                                function(e) {
                                    return Array.from(e.attributes).filter((function(e) {
                                        return l.test(e.name)
                                    }
                                    )).map(c)
                                }(i).forEach((function(t) {
                                    var n = t.type
                                      , r = t.expression;
                                    "unsafe-html" === n && (i.innerHTML = e.evaluateReturnExpression(i, r, s),
                                    Ee(i))
                                }
                                )),
                                t.bind(e)(i, n, s)
                            }
                        }
                        ))
                    }
                }
                  , Se = window.deferLoadingAlpine || function(e) {
                    return e()
                }
                ;
                return window.deferLoadingAlpine = function(e) {
                    ke.start(),
                    Se(e)
                }
                ,
                {
                    AlpineComponentMagicMethod: u,
                    AlpineFetchMagicMethod: Z,
                    AlpineIntervalMagicMethod: te,
                    AlpineRangeMagicMethod: ne,
                    AlpineRefreshMagicMethod: re,
                    AlpineScreenMagicMethod: ce,
                    AlpineScrollMagicMethod: fe,
                    AlpineTruncateMagicMethod: ge,
                    AlpineUndoMagicMethod: we,
                    AlpineUnsafeHTMLCustomDirective: ke
                }
            }
            ,
            e.exports = n()
        }
        ).call(this, i("8oxB"), i("yLpj"))
    },
    "4PUS": function(e, t, i) {
        var n, s;
        !function(r, o) {
            n = [i("CUlp")],
            void 0 === (s = function(e) {
                return function(e, t) {
                    "use strict";
                    function i() {}
                    var n = i.prototype = Object.create(t.prototype);
                    n.bindStartEvent = function(e) {
                        this._bindStartEvent(e, !0)
                    }
                    ,
                    n.unbindStartEvent = function(e) {
                        this._bindStartEvent(e, !1)
                    }
                    ,
                    n._bindStartEvent = function(t, i) {
                        var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener"
                          , s = "mousedown";
                        e.PointerEvent ? s = "pointerdown" : "ontouchstart"in e && (s = "touchstart"),
                        t[n](s, this)
                    }
                    ,
                    n.handleEvent = function(e) {
                        var t = "on" + e.type;
                        this[t] && this[t](e)
                    }
                    ,
                    n.getTouch = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var i = e[t];
                            if (i.identifier == this.pointerIdentifier)
                                return i
                        }
                    }
                    ,
                    n.onmousedown = function(e) {
                        var t = e.button;
                        t && 0 !== t && 1 !== t || this._pointerDown(e, e)
                    }
                    ,
                    n.ontouchstart = function(e) {
                        this._pointerDown(e, e.changedTouches[0])
                    }
                    ,
                    n.onpointerdown = function(e) {
                        this._pointerDown(e, e)
                    }
                    ,
                    n._pointerDown = function(e, t) {
                        e.button || this.isPointerDown || (this.isPointerDown = !0,
                        this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier,
                        this.pointerDown(e, t))
                    }
                    ,
                    n.pointerDown = function(e, t) {
                        this._bindPostStartEvents(e),
                        this.emitEvent("pointerDown", [e, t])
                    }
                    ;
                    var s = {
                        mousedown: ["mousemove", "mouseup"],
                        touchstart: ["touchmove", "touchend", "touchcancel"],
                        pointerdown: ["pointermove", "pointerup", "pointercancel"]
                    };
                    return n._bindPostStartEvents = function(t) {
                        if (t) {
                            var i = s[t.type];
                            i.forEach((function(t) {
                                e.addEventListener(t, this)
                            }
                            ), this),
                            this._boundPointerEvents = i
                        }
                    }
                    ,
                    n._unbindPostStartEvents = function() {
                        this._boundPointerEvents && (this._boundPointerEvents.forEach((function(t) {
                            e.removeEventListener(t, this)
                        }
                        ), this),
                        delete this._boundPointerEvents)
                    }
                    ,
                    n.onmousemove = function(e) {
                        this._pointerMove(e, e)
                    }
                    ,
                    n.onpointermove = function(e) {
                        e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
                    }
                    ,
                    n.ontouchmove = function(e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerMove(e, t)
                    }
                    ,
                    n._pointerMove = function(e, t) {
                        this.pointerMove(e, t)
                    }
                    ,
                    n.pointerMove = function(e, t) {
                        this.emitEvent("pointerMove", [e, t])
                    }
                    ,
                    n.onmouseup = function(e) {
                        this._pointerUp(e, e)
                    }
                    ,
                    n.onpointerup = function(e) {
                        e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
                    }
                    ,
                    n.ontouchend = function(e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerUp(e, t)
                    }
                    ,
                    n._pointerUp = function(e, t) {
                        this._pointerDone(),
                        this.pointerUp(e, t)
                    }
                    ,
                    n.pointerUp = function(e, t) {
                        this.emitEvent("pointerUp", [e, t])
                    }
                    ,
                    n._pointerDone = function() {
                        this._pointerReset(),
                        this._unbindPostStartEvents(),
                        this.pointerDone()
                    }
                    ,
                    n._pointerReset = function() {
                        this.isPointerDown = !1,
                        delete this.pointerIdentifier
                    }
                    ,
                    n.pointerDone = function() {}
                    ,
                    n.onpointercancel = function(e) {
                        e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
                    }
                    ,
                    n.ontouchcancel = function(e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerCancel(e, t)
                    }
                    ,
                    n._pointerCancel = function(e, t) {
                        this._pointerDone(),
                        this.pointerCancel(e, t)
                    }
                    ,
                    n.pointerCancel = function(e, t) {
                        this.emitEvent("pointerCancel", [e, t])
                    }
                    ,
                    i.getPointerPoint = function(e) {
                        return {
                            x: e.pageX,
                            y: e.pageY
                        }
                    }
                    ,
                    i
                }(r, e)
            }
            .apply(t, n)) || (e.exports = s)
        }(window)
    },
    "72Lm": function(e, t, i) {
        var n, s;
        !function(r, o) {
            n = [i("4PUS")],
            void 0 === (s = function(e) {
                return function(e, t) {
                    "use strict";
                    function i() {}
                    var n = i.prototype = Object.create(t.prototype);
                    n.bindHandles = function() {
                        this._bindHandles(!0)
                    }
                    ,
                    n.unbindHandles = function() {
                        this._bindHandles(!1)
                    }
                    ,
                    n._bindHandles = function(t) {
                        for (var i = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", n = t ? this._touchActionValue : "", s = 0; s < this.handles.length; s++) {
                            var r = this.handles[s];
                            this._bindStartEvent(r, t),
                            r[i]("click", this),
                            e.PointerEvent && (r.style.touchAction = n)
                        }
                    }
                    ,
                    n._touchActionValue = "none",
                    n.pointerDown = function(e, t) {
                        this.okayPointerDown(e) && (this.pointerDownPointer = {
                            pageX: t.pageX,
                            pageY: t.pageY
                        },
                        e.preventDefault(),
                        this.pointerDownBlur(),
                        this._bindPostStartEvents(e),
                        this.emitEvent("pointerDown", [e, t]))
                    }
                    ;
                    var s = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                    }
                      , r = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                    };
                    return n.okayPointerDown = function(e) {
                        var t = s[e.target.nodeName]
                          , i = r[e.target.type]
                          , n = !t || i;
                        return n || this._pointerReset(),
                        n
                    }
                    ,
                    n.pointerDownBlur = function() {
                        var e = document.activeElement;
                        e && e.blur && e != document.body && e.blur()
                    }
                    ,
                    n.pointerMove = function(e, t) {
                        var i = this._dragPointerMove(e, t);
                        this.emitEvent("pointerMove", [e, t, i]),
                        this._dragMove(e, t, i)
                    }
                    ,
                    n._dragPointerMove = function(e, t) {
                        var i = {
                            x: t.pageX - this.pointerDownPointer.pageX,
                            y: t.pageY - this.pointerDownPointer.pageY
                        };
                        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(e, t),
                        i
                    }
                    ,
                    n.hasDragStarted = function(e) {
                        return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
                    }
                    ,
                    n.pointerUp = function(e, t) {
                        this.emitEvent("pointerUp", [e, t]),
                        this._dragPointerUp(e, t)
                    }
                    ,
                    n._dragPointerUp = function(e, t) {
                        this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
                    }
                    ,
                    n._dragStart = function(e, t) {
                        this.isDragging = !0,
                        this.isPreventingClicks = !0,
                        this.dragStart(e, t)
                    }
                    ,
                    n.dragStart = function(e, t) {
                        this.emitEvent("dragStart", [e, t])
                    }
                    ,
                    n._dragMove = function(e, t, i) {
                        this.isDragging && this.dragMove(e, t, i)
                    }
                    ,
                    n.dragMove = function(e, t, i) {
                        e.preventDefault(),
                        this.emitEvent("dragMove", [e, t, i])
                    }
                    ,
                    n._dragEnd = function(e, t) {
                        this.isDragging = !1,
                        setTimeout(function() {
                            delete this.isPreventingClicks
                        }
                        .bind(this)),
                        this.dragEnd(e, t)
                    }
                    ,
                    n.dragEnd = function(e, t) {
                        this.emitEvent("dragEnd", [e, t])
                    }
                    ,
                    n.onclick = function(e) {
                        this.isPreventingClicks && e.preventDefault()
                    }
                    ,
                    n._staticClick = function(e, t) {
                        this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t),
                        "mouseup" != e.type && (this.isIgnoringMouseUp = !0,
                        setTimeout(function() {
                            delete this.isIgnoringMouseUp
                        }
                        .bind(this), 400)))
                    }
                    ,
                    n.staticClick = function(e, t) {
                        this.emitEvent("staticClick", [e, t])
                    }
                    ,
                    i.getPointerPoint = t.getPointerPoint,
                    i
                }(r, e)
            }
            .apply(t, n)) || (e.exports = s)
        }(window)
    },
    "8oxB": function(e, t) {
        var i, n, s = e.exports = {};
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (i === setTimeout)
                return setTimeout(e, 0);
            if ((i === r || !i) && setTimeout)
                return i = setTimeout,
                setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                i = r
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                n = o
            }
        }();
        var l, c = [], h = !1, u = -1;
        function d() {
            h && l && (h = !1,
            l.length ? c = l.concat(c) : u = -1,
            c.length && p())
        }
        function p() {
            if (!h) {
                var e = a(d);
                h = !0;
                for (var t = c.length; t; ) {
                    for (l = c,
                    c = []; ++u < t; )
                        l && l[u].run();
                    u = -1,
                    t = c.length
                }
                l = null,
                h = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === o || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function f(e, t) {
            this.fun = e,
            this.array = t
        }
        function m() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
            c.push(new f(e,t)),
            1 !== c.length || h || a(p)
        }
        ,
        f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        s.title = "browser",
        s.browser = !0,
        s.env = {},
        s.argv = [],
        s.version = "",
        s.versions = {},
        s.on = m,
        s.addListener = m,
        s.once = m,
        s.off = m,
        s.removeListener = m,
        s.removeAllListeners = m,
        s.emit = m,
        s.prependListener = m,
        s.prependOnceListener = m,
        s.listeners = function(e) {
            return []
        }
        ,
        s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        s.cwd = function() {
            return "/"
        }
        ,
        s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        s.umask = function() {
            return 0
        }
    },
    AVCV: function(e, t, i) {
        var n, s;
        window,
        n = [i("YVj6")],
        void 0 === (s = function(e) {
            return function(e, t) {
                "use strict";
                var i = {
                    startAnimation: function() {
                        this.isAnimating || (this.isAnimating = !0,
                        this.restingFrames = 0,
                        this.animate())
                    },
                    animate: function() {
                        this.applyDragForce(),
                        this.applySelectedAttraction();
                        var e = this.x;
                        if (this.integratePhysics(),
                        this.positionSlider(),
                        this.settle(e),
                        this.isAnimating) {
                            var t = this;
                            requestAnimationFrame((function() {
                                t.animate()
                            }
                            ))
                        }
                    },
                    positionSlider: function() {
                        var e = this.x;
                        this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth),
                        e -= this.slideableWidth,
                        this.shiftWrapCells(e)),
                        this.setTranslateX(e, this.isAnimating),
                        this.dispatchScrollEvent()
                    },
                    setTranslateX: function(e, t) {
                        e += this.cursorPosition,
                        e = this.options.rightToLeft ? -e : e;
                        var i = this.getPositionValue(e);
                        this.slider.style.transform = t ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
                    },
                    dispatchScrollEvent: function() {
                        var e = this.slides[0];
                        if (e) {
                            var t = -this.x - e.target
                              , i = t / this.slidesWidth;
                            this.dispatchEvent("scroll", null, [i, t])
                        }
                    },
                    positionSliderAtSelected: function() {
                        this.cells.length && (this.x = -this.selectedSlide.target,
                        this.velocity = 0,
                        this.positionSlider())
                    },
                    getPositionValue: function(e) {
                        return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
                    },
                    settle: function(e) {
                        !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * e) && this.restingFrames++,
                        this.restingFrames > 2 && (this.isAnimating = !1,
                        delete this.isFreeScrolling,
                        this.positionSlider(),
                        this.dispatchEvent("settle", null, [this.selectedIndex]))
                    },
                    shiftWrapCells: function(e) {
                        var t = this.cursorPosition + e;
                        this._shiftCells(this.beforeShiftCells, t, -1);
                        var i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
                        this._shiftCells(this.afterShiftCells, i, 1)
                    },
                    _shiftCells: function(e, t, i) {
                        for (var n = 0; n < e.length; n++) {
                            var s = e[n]
                              , r = t > 0 ? i : 0;
                            s.wrapShift(r),
                            t -= s.size.outerWidth
                        }
                    },
                    _unshiftCells: function(e) {
                        if (e && e.length)
                            for (var t = 0; t < e.length; t++)
                                e[t].wrapShift(0)
                    },
                    integratePhysics: function() {
                        this.x += this.velocity,
                        this.velocity *= this.getFrictionFactor()
                    },
                    applyForce: function(e) {
                        this.velocity += e
                    },
                    getFrictionFactor: function() {
                        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                    },
                    getRestingPosition: function() {
                        return this.x + this.velocity / (1 - this.getFrictionFactor())
                    },
                    applyDragForce: function() {
                        if (this.isDraggable && this.isPointerDown) {
                            var e = this.dragX - this.x - this.velocity;
                            this.applyForce(e)
                        }
                    },
                    applySelectedAttraction: function() {
                        if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                            var e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                            this.applyForce(e)
                        }
                    }
                };
                return i
            }(0, e)
        }
        .apply(t, n)) || (e.exports = s)
    },
    AYua: function(e, t, i) {
        (function(t) {
            var i;
            i = function() {
                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e
                }
                function i(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                        ))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
                var n = function(e) {
                    var t = {
                        exports: {}
                    };
                    return e(t, t.exports),
                    t.exports
                }((function(e, t) {
                    e.exports = function() {
                        var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
                        function t(e) {
                            var t, i, n = e.replace(/^v/, "").replace(/\+.*$/, ""), s = (i = "-",
                            -1 === (t = n).indexOf(i) ? t.length : t.indexOf(i)), r = n.substring(0, s).split(".");
                            return r.push(n.substring(s + 1)),
                            r
                        }
                        function i(e) {
                            return isNaN(Number(e)) ? e : Number(e)
                        }
                        function n(t) {
                            if ("string" != typeof t)
                                throw new TypeError("Invalid argument expected string");
                            if (!e.test(t))
                                throw new Error("Invalid argument not valid semver ('" + t + "' received)")
                        }
                        function s(e, s) {
                            [e, s].forEach(n);
                            for (var r = t(e), o = t(s), a = 0; a < Math.max(r.length - 1, o.length - 1); a++) {
                                var l = parseInt(r[a] || 0, 10)
                                  , c = parseInt(o[a] || 0, 10);
                                if (l > c)
                                    return 1;
                                if (c > l)
                                    return -1
                            }
                            var h = r[r.length - 1]
                              , u = o[o.length - 1];
                            if (h && u) {
                                var d = h.split(".").map(i)
                                  , p = u.split(".").map(i);
                                for (a = 0; a < Math.max(d.length, p.length); a++) {
                                    if (void 0 === d[a] || "string" == typeof p[a] && "number" == typeof d[a])
                                        return -1;
                                    if (void 0 === p[a] || "string" == typeof d[a] && "number" == typeof p[a])
                                        return 1;
                                    if (d[a] > p[a])
                                        return 1;
                                    if (p[a] > d[a])
                                        return -1
                                }
                            } else if (h || u)
                                return h ? -1 : 1;
                            return 0
                        }
                        var r = [">", ">=", "=", "<", "<="]
                          , o = {
                            ">": [1],
                            ">=": [0, 1],
                            "=": [0],
                            "<=": [-1, 0],
                            "<": [-1]
                        };
                        return s.validate = function(t) {
                            return "string" == typeof t && e.test(t)
                        }
                        ,
                        s.compare = function(e, t, i) {
                            !function(e) {
                                if ("string" != typeof e)
                                    throw new TypeError("Invalid operator type, expected string but got " + typeof e);
                                if (-1 === r.indexOf(e))
                                    throw new TypeError("Invalid operator, expected one of " + r.join("|"))
                            }(i);
                            var n = s(e, t);
                            return o[i].indexOf(n) > -1
                        }
                        ,
                        s
                    }()
                }
                ));
                const s = e=>null == e
                  , r = e=>Object.getPrototypeOf(e) === Object.prototype
                  , o = e=>Array.isArray(e)
                  , a = ()=>!(!navigator.userAgent.includes("Node.js") && !navigator.userAgent.includes("jsdom")) || !!window.Alpine && n.compare(window.Alpine.version, "2.7.0", ">=")
                  , l = (e,t)=>(Object.entries(e).forEach(([i,n])=>{
                    s(n) || !r(n) && !o(n) || (e[i] = l(n, t))
                }
                ),
                new Proxy(e,{
                    get: (e,i,n)=>t.get(e, i, n),
                    set(e, i, n, a) {
                        s(n) || !r(n) && !o(n) || (n = l(n, t));
                        let c = e[i];
                        return e[i] = n,
                        s(c) || s(c.__watchers) || (e[i].__watchers = c.__watchers),
                        t.set(e, i, e[i], a),
                        !0
                    }
                }))
                  , c = {
                    stores: {},
                    persistenceDriver: window.localStorage,
                    persisted: [],
                    persistedDrivers: {},
                    subscribers: [],
                    pendingWatchers: {},
                    disableReactivity: !1,
                    startingCallbacks: [],
                    startedCallbacks: [],
                    hasStarted: !1,
                    start() {
                        this.startingCallbacks.forEach(e=>e()),
                        this.attach(),
                        this.stores = l(this.stores, {
                            get: (e,t,i)=>Object.is(i, this.stores) && ["get", "set", "toggle", "call", "clear"].includes(t) ? this[t].bind(this) : Reflect.get(e, t, i),
                            set: (e,t,i,n)=>{
                                if (!this.disableReactivity) {
                                    this.updateSubscribers(),
                                    this.runWatchers(e, t, i, n),
                                    this.disableReactivity = !0;
                                    try {
                                        this.persisted.forEach(this.updateLocalStorage.bind(this))
                                    } catch (e) {}
                                    this.disableReactivity = !1
                                }
                            }
                        }),
                        this.hasStarted = !0,
                        this.disableReactivity = !0,
                        Object.entries(this.pendingWatchers).forEach(([e,t])=>{
                            t.forEach(t=>this.watch(e, t))
                        }
                        ),
                        this.disableReactivity = !1,
                        this.startedCallbacks.forEach(e=>e())
                    },
                    starting(e) {
                        this.startingCallbacks.push(e)
                    },
                    started(e) {
                        this.startedCallbacks.push(e)
                    },
                    attach() {
                        if (!a())
                            throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");
                        const e = this;
                        window.Alpine.addMagicProperty("store", t=>(e.subscribe(t),
                        e.stores))
                    },
                    store(e, t, i=!1) {
                        "function" == typeof t && (t = t());
                        const n = this.isValidDriver(i);
                        if (!0 === i || n)
                            try {
                                this.stores[e] = this.retrieveFromLocalStorage(e, (e=>{
                                    let t = {};
                                    return Object.entries(e).filter(([e,t])=>"function" == typeof t).forEach(([e,i])=>t[e] = i),
                                    t
                                }
                                )(t), n ? i : void 0),
                                n && (this.persistedDrivers[e] = i),
                                this.persisted.includes(e) || this.persisted.push(e)
                            } catch (e) {}
                        return this.stores[e] || (this.stores[e] = t),
                        this.stores[e]
                    },
                    reset(e, t) {
                        void 0 !== this.stores[e] && (this.stores[e] = t)
                    },
                    delete(e, t=!0) {
                        return void 0 !== this.stores[e] && (delete this.stores[e],
                        t && this.updateSubscribers(),
                        !0)
                    },
                    deleteAll() {
                        const e = Object.keys(this.stores).map(e=>this.delete(e, !1));
                        return this.updateSubscribers(),
                        !e.some(e=>!e)
                    },
                    subscribe(e) {
                        return this.subscribers.includes(e) || this.subscribers.push(e),
                        this.stores
                    },
                    updateSubscribers() {
                        this.subscribers.filter(e=>!!e.__x).forEach(e=>{
                            e.__x.updateElements(e)
                        }
                        )
                    },
                    retrieveFromLocalStorage(e, t={}, i) {
                        let n = this.persistenceDriver;
                        void 0 !== i && (this.guardAgainstInvalidDrivers(i),
                        n = i);
                        const s = n.getItem("__spruce:" + e);
                        if (!s)
                            return null;
                        let r = JSON.parse(s);
                        return "object" == typeof r && (r = Object.assign(t, r),
                        delete r.__watchers,
                        delete r.__key_name),
                        r
                    },
                    updateLocalStorage(t) {
                        const n = function(t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var s = null != arguments[n] ? arguments[n] : {};
                                n % 2 ? i(Object(s), !0).forEach((function(i) {
                                    e(t, i, s[i])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
                                }
                                ))
                            }
                            return t
                        }({}, this.store(t));
                        delete n.__watchers,
                        delete n.__key_name,
                        (this.persistedDrivers[t] || this.persistenceDriver).setItem("__spruce:" + t, JSON.stringify(this.store(t)))
                    },
                    get(e, t=this.stores) {
                        return e.split(".").reduce((e,t)=>e[t], t)
                    },
                    set(e, t, i=this.stores) {
                        return o(e) || (e = e.split(".")),
                        1 === e.length ? i[e[0]] = t : (i[e[0]] || (i[e[0]] = {}),
                        this.set(e.slice(1), t, i[e[0]]))
                    },
                    toggle(e) {
                        return this.set(e, !this.get(e))
                    },
                    call(e, ...t) {
                        return this.get(e)(...t)
                    },
                    clear(e) {
                        return this.persistenceDriver.removeItem("__spruce:" + e)
                    },
                    watch(e, t) {
                        if (!this.hasStarted)
                            return this.pendingWatchers[e] || (this.pendingWatchers[e] = []),
                            this.pendingWatchers[e].push(t),
                            [()=>this.unwatch(e, t)];
                        const i = e.split(".")
                          , n = i.reduce((e,t)=>{
                            const i = e[t];
                            return s(i) || !r(i) && !o(i) ? e : i
                        }
                        , this.stores)
                          , a = Object.is(n, this.get(e)) ? "__self" : i[i.length - 1];
                        return n.hasOwnProperty("__watchers") || Object.defineProperty(n, "__watchers", {
                            enumerable: !1,
                            value: new Map,
                            configurable: !0
                        }),
                        n.__watchers.has(a) || n.__watchers.set(a, new Set),
                        n.__watchers.get(a).add(t),
                        [()=>this.unwatch(e, t)]
                    },
                    unwatch(e, t) {
                        const i = e.split(".")
                          , n = i.reduce((e,t)=>{
                            const i = e[t];
                            return s(i) || !r(i) && !o(i) ? e : i
                        }
                        , this.stores)
                          , a = Object.is(n, this.get(e)) ? "__self" : i[i.length - 1]
                          , l = n.__watchers;
                        l.has(a) && l.get(a).delete(t)
                    },
                    watchers(e) {
                        const t = e.split(".")
                          , i = t.reduce((e,t)=>{
                            const i = e[t];
                            return s(i) || !r(i) && !o(i) ? e : i
                        }
                        , this.stores)
                          , n = Object.is(i, this.get(e)) ? "__self" : t[t.length - 1];
                        return i.__watchers ? i.__watchers.get(n) : {}
                    },
                    runWatchers(e, t, i) {
                        e.__watchers && (e.__watchers.has(t) && e.__watchers.get(t).forEach(e=>e(i)),
                        e.__watchers.has("__self") && e.__watchers.get("__self").forEach(e=>e(i, t)))
                    },
                    persistUsing(e) {
                        this.persisted.length > 0 && console.warn("[Spruce] You have already initialised a persisted store. Changing the driver may cause issues."),
                        this.guardAgainstInvalidDrivers(e),
                        this.persistenceDriver = e
                    },
                    guardAgainstInvalidDrivers(e) {
                        if ("function" != typeof e.getItem)
                            throw new Error("[Spruce] The persistence driver must have a `getItem(key)` method.");
                        if ("function" != typeof e.setItem)
                            throw new Error("[Spruce] The persistence driver must have a `setItem(key, value)` method.");
                        if ("function" != typeof e.removeItem)
                            throw new Error("[Spruce] The persistence driver must have a `removeItem(name)` method.")
                    },
                    isValidDriver(e) {
                        try {
                            this.guardAgainstInvalidDrivers(e)
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }
                };
                window.Spruce = c;
                const h = window.deferLoadingAlpine || function(e) {
                    e()
                }
                ;
                return window.deferLoadingAlpine = function(e) {
                    window.Spruce.start(),
                    h(e)
                }
                ,
                c
            }
            ,
            e.exports = i()
        }
        ).call(this, i("yLpj"))
    },
    Bij1: function(e, t, i) {
        var n, s;
        window,
        n = [i("E4Uq"), i("4PUS"), i("YVj6")],
        void 0 === (s = function(e, t, i) {
            return function(e, t, i, n) {
                "use strict";
                function s(e) {
                    this.parent = e,
                    this._create()
                }
                s.prototype = Object.create(i.prototype),
                s.prototype._create = function() {
                    this.holder = document.createElement("ol"),
                    this.holder.className = "flickity-page-dots",
                    this.dots = [],
                    this.handleClick = this.onClick.bind(this),
                    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                }
                ,
                s.prototype.activate = function() {
                    this.setDots(),
                    this.holder.addEventListener("click", this.handleClick),
                    this.bindStartEvent(this.holder),
                    this.parent.element.appendChild(this.holder)
                }
                ,
                s.prototype.deactivate = function() {
                    this.holder.removeEventListener("click", this.handleClick),
                    this.unbindStartEvent(this.holder),
                    this.parent.element.removeChild(this.holder)
                }
                ,
                s.prototype.setDots = function() {
                    var e = this.parent.slides.length - this.dots.length;
                    e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e)
                }
                ,
                s.prototype.addDots = function(e) {
                    for (var t = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + e, r = n; r < s; r++) {
                        var o = document.createElement("li");
                        o.className = "dot",
                        o.setAttribute("aria-label", "Page dot " + (r + 1)),
                        t.appendChild(o),
                        i.push(o)
                    }
                    this.holder.appendChild(t),
                    this.dots = this.dots.concat(i)
                }
                ,
                s.prototype.removeDots = function(e) {
                    this.dots.splice(this.dots.length - e, e).forEach((function(e) {
                        this.holder.removeChild(e)
                    }
                    ), this)
                }
                ,
                s.prototype.updateSelected = function() {
                    this.selectedDot && (this.selectedDot.className = "dot",
                    this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
                    this.selectedDot.className = "dot is-selected",
                    this.selectedDot.setAttribute("aria-current", "step"))
                }
                ,
                s.prototype.onTap = s.prototype.onClick = function(e) {
                    var t = e.target;
                    if ("LI" == t.nodeName) {
                        this.parent.uiChange();
                        var i = this.dots.indexOf(t);
                        this.parent.select(i)
                    }
                }
                ,
                s.prototype.destroy = function() {
                    this.deactivate(),
                    this.allOff()
                }
                ,
                t.PageDots = s,
                n.extend(t.defaults, {
                    pageDots: !0
                }),
                t.createMethods.push("_createPageDots");
                var r = t.prototype;
                return r._createPageDots = function() {
                    this.options.pageDots && (this.pageDots = new s(this),
                    this.on("activate", this.activatePageDots),
                    this.on("select", this.updateSelectedPageDots),
                    this.on("cellChange", this.updatePageDots),
                    this.on("resize", this.updatePageDots),
                    this.on("deactivate", this.deactivatePageDots))
                }
                ,
                r.activatePageDots = function() {
                    this.pageDots.activate()
                }
                ,
                r.updateSelectedPageDots = function() {
                    this.pageDots.updateSelected()
                }
                ,
                r.updatePageDots = function() {
                    this.pageDots.setDots()
                }
                ,
                r.deactivatePageDots = function() {
                    this.pageDots.deactivate()
                }
                ,
                t.PageDots = s,
                t
            }(0, e, t, i)
        }
        .apply(t, n)) || (e.exports = s)
    },
    CUlp: function(e, t, i) {
        var n, s;
        "undefined" != typeof window && window,
        void 0 === (s = "function" == typeof (n = function() {
            "use strict";
            function e() {}
            var t = e.prototype;
            return t.on = function(e, t) {
                if (e && t) {
                    var i = this._events = this._events || {}
                      , n = i[e] = i[e] || [];
                    return -1 == n.indexOf(t) && n.push(t),
                    this
                }
            }
            ,
            t.once = function(e, t) {
                if (e && t) {
                    this.on(e, t);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[e] = i[e] || {})[t] = !0,
                    this
                }
            }
            ,
            t.off = function(e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    var n = i.indexOf(t);
                    return -1 != n && i.splice(n, 1),
                    this
                }
            }
            ,
            t.emitEvent = function(e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    i = i.slice(0),
                    t = t || [];
                    for (var n = this._onceEvents && this._onceEvents[e], s = 0; s < i.length; s++) {
                        var r = i[s];
                        n && n[r] && (this.off(e, r),
                        delete n[r]),
                        r.apply(this, t)
                    }
                    return this
                }
            }
            ,
            t.allOff = function() {
                delete this._events,
                delete this._onceEvents
            }
            ,
            e
        }
        ) ? n.call(t, i, t, e) : n) || (e.exports = s)
    },
    E4Uq: function(e, t, i) {
        var n, s;
        !function(r, o) {
            n = [i("CUlp"), i("QK1G"), i("YVj6"), i("yNx1"), i("dlLY"), i("AVCV")],
            void 0 === (s = function(e, t, i, n, s, o) {
                return function(e, t, i, n, s, r, o) {
                    "use strict";
                    var a = e.jQuery
                      , l = e.getComputedStyle
                      , c = e.console;
                    function h(e, t) {
                        for (e = n.makeArray(e); e.length; )
                            t.appendChild(e.shift())
                    }
                    var u = 0
                      , d = {};
                    function p(e, t) {
                        var i = n.getQueryElement(e);
                        if (i) {
                            if (this.element = i,
                            this.element.flickityGUID) {
                                var s = d[this.element.flickityGUID];
                                return s && s.option(t),
                                s
                            }
                            a && (this.$element = a(this.element)),
                            this.options = n.extend({}, this.constructor.defaults),
                            this.option(t),
                            this._create()
                        } else
                            c && c.error("Bad element for Flickity: " + (i || e))
                    }
                    p.defaults = {
                        accessibility: !0,
                        cellAlign: "center",
                        freeScrollFriction: .075,
                        friction: .28,
                        namespaceJQueryEvents: !0,
                        percentPosition: !0,
                        resize: !0,
                        selectedAttraction: .025,
                        setGallerySize: !0
                    },
                    p.createMethods = [];
                    var f = p.prototype;
                    n.extend(f, t.prototype),
                    f._create = function() {
                        var t = this.guid = ++u;
                        for (var i in this.element.flickityGUID = t,
                        d[t] = this,
                        this.selectedIndex = 0,
                        this.restingFrames = 0,
                        this.x = 0,
                        this.velocity = 0,
                        this.originSide = this.options.rightToLeft ? "right" : "left",
                        this.viewport = document.createElement("div"),
                        this.viewport.className = "flickity-viewport",
                        this._createSlider(),
                        (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this),
                        this.options.on) {
                            var n = this.options.on[i];
                            this.on(i, n)
                        }
                        p.createMethods.forEach((function(e) {
                            this[e]()
                        }
                        ), this),
                        this.options.watchCSS ? this.watchCSS() : this.activate()
                    }
                    ,
                    f.option = function(e) {
                        n.extend(this.options, e)
                    }
                    ,
                    f.activate = function() {
                        this.isActive || (this.isActive = !0,
                        this.element.classList.add("flickity-enabled"),
                        this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
                        this.getSize(),
                        h(this._filterFindCellElements(this.element.children), this.slider),
                        this.viewport.appendChild(this.slider),
                        this.element.appendChild(this.viewport),
                        this.reloadCells(),
                        this.options.accessibility && (this.element.tabIndex = 0,
                        this.element.addEventListener("keydown", this)),
                        this.emitEvent("activate"),
                        this.selectInitialIndex(),
                        this.isInitActivated = !0,
                        this.dispatchEvent("ready"))
                    }
                    ,
                    f._createSlider = function() {
                        var e = document.createElement("div");
                        e.className = "flickity-slider",
                        e.style[this.originSide] = 0,
                        this.slider = e
                    }
                    ,
                    f._filterFindCellElements = function(e) {
                        return n.filterFindElements(e, this.options.cellSelector)
                    }
                    ,
                    f.reloadCells = function() {
                        this.cells = this._makeCells(this.slider.children),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize()
                    }
                    ,
                    f._makeCells = function(e) {
                        return this._filterFindCellElements(e).map((function(e) {
                            return new s(e,this)
                        }
                        ), this)
                    }
                    ,
                    f.getLastCell = function() {
                        return this.cells[this.cells.length - 1]
                    }
                    ,
                    f.getLastSlide = function() {
                        return this.slides[this.slides.length - 1]
                    }
                    ,
                    f.positionCells = function() {
                        this._sizeCells(this.cells),
                        this._positionCells(0)
                    }
                    ,
                    f._positionCells = function(e) {
                        e = e || 0,
                        this.maxCellHeight = e && this.maxCellHeight || 0;
                        var t = 0;
                        if (e > 0) {
                            var i = this.cells[e - 1];
                            t = i.x + i.size.outerWidth
                        }
                        for (var n = this.cells.length, s = e; s < n; s++) {
                            var r = this.cells[s];
                            r.setPosition(t),
                            t += r.size.outerWidth,
                            this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
                        }
                        this.slideableWidth = t,
                        this.updateSlides(),
                        this._containSlides(),
                        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
                    }
                    ,
                    f._sizeCells = function(e) {
                        e.forEach((function(e) {
                            e.getSize()
                        }
                        ))
                    }
                    ,
                    f.updateSlides = function() {
                        if (this.slides = [],
                        this.cells.length) {
                            var e = new r(this);
                            this.slides.push(e);
                            var t = "left" == this.originSide ? "marginRight" : "marginLeft"
                              , i = this._getCanCellFit();
                            this.cells.forEach((function(n, s) {
                                if (e.cells.length) {
                                    var o = e.outerWidth - e.firstMargin + (n.size.outerWidth - n.size[t]);
                                    i.call(this, s, o) || (e.updateTarget(),
                                    e = new r(this),
                                    this.slides.push(e)),
                                    e.addCell(n)
                                } else
                                    e.addCell(n)
                            }
                            ), this),
                            e.updateTarget(),
                            this.updateSelectedSlide()
                        }
                    }
                    ,
                    f._getCanCellFit = function() {
                        var e = this.options.groupCells;
                        if (!e)
                            return function() {
                                return !1
                            }
                            ;
                        if ("number" == typeof e) {
                            var t = parseInt(e, 10);
                            return function(e) {
                                return e % t != 0
                            }
                        }
                        var i = "string" == typeof e && e.match(/^(\d+)%$/)
                          , n = i ? parseInt(i[1], 10) / 100 : 1;
                        return function(e, t) {
                            return t <= (this.size.innerWidth + 1) * n
                        }
                    }
                    ,
                    f._init = f.reposition = function() {
                        this.positionCells(),
                        this.positionSliderAtSelected()
                    }
                    ,
                    f.getSize = function() {
                        this.size = i(this.element),
                        this.setCellAlign(),
                        this.cursorPosition = this.size.innerWidth * this.cellAlign
                    }
                    ;
                    var m = {
                        center: {
                            left: .5,
                            right: .5
                        },
                        left: {
                            left: 0,
                            right: 1
                        },
                        right: {
                            right: 0,
                            left: 1
                        }
                    };
                    f.setCellAlign = function() {
                        var e = m[this.options.cellAlign];
                        this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
                    }
                    ,
                    f.setGallerySize = function() {
                        if (this.options.setGallerySize) {
                            var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                            this.viewport.style.height = e + "px"
                        }
                    }
                    ,
                    f._getWrapShiftCells = function() {
                        if (this.options.wrapAround) {
                            this._unshiftCells(this.beforeShiftCells),
                            this._unshiftCells(this.afterShiftCells);
                            var e = this.cursorPosition
                              , t = this.cells.length - 1;
                            this.beforeShiftCells = this._getGapCells(e, t, -1),
                            e = this.size.innerWidth - this.cursorPosition,
                            this.afterShiftCells = this._getGapCells(e, 0, 1)
                        }
                    }
                    ,
                    f._getGapCells = function(e, t, i) {
                        for (var n = []; e > 0; ) {
                            var s = this.cells[t];
                            if (!s)
                                break;
                            n.push(s),
                            t += i,
                            e -= s.size.outerWidth
                        }
                        return n
                    }
                    ,
                    f._containSlides = function() {
                        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                            var e = this.options.rightToLeft
                              , t = e ? "marginRight" : "marginLeft"
                              , i = e ? "marginLeft" : "marginRight"
                              , n = this.slideableWidth - this.getLastCell().size[i]
                              , s = n < this.size.innerWidth
                              , r = this.cursorPosition + this.cells[0].size[t]
                              , o = n - this.size.innerWidth * (1 - this.cellAlign);
                            this.slides.forEach((function(e) {
                                s ? e.target = n * this.cellAlign : (e.target = Math.max(e.target, r),
                                e.target = Math.min(e.target, o))
                            }
                            ), this)
                        }
                    }
                    ,
                    f.dispatchEvent = function(e, t, i) {
                        var n = t ? [t].concat(i) : i;
                        if (this.emitEvent(e, n),
                        a && this.$element) {
                            var s = e += this.options.namespaceJQueryEvents ? ".flickity" : "";
                            if (t) {
                                var r = new a.Event(t);
                                r.type = e,
                                s = r
                            }
                            this.$element.trigger(s, i)
                        }
                    }
                    ,
                    f.select = function(e, t, i) {
                        if (this.isActive && (e = parseInt(e, 10),
                        this._wrapSelect(e),
                        (this.options.wrapAround || t) && (e = n.modulo(e, this.slides.length)),
                        this.slides[e])) {
                            var s = this.selectedIndex;
                            this.selectedIndex = e,
                            this.updateSelectedSlide(),
                            i ? this.positionSliderAtSelected() : this.startAnimation(),
                            this.options.adaptiveHeight && this.setGallerySize(),
                            this.dispatchEvent("select", null, [e]),
                            e != s && this.dispatchEvent("change", null, [e]),
                            this.dispatchEvent("cellSelect")
                        }
                    }
                    ,
                    f._wrapSelect = function(e) {
                        var t = this.slides.length;
                        if (!(this.options.wrapAround && t > 1))
                            return e;
                        var i = n.modulo(e, t)
                          , s = Math.abs(i - this.selectedIndex)
                          , r = Math.abs(i + t - this.selectedIndex)
                          , o = Math.abs(i - t - this.selectedIndex);
                        !this.isDragSelect && r < s ? e += t : !this.isDragSelect && o < s && (e -= t),
                        e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth)
                    }
                    ,
                    f.previous = function(e, t) {
                        this.select(this.selectedIndex - 1, e, t)
                    }
                    ,
                    f.next = function(e, t) {
                        this.select(this.selectedIndex + 1, e, t)
                    }
                    ,
                    f.updateSelectedSlide = function() {
                        var e = this.slides[this.selectedIndex];
                        e && (this.unselectSelectedSlide(),
                        this.selectedSlide = e,
                        e.select(),
                        this.selectedCells = e.cells,
                        this.selectedElements = e.getCellElements(),
                        this.selectedCell = e.cells[0],
                        this.selectedElement = this.selectedElements[0])
                    }
                    ,
                    f.unselectSelectedSlide = function() {
                        this.selectedSlide && this.selectedSlide.unselect()
                    }
                    ,
                    f.selectInitialIndex = function() {
                        var e = this.options.initialIndex;
                        if (this.isInitActivated)
                            this.select(this.selectedIndex, !1, !0);
                        else {
                            if (e && "string" == typeof e)
                                if (this.queryCell(e))
                                    return void this.selectCell(e, !1, !0);
                            var t = 0;
                            e && this.slides[e] && (t = e),
                            this.select(t, !1, !0)
                        }
                    }
                    ,
                    f.selectCell = function(e, t, i) {
                        var n = this.queryCell(e);
                        if (n) {
                            var s = this.getCellSlideIndex(n);
                            this.select(s, t, i)
                        }
                    }
                    ,
                    f.getCellSlideIndex = function(e) {
                        for (var t = 0; t < this.slides.length; t++) {
                            if (-1 != this.slides[t].cells.indexOf(e))
                                return t
                        }
                    }
                    ,
                    f.getCell = function(e) {
                        for (var t = 0; t < this.cells.length; t++) {
                            var i = this.cells[t];
                            if (i.element == e)
                                return i
                        }
                    }
                    ,
                    f.getCells = function(e) {
                        e = n.makeArray(e);
                        var t = [];
                        return e.forEach((function(e) {
                            var i = this.getCell(e);
                            i && t.push(i)
                        }
                        ), this),
                        t
                    }
                    ,
                    f.getCellElements = function() {
                        return this.cells.map((function(e) {
                            return e.element
                        }
                        ))
                    }
                    ,
                    f.getParentCell = function(e) {
                        var t = this.getCell(e);
                        return t || (e = n.getParent(e, ".flickity-slider > *"),
                        this.getCell(e))
                    }
                    ,
                    f.getAdjacentCellElements = function(e, t) {
                        if (!e)
                            return this.selectedSlide.getCellElements();
                        t = void 0 === t ? this.selectedIndex : t;
                        var i = this.slides.length;
                        if (1 + 2 * e >= i)
                            return this.getCellElements();
                        for (var s = [], r = t - e; r <= t + e; r++) {
                            var o = this.options.wrapAround ? n.modulo(r, i) : r
                              , a = this.slides[o];
                            a && (s = s.concat(a.getCellElements()))
                        }
                        return s
                    }
                    ,
                    f.queryCell = function(e) {
                        if ("number" == typeof e)
                            return this.cells[e];
                        if ("string" == typeof e) {
                            if (e.match(/^[#.]?[\d/]/))
                                return;
                            e = this.element.querySelector(e)
                        }
                        return this.getCell(e)
                    }
                    ,
                    f.uiChange = function() {
                        this.emitEvent("uiChange")
                    }
                    ,
                    f.childUIPointerDown = function(e) {
                        "touchstart" != e.type && e.preventDefault(),
                        this.focus()
                    }
                    ,
                    f.onresize = function() {
                        this.watchCSS(),
                        this.resize()
                    }
                    ,
                    n.debounceMethod(p, "onresize", 150),
                    f.resize = function() {
                        if (this.isActive) {
                            this.getSize(),
                            this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
                            this.positionCells(),
                            this._getWrapShiftCells(),
                            this.setGallerySize(),
                            this.emitEvent("resize");
                            var e = this.selectedElements && this.selectedElements[0];
                            this.selectCell(e, !1, !0)
                        }
                    }
                    ,
                    f.watchCSS = function() {
                        this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                    }
                    ,
                    f.onkeydown = function(e) {
                        var t = document.activeElement && document.activeElement != this.element;
                        if (this.options.accessibility && !t) {
                            var i = p.keyboardHandlers[e.keyCode];
                            i && i.call(this)
                        }
                    }
                    ,
                    p.keyboardHandlers = {
                        37: function() {
                            var e = this.options.rightToLeft ? "next" : "previous";
                            this.uiChange(),
                            this[e]()
                        },
                        39: function() {
                            var e = this.options.rightToLeft ? "previous" : "next";
                            this.uiChange(),
                            this[e]()
                        }
                    },
                    f.focus = function() {
                        var t = e.pageYOffset;
                        this.element.focus({
                            preventScroll: !0
                        }),
                        e.pageYOffset != t && e.scrollTo(e.pageXOffset, t)
                    }
                    ,
                    f.deactivate = function() {
                        this.isActive && (this.element.classList.remove("flickity-enabled"),
                        this.element.classList.remove("flickity-rtl"),
                        this.unselectSelectedSlide(),
                        this.cells.forEach((function(e) {
                            e.destroy()
                        }
                        )),
                        this.element.removeChild(this.viewport),
                        h(this.slider.children, this.element),
                        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
                        this.element.removeEventListener("keydown", this)),
                        this.isActive = !1,
                        this.emitEvent("deactivate"))
                    }
                    ,
                    f.destroy = function() {
                        this.deactivate(),
                        e.removeEventListener("resize", this),
                        this.allOff(),
                        this.emitEvent("destroy"),
                        a && this.$element && a.removeData(this.element, "flickity"),
                        delete this.element.flickityGUID,
                        delete d[this.guid]
                    }
                    ,
                    n.extend(f, o),
                    p.data = function(e) {
                        var t = (e = n.getQueryElement(e)) && e.flickityGUID;
                        return t && d[t]
                    }
                    ,
                    n.htmlInit(p, "flickity"),
                    a && a.bridget && a.bridget("flickity", p);
                    return p.setJQuery = function(e) {
                        a = e
                    }
                    ,
                    p.Cell = s,
                    p.Slide = r,
                    p
                }(r, e, t, i, n, s, o)
            }
            .apply(t, n)) || (e.exports = s)
        }(window)
    },
    H6pT: function(e, t) {},
    IXsZ: function(e, t, i) {
        var n, s, r;
        window,
        s = [i("E4Uq"), i("SWQu"), i("z7b9"), i("Bij1"), i("sYrE"), i("vXzw"), i("ihW+")],
        void 0 === (r = "function" == typeof (n = function(e) {
            return e
        }
        ) ? n.apply(t, s) : n) || (e.exports = r)
    },
    Jgmz: function(e, t, i) {
        "use strict";
        const n = {
            start() {
                if (!window.Alpine)
                    throw new Error("Alpine is required for `alpine-clipboard` to work.");
                Alpine.addMagicProperty("clipboard", ()=>function(e) {
                    return "function" == typeof e && (e = e()),
                    window.navigator.clipboard.writeText(e)
                }
                )
            }
        }
          , s = window.deferLoadingAlpine || (e=>e());
        window.deferLoadingAlpine = function(e) {
            n.start(),
            s(e)
        }
    },
    QK1G: function(e, t, i) {
        var n, s;
        window,
        void 0 === (s = "function" == typeof (n = function() {
            "use strict";
            function e(e) {
                var t = parseFloat(e);
                return -1 == e.indexOf("%") && !isNaN(t) && t
            }
            var t = "undefined" == typeof console ? function() {}
            : function(e) {
                console.error(e)
            }
              , i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
              , n = i.length;
            function s(e) {
                var i = getComputedStyle(e);
                return i || t("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
                i
            }
            var r, o = !1;
            function a(t) {
                if (function() {
                    if (!o) {
                        o = !0;
                        var t = document.createElement("div");
                        t.style.width = "200px",
                        t.style.padding = "1px 2px 3px 4px",
                        t.style.borderStyle = "solid",
                        t.style.borderWidth = "1px 2px 3px 4px",
                        t.style.boxSizing = "border-box";
                        var i = document.body || document.documentElement;
                        i.appendChild(t);
                        var n = s(t);
                        r = 200 == Math.round(e(n.width)),
                        a.isBoxSizeOuter = r,
                        i.removeChild(t)
                    }
                }(),
                "string" == typeof t && (t = document.querySelector(t)),
                t && "object" == typeof t && t.nodeType) {
                    var l = s(t);
                    if ("none" == l.display)
                        return function() {
                            for (var e = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, t = 0; t < n; t++)
                                e[i[t]] = 0;
                            return e
                        }();
                    var c = {};
                    c.width = t.offsetWidth,
                    c.height = t.offsetHeight;
                    for (var h = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < n; u++) {
                        var d = i[u]
                          , p = l[d]
                          , f = parseFloat(p);
                        c[d] = isNaN(f) ? 0 : f
                    }
                    var m = c.paddingLeft + c.paddingRight
                      , g = c.paddingTop + c.paddingBottom
                      , y = c.marginLeft + c.marginRight
                      , v = c.marginTop + c.marginBottom
                      , b = c.borderLeftWidth + c.borderRightWidth
                      , w = c.borderTopWidth + c.borderBottomWidth
                      , T = h && r
                      , E = e(l.width);
                    !1 !== E && (c.width = E + (T ? 0 : m + b));
                    var k = e(l.height);
                    return !1 !== k && (c.height = k + (T ? 0 : g + w)),
                    c.innerWidth = c.width - (m + b),
                    c.innerHeight = c.height - (g + w),
                    c.outerWidth = c.width + y,
                    c.outerHeight = c.height + v,
                    c
                }
            }
            return a
        }
        ) ? n.call(t, i, t, e) : n) || (e.exports = s)
    },
    SWQu: function(e, t, i) {
        var n, s;
        !function(r, o) {
            n = [i("E4Uq"), i("72Lm"), i("YVj6")],
            void 0 === (s = function(e, t, i) {
                return function(e, t, i, n) {
                    "use strict";
                    n.extend(t.defaults, {
                        draggable: ">1",
                        dragThreshold: 3
                    }),
                    t.createMethods.push("_createDrag");
                    var s = t.prototype;
                    n.extend(s, i.prototype),
                    s._touchActionValue = "pan-y";
                    var r = "createTouch"in document
                      , o = !1;
                    s._createDrag = function() {
                        this.on("activate", this.onActivateDrag),
                        this.on("uiChange", this._uiChangeDrag),
                        this.on("deactivate", this.onDeactivateDrag),
                        this.on("cellChange", this.updateDraggable),
                        r && !o && (e.addEventListener("touchmove", (function() {}
                        )),
                        o = !0)
                    }
                    ,
                    s.onActivateDrag = function() {
                        this.handles = [this.viewport],
                        this.bindHandles(),
                        this.updateDraggable()
                    }
                    ,
                    s.onDeactivateDrag = function() {
                        this.unbindHandles(),
                        this.element.classList.remove("is-draggable")
                    }
                    ,
                    s.updateDraggable = function() {
                        ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
                        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                    }
                    ,
                    s.bindDrag = function() {
                        this.options.draggable = !0,
                        this.updateDraggable()
                    }
                    ,
                    s.unbindDrag = function() {
                        this.options.draggable = !1,
                        this.updateDraggable()
                    }
                    ,
                    s._uiChangeDrag = function() {
                        delete this.isFreeScrolling
                    }
                    ,
                    s.pointerDown = function(t, i) {
                        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t),
                        this.pointerDownFocus(t),
                        document.activeElement != this.element && this.pointerDownBlur(),
                        this.dragX = this.x,
                        this.viewport.classList.add("is-pointer-down"),
                        this.pointerDownScroll = l(),
                        e.addEventListener("scroll", this),
                        this._pointerDownDefault(t, i)) : this._pointerDownDefault(t, i)
                    }
                    ,
                    s._pointerDownDefault = function(e, t) {
                        this.pointerDownPointer = {
                            pageX: t.pageX,
                            pageY: t.pageY
                        },
                        this._bindPostStartEvents(e),
                        this.dispatchEvent("pointerDown", e, [t])
                    }
                    ;
                    var a = {
                        INPUT: !0,
                        TEXTAREA: !0,
                        SELECT: !0
                    };
                    function l() {
                        return {
                            x: e.pageXOffset,
                            y: e.pageYOffset
                        }
                    }
                    return s.pointerDownFocus = function(e) {
                        a[e.target.nodeName] || this.focus()
                    }
                    ,
                    s._pointerDownPreventDefault = function(e) {
                        var t = "touchstart" == e.type
                          , i = "touch" == e.pointerType
                          , n = a[e.target.nodeName];
                        t || i || n || e.preventDefault()
                    }
                    ,
                    s.hasDragStarted = function(e) {
                        return Math.abs(e.x) > this.options.dragThreshold
                    }
                    ,
                    s.pointerUp = function(e, t) {
                        delete this.isTouchScrolling,
                        this.viewport.classList.remove("is-pointer-down"),
                        this.dispatchEvent("pointerUp", e, [t]),
                        this._dragPointerUp(e, t)
                    }
                    ,
                    s.pointerDone = function() {
                        e.removeEventListener("scroll", this),
                        delete this.pointerDownScroll
                    }
                    ,
                    s.dragStart = function(t, i) {
                        this.isDraggable && (this.dragStartPosition = this.x,
                        this.startAnimation(),
                        e.removeEventListener("scroll", this),
                        this.dispatchEvent("dragStart", t, [i]))
                    }
                    ,
                    s.pointerMove = function(e, t) {
                        var i = this._dragPointerMove(e, t);
                        this.dispatchEvent("pointerMove", e, [t, i]),
                        this._dragMove(e, t, i)
                    }
                    ,
                    s.dragMove = function(e, t, i) {
                        if (this.isDraggable) {
                            e.preventDefault(),
                            this.previousDragX = this.dragX;
                            var n = this.options.rightToLeft ? -1 : 1;
                            this.options.wrapAround && (i.x %= this.slideableWidth);
                            var s = this.dragStartPosition + i.x * n;
                            if (!this.options.wrapAround && this.slides.length) {
                                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                                s = s > r ? .5 * (s + r) : s;
                                var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                                s = s < o ? .5 * (s + o) : s
                            }
                            this.dragX = s,
                            this.dragMoveTime = new Date,
                            this.dispatchEvent("dragMove", e, [t, i])
                        }
                    }
                    ,
                    s.dragEnd = function(e, t) {
                        if (this.isDraggable) {
                            this.options.freeScroll && (this.isFreeScrolling = !0);
                            var i = this.dragEndRestingSelect();
                            if (this.options.freeScroll && !this.options.wrapAround) {
                                var n = this.getRestingPosition();
                                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                            } else
                                this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                            delete this.previousDragX,
                            this.isDragSelect = this.options.wrapAround,
                            this.select(i),
                            delete this.isDragSelect,
                            this.dispatchEvent("dragEnd", e, [t])
                        }
                    }
                    ,
                    s.dragEndRestingSelect = function() {
                        var e = this.getRestingPosition()
                          , t = Math.abs(this.getSlideDistance(-e, this.selectedIndex))
                          , i = this._getClosestResting(e, t, 1)
                          , n = this._getClosestResting(e, t, -1);
                        return i.distance < n.distance ? i.index : n.index
                    }
                    ,
                    s._getClosestResting = function(e, t, i) {
                        for (var n = this.selectedIndex, s = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) {
                            return e <= t
                        }
                        : function(e, t) {
                            return e < t
                        }
                        ; r(t, s) && (n += i,
                        s = t,
                        null !== (t = this.getSlideDistance(-e, n))); )
                            t = Math.abs(t);
                        return {
                            distance: s,
                            index: n - i
                        }
                    }
                    ,
                    s.getSlideDistance = function(e, t) {
                        var i = this.slides.length
                          , s = this.options.wrapAround && i > 1
                          , r = s ? n.modulo(t, i) : t
                          , o = this.slides[r];
                        if (!o)
                            return null;
                        var a = s ? this.slideableWidth * Math.floor(t / i) : 0;
                        return e - (o.target + a)
                    }
                    ,
                    s.dragEndBoostSelect = function() {
                        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
                            return 0;
                        var e = this.getSlideDistance(-this.dragX, this.selectedIndex)
                          , t = this.previousDragX - this.dragX;
                        return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0
                    }
                    ,
                    s.staticClick = function(e, t) {
                        var i = this.getParentCell(e.target)
                          , n = i && i.element
                          , s = i && this.cells.indexOf(i);
                        this.dispatchEvent("staticClick", e, [t, n, s])
                    }
                    ,
                    s.onscroll = function() {
                        var e = l()
                          , t = this.pointerDownScroll.x - e.x
                          , i = this.pointerDownScroll.y - e.y;
                        (Math.abs(t) > 3 || Math.abs(i) > 3) && this._pointerDone()
                    }
                    ,
                    t
                }(r, e, t, i)
            }
            .apply(t, n)) || (e.exports = s)
        }(window)
    },
    T7iU: function(e, t, i) {
        (function(t) {
            "object" == typeof navigator && (e.exports = function() {
                "use strict";
                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e
                }
                function i(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                function n(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e
                }
                function s(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                        ))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(i), !0).forEach((function(t) {
                            n(e, t, i[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }
                        ))
                    }
                    return e
                }
                var o = {
                    addCSS: !0,
                    thumbWidth: 15,
                    watch: !0
                };
                function a(e, t) {
                    return function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }
                    .call(e, t)
                }
                var l = function(e) {
                    return null != e ? e.constructor : null
                }
                  , c = function(e, t) {
                    return !!(e && t && e instanceof t)
                }
                  , h = function(e) {
                    return l(e) === String
                }
                  , u = function(e) {
                    return Array.isArray(e)
                }
                  , d = function(e) {
                    return c(e, NodeList)
                }
                  , p = h
                  , f = u
                  , m = d
                  , g = function(e) {
                    return c(e, Element)
                }
                  , y = function(e) {
                    return c(e, Event)
                }
                  , v = function(e) {
                    return function(e) {
                        return null == e
                    }(e) || (h(e) || u(e) || d(e)) && !e.length || function(e) {
                        return l(e) === Object
                    }(e) && !Object.keys(e).length
                }
                  , b = function() {
                    function e(t, i) {
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        )(this, e),
                        g(t) ? this.element = t : p(t) && (this.element = document.querySelector(t)),
                        g(this.element) && v(this.element.rangeTouch) && (this.config = r({}, o, {}, i),
                        this.init())
                    }
                    return function(e, t, n) {
                        t && i(e.prototype, t),
                        n && i(e, n)
                    }(e, [{
                        key: "init",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none",
                            this.element.style.webKitUserSelect = "none",
                            this.element.style.touchAction = "manipulation"),
                            this.listeners(!0),
                            this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "",
                            this.element.style.webKitUserSelect = "",
                            this.element.style.touchAction = ""),
                            this.listeners(!1),
                            this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners",
                        value: function(e) {
                            var t = this
                              , i = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                                t.element[i](e, (function(e) {
                                    return t.set(e)
                                }
                                ), !1)
                            }
                            ))
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            if (!e.enabled || !y(t))
                                return null;
                            var i, n = t.target, s = t.changedTouches[0], r = parseFloat(n.getAttribute("min")) || 0, o = parseFloat(n.getAttribute("max")) || 100, a = parseFloat(n.getAttribute("step")) || 1, l = n.getBoundingClientRect(), c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (i = 100 / l.width * (s.clientX - l.left)) ? i = 0 : 100 < i && (i = 100),
                            50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c),
                            r + function(e, t) {
                                if (1 > t) {
                                    var i = function(e) {
                                        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                                    }(t);
                                    return parseFloat(e.toFixed(i))
                                }
                                return Math.round(e / t) * t
                            }(i / 100 * (o - r), a)
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            e.enabled && y(t) && !t.target.disabled && (t.preventDefault(),
                            t.target.value = this.get(t),
                            function(e, t) {
                                if (e && t) {
                                    var i = new Event(t,{
                                        bubbles: !0
                                    });
                                    e.dispatchEvent(i)
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup",
                        value: function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                              , n = null;
                            if (v(t) || p(t) ? n = Array.from(document.querySelectorAll(p(t) ? t : 'input[type="range"]')) : g(t) ? n = [t] : m(t) ? n = Array.from(t) : f(t) && (n = t.filter(g)),
                            v(n))
                                return null;
                            var s = r({}, o, {}, i);
                            if (p(t) && s.watch) {
                                var l = new MutationObserver((function(i) {
                                    Array.from(i).forEach((function(i) {
                                        Array.from(i.addedNodes).forEach((function(i) {
                                            g(i) && a(i, t) && new e(i,s)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ));
                                l.observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }
                            return n.map((function(t) {
                                return new e(t,i)
                            }
                            ))
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return "ontouchstart"in document.documentElement
                        }
                    }]),
                    e
                }();
                const w = e=>null != e ? e.constructor : null
                  , T = (e,t)=>Boolean(e && t && e instanceof t)
                  , E = e=>null == e
                  , k = e=>w(e) === Object
                  , S = e=>w(e) === String
                  , C = e=>w(e) === Function
                  , A = e=>Array.isArray(e)
                  , x = e=>T(e, NodeList)
                  , P = e=>E(e) || (S(e) || A(e) || x(e)) && !e.length || k(e) && !Object.keys(e).length;
                var _ = E
                  , L = k
                  , D = e=>w(e) === Number && !Number.isNaN(e)
                  , M = S
                  , O = e=>w(e) === Boolean
                  , N = C
                  , I = A
                  , j = x
                  , R = e=>null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                  , q = e=>T(e, Event)
                  , F = e=>T(e, KeyboardEvent)
                  , z = e=>T(e, TextTrack) || !E(e) && S(e.kind)
                  , H = e=>{
                    if (T(e, window.URL))
                        return !0;
                    if (!S(e))
                        return !1;
                    let t = e;
                    e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
                    try {
                        return !P(new URL(t).hostname)
                    } catch (e) {
                        return !1
                    }
                }
                  , B = P;
                const U = (()=>{
                    const e = document.createElement("span")
                      , t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }
                      , i = Object.keys(t).find(t=>void 0 !== e.style[t]);
                    return !!M(i) && t[i]
                }
                )();
                function V(e, t) {
                    setTimeout(()=>{
                        try {
                            e.hidden = !0,
                            e.offsetHeight,
                            e.hidden = !1
                        } catch (e) {}
                    }
                    , t)
                }
                const W = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: window.navigator.userAgent.includes("Edge"),
                    isWebkit: "WebkitAppearance"in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                };
                function $(e, t) {
                    return t.split(".").reduce((e,t)=>e && e[t], e)
                }
                function Y(e={}, ...t) {
                    if (!t.length)
                        return e;
                    const i = t.shift();
                    return L(i) ? (Object.keys(i).forEach(t=>{
                        L(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                            [t]: {}
                        }),
                        Y(e[t], i[t])) : Object.assign(e, {
                            [t]: i[t]
                        })
                    }
                    ),
                    Y(e, ...t)) : e
                }
                function X(e, t) {
                    const i = e.length ? e : [e];
                    Array.from(i).reverse().forEach((e,i)=>{
                        const n = i > 0 ? t.cloneNode(!0) : t
                          , s = e.parentNode
                          , r = e.nextSibling;
                        n.appendChild(e),
                        r ? s.insertBefore(n, r) : s.appendChild(n)
                    }
                    )
                }
                function K(e, t) {
                    R(e) && !B(t) && Object.entries(t).filter(([,e])=>!_(e)).forEach(([t,i])=>e.setAttribute(t, i))
                }
                function G(e, t, i) {
                    const n = document.createElement(e);
                    return L(t) && K(n, t),
                    M(i) && (n.innerText = i),
                    n
                }
                function J(e, t, i, n) {
                    R(t) && t.appendChild(G(e, i, n))
                }
                function Q(e) {
                    j(e) || I(e) ? Array.from(e).forEach(Q) : R(e) && R(e.parentNode) && e.parentNode.removeChild(e)
                }
                function Z(e) {
                    if (!R(e))
                        return;
                    let {length: t} = e.childNodes;
                    for (; t > 0; )
                        e.removeChild(e.lastChild),
                        t -= 1
                }
                function ee(e, t) {
                    return R(t) && R(t.parentNode) && R(e) ? (t.parentNode.replaceChild(e, t),
                    e) : null
                }
                function te(e, t) {
                    if (!M(e) || B(e))
                        return {};
                    const i = {}
                      , n = Y({}, t);
                    return e.split(",").forEach(e=>{
                        const t = e.trim()
                          , s = t.replace(".", "")
                          , r = t.replace(/[[\]]/g, "").split("=")
                          , [o] = r
                          , a = r.length > 1 ? r[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                        case ".":
                            M(n.class) ? i.class = `${n.class} ${s}` : i.class = s;
                            break;
                        case "#":
                            i.id = t.replace("#", "");
                            break;
                        case "[":
                            i[o] = a
                        }
                    }
                    ),
                    Y(n, i)
                }
                function ie(e, t) {
                    if (!R(e))
                        return;
                    let i = t;
                    O(i) || (i = !e.hidden),
                    e.hidden = i
                }
                function ne(e, t, i) {
                    if (j(e))
                        return Array.from(e).map(e=>ne(e, t, i));
                    if (R(e)) {
                        let n = "toggle";
                        return void 0 !== i && (n = i ? "add" : "remove"),
                        e.classList[n](t),
                        e.classList.contains(t)
                    }
                    return !1
                }
                function se(e, t) {
                    return R(e) && e.classList.contains(t)
                }
                function re(e, t) {
                    const {prototype: i} = Element;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }
                    ).call(e, t)
                }
                function oe(e) {
                    return this.elements.container.querySelectorAll(e)
                }
                function ae(e) {
                    return this.elements.container.querySelector(e)
                }
                function le(e=null, t=!1) {
                    R(e) && (e.focus({
                        preventScroll: !0
                    }),
                    t && ne(e, this.config.classNames.tabFocus))
                }
                const ce = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                }
                  , he = {
                    audio: "canPlayType"in document.createElement("audio"),
                    video: "canPlayType"in document.createElement("video"),
                    check(e, t, i) {
                        const n = W.isIPhone && i && he.playsinline
                          , s = he[e] || "html5" !== t;
                        return {
                            api: s,
                            ui: s && he.rangeInput && ("video" !== e || !W.isIPhone || n)
                        }
                    },
                    pip: !(W.isIPhone || !N(G("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || G("video").disablePictureInPicture)),
                    airplay: N(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline"in document.createElement("video"),
                    mime(e) {
                        if (B(e))
                            return !1;
                        const [t] = e.split("/");
                        let i = e;
                        if (!this.isHTML5 || t !== this.type)
                            return !1;
                        Object.keys(ce).includes(i) && (i += `; codecs="${ce[e]}"`);
                        try {
                            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                        } catch (e) {
                            return !1
                        }
                    },
                    textTracks: "textTracks"in document.createElement("video"),
                    rangeInput: (()=>{
                        const e = document.createElement("input");
                        return e.type = "range",
                        "range" === e.type
                    }
                    )(),
                    touch: "ontouchstart"in document.documentElement,
                    transitions: !1 !== U,
                    reducedMotion: "matchMedia"in window && window.matchMedia("(prefers-reduced-motion)").matches
                }
                  , ue = (()=>{
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {
                            get: ()=>(e = !0,
                            null)
                        });
                        window.addEventListener("test", null, t),
                        window.removeEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }
                )();
                function de(e, t, i, n=!1, s=!0, r=!1) {
                    if (!e || !("addEventListener"in e) || B(t) || !N(i))
                        return;
                    const o = t.split(" ");
                    let a = r;
                    ue && (a = {
                        passive: s,
                        capture: r
                    }),
                    o.forEach(t=>{
                        this && this.eventListeners && n && this.eventListeners.push({
                            element: e,
                            type: t,
                            callback: i,
                            options: a
                        }),
                        e[n ? "addEventListener" : "removeEventListener"](t, i, a)
                    }
                    )
                }
                function pe(e, t="", i, n=!0, s=!1) {
                    de.call(this, e, t, i, !0, n, s)
                }
                function fe(e, t="", i, n=!0, s=!1) {
                    de.call(this, e, t, i, !1, n, s)
                }
                function me(e, t="", i, n=!0, s=!1) {
                    const r = (...o)=>{
                        fe(e, t, r, n, s),
                        i.apply(this, o)
                    }
                    ;
                    de.call(this, e, t, r, !0, n, s)
                }
                function ge(e, t="", i=!1, n={}) {
                    if (!R(e) || B(t))
                        return;
                    const s = new CustomEvent(t,{
                        bubbles: i,
                        detail: {
                            ...n,
                            plyr: this
                        }
                    });
                    e.dispatchEvent(s)
                }
                function ye() {
                    this && this.eventListeners && (this.eventListeners.forEach(e=>{
                        const {element: t, type: i, callback: n, options: s} = e;
                        t.removeEventListener(i, n, s)
                    }
                    ),
                    this.eventListeners = [])
                }
                function ve() {
                    return new Promise(e=>this.ready ? setTimeout(e, 0) : pe.call(this, this.elements.container, "ready", e)).then(()=>{}
                    )
                }
                function be(e) {
                    (e=>T(e, Promise) && C(e.then))(e) && e.then(null, ()=>{}
                    )
                }
                function we(e) {
                    return I(e) ? e.filter((t,i)=>e.indexOf(t) === i) : e
                }
                function Te(e, t) {
                    return I(e) && e.length ? e.reduce((e,i)=>Math.abs(i - t) < Math.abs(e - t) ? i : e) : null
                }
                function Ee(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e)
                }
                const ke = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e,[t,i])=>({
                    ...e,
                    [t / i]: [t, i]
                }), {});
                function Se(e) {
                    return !!(I(e) || M(e) && e.includes(":")) && (I(e) ? e : e.split(":")).map(Number).every(D)
                }
                function Ce(e) {
                    if (!I(e) || !e.every(D))
                        return null;
                    const [t,i] = e
                      , n = (e,t)=>0 === t ? e : n(t, e % t)
                      , s = n(t, i);
                    return [t / s, i / s]
                }
                function Ae(e) {
                    const t = e=>Se(e) ? e.split(":").map(Number) : null;
                    let i = t(e);
                    if (null === i && (i = t(this.config.ratio)),
                    null === i && !B(this.embed) && I(this.embed.ratio) && ({ratio: i} = this.embed),
                    null === i && this.isHTML5) {
                        const {videoWidth: e, videoHeight: t} = this.media;
                        i = [e, t]
                    }
                    return Ce(i)
                }
                function xe(e) {
                    if (!this.isVideo)
                        return {};
                    const {wrapper: t} = this.elements
                      , i = Ae.call(this, e);
                    if (!I(i))
                        return {};
                    const [n,s] = Ce(i)
                      , r = 100 / n * s;
                    if (Ee(`aspect-ratio: ${n}/${s}`) ? t.style.aspectRatio = `${n}/${s}` : t.style.paddingBottom = r + "%",
                    this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10)
                          , i = (e - r) / (e / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
                    } else
                        this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {
                        padding: r,
                        ratio: i
                    }
                }
                function Pe(e, t, i=.05) {
                    const n = e / t
                      , s = Te(Object.keys(ke), n);
                    return Math.abs(s - n) <= i ? ke[s] : [e, t]
                }
                const _e = {
                    getSources() {
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e=>{
                            const t = e.getAttribute("type");
                            return !!B(t) || he.mime.call(this, t)
                        }
                        ) : []
                    },
                    getQualityOptions() {
                        return this.config.quality.forced ? this.config.quality.options : _e.getSources.call(this).map(e=>Number(e.getAttribute("size"))).filter(Boolean)
                    },
                    setup() {
                        if (!this.isHTML5)
                            return;
                        const e = this;
                        e.options.speed = e.config.speed.options,
                        B(this.config.ratio) || xe.call(e),
                        Object.defineProperty(e.media, "quality", {
                            get() {
                                const t = _e.getSources.call(e).find(t=>t.getAttribute("src") === e.source);
                                return t && Number(t.getAttribute("size"))
                            },
                            set(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && N(e.config.quality.onChange))
                                        e.config.quality.onChange(t);
                                    else {
                                        const i = _e.getSources.call(e).find(e=>Number(e.getAttribute("size")) === t);
                                        if (!i)
                                            return;
                                        const {currentTime: n, paused: s, preload: r, readyState: o, playbackRate: a} = e.media;
                                        e.media.src = i.getAttribute("src"),
                                        ("none" !== r || o) && (e.once("loadedmetadata", ()=>{
                                            e.speed = a,
                                            e.currentTime = n,
                                            s || be(e.play())
                                        }
                                        ),
                                        e.media.load())
                                    }
                                    ge.call(e, e.media, "qualitychange", !1, {
                                        quality: t
                                    })
                                }
                            }
                        })
                    },
                    cancelRequests() {
                        this.isHTML5 && (Q(_e.getSources.call(this)),
                        this.media.setAttribute("src", this.config.blankVideo),
                        this.media.load(),
                        this.debug.log("Cancelled network requests"))
                    }
                };
                function Le(e, ...t) {
                    return B(e) ? e : e.toString().replace(/{(\d+)}/g, (e,i)=>t[i].toString())
                }
                const De = (e="",t="",i="")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),"g"), i.toString())
                  , Me = (e="")=>e.toString().replace(/\w\S*/g, e=>e.charAt(0).toUpperCase() + e.substr(1).toLowerCase());
                function Oe(e) {
                    const t = document.createElement("div");
                    return t.appendChild(e),
                    t.innerHTML
                }
                const Ne = {
                    pip: "PIP",
                    airplay: "AirPlay",
                    html5: "HTML5",
                    vimeo: "Vimeo",
                    youtube: "YouTube"
                }
                  , Ie = {
                    get(e="", t={}) {
                        if (B(e) || B(t))
                            return "";
                        let i = $(t.i18n, e);
                        if (B(i))
                            return Object.keys(Ne).includes(e) ? Ne[e] : "";
                        const n = {
                            "{seektime}": t.seekTime,
                            "{title}": t.title
                        };
                        return Object.entries(n).forEach(([e,t])=>{
                            i = De(i, e, t)
                        }
                        ),
                        i
                    }
                };
                class je {
                    constructor(t) {
                        e(this, "get", e=>{
                            if (!je.supported || !this.enabled)
                                return null;
                            const t = window.localStorage.getItem(this.key);
                            if (B(t))
                                return null;
                            const i = JSON.parse(t);
                            return M(e) && e.length ? i[e] : i
                        }
                        ),
                        e(this, "set", e=>{
                            if (!je.supported || !this.enabled)
                                return;
                            if (!L(e))
                                return;
                            let t = this.get();
                            B(t) && (t = {}),
                            Y(t, e),
                            window.localStorage.setItem(this.key, JSON.stringify(t))
                        }
                        ),
                        this.enabled = t.config.storage.enabled,
                        this.key = t.config.storage.key
                    }
                    static get supported() {
                        try {
                            if (!("localStorage"in window))
                                return !1;
                            const e = "___test";
                            return window.localStorage.setItem(e, e),
                            window.localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }
                }
                function Re(e, t="text") {
                    return new Promise((i,n)=>{
                        try {
                            const n = new XMLHttpRequest;
                            if (!("withCredentials"in n))
                                return;
                            n.addEventListener("load", ()=>{
                                if ("text" === t)
                                    try {
                                        i(JSON.parse(n.responseText))
                                    } catch (e) {
                                        i(n.responseText)
                                    }
                                else
                                    i(n.response)
                            }
                            ),
                            n.addEventListener("error", ()=>{
                                throw new Error(n.status)
                            }
                            ),
                            n.open("GET", e, !0),
                            n.responseType = t,
                            n.send()
                        } catch (e) {
                            n(e)
                        }
                    }
                    )
                }
                function qe(e, t) {
                    if (!M(e))
                        return;
                    const i = M(t);
                    let n = !1;
                    const s = ()=>null !== document.getElementById(t)
                      , r = (e,t)=>{
                        e.innerHTML = t,
                        i && s() || document.body.insertAdjacentElement("afterbegin", e)
                    }
                    ;
                    if (!i || !s()) {
                        const s = je.supported
                          , o = document.createElement("div");
                        if (o.setAttribute("hidden", ""),
                        i && o.setAttribute("id", t),
                        s) {
                            const e = window.localStorage.getItem("cache-" + t);
                            if (n = null !== e,
                            n) {
                                const t = JSON.parse(e);
                                r(o, t.content)
                            }
                        }
                        Re(e).then(e=>{
                            B(e) || (s && window.localStorage.setItem("cache-" + t, JSON.stringify({
                                content: e
                            })),
                            r(o, e))
                        }
                        ).catch(()=>{}
                        )
                    }
                }
                const Fe = e=>Math.trunc(e / 60 / 60 % 60, 10);
                function ze(e=0, t=!1, i=!1) {
                    if (!D(e))
                        return ze(void 0, t, i);
                    const n = e=>("0" + e).slice(-2);
                    let s = Fe(e);
                    const r = (o = e,
                    Math.trunc(o / 60 % 60, 10));
                    var o;
                    const a = (e=>Math.trunc(e % 60, 10))(e);
                    return s = t || s > 0 ? s + ":" : "",
                    `${i && e > 0 ? "-" : ""}${s}${n(r)}:${n(a)}`
                }
                const He = {
                    getIconUrl() {
                        const e = new URL(this.config.iconUrl,window.location).host !== window.location.host || W.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: e
                        }
                    },
                    findElements() {
                        try {
                            return this.elements.controls = ae.call(this, this.config.selectors.controls.wrapper),
                            this.elements.buttons = {
                                play: oe.call(this, this.config.selectors.buttons.play),
                                pause: ae.call(this, this.config.selectors.buttons.pause),
                                restart: ae.call(this, this.config.selectors.buttons.restart),
                                rewind: ae.call(this, this.config.selectors.buttons.rewind),
                                fastForward: ae.call(this, this.config.selectors.buttons.fastForward),
                                mute: ae.call(this, this.config.selectors.buttons.mute),
                                pip: ae.call(this, this.config.selectors.buttons.pip),
                                airplay: ae.call(this, this.config.selectors.buttons.airplay),
                                settings: ae.call(this, this.config.selectors.buttons.settings),
                                captions: ae.call(this, this.config.selectors.buttons.captions),
                                fullscreen: ae.call(this, this.config.selectors.buttons.fullscreen)
                            },
                            this.elements.progress = ae.call(this, this.config.selectors.progress),
                            this.elements.inputs = {
                                seek: ae.call(this, this.config.selectors.inputs.seek),
                                volume: ae.call(this, this.config.selectors.inputs.volume)
                            },
                            this.elements.display = {
                                buffer: ae.call(this, this.config.selectors.display.buffer),
                                currentTime: ae.call(this, this.config.selectors.display.currentTime),
                                duration: ae.call(this, this.config.selectors.display.duration)
                            },
                            R(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)),
                            !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e),
                            this.toggleNativeControls(!0),
                            !1
                        }
                    },
                    createIcon(e, t) {
                        const i = "http://www.w3.org/2000/svg"
                          , n = He.getIconUrl.call(this)
                          , s = `${n.cors ? "" : n.url}#${this.config.iconPrefix}`
                          , r = document.createElementNS(i, "svg");
                        K(r, Y(t, {
                            "aria-hidden": "true",
                            focusable: "false"
                        }));
                        const o = document.createElementNS(i, "use")
                          , a = `${s}-${e}`;
                        return "href"in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
                        o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
                        r.appendChild(o),
                        r
                    },
                    createLabel(e, t={}) {
                        const i = Ie.get(e, this.config);
                        return G("span", {
                            ...t,
                            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                        }, i)
                    },
                    createBadge(e) {
                        if (B(e))
                            return null;
                        const t = G("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild(G("span", {
                            class: this.config.classNames.menu.badge
                        }, e)),
                        t
                    },
                    createButton(e, t) {
                        const i = Y({}, t);
                        let n = function(e="") {
                            let t = e.toString();
                            return t = function(e="") {
                                let t = e.toString();
                                return t = De(t, "-", " "),
                                t = De(t, "_", " "),
                                t = Me(t),
                                De(t, " ", "")
                            }(t),
                            t.charAt(0).toLowerCase() + t.slice(1)
                        }(e);
                        const s = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                        switch (["element", "icon", "label"].forEach(e=>{
                            Object.keys(i).includes(e) && (s[e] = i[e],
                            delete i[e])
                        }
                        ),
                        "button" !== s.element || Object.keys(i).includes("type") || (i.type = "button"),
                        Object.keys(i).includes("class") ? i.class.split(" ").some(e=>e === this.config.classNames.control) || Y(i, {
                            class: `${i.class} ${this.config.classNames.control}`
                        }) : i.class = this.config.classNames.control,
                        e) {
                        case "play":
                            s.toggle = !0,
                            s.label = "play",
                            s.labelPressed = "pause",
                            s.icon = "play",
                            s.iconPressed = "pause";
                            break;
                        case "mute":
                            s.toggle = !0,
                            s.label = "mute",
                            s.labelPressed = "unmute",
                            s.icon = "volume",
                            s.iconPressed = "muted";
                            break;
                        case "captions":
                            s.toggle = !0,
                            s.label = "enableCaptions",
                            s.labelPressed = "disableCaptions",
                            s.icon = "captions-off",
                            s.iconPressed = "captions-on";
                            break;
                        case "fullscreen":
                            s.toggle = !0,
                            s.label = "enterFullscreen",
                            s.labelPressed = "exitFullscreen",
                            s.icon = "enter-fullscreen",
                            s.iconPressed = "exit-fullscreen";
                            break;
                        case "play-large":
                            i.class += ` ${this.config.classNames.control}--overlaid`,
                            n = "play",
                            s.label = "play",
                            s.icon = "play";
                            break;
                        default:
                            B(s.label) && (s.label = n),
                            B(s.icon) && (s.icon = e)
                        }
                        const r = G(s.element);
                        return s.toggle ? (r.appendChild(He.createIcon.call(this, s.iconPressed, {
                            class: "icon--pressed"
                        })),
                        r.appendChild(He.createIcon.call(this, s.icon, {
                            class: "icon--not-pressed"
                        })),
                        r.appendChild(He.createLabel.call(this, s.labelPressed, {
                            class: "label--pressed"
                        })),
                        r.appendChild(He.createLabel.call(this, s.label, {
                            class: "label--not-pressed"
                        }))) : (r.appendChild(He.createIcon.call(this, s.icon)),
                        r.appendChild(He.createLabel.call(this, s.label))),
                        Y(i, te(this.config.selectors.buttons[n], i)),
                        K(r, i),
                        "play" === n ? (I(this.elements.buttons[n]) || (this.elements.buttons[n] = []),
                        this.elements.buttons[n].push(r)) : this.elements.buttons[n] = r,
                        r
                    },
                    createRange(e, t) {
                        const i = G("input", Y(te(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": Ie.get(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i,
                        He.updateRangeFill.call(this, i),
                        b.setup(i),
                        i
                    },
                    createProgress(e, t) {
                        const i = G("progress", Y(te(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild(G("span", null, "0"));
                            const t = {
                                played: "played",
                                buffer: "buffered"
                            }[e]
                              , n = t ? Ie.get(t, this.config) : "";
                            i.innerText = "% " + n.toLowerCase()
                        }
                        return this.elements.display[e] = i,
                        i
                    },
                    createTime(e, t) {
                        const i = te(this.config.selectors.display[e], t)
                          , n = G("div", Y(i, {
                            class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                            "aria-label": Ie.get(e, this.config)
                        }), "00:00");
                        return this.elements.display[e] = n,
                        n
                    },
                    bindMenuItemShortcuts(e, t) {
                        pe.call(this, e, "keydown keyup", i=>{
                            if (![32, 38, 39, 40].includes(i.which))
                                return;
                            if (i.preventDefault(),
                            i.stopPropagation(),
                            "keydown" === i.type)
                                return;
                            const n = re(e, '[role="menuitemradio"]');
                            if (!n && [32, 39].includes(i.which))
                                He.showMenuPanel.call(this, t, !0);
                            else {
                                let t;
                                32 !== i.which && (40 === i.which || n && 39 === i.which ? (t = e.nextElementSibling,
                                R(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling,
                                R(t) || (t = e.parentNode.lastElementChild)),
                                le.call(this, t, !0))
                            }
                        }
                        , !1),
                        pe.call(this, e, "keyup", e=>{
                            13 === e.which && He.focusFirstMenuItem.call(this, null, !0)
                        }
                        )
                    },
                    createMenuItem({value: e, list: t, type: i, title: n, badge: s=null, checked: r=!1}) {
                        const o = te(this.config.selectors.inputs[i])
                          , a = G("button", Y(o, {
                            type: "button",
                            role: "menuitemradio",
                            class: `${this.config.classNames.control} ${o.class ? o.class : ""}`.trim(),
                            "aria-checked": r,
                            value: e
                        }))
                          , l = G("span");
                        l.innerHTML = n,
                        R(s) && l.appendChild(s),
                        a.appendChild(l),
                        Object.defineProperty(a, "checked", {
                            enumerable: !0,
                            get: ()=>"true" === a.getAttribute("aria-checked"),
                            set(e) {
                                e && Array.from(a.parentNode.children).filter(e=>re(e, '[role="menuitemradio"]')).forEach(e=>e.setAttribute("aria-checked", "false")),
                                a.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }),
                        this.listeners.bind(a, "click keyup", t=>{
                            if (!F(t) || 32 === t.which) {
                                switch (t.preventDefault(),
                                t.stopPropagation(),
                                a.checked = !0,
                                i) {
                                case "language":
                                    this.currentTrack = Number(e);
                                    break;
                                case "quality":
                                    this.quality = e;
                                    break;
                                case "speed":
                                    this.speed = parseFloat(e)
                                }
                                He.showMenuPanel.call(this, "home", F(t))
                            }
                        }
                        , i, !1),
                        He.bindMenuItemShortcuts.call(this, a, i),
                        t.appendChild(a)
                    },
                    formatTime(e=0, t=!1) {
                        return D(e) ? ze(e, Fe(this.duration) > 0, t) : e
                    },
                    updateTimeDisplay(e=null, t=0, i=!1) {
                        R(e) && D(t) && (e.innerText = He.formatTime(t, i))
                    },
                    updateVolume() {
                        this.supported.ui && (R(this.elements.inputs.volume) && He.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume),
                        R(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    },
                    setRange(e, t=0) {
                        R(e) && (e.value = t,
                        He.updateRangeFill.call(this, e))
                    },
                    updateProgress(e) {
                        if (!this.supported.ui || !q(e))
                            return;
                        let t = 0;
                        const i = (e,t)=>{
                            const i = D(t) ? t : 0
                              , n = R(e) ? e : this.elements.display.buffer;
                            if (R(n)) {
                                n.value = i;
                                const e = n.getElementsByTagName("span")[0];
                                R(e) && (e.childNodes[0].nodeValue = i)
                            }
                        }
                        ;
                        if (e)
                            switch (e.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                n = this.currentTime,
                                s = this.duration,
                                t = 0 === n || 0 === s || Number.isNaN(n) || Number.isNaN(s) ? 0 : (n / s * 100).toFixed(2),
                                "timeupdate" === e.type && He.setRange.call(this, this.elements.inputs.seek, t);
                                break;
                            case "playing":
                            case "progress":
                                i(this.elements.display.buffer, 100 * this.buffered)
                            }
                        var n, s
                    },
                    updateRangeFill(e) {
                        const t = q(e) ? e.target : e;
                        if (R(t) && "range" === t.getAttribute("type")) {
                            if (re(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                const e = He.formatTime(this.currentTime)
                                  , i = He.formatTime(this.duration)
                                  , n = Ie.get("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", n.replace("{currentTime}", e).replace("{duration}", i))
                            } else if (re(t, this.config.selectors.inputs.volume)) {
                                const e = 100 * t.value;
                                t.setAttribute("aria-valuenow", e),
                                t.setAttribute("aria-valuetext", e.toFixed(1) + "%")
                            } else
                                t.setAttribute("aria-valuenow", t.value);
                            W.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                        }
                    },
                    updateSeekTooltip(e) {
                        if (!this.config.tooltips.seek || !R(this.elements.inputs.seek) || !R(this.elements.display.seekTooltip) || 0 === this.duration)
                            return;
                        const t = this.config.classNames.tooltip + "--visible"
                          , i = e=>ne(this.elements.display.seekTooltip, t, e);
                        if (this.touch)
                            return void i(!1);
                        let n = 0;
                        const s = this.elements.progress.getBoundingClientRect();
                        if (q(e))
                            n = 100 / s.width * (e.pageX - s.left);
                        else {
                            if (!se(this.elements.display.seekTooltip, t))
                                return;
                            n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                        }
                        n < 0 ? n = 0 : n > 100 && (n = 100),
                        He.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n),
                        this.elements.display.seekTooltip.style.left = n + "%",
                        q(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                    },
                    timeUpdate(e) {
                        const t = !R(this.elements.display.duration) && this.config.invertTime;
                        He.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t),
                        e && "timeupdate" === e.type && this.media.seeking || He.updateProgress.call(this, e)
                    },
                    durationUpdate() {
                        if (!this.supported.ui || !this.config.invertTime && this.currentTime)
                            return;
                        if (this.duration >= 2 ** 32)
                            return ie(this.elements.display.currentTime, !0),
                            void ie(this.elements.progress, !0);
                        R(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        const e = R(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && He.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration),
                        e && He.updateTimeDisplay.call(this, this.elements.display.duration, this.duration),
                        He.updateSeekTooltip.call(this)
                    },
                    toggleMenuButton(e, t) {
                        ie(this.elements.settings.buttons[e], !t)
                    },
                    updateSetting(e, t, i) {
                        const n = this.elements.settings.panels[e];
                        let s = null
                          , r = t;
                        if ("captions" === e)
                            s = this.currentTrack;
                        else {
                            if (s = B(i) ? this[e] : i,
                            B(s) && (s = this.config[e].default),
                            !B(this.options[e]) && !this.options[e].includes(s))
                                return void this.debug.warn(`Unsupported value of '${s}' for ${e}`);
                            if (!this.config[e].options.includes(s))
                                return void this.debug.warn(`Disabled value of '${s}' for ${e}`)
                        }
                        if (R(r) || (r = n && n.querySelector('[role="menu"]')),
                        !R(r))
                            return;
                        this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = He.getLabel.call(this, e, s);
                        const o = r && r.querySelector(`[value="${s}"]`);
                        R(o) && (o.checked = !0)
                    },
                    getLabel(e, t) {
                        switch (e) {
                        case "speed":
                            return 1 === t ? Ie.get("normal", this.config) : t + "&times;";
                        case "quality":
                            if (D(t)) {
                                const e = Ie.get("qualityLabel." + t, this.config);
                                return e.length ? e : t + "p"
                            }
                            return Me(t);
                        case "captions":
                            return Ve.getLabel.call(this);
                        default:
                            return null
                        }
                    },
                    setQualityMenu(e) {
                        if (!R(this.elements.settings.panels.quality))
                            return;
                        const t = "quality"
                          , i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        I(e) && (this.options.quality = we(e).filter(e=>this.config.quality.options.includes(e)));
                        const n = !B(this.options.quality) && this.options.quality.length > 1;
                        if (He.toggleMenuButton.call(this, t, n),
                        Z(i),
                        He.checkMenu.call(this),
                        !n)
                            return;
                        const s = e=>{
                            const t = Ie.get("qualityBadge." + e, this.config);
                            return t.length ? He.createBadge.call(this, t) : null
                        }
                        ;
                        this.options.quality.sort((e,t)=>{
                            const i = this.config.quality.options;
                            return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                        }
                        ).forEach(e=>{
                            He.createMenuItem.call(this, {
                                value: e,
                                list: i,
                                type: t,
                                title: He.getLabel.call(this, "quality", e),
                                badge: s(e)
                            })
                        }
                        ),
                        He.updateSetting.call(this, t, i)
                    },
                    setCaptionsMenu() {
                        if (!R(this.elements.settings.panels.captions))
                            return;
                        const e = "captions"
                          , t = this.elements.settings.panels.captions.querySelector('[role="menu"]')
                          , i = Ve.getTracks.call(this)
                          , n = Boolean(i.length);
                        if (He.toggleMenuButton.call(this, e, n),
                        Z(t),
                        He.checkMenu.call(this),
                        !n)
                            return;
                        const s = i.map((e,i)=>({
                            value: i,
                            checked: this.captions.toggled && this.currentTrack === i,
                            title: Ve.getLabel.call(this, e),
                            badge: e.language && He.createBadge.call(this, e.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }));
                        s.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: Ie.get("disabled", this.config),
                            list: t,
                            type: "language"
                        }),
                        s.forEach(He.createMenuItem.bind(this)),
                        He.updateSetting.call(this, e, t)
                    },
                    setSpeedMenu() {
                        if (!R(this.elements.settings.panels.speed))
                            return;
                        const e = "speed"
                          , t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter(e=>e >= this.minimumSpeed && e <= this.maximumSpeed);
                        const i = !B(this.options.speed) && this.options.speed.length > 1;
                        He.toggleMenuButton.call(this, e, i),
                        Z(t),
                        He.checkMenu.call(this),
                        i && (this.options.speed.forEach(i=>{
                            He.createMenuItem.call(this, {
                                value: i,
                                list: t,
                                type: e,
                                title: He.getLabel.call(this, "speed", i)
                            })
                        }
                        ),
                        He.updateSetting.call(this, e, t))
                    },
                    checkMenu() {
                        const {buttons: e} = this.elements.settings
                          , t = !B(e) && Object.values(e).some(e=>!e.hidden);
                        ie(this.elements.settings.menu, !t)
                    },
                    focusFirstMenuItem(e, t=!1) {
                        if (this.elements.settings.popup.hidden)
                            return;
                        let i = e;
                        R(i) || (i = Object.values(this.elements.settings.panels).find(e=>!e.hidden));
                        const n = i.querySelector('[role^="menuitem"]');
                        le.call(this, n, t)
                    },
                    toggleMenu(e) {
                        const {popup: t} = this.elements.settings
                          , i = this.elements.buttons.settings;
                        if (!R(t) || !R(i))
                            return;
                        const {hidden: n} = t;
                        let s = n;
                        if (O(e))
                            s = e;
                        else if (F(e) && 27 === e.which)
                            s = !1;
                        else if (q(e)) {
                            const n = N(e.composedPath) ? e.composedPath()[0] : e.target
                              , r = t.contains(n);
                            if (r || !r && e.target !== i && s)
                                return
                        }
                        i.setAttribute("aria-expanded", s),
                        ie(t, !s),
                        ne(this.elements.container, this.config.classNames.menu.open, s),
                        s && F(e) ? He.focusFirstMenuItem.call(this, null, !0) : s || n || le.call(this, i, F(e))
                    },
                    getMenuSize(e) {
                        const t = e.cloneNode(!0);
                        t.style.position = "absolute",
                        t.style.opacity = 0,
                        t.removeAttribute("hidden"),
                        e.parentNode.appendChild(t);
                        const i = t.scrollWidth
                          , n = t.scrollHeight;
                        return Q(t),
                        {
                            width: i,
                            height: n
                        }
                    },
                    showMenuPanel(e="", t=!1) {
                        const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                        if (!R(i))
                            return;
                        const n = i.parentNode
                          , s = Array.from(n.children).find(e=>!e.hidden);
                        if (he.transitions && !he.reducedMotion) {
                            n.style.width = s.scrollWidth + "px",
                            n.style.height = s.scrollHeight + "px";
                            const e = He.getMenuSize.call(this, i)
                              , t = e=>{
                                e.target === n && ["width", "height"].includes(e.propertyName) && (n.style.width = "",
                                n.style.height = "",
                                fe.call(this, n, U, t))
                            }
                            ;
                            pe.call(this, n, U, t),
                            n.style.width = e.width + "px",
                            n.style.height = e.height + "px"
                        }
                        ie(s, !0),
                        ie(i, !1),
                        He.focusFirstMenuItem.call(this, i, t)
                    },
                    setDownloadUrl() {
                        const e = this.elements.buttons.download;
                        R(e) && e.setAttribute("href", this.download)
                    },
                    create(e) {
                        const {bindMenuItemShortcuts: t, createButton: i, createProgress: n, createRange: s, createTime: r, setQualityMenu: o, setSpeedMenu: a, showMenuPanel: l} = He;
                        this.elements.controls = null,
                        I(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                        const c = G("div", te(this.config.selectors.controls.wrapper));
                        this.elements.controls = c;
                        const h = {
                            class: "plyr__controls__item"
                        };
                        return we(I(this.config.controls) ? this.config.controls : []).forEach(o=>{
                            if ("restart" === o && c.appendChild(i.call(this, "restart", h)),
                            "rewind" === o && c.appendChild(i.call(this, "rewind", h)),
                            "play" === o && c.appendChild(i.call(this, "play", h)),
                            "fast-forward" === o && c.appendChild(i.call(this, "fast-forward", h)),
                            "progress" === o) {
                                const t = G("div", {
                                    class: h.class + " plyr__progress__container"
                                })
                                  , i = G("div", te(this.config.selectors.progress));
                                if (i.appendChild(s.call(this, "seek", {
                                    id: "plyr-seek-" + e.id
                                })),
                                i.appendChild(n.call(this, "buffer")),
                                this.config.tooltips.seek) {
                                    const e = G("span", {
                                        class: this.config.classNames.tooltip
                                    }, "00:00");
                                    i.appendChild(e),
                                    this.elements.display.seekTooltip = e
                                }
                                this.elements.progress = i,
                                t.appendChild(this.elements.progress),
                                c.appendChild(t)
                            }
                            if ("current-time" === o && c.appendChild(r.call(this, "currentTime", h)),
                            "duration" === o && c.appendChild(r.call(this, "duration", h)),
                            "mute" === o || "volume" === o) {
                                let {volume: t} = this.elements;
                                if (R(t) && c.contains(t) || (t = G("div", Y({}, h, {
                                    class: (h.class + " plyr__volume").trim()
                                })),
                                this.elements.volume = t,
                                c.appendChild(t)),
                                "mute" === o && t.appendChild(i.call(this, "mute")),
                                "volume" === o && !W.isIos) {
                                    const i = {
                                        max: 1,
                                        step: .05,
                                        value: this.config.volume
                                    };
                                    t.appendChild(s.call(this, "volume", Y(i, {
                                        id: "plyr-volume-" + e.id
                                    })))
                                }
                            }
                            if ("captions" === o && c.appendChild(i.call(this, "captions", h)),
                            "settings" === o && !B(this.config.settings)) {
                                const n = G("div", Y({}, h, {
                                    class: (h.class + " plyr__menu").trim(),
                                    hidden: ""
                                }));
                                n.appendChild(i.call(this, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": "plyr-settings-" + e.id,
                                    "aria-expanded": !1
                                }));
                                const s = G("div", {
                                    class: "plyr__menu__container",
                                    id: "plyr-settings-" + e.id,
                                    hidden: ""
                                })
                                  , r = G("div")
                                  , o = G("div", {
                                    id: `plyr-settings-${e.id}-home`
                                })
                                  , a = G("div", {
                                    role: "menu"
                                });
                                o.appendChild(a),
                                r.appendChild(o),
                                this.elements.settings.panels.home = o,
                                this.config.settings.forEach(i=>{
                                    const n = G("button", Y(te(this.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    t.call(this, n, i),
                                    pe.call(this, n, "click", ()=>{
                                        l.call(this, i, !1)
                                    }
                                    );
                                    const s = G("span", null, Ie.get(i, this.config))
                                      , o = G("span", {
                                        class: this.config.classNames.menu.value
                                    });
                                    o.innerHTML = e[i],
                                    s.appendChild(o),
                                    n.appendChild(s),
                                    a.appendChild(n);
                                    const c = G("div", {
                                        id: `plyr-settings-${e.id}-${i}`,
                                        hidden: ""
                                    })
                                      , h = G("button", {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                    });
                                    h.appendChild(G("span", {
                                        "aria-hidden": !0
                                    }, Ie.get(i, this.config))),
                                    h.appendChild(G("span", {
                                        class: this.config.classNames.hidden
                                    }, Ie.get("menuBack", this.config))),
                                    pe.call(this, c, "keydown", e=>{
                                        37 === e.which && (e.preventDefault(),
                                        e.stopPropagation(),
                                        l.call(this, "home", !0))
                                    }
                                    , !1),
                                    pe.call(this, h, "click", ()=>{
                                        l.call(this, "home", !1)
                                    }
                                    ),
                                    c.appendChild(h),
                                    c.appendChild(G("div", {
                                        role: "menu"
                                    })),
                                    r.appendChild(c),
                                    this.elements.settings.buttons[i] = n,
                                    this.elements.settings.panels[i] = c
                                }
                                ),
                                s.appendChild(r),
                                n.appendChild(s),
                                c.appendChild(n),
                                this.elements.settings.popup = s,
                                this.elements.settings.menu = n
                            }
                            if ("pip" === o && he.pip && c.appendChild(i.call(this, "pip", h)),
                            "airplay" === o && he.airplay && c.appendChild(i.call(this, "airplay", h)),
                            "download" === o) {
                                const e = Y({}, h, {
                                    element: "a",
                                    href: this.download,
                                    target: "_blank"
                                });
                                this.isHTML5 && (e.download = "");
                                const {download: t} = this.config.urls;
                                !H(t) && this.isEmbed && Y(e, {
                                    icon: "logo-" + this.provider,
                                    label: this.provider
                                }),
                                c.appendChild(i.call(this, "download", e))
                            }
                            "fullscreen" === o && c.appendChild(i.call(this, "fullscreen", h))
                        }
                        ),
                        this.isHTML5 && o.call(this, _e.getQualityOptions.call(this)),
                        a.call(this),
                        c
                    },
                    inject() {
                        if (this.config.loadSprite) {
                            const e = He.getIconUrl.call(this);
                            e.cors && qe(e.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let e = null;
                        this.elements.controls = null;
                        const t = {
                            id: this.id,
                            seektime: this.config.seekTime,
                            title: this.config.title
                        };
                        let i, n = !0;
                        if (N(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)),
                        this.config.controls || (this.config.controls = []),
                        R(this.config.controls) || M(this.config.controls) ? e = this.config.controls : (e = He.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: Ve.getLabel.call(this)
                        }),
                        n = !1),
                        n && M(this.config.controls) && (e = (e=>{
                            let i = e;
                            return Object.entries(t).forEach(([e,t])=>{
                                i = De(i, `{${e}}`, t)
                            }
                            ),
                            i
                        }
                        )(e)),
                        M(this.config.selectors.controls.container) && (i = document.querySelector(this.config.selectors.controls.container)),
                        R(i) || (i = this.elements.container),
                        i[R(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e),
                        R(this.elements.controls) || He.findElements.call(this),
                        !B(this.elements.buttons)) {
                            const e = e=>{
                                const t = this.config.classNames.controlPressed;
                                Object.defineProperty(e, "pressed", {
                                    enumerable: !0,
                                    get: ()=>se(e, t),
                                    set(i=!1) {
                                        ne(e, t, i)
                                    }
                                })
                            }
                            ;
                            Object.values(this.elements.buttons).filter(Boolean).forEach(t=>{
                                I(t) || j(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t)
                            }
                            )
                        }
                        if (W.isEdge && V(i),
                        this.config.tooltips.controls) {
                            const {classNames: e, selectors: t} = this.config
                              , i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`
                              , n = oe.call(this, i);
                            Array.from(n).forEach(e=>{
                                ne(e, this.config.classNames.hidden, !1),
                                ne(e, this.config.classNames.tooltip, !0)
                            }
                            )
                        }
                    }
                };
                function Be(e, t=!0) {
                    let i = e;
                    if (t) {
                        const e = document.createElement("a");
                        e.href = i,
                        i = e.href
                    }
                    try {
                        return new URL(i)
                    } catch (e) {
                        return null
                    }
                }
                function Ue(e) {
                    const t = new URLSearchParams;
                    return L(e) && Object.entries(e).forEach(([e,i])=>{
                        t.set(e, i)
                    }
                    ),
                    t
                }
                const Ve = {
                    setup() {
                        if (!this.supported.ui)
                            return;
                        if (!this.isVideo || this.isYouTube || this.isHTML5 && !he.textTracks)
                            return void (I(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && He.setCaptionsMenu.call(this));
                        var e, t;
                        if (R(this.elements.captions) || (this.elements.captions = G("div", te(this.config.selectors.captions)),
                        e = this.elements.captions,
                        t = this.elements.wrapper,
                        R(e) && R(t) && t.parentNode.insertBefore(e, t.nextSibling)),
                        W.isIE && window.URL) {
                            const e = this.media.querySelectorAll("track");
                            Array.from(e).forEach(e=>{
                                const t = e.getAttribute("src")
                                  , i = Be(t);
                                null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Re(t, "blob").then(t=>{
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                }
                                ).catch(()=>{
                                    Q(e)
                                }
                                )
                            }
                            )
                        }
                        const i = we((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e=>e.split("-")[0]));
                        let n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        "auto" === n && ([n] = i);
                        let s = this.storage.get("captions");
                        if (O(s) || ({active: s} = this.config.captions),
                        Object.assign(this.captions, {
                            toggled: !1,
                            active: s,
                            language: n,
                            languages: i
                        }),
                        this.isHTML5) {
                            const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            pe.call(this, this.media.textTracks, e, Ve.update.bind(this))
                        }
                        setTimeout(Ve.update.bind(this), 0)
                    },
                    update() {
                        const e = Ve.getTracks.call(this, !0)
                          , {active: t, language: i, meta: n, currentTrackNode: s} = this.captions
                          , r = Boolean(e.find(e=>e.language === i));
                        this.isHTML5 && this.isVideo && e.filter(e=>!n.get(e)).forEach(e=>{
                            this.debug.log("Track added", e),
                            n.set(e, {
                                default: "showing" === e.mode
                            }),
                            "showing" === e.mode && (e.mode = "hidden"),
                            pe.call(this, e, "cuechange", ()=>Ve.updateCues.call(this))
                        }
                        ),
                        (r && this.language !== i || !e.includes(s)) && (Ve.setLanguage.call(this, i),
                        Ve.toggle.call(this, t && r)),
                        ne(this.elements.container, this.config.classNames.captions.enabled, !B(e)),
                        I(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && He.setCaptionsMenu.call(this)
                    },
                    toggle(e, t=!0) {
                        if (!this.supported.ui)
                            return;
                        const {toggled: i} = this.captions
                          , n = this.config.classNames.captions.active
                          , s = _(e) ? !i : e;
                        if (s !== i) {
                            if (t || (this.captions.active = s,
                            this.storage.set({
                                captions: s
                            })),
                            !this.language && s && !t) {
                                const e = Ve.getTracks.call(this)
                                  , t = Ve.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                                return this.captions.language = t.language,
                                void Ve.set.call(this, e.indexOf(t))
                            }
                            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s),
                            ne(this.elements.container, n, s),
                            this.captions.toggled = s,
                            He.updateSetting.call(this, "captions"),
                            ge.call(this, this.media, s ? "captionsenabled" : "captionsdisabled")
                        }
                        setTimeout(()=>{
                            s && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                        }
                        )
                    },
                    set(e, t=!0) {
                        const i = Ve.getTracks.call(this);
                        if (-1 !== e)
                            if (D(e))
                                if (e in i) {
                                    if (this.captions.currentTrack !== e) {
                                        this.captions.currentTrack = e;
                                        const n = i[e]
                                          , {language: s} = n || {};
                                        this.captions.currentTrackNode = n,
                                        He.updateSetting.call(this, "captions"),
                                        t || (this.captions.language = s,
                                        this.storage.set({
                                            language: s
                                        })),
                                        this.isVimeo && this.embed.enableTextTrack(s),
                                        ge.call(this, this.media, "languagechange")
                                    }
                                    Ve.toggle.call(this, !0, t),
                                    this.isHTML5 && this.isVideo && Ve.updateCues.call(this)
                                } else
                                    this.debug.warn("Track not found", e);
                            else
                                this.debug.warn("Invalid caption argument", e);
                        else
                            Ve.toggle.call(this, !1, t)
                    },
                    setLanguage(e, t=!0) {
                        if (!M(e))
                            return void this.debug.warn("Invalid language argument", e);
                        const i = e.toLowerCase();
                        this.captions.language = i;
                        const n = Ve.getTracks.call(this)
                          , s = Ve.findTrack.call(this, [i]);
                        Ve.set.call(this, n.indexOf(s), t)
                    },
                    getTracks(e=!1) {
                        return Array.from((this.media || {}).textTracks || []).filter(t=>!this.isHTML5 || e || this.captions.meta.has(t)).filter(e=>["captions", "subtitles"].includes(e.kind))
                    },
                    findTrack(e, t=!1) {
                        const i = Ve.getTracks.call(this)
                          , n = e=>Number((this.captions.meta.get(e) || {}).default)
                          , s = Array.from(i).sort((e,t)=>n(t) - n(e));
                        let r;
                        return e.every(e=>(r = s.find(t=>t.language === e),
                        !r)),
                        r || (t ? s[0] : void 0)
                    },
                    getCurrentTrack() {
                        return Ve.getTracks.call(this)[this.currentTrack]
                    },
                    getLabel(e) {
                        let t = e;
                        return !z(t) && he.textTracks && this.captions.toggled && (t = Ve.getCurrentTrack.call(this)),
                        z(t) ? B(t.label) ? B(t.language) ? Ie.get("enabled", this.config) : e.language.toUpperCase() : t.label : Ie.get("disabled", this.config)
                    },
                    updateCues(e) {
                        if (!this.supported.ui)
                            return;
                        if (!R(this.elements.captions))
                            return void this.debug.warn("No captions element to render to");
                        if (!_(e) && !Array.isArray(e))
                            return void this.debug.warn("updateCues: Invalid input", e);
                        let t = e;
                        if (!t) {
                            const e = Ve.getCurrentTrack.call(this);
                            t = Array.from((e || {}).activeCues || []).map(e=>e.getCueAsHTML()).map(Oe)
                        }
                        const i = t.map(e=>e.trim()).join("\n");
                        if (i !== this.elements.captions.innerHTML) {
                            Z(this.elements.captions);
                            const e = G("span", te(this.config.selectors.caption));
                            e.innerHTML = i,
                            this.elements.captions.appendChild(e),
                            ge.call(this, this.media, "cuechange")
                        }
                    }
                }
                  , We = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    playsinline: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: null,
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                        forced: !1,
                        onChange: null
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: "auto",
                        update: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        pip: "PIP",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad",
                        qualityBadge: {
                            2160: "4K",
                            1440: "HD",
                            1080: "HD",
                            720: "HD",
                            576: "SD",
                            480: "SD"
                        }
                    },
                    urls: {
                        download: null,
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/oembed.json?url={0}"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        download: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            download: '[data-plyr="download"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress__buffer",
                            loop: ".plyr__progress__loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        caption: ".plyr__caption"
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        posterEnabled: "plyr__poster-enabled",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        controlPressed: "plyr__control--pressed",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isIos: "plyr--is-ios",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        display: {
                            time: "plyr__time"
                        },
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        tabFocus: "plyr__tab-focus",
                        previewThumbnails: {
                            thumbContainer: "plyr__preview-thumb",
                            thumbContainerShown: "plyr__preview-thumb--is-shown",
                            imageContainer: "plyr__preview-thumb__image-container",
                            timeContainer: "plyr__preview-thumb__time-container",
                            scrubbingContainer: "plyr__preview-scrubbing",
                            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                        }
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id"
                        }
                    },
                    ads: {
                        enabled: !1,
                        publisherId: "",
                        tagUrl: ""
                    },
                    previewThumbnails: {
                        enabled: !1,
                        src: ""
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1,
                        customControls: !0,
                        referrerPolicy: null,
                        premium: !1
                    },
                    youtube: {
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        customControls: !0,
                        noCookie: !1
                    }
                }
                  , $e = "picture-in-picture"
                  , Ye = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                }
                  , Xe = ()=>{}
                ;
                class Ke {
                    constructor(e=!1) {
                        this.enabled = window.console && e,
                        this.enabled && this.log("Debugging enabled")
                    }
                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : Xe
                    }
                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Xe
                    }
                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : Xe
                    }
                }
                class Ge {
                    constructor(t) {
                        e(this, "onChange", ()=>{
                            if (!this.enabled)
                                return;
                            const e = this.player.elements.buttons.fullscreen;
                            R(e) && (e.pressed = this.active);
                            const t = this.target === this.player.media ? this.target : this.player.elements.container;
                            ge.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                        }
                        ),
                        e(this, "toggleFallback", (e=!1)=>{
                            if (e ? this.scrollPosition = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0
                            } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
                            document.body.style.overflow = e ? "hidden" : "",
                            ne(this.target, this.player.config.classNames.fullscreen.fallback, e),
                            W.isIos) {
                                let t = document.head.querySelector('meta[name="viewport"]');
                                const i = "viewport-fit=cover";
                                t || (t = document.createElement("meta"),
                                t.setAttribute("name", "viewport"));
                                const n = M(t.content) && t.content.includes(i);
                                e ? (this.cleanupViewport = !n,
                                n || (t.content += "," + i)) : this.cleanupViewport && (t.content = t.content.split(",").filter(e=>e.trim() !== i).join(","))
                            }
                            this.onChange()
                        }
                        ),
                        e(this, "trapFocus", e=>{
                            if (W.isIos || !this.active || "Tab" !== e.key || 9 !== e.keyCode)
                                return;
                            const t = document.activeElement
                              , i = oe.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]")
                              , [n] = i
                              , s = i[i.length - 1];
                            t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(),
                            e.preventDefault()) : (n.focus(),
                            e.preventDefault())
                        }
                        ),
                        e(this, "update", ()=>{
                            if (this.enabled) {
                                let e;
                                e = this.forceFallback ? "Fallback (forced)" : Ge.native ? "Native" : "Fallback",
                                this.player.debug.log(e + " fullscreen enabled")
                            } else
                                this.player.debug.log("Fullscreen not supported and fallback disabled");
                            ne(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }
                        ),
                        e(this, "enter", ()=>{
                            this.enabled && (W.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !Ge.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? B(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                                navigationUI: "hide"
                            }))
                        }
                        ),
                        e(this, "exit", ()=>{
                            if (this.enabled)
                                if (W.isIos && this.player.config.fullscreen.iosNative)
                                    this.target.webkitExitFullscreen(),
                                    be(this.player.play());
                                else if (!Ge.native || this.forceFallback)
                                    this.toggleFallback(!1);
                                else if (this.prefix) {
                                    if (!B(this.prefix)) {
                                        const e = "moz" === this.prefix ? "Cancel" : "Exit";
                                        document[`${this.prefix}${e}${this.property}`]()
                                    }
                                } else
                                    (document.cancelFullScreen || document.exitFullscreen).call(document)
                        }
                        ),
                        e(this, "toggle", ()=>{
                            this.active ? this.exit() : this.enter()
                        }
                        ),
                        this.player = t,
                        this.prefix = Ge.prefix,
                        this.property = Ge.property,
                        this.scrollPosition = {
                            x: 0,
                            y: 0
                        },
                        this.forceFallback = "force" === t.config.fullscreen.fallback,
                        this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                            const {prototype: i} = Element;
                            return (i.closest || function() {
                                let e = this;
                                do {
                                    if (re.matches(e, t))
                                        return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }
                            ).call(e, t)
                        }(this.player.elements.container, t.config.fullscreen.container),
                        pe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", ()=>{
                            this.onChange()
                        }
                        ),
                        pe.call(this.player, this.player.elements.container, "dblclick", e=>{
                            R(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
                        }
                        ),
                        pe.call(this, this.player.elements.container, "keydown", e=>this.trapFocus(e)),
                        this.update()
                    }
                    static get native() {
                        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                    }
                    get usingNative() {
                        return Ge.native && !this.forceFallback
                    }
                    static get prefix() {
                        if (N(document.exitFullscreen))
                            return "";
                        let e = "";
                        return ["webkit", "moz", "ms"].some(t=>!(!N(document[t + "ExitFullscreen"]) && !N(document[t + "CancelFullScreen"]) || (e = t,
                        0))),
                        e
                    }
                    static get property() {
                        return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                    }
                    get enabled() {
                        return (Ge.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                    }
                    get active() {
                        if (!this.enabled)
                            return !1;
                        if (!Ge.native || this.forceFallback)
                            return se(this.target, this.player.config.classNames.fullscreen.fallback);
                        const e = this.prefix ? document[`${this.prefix}${this.property}Element`] : document.fullscreenElement;
                        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                    }
                    get target() {
                        return W.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                    }
                }
                function Je(e, t=1) {
                    return new Promise((i,n)=>{
                        const s = new Image
                          , r = ()=>{
                            delete s.onload,
                            delete s.onerror,
                            (s.naturalWidth >= t ? i : n)(s)
                        }
                        ;
                        Object.assign(s, {
                            onload: r,
                            onerror: r,
                            src: e
                        })
                    }
                    )
                }
                const Qe = {
                    addStyleHook() {
                        ne(this.elements.container, this.config.selectors.container.replace(".", ""), !0),
                        ne(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls(e=!1) {
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build() {
                        if (this.listeners.media(),
                        !this.supported.ui)
                            return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),
                            void Qe.toggleNativeControls.call(this, !0);
                        R(this.elements.controls) || (He.inject.call(this),
                        this.listeners.controls()),
                        Qe.toggleNativeControls.call(this),
                        this.isHTML5 && Ve.setup.call(this),
                        this.volume = null,
                        this.muted = null,
                        this.loop = null,
                        this.quality = null,
                        this.speed = null,
                        He.updateVolume.call(this),
                        He.timeUpdate.call(this),
                        Qe.checkPlaying.call(this),
                        ne(this.elements.container, this.config.classNames.pip.supported, he.pip && this.isHTML5 && this.isVideo),
                        ne(this.elements.container, this.config.classNames.airplay.supported, he.airplay && this.isHTML5),
                        ne(this.elements.container, this.config.classNames.isIos, W.isIos),
                        ne(this.elements.container, this.config.classNames.isTouch, this.touch),
                        this.ready = !0,
                        setTimeout(()=>{
                            ge.call(this, this.media, "ready")
                        }
                        , 0),
                        Qe.setTitle.call(this),
                        this.poster && Qe.setPoster.call(this, this.poster, !1).catch(()=>{}
                        ),
                        this.config.duration && He.durationUpdate.call(this)
                    },
                    setTitle() {
                        let e = Ie.get("play", this.config);
                        if (M(this.config.title) && !B(this.config.title) && (e += ", " + this.config.title),
                        Array.from(this.elements.buttons.play || []).forEach(t=>{
                            t.setAttribute("aria-label", e)
                        }
                        ),
                        this.isEmbed) {
                            const e = ae.call(this, "iframe");
                            if (!R(e))
                                return;
                            const t = B(this.config.title) ? "video" : this.config.title
                              , i = Ie.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", t))
                        }
                    },
                    togglePoster(e) {
                        ne(this.elements.container, this.config.classNames.posterEnabled, e)
                    },
                    setPoster(e, t=!0) {
                        return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e),
                        this.elements.poster.removeAttribute("hidden"),
                        ve.call(this).then(()=>Je(e)).catch(t=>{
                            throw e === this.poster && Qe.togglePoster.call(this, !1),
                            t
                        }
                        ).then(()=>{
                            if (e !== this.poster)
                                throw new Error("setPoster cancelled by later call to setPoster")
                        }
                        ).then(()=>(Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: ""
                        }),
                        Qe.togglePoster.call(this, !0),
                        e)))
                    },
                    checkPlaying(e) {
                        ne(this.elements.container, this.config.classNames.playing, this.playing),
                        ne(this.elements.container, this.config.classNames.paused, this.paused),
                        ne(this.elements.container, this.config.classNames.stopped, this.stopped),
                        Array.from(this.elements.buttons.play || []).forEach(e=>{
                            Object.assign(e, {
                                pressed: this.playing
                            }),
                            e.setAttribute("aria-label", Ie.get(this.playing ? "pause" : "play", this.config))
                        }
                        ),
                        q(e) && "timeupdate" === e.type || Qe.toggleControls.call(this)
                    },
                    checkLoading(e) {
                        this.loading = ["stalled", "waiting"].includes(e.type),
                        clearTimeout(this.timers.loading),
                        this.timers.loading = setTimeout(()=>{
                            ne(this.elements.container, this.config.classNames.loading, this.loading),
                            Qe.toggleControls.call(this)
                        }
                        , this.loading ? 250 : 0)
                    },
                    toggleControls(e) {
                        const {controls: t} = this.elements;
                        if (t && this.config.hideControls) {
                            const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                        }
                    },
                    migrateStyles() {
                        Object.values({
                            ...this.media.style
                        }).filter(e=>!B(e) && M(e) && e.startsWith("--plyr")).forEach(e=>{
                            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)),
                            this.media.style.removeProperty(e)
                        }
                        ),
                        B(this.media.style) && this.media.removeAttribute("style")
                    }
                };
                class Ze {
                    constructor(t) {
                        e(this, "firstTouch", ()=>{
                            const {player: e} = this
                              , {elements: t} = e;
                            e.touch = !0,
                            ne(t.container, e.config.classNames.isTouch, !0)
                        }
                        ),
                        e(this, "setTabFocus", e=>{
                            const {player: t} = this
                              , {elements: i} = t;
                            if (clearTimeout(this.focusTimer),
                            "keydown" === e.type && 9 !== e.which)
                                return;
                            "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                            const n = e.timeStamp - this.lastKeyDown <= 20;
                            ("focus" !== e.type || n) && ((()=>{
                                const e = t.config.classNames.tabFocus;
                                ne(oe.call(t, "." + e), e, !1)
                            }
                            )(),
                            "focusout" !== e.type && (this.focusTimer = setTimeout(()=>{
                                const e = document.activeElement;
                                i.container.contains(e) && ne(document.activeElement, t.config.classNames.tabFocus, !0)
                            }
                            , 10)))
                        }
                        ),
                        e(this, "global", (e=!0)=>{
                            const {player: t} = this;
                            t.config.keyboard.global && de.call(t, window, "keydown keyup", this.handleKey, e, !1),
                            de.call(t, document.body, "click", this.toggleMenu, e),
                            me.call(t, document.body, "touchstart", this.firstTouch),
                            de.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        }
                        ),
                        e(this, "container", ()=>{
                            const {player: e} = this
                              , {config: t, elements: i, timers: n} = e;
                            !t.keyboard.global && t.keyboard.focused && pe.call(e, i.container, "keydown keyup", this.handleKey, !1),
                            pe.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", t=>{
                                const {controls: s} = i;
                                s && "enterfullscreen" === t.type && (s.pressed = !1,
                                s.hover = !1);
                                let r = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (Qe.toggleControls.call(e, !0),
                                r = e.touch ? 3e3 : 2e3),
                                clearTimeout(n.controls),
                                n.controls = setTimeout(()=>Qe.toggleControls.call(e, !1), r)
                            }
                            );
                            const s = ()=>{
                                if (!e.isVimeo || e.config.vimeo.premium)
                                    return;
                                const t = i.wrapper
                                  , {active: n} = e.fullscreen
                                  , [s,r] = Ae.call(e)
                                  , o = Ee(`aspect-ratio: ${s} / ${r}`);
                                if (!n)
                                    return void (o ? (t.style.width = null,
                                    t.style.height = null) : (t.style.maxWidth = null,
                                    t.style.margin = null));
                                const [a,l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)]
                                  , c = a / l > s / r;
                                o ? (t.style.width = c ? "auto" : "100%",
                                t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? l / r * s + "px" : null,
                                t.style.margin = c ? "0 auto" : null)
                            }
                              , r = ()=>{
                                clearTimeout(n.resized),
                                n.resized = setTimeout(s, 50)
                            }
                            ;
                            pe.call(e, i.container, "enterfullscreen exitfullscreen", t=>{
                                const {target: n} = e.fullscreen;
                                n === i.container && (!e.isEmbed && B(e.config.ratio) || (s(),
                                ("enterfullscreen" === t.type ? pe : fe).call(e, window, "resize", r)))
                            }
                            )
                        }
                        ),
                        e(this, "media", ()=>{
                            const {player: e} = this
                              , {elements: t} = e;
                            if (pe.call(e, e.media, "timeupdate seeking seeked", t=>He.timeUpdate.call(e, t)),
                            pe.call(e, e.media, "durationchange loadeddata loadedmetadata", t=>He.durationUpdate.call(e, t)),
                            pe.call(e, e.media, "ended", ()=>{
                                e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(),
                                e.pause())
                            }
                            ),
                            pe.call(e, e.media, "progress playing seeking seeked", t=>He.updateProgress.call(e, t)),
                            pe.call(e, e.media, "volumechange", t=>He.updateVolume.call(e, t)),
                            pe.call(e, e.media, "playing play pause ended emptied timeupdate", t=>Qe.checkPlaying.call(e, t)),
                            pe.call(e, e.media, "waiting canplay seeked playing", t=>Qe.checkLoading.call(e, t)),
                            e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                const i = ae.call(e, "." + e.config.classNames.video);
                                if (!R(i))
                                    return;
                                pe.call(e, t.container, "click", n=>{
                                    ([t.container, i].includes(n.target) || i.contains(n.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(n, e.restart, "restart"),
                                    this.proxy(n, ()=>{
                                        be(e.play())
                                    }
                                    , "play")) : this.proxy(n, ()=>{
                                        be(e.togglePlay())
                                    }
                                    , "play")))
                                }
                                )
                            }
                            e.supported.ui && e.config.disableContextMenu && pe.call(e, t.wrapper, "contextmenu", e=>{
                                e.preventDefault()
                            }
                            , !1),
                            pe.call(e, e.media, "volumechange", ()=>{
                                e.storage.set({
                                    volume: e.volume,
                                    muted: e.muted
                                })
                            }
                            ),
                            pe.call(e, e.media, "ratechange", ()=>{
                                He.updateSetting.call(e, "speed"),
                                e.storage.set({
                                    speed: e.speed
                                })
                            }
                            ),
                            pe.call(e, e.media, "qualitychange", t=>{
                                He.updateSetting.call(e, "quality", null, t.detail.quality)
                            }
                            ),
                            pe.call(e, e.media, "ready qualitychange", ()=>{
                                He.setDownloadUrl.call(e)
                            }
                            );
                            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            pe.call(e, e.media, i, i=>{
                                let {detail: n={}} = i;
                                "error" === i.type && (n = e.media.error),
                                ge.call(e, t.container, i.type, !0, n)
                            }
                            )
                        }
                        ),
                        e(this, "proxy", (e,t,i)=>{
                            const {player: n} = this
                              , s = n.config.listeners[i];
                            let r = !0;
                            N(s) && (r = s.call(n, e)),
                            !1 !== r && N(t) && t.call(n, e)
                        }
                        ),
                        e(this, "bind", (e,t,i,n,s=!0)=>{
                            const {player: r} = this
                              , o = r.config.listeners[n]
                              , a = N(o);
                            pe.call(r, e, t, e=>this.proxy(e, i, n), s && !a)
                        }
                        ),
                        e(this, "controls", ()=>{
                            const {player: e} = this
                              , {elements: t} = e
                              , i = W.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach(t=>{
                                this.bind(t, "click", ()=>{
                                    be(e.togglePlay())
                                }
                                , "play")
                            }
                            ),
                            this.bind(t.buttons.restart, "click", e.restart, "restart"),
                            this.bind(t.buttons.rewind, "click", ()=>{
                                e.lastSeekTime = Date.now(),
                                e.rewind()
                            }
                            , "rewind"),
                            this.bind(t.buttons.fastForward, "click", ()=>{
                                e.lastSeekTime = Date.now(),
                                e.forward()
                            }
                            , "fastForward"),
                            this.bind(t.buttons.mute, "click", ()=>{
                                e.muted = !e.muted
                            }
                            , "mute"),
                            this.bind(t.buttons.captions, "click", ()=>e.toggleCaptions()),
                            this.bind(t.buttons.download, "click", ()=>{
                                ge.call(e, e.media, "download")
                            }
                            , "download"),
                            this.bind(t.buttons.fullscreen, "click", ()=>{
                                e.fullscreen.toggle()
                            }
                            , "fullscreen"),
                            this.bind(t.buttons.pip, "click", ()=>{
                                e.pip = "toggle"
                            }
                            , "pip"),
                            this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
                            this.bind(t.buttons.settings, "click", t=>{
                                t.stopPropagation(),
                                t.preventDefault(),
                                He.toggleMenu.call(e, t)
                            }
                            , null, !1),
                            this.bind(t.buttons.settings, "keyup", t=>{
                                const i = t.which;
                                [13, 32].includes(i) && (13 !== i ? (t.preventDefault(),
                                t.stopPropagation(),
                                He.toggleMenu.call(e, t)) : He.focusFirstMenuItem.call(e, null, !0))
                            }
                            , null, !1),
                            this.bind(t.settings.menu, "keydown", t=>{
                                27 === t.which && He.toggleMenu.call(e, t)
                            }
                            ),
                            this.bind(t.inputs.seek, "mousedown mousemove", e=>{
                                const i = t.progress.getBoundingClientRect()
                                  , n = 100 / i.width * (e.pageX - i.left);
                                e.currentTarget.setAttribute("seek-value", n)
                            }
                            ),
                            this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", t=>{
                                const i = t.currentTarget
                                  , n = t.keyCode ? t.keyCode : t.which
                                  , s = "play-on-seeked";
                                if (F(t) && 39 !== n && 37 !== n)
                                    return;
                                e.lastSeekTime = Date.now();
                                const r = i.hasAttribute(s)
                                  , o = ["mouseup", "touchend", "keyup"].includes(t.type);
                                r && o ? (i.removeAttribute(s),
                                be(e.play())) : !o && e.playing && (i.setAttribute(s, ""),
                                e.pause())
                            }
                            ),
                            W.isIos) {
                                const t = oe.call(e, 'input[type="range"]');
                                Array.from(t).forEach(e=>this.bind(e, i, e=>V(e.target)))
                            }
                            this.bind(t.inputs.seek, i, t=>{
                                const i = t.currentTarget;
                                let n = i.getAttribute("seek-value");
                                B(n) && (n = i.value),
                                i.removeAttribute("seek-value"),
                                e.currentTime = n / i.max * e.duration
                            }
                            , "seek"),
                            this.bind(t.progress, "mouseenter mouseleave mousemove", t=>He.updateSeekTooltip.call(e, t)),
                            this.bind(t.progress, "mousemove touchmove", t=>{
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startMove(t)
                            }
                            ),
                            this.bind(t.progress, "mouseleave touchend click", ()=>{
                                const {previewThumbnails: t} = e;
                                t && t.loaded && t.endMove(!1, !0)
                            }
                            ),
                            this.bind(t.progress, "mousedown touchstart", t=>{
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startScrubbing(t)
                            }
                            ),
                            this.bind(t.progress, "mouseup touchend", t=>{
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.endScrubbing(t)
                            }
                            ),
                            W.isWebkit && Array.from(oe.call(e, 'input[type="range"]')).forEach(t=>{
                                this.bind(t, "input", t=>He.updateRangeFill.call(e, t.target))
                            }
                            ),
                            e.config.toggleInvert && !R(t.display.duration) && this.bind(t.display.currentTime, "click", ()=>{
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime,
                                He.timeUpdate.call(e))
                            }
                            ),
                            this.bind(t.inputs.volume, i, t=>{
                                e.volume = t.target.value
                            }
                            , "volume"),
                            this.bind(t.controls, "mouseenter mouseleave", i=>{
                                t.controls.hover = !e.touch && "mouseenter" === i.type
                            }
                            ),
                            t.fullscreen && Array.from(t.fullscreen.children).filter(e=>!e.contains(t.container)).forEach(i=>{
                                this.bind(i, "mouseenter mouseleave", i=>{
                                    t.controls.hover = !e.touch && "mouseenter" === i.type
                                }
                                )
                            }
                            ),
                            this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", e=>{
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            }
                            ),
                            this.bind(t.controls, "focusin", ()=>{
                                const {config: i, timers: n} = e;
                                ne(t.controls, i.classNames.noTransition, !0),
                                Qe.toggleControls.call(e, !0),
                                setTimeout(()=>{
                                    ne(t.controls, i.classNames.noTransition, !1)
                                }
                                , 0);
                                const s = this.touch ? 3e3 : 4e3;
                                clearTimeout(n.controls),
                                n.controls = setTimeout(()=>Qe.toggleControls.call(e, !1), s)
                            }
                            ),
                            this.bind(t.inputs.volume, "wheel", t=>{
                                const i = t.webkitDirectionInvertedFromDevice
                                  , [n,s] = [t.deltaX, -t.deltaY].map(e=>i ? -e : e)
                                  , r = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
                                e.increaseVolume(r / 50);
                                const {volume: o} = e.media;
                                (1 === r && o < 1 || -1 === r && o > 0) && t.preventDefault()
                            }
                            , "volume", !1)
                        }
                        ),
                        this.player = t,
                        this.lastKey = null,
                        this.focusTimer = null,
                        this.lastKeyDown = null,
                        this.handleKey = this.handleKey.bind(this),
                        this.toggleMenu = this.toggleMenu.bind(this),
                        this.setTabFocus = this.setTabFocus.bind(this),
                        this.firstTouch = this.firstTouch.bind(this)
                    }
                    handleKey(e) {
                        const {player: t} = this
                          , {elements: i} = t
                          , n = e.keyCode ? e.keyCode : e.which
                          , s = "keydown" === e.type
                          , r = s && n === this.lastKey;
                        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && D(n))
                            if (s) {
                                const s = document.activeElement;
                                if (R(s)) {
                                    const {editable: n} = t.config.selectors
                                      , {seek: r} = i.inputs;
                                    if (s !== r && re(s, n))
                                        return;
                                    if (32 === e.which && re(s, 'button, [role^="menuitem"]'))
                                        return
                                }
                                switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(),
                                e.stopPropagation()),
                                n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    r || (t.currentTime = t.duration / 10 * (n - 48));
                                    break;
                                case 32:
                                case 75:
                                    r || be(t.togglePlay());
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    r || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    r || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                                }
                                27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(),
                                this.lastKey = n
                            } else
                                this.lastKey = null
                    }
                    toggleMenu(e) {
                        He.toggleMenu.call(this.player, e)
                    }
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
                var et = function(e, t) {
                    return function(e, t) {
                        e.exports = function() {
                            var e = function() {}
                              , t = {}
                              , i = {}
                              , n = {};
                            function s(e, t) {
                                if (e) {
                                    var s = n[e];
                                    if (i[e] = t,
                                    s)
                                        for (; s.length; )
                                            s[0](e, t),
                                            s.splice(0, 1)
                                }
                            }
                            function r(t, i) {
                                t.call && (t = {
                                    success: t
                                }),
                                i.length ? (t.error || e)(i) : (t.success || e)(t)
                            }
                            function o(t, i, n, s) {
                                var r, a, l = document, c = n.async, h = (n.numRetries || 0) + 1, u = n.before || e, d = t.replace(/[\?|#].*$/, ""), p = t.replace(/^(css|img)!/, "");
                                s = s || 0,
                                /(^css!|\.css$)/.test(d) ? ((a = l.createElement("link")).rel = "stylesheet",
                                a.href = p,
                                (r = "hideFocus"in a) && a.relList && (r = 0,
                                a.rel = "preload",
                                a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (a = l.createElement("img")).src = p : ((a = l.createElement("script")).src = t,
                                a.async = void 0 === c || c),
                                a.onload = a.onerror = a.onbeforeload = function(e) {
                                    var l = e.type[0];
                                    if (r)
                                        try {
                                            a.sheet.cssText.length || (l = "e")
                                        } catch (e) {
                                            18 != e.code && (l = "e")
                                        }
                                    if ("e" == l) {
                                        if ((s += 1) < h)
                                            return o(t, i, n, s)
                                    } else if ("preload" == a.rel && "style" == a.as)
                                        return a.rel = "stylesheet";
                                    i(t, l, e.defaultPrevented)
                                }
                                ,
                                !1 !== u(t, a) && l.head.appendChild(a)
                            }
                            function a(e, t, i) {
                                var n, s, r = (e = e.push ? e : [e]).length, a = r, l = [];
                                for (n = function(e, i, n) {
                                    if ("e" == i && l.push(e),
                                    "b" == i) {
                                        if (!n)
                                            return;
                                        l.push(e)
                                    }
                                    --r || t(l)
                                }
                                ,
                                s = 0; s < a; s++)
                                    o(e[s], n, i)
                            }
                            function l(e, i, n) {
                                var o, l;
                                if (i && i.trim && (o = i),
                                l = (o ? n : i) || {},
                                o) {
                                    if (o in t)
                                        throw "LoadJS";
                                    t[o] = !0
                                }
                                function c(t, i) {
                                    a(e, (function(e) {
                                        r(l, e),
                                        t && r({
                                            success: t,
                                            error: i
                                        }, e),
                                        s(o, e)
                                    }
                                    ), l)
                                }
                                if (l.returnPromise)
                                    return new Promise(c);
                                c()
                            }
                            return l.ready = function(e, t) {
                                return function(e, t) {
                                    e = e.push ? e : [e];
                                    var s, r, o, a = [], l = e.length, c = l;
                                    for (s = function(e, i) {
                                        i.length && a.push(e),
                                        --c || t(a)
                                    }
                                    ; l--; )
                                        r = e[l],
                                        (o = i[r]) ? s(r, o) : (n[r] = n[r] || []).push(s)
                                }(e, (function(e) {
                                    r(t, e)
                                }
                                )),
                                l
                            }
                            ,
                            l.done = function(e) {
                                s(e, [])
                            }
                            ,
                            l.reset = function() {
                                t = {},
                                i = {},
                                n = {}
                            }
                            ,
                            l.isDefined = function(e) {
                                return e in t
                            }
                            ,
                            l
                        }()
                    }(t = {
                        exports: {}
                    }),
                    t.exports
                }();
                function tt(e) {
                    return new Promise((t,i)=>{
                        et(e, {
                            success: t,
                            error: i
                        })
                    }
                    )
                }
                function it(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                    this.media.paused === e && (this.media.paused = !e,
                    ge.call(this, this.media, e ? "play" : "pause"))
                }
                const nt = {
                    setup() {
                        const e = this;
                        ne(e.elements.wrapper, e.config.classNames.embed, !0),
                        e.options.speed = e.config.speed.options,
                        xe.call(e),
                        L(window.Vimeo) ? nt.ready.call(e) : tt(e.config.urls.vimeo.sdk).then(()=>{
                            nt.ready.call(e)
                        }
                        ).catch(t=>{
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        }
                        )
                    },
                    ready() {
                        const e = this
                          , t = e.config.vimeo
                          , {premium: i, referrerPolicy: n, ...s} = t;
                        i && Object.assign(s, {
                            controls: !1,
                            sidedock: !1
                        });
                        const r = Ue({
                            loop: e.config.loop.active,
                            autoplay: e.autoplay,
                            muted: e.muted,
                            gesture: "media",
                            playsinline: !this.config.fullscreen.iosNative,
                            ...s
                        });
                        let o = e.media.getAttribute("src");
                        B(o) && (o = e.media.getAttribute(e.config.attributes.embed.id));
                        const a = B(l = o) ? null : D(Number(l)) ? l : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : l;
                        var l;
                        const c = G("iframe")
                          , h = Le(e.config.urls.vimeo.iframe, a, r);
                        if (c.setAttribute("src", h),
                        c.setAttribute("allowfullscreen", ""),
                        c.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")),
                        B(n) || c.setAttribute("referrerPolicy", n),
                        i || !t.customControls)
                            c.setAttribute("data-poster", e.poster),
                            e.media = ee(c, e.media);
                        else {
                            const t = G("div", {
                                class: e.config.classNames.embedContainer,
                                "data-poster": e.poster
                            });
                            t.appendChild(c),
                            e.media = ee(t, e.media)
                        }
                        t.customControls || Re(Le(e.config.urls.vimeo.api, h)).then(t=>{
                            !B(t) && t.thumbnail_url && Qe.setPoster.call(e, t.thumbnail_url).catch(()=>{}
                            )
                        }
                        ),
                        e.embed = new window.Vimeo.Player(c,{
                            autopause: e.config.autopause,
                            muted: e.muted
                        }),
                        e.media.paused = !0,
                        e.media.currentTime = 0,
                        e.supported.ui && e.embed.disableTextTrack(),
                        e.media.play = ()=>(it.call(e, !0),
                        e.embed.play()),
                        e.media.pause = ()=>(it.call(e, !1),
                        e.embed.pause()),
                        e.media.stop = ()=>{
                            e.pause(),
                            e.currentTime = 0
                        }
                        ;
                        let {currentTime: u} = e.media;
                        Object.defineProperty(e.media, "currentTime", {
                            get: ()=>u,
                            set(t) {
                                const {embed: i, media: n, paused: s, volume: r} = e
                                  , o = s && !i.hasPlayed;
                                n.seeking = !0,
                                ge.call(e, n, "seeking"),
                                Promise.resolve(o && i.setVolume(0)).then(()=>i.setCurrentTime(t)).then(()=>o && i.pause()).then(()=>o && i.setVolume(r)).catch(()=>{}
                                )
                            }
                        });
                        let d = e.config.speed.selected;
                        Object.defineProperty(e.media, "playbackRate", {
                            get: ()=>d,
                            set(t) {
                                e.embed.setPlaybackRate(t).then(()=>{
                                    d = t,
                                    ge.call(e, e.media, "ratechange")
                                }
                                ).catch(()=>{
                                    e.options.speed = [1]
                                }
                                )
                            }
                        });
                        let {volume: p} = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: ()=>p,
                            set(t) {
                                e.embed.setVolume(t).then(()=>{
                                    p = t,
                                    ge.call(e, e.media, "volumechange")
                                }
                                )
                            }
                        });
                        let {muted: f} = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: ()=>f,
                            set(t) {
                                const i = !!O(t) && t;
                                e.embed.setVolume(i ? 0 : e.config.volume).then(()=>{
                                    f = i,
                                    ge.call(e, e.media, "volumechange")
                                }
                                )
                            }
                        });
                        let m, {loop: g} = e.config;
                        Object.defineProperty(e.media, "loop", {
                            get: ()=>g,
                            set(t) {
                                const i = O(t) ? t : e.config.loop.active;
                                e.embed.setLoop(i).then(()=>{
                                    g = i
                                }
                                )
                            }
                        }),
                        e.embed.getVideoUrl().then(t=>{
                            m = t,
                            He.setDownloadUrl.call(e)
                        }
                        ).catch(e=>{
                            this.debug.warn(e)
                        }
                        ),
                        Object.defineProperty(e.media, "currentSrc", {
                            get: ()=>m
                        }),
                        Object.defineProperty(e.media, "ended", {
                            get: ()=>e.currentTime === e.duration
                        }),
                        Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(t=>{
                            const [i,n] = t;
                            e.embed.ratio = Pe(i, n),
                            xe.call(this)
                        }
                        ),
                        e.embed.setAutopause(e.config.autopause).then(t=>{
                            e.config.autopause = t
                        }
                        ),
                        e.embed.getVideoTitle().then(t=>{
                            e.config.title = t,
                            Qe.setTitle.call(this)
                        }
                        ),
                        e.embed.getCurrentTime().then(t=>{
                            u = t,
                            ge.call(e, e.media, "timeupdate")
                        }
                        ),
                        e.embed.getDuration().then(t=>{
                            e.media.duration = t,
                            ge.call(e, e.media, "durationchange")
                        }
                        ),
                        e.embed.getTextTracks().then(t=>{
                            e.media.textTracks = t,
                            Ve.setup.call(e)
                        }
                        ),
                        e.embed.on("cuechange", ({cues: t=[]})=>{
                            const i = t.map(e=>function(e) {
                                const t = document.createDocumentFragment()
                                  , i = document.createElement("div");
                                return t.appendChild(i),
                                i.innerHTML = e,
                                t.firstChild.innerText
                            }(e.text));
                            Ve.updateCues.call(e, i)
                        }
                        ),
                        e.embed.on("loaded", ()=>{
                            e.embed.getPaused().then(t=>{
                                it.call(e, !t),
                                t || ge.call(e, e.media, "playing")
                            }
                            ),
                            R(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
                        }
                        ),
                        e.embed.on("bufferstart", ()=>{
                            ge.call(e, e.media, "waiting")
                        }
                        ),
                        e.embed.on("bufferend", ()=>{
                            ge.call(e, e.media, "playing")
                        }
                        ),
                        e.embed.on("play", ()=>{
                            it.call(e, !0),
                            ge.call(e, e.media, "playing")
                        }
                        ),
                        e.embed.on("pause", ()=>{
                            it.call(e, !1)
                        }
                        ),
                        e.embed.on("timeupdate", t=>{
                            e.media.seeking = !1,
                            u = t.seconds,
                            ge.call(e, e.media, "timeupdate")
                        }
                        ),
                        e.embed.on("progress", t=>{
                            e.media.buffered = t.percent,
                            ge.call(e, e.media, "progress"),
                            1 === parseInt(t.percent, 10) && ge.call(e, e.media, "canplaythrough"),
                            e.embed.getDuration().then(t=>{
                                t !== e.media.duration && (e.media.duration = t,
                                ge.call(e, e.media, "durationchange"))
                            }
                            )
                        }
                        ),
                        e.embed.on("seeked", ()=>{
                            e.media.seeking = !1,
                            ge.call(e, e.media, "seeked")
                        }
                        ),
                        e.embed.on("ended", ()=>{
                            e.media.paused = !0,
                            ge.call(e, e.media, "ended")
                        }
                        ),
                        e.embed.on("error", t=>{
                            e.media.error = t,
                            ge.call(e, e.media, "error")
                        }
                        ),
                        t.customControls && setTimeout(()=>Qe.build.call(e), 0)
                    }
                };
                function st(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                    this.media.paused === e && (this.media.paused = !e,
                    ge.call(this, this.media, e ? "play" : "pause"))
                }
                function rt(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                }
                const ot = {
                    setup() {
                        if (ne(this.elements.wrapper, this.config.classNames.embed, !0),
                        L(window.YT) && N(window.YT.Player))
                            ot.ready.call(this);
                        else {
                            const e = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = ()=>{
                                N(e) && e(),
                                ot.ready.call(this)
                            }
                            ,
                            tt(this.config.urls.youtube.sdk).catch(e=>{
                                this.debug.warn("YouTube API failed to load", e)
                            }
                            )
                        }
                    },
                    getTitle(e) {
                        Re(Le(this.config.urls.youtube.api, e)).then(e=>{
                            if (L(e)) {
                                const {title: t, height: i, width: n} = e;
                                this.config.title = t,
                                Qe.setTitle.call(this),
                                this.embed.ratio = Pe(n, i)
                            }
                            xe.call(this)
                        }
                        ).catch(()=>{
                            xe.call(this)
                        }
                        )
                    },
                    ready() {
                        const e = this
                          , t = e.config.youtube
                          , i = e.media && e.media.getAttribute("id");
                        if (!B(i) && i.startsWith("youtube-"))
                            return;
                        let n = e.media.getAttribute("src");
                        B(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                        const s = B(r = n) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r;
                        var r;
                        const o = G("div", {
                            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                        if (e.media = ee(o, e.media),
                        t.customControls) {
                            const t = e=>`https://i.ytimg.com/vi/${s}/${e}default.jpg`;
                            Je(t("maxres"), 121).catch(()=>Je(t("sd"), 121)).catch(()=>Je(t("hq"))).then(t=>Qe.setPoster.call(e, t.src)).then(t=>{
                                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                            }
                            ).catch(()=>{}
                            )
                        }
                        e.embed = new window.YT.Player(e.media,{
                            videoId: s,
                            host: rt(t),
                            playerVars: Y({}, {
                                autoplay: e.config.autoplay ? 1 : 0,
                                hl: e.config.hl,
                                controls: e.supported.ui && t.customControls ? 0 : 1,
                                disablekb: 1,
                                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                cc_load_policy: e.captions.active ? 1 : 0,
                                cc_lang_pref: e.config.captions.language,
                                widget_referrer: window ? window.location.href : null
                            }, t),
                            events: {
                                onError(t) {
                                    if (!e.media.error) {
                                        const i = t.data
                                          , n = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        }[i] || "An unknown error occured";
                                        e.media.error = {
                                            code: i,
                                            message: n
                                        },
                                        ge.call(e, e.media, "error")
                                    }
                                },
                                onPlaybackRateChange(t) {
                                    const i = t.target;
                                    e.media.playbackRate = i.getPlaybackRate(),
                                    ge.call(e, e.media, "ratechange")
                                },
                                onReady(i) {
                                    if (N(e.media.play))
                                        return;
                                    const n = i.target;
                                    ot.getTitle.call(e, s),
                                    e.media.play = ()=>{
                                        st.call(e, !0),
                                        n.playVideo()
                                    }
                                    ,
                                    e.media.pause = ()=>{
                                        st.call(e, !1),
                                        n.pauseVideo()
                                    }
                                    ,
                                    e.media.stop = ()=>{
                                        n.stopVideo()
                                    }
                                    ,
                                    e.media.duration = n.getDuration(),
                                    e.media.paused = !0,
                                    e.media.currentTime = 0,
                                    Object.defineProperty(e.media, "currentTime", {
                                        get: ()=>Number(n.getCurrentTime()),
                                        set(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(),
                                            e.media.seeking = !0,
                                            ge.call(e, e.media, "seeking"),
                                            n.seekTo(t)
                                        }
                                    }),
                                    Object.defineProperty(e.media, "playbackRate", {
                                        get: ()=>n.getPlaybackRate(),
                                        set(e) {
                                            n.setPlaybackRate(e)
                                        }
                                    });
                                    let {volume: r} = e.config;
                                    Object.defineProperty(e.media, "volume", {
                                        get: ()=>r,
                                        set(t) {
                                            r = t,
                                            n.setVolume(100 * r),
                                            ge.call(e, e.media, "volumechange")
                                        }
                                    });
                                    let {muted: o} = e.config;
                                    Object.defineProperty(e.media, "muted", {
                                        get: ()=>o,
                                        set(t) {
                                            const i = O(t) ? t : o;
                                            o = i,
                                            n[i ? "mute" : "unMute"](),
                                            n.setVolume(100 * r),
                                            ge.call(e, e.media, "volumechange")
                                        }
                                    }),
                                    Object.defineProperty(e.media, "currentSrc", {
                                        get: ()=>n.getVideoUrl()
                                    }),
                                    Object.defineProperty(e.media, "ended", {
                                        get: ()=>e.currentTime === e.duration
                                    });
                                    const a = n.getAvailablePlaybackRates();
                                    e.options.speed = a.filter(t=>e.config.speed.options.includes(t)),
                                    e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1),
                                    ge.call(e, e.media, "timeupdate"),
                                    ge.call(e, e.media, "durationchange"),
                                    clearInterval(e.timers.buffering),
                                    e.timers.buffering = setInterval(()=>{
                                        e.media.buffered = n.getVideoLoadedFraction(),
                                        (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && ge.call(e, e.media, "progress"),
                                        e.media.lastBuffered = e.media.buffered,
                                        1 === e.media.buffered && (clearInterval(e.timers.buffering),
                                        ge.call(e, e.media, "canplaythrough"))
                                    }
                                    , 200),
                                    t.customControls && setTimeout(()=>Qe.build.call(e), 50)
                                },
                                onStateChange(i) {
                                    const n = i.target;
                                    switch (clearInterval(e.timers.playing),
                                    e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1,
                                    ge.call(e, e.media, "seeked")),
                                    i.data) {
                                    case -1:
                                        ge.call(e, e.media, "timeupdate"),
                                        e.media.buffered = n.getVideoLoadedFraction(),
                                        ge.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        st.call(e, !1),
                                        e.media.loop ? (n.stopVideo(),
                                        n.playVideo()) : ge.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (st.call(e, !0),
                                        ge.call(e, e.media, "playing"),
                                        e.timers.playing = setInterval(()=>{
                                            ge.call(e, e.media, "timeupdate")
                                        }
                                        , 50),
                                        e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(),
                                        ge.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(),
                                        st.call(e, !1);
                                        break;
                                    case 3:
                                        ge.call(e, e.media, "waiting")
                                    }
                                    ge.call(e, e.elements.container, "statechange", !1, {
                                        code: i.data
                                    })
                                }
                            }
                        })
                    }
                }
                  , at = {
                    setup() {
                        this.media ? (ne(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0),
                        ne(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0),
                        this.isEmbed && ne(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0),
                        this.isVideo && (this.elements.wrapper = G("div", {
                            class: this.config.classNames.video
                        }),
                        X(this.media, this.elements.wrapper),
                        this.elements.poster = G("div", {
                            class: this.config.classNames.poster
                        }),
                        this.elements.wrapper.appendChild(this.elements.poster)),
                        this.isHTML5 ? _e.setup.call(this) : this.isYouTube ? ot.setup.call(this) : this.isVimeo && nt.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                };
                class lt {
                    constructor(t) {
                        e(this, "load", ()=>{
                            this.enabled && (L(window.google) && L(window.google.ima) ? this.ready() : tt(this.player.config.urls.googleIMA.sdk).then(()=>{
                                this.ready()
                            }
                            ).catch(()=>{
                                this.trigger("error", new Error("Google IMA SDK failed to load"))
                            }
                            ))
                        }
                        ),
                        e(this, "ready", ()=>{
                            var e;
                            this.enabled || ((e = this).manager && e.manager.destroy(),
                            e.elements.displayContainer && e.elements.displayContainer.destroy(),
                            e.elements.container.remove()),
                            this.startSafetyTimer(12e3, "ready()"),
                            this.managerPromise.then(()=>{
                                this.clearSafetyTimer("onAdsManagerLoaded()")
                            }
                            ),
                            this.listeners(),
                            this.setupIMA()
                        }
                        ),
                        e(this, "setupIMA", ()=>{
                            this.elements.container = G("div", {
                                class: this.player.config.classNames.ads
                            }),
                            this.player.elements.container.appendChild(this.elements.container),
                            google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                            google.ima.settings.setLocale(this.player.config.ads.language),
                            google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),
                            this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container,this.player.media),
                            this.loader = new google.ima.AdsLoader(this.elements.displayContainer),
                            this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e=>this.onAdsManagerLoaded(e), !1),
                            this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e=>this.onAdError(e), !1),
                            this.requestAds()
                        }
                        ),
                        e(this, "requestAds", ()=>{
                            const {container: e} = this.player.elements;
                            try {
                                const t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl,
                                t.linearAdSlotWidth = e.offsetWidth,
                                t.linearAdSlotHeight = e.offsetHeight,
                                t.nonLinearAdSlotWidth = e.offsetWidth,
                                t.nonLinearAdSlotHeight = e.offsetHeight,
                                t.forceNonLinearFullSlot = !1,
                                t.setAdWillPlayMuted(!this.player.muted),
                                this.loader.requestAds(t)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        }
                        ),
                        e(this, "pollCountdown", (e=!1)=>{
                            if (!e)
                                return clearInterval(this.countdownTimer),
                                void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval(()=>{
                                const e = ze(Math.max(this.manager.getRemainingTime(), 0))
                                  , t = `${Ie.get("advertisement", this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t)
                            }
                            , 100)
                        }
                        ),
                        e(this, "onAdsManagerLoaded", e=>{
                            if (!this.enabled)
                                return;
                            const t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                            t.enablePreloading = !0,
                            this.manager = e.getAdsManager(this.player, t),
                            this.cuePoints = this.manager.getCuePoints(),
                            this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e=>this.onAdError(e)),
                            Object.keys(google.ima.AdEvent.Type).forEach(e=>{
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], e=>this.onAdEvent(e))
                            }
                            ),
                            this.trigger("loaded")
                        }
                        ),
                        e(this, "addCuePoints", ()=>{
                            B(this.cuePoints) || this.cuePoints.forEach(e=>{
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    const t = this.player.elements.progress;
                                    if (R(t)) {
                                        const i = 100 / this.player.duration * e
                                          , n = G("span", {
                                            class: this.player.config.classNames.cues
                                        });
                                        n.style.left = i.toString() + "%",
                                        t.appendChild(n)
                                    }
                                }
                            }
                            )
                        }
                        ),
                        e(this, "onAdEvent", e=>{
                            const {container: t} = this.player.elements
                              , i = e.getAd()
                              , n = e.getAdData();
                            switch ((e=>{
                                ge.call(this.player, this.player.media, "ads" + e.replace(/_/g, "").toLowerCase())
                            }
                            )(e.type),
                            e.type) {
                            case google.ima.AdEvent.Type.LOADED:
                                this.trigger("loaded"),
                                this.pollCountdown(!0),
                                i.isLinear() || (i.width = t.offsetWidth,
                                i.height = t.offsetHeight);
                                break;
                            case google.ima.AdEvent.Type.STARTED:
                                this.manager.setVolume(this.player.volume);
                                break;
                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                break;
                            case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                this.pauseContent();
                                break;
                            case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                this.pollCountdown(),
                                this.resumeContent();
                                break;
                            case google.ima.AdEvent.Type.LOG:
                                n.adError && this.player.debug.warn("Non-fatal ad error: " + n.adError.getMessage())
                            }
                        }
                        ),
                        e(this, "onAdError", e=>{
                            this.cancel(),
                            this.player.debug.warn("Ads error", e)
                        }
                        ),
                        e(this, "listeners", ()=>{
                            const {container: e} = this.player.elements;
                            let t;
                            this.player.on("canplay", ()=>{
                                this.addCuePoints()
                            }
                            ),
                            this.player.on("ended", ()=>{
                                this.loader.contentComplete()
                            }
                            ),
                            this.player.on("timeupdate", ()=>{
                                t = this.player.currentTime
                            }
                            ),
                            this.player.on("seeked", ()=>{
                                const e = this.player.currentTime;
                                B(this.cuePoints) || this.cuePoints.forEach((i,n)=>{
                                    t < i && i < e && (this.manager.discardAdBreak(),
                                    this.cuePoints.splice(n, 1))
                                }
                                )
                            }
                            ),
                            window.addEventListener("resize", ()=>{
                                this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                            }
                            )
                        }
                        ),
                        e(this, "play", ()=>{
                            const {container: e} = this.player.elements;
                            this.managerPromise || this.resumeContent(),
                            this.managerPromise.then(()=>{
                                this.manager.setVolume(this.player.volume),
                                this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL),
                                    this.manager.start()),
                                    this.initialized = !0
                                } catch (e) {
                                    this.onAdError(e)
                                }
                            }
                            ).catch(()=>{}
                            )
                        }
                        ),
                        e(this, "resumeContent", ()=>{
                            this.elements.container.style.zIndex = "",
                            this.playing = !1,
                            be(this.player.media.play())
                        }
                        ),
                        e(this, "pauseContent", ()=>{
                            this.elements.container.style.zIndex = 3,
                            this.playing = !0,
                            this.player.media.pause()
                        }
                        ),
                        e(this, "cancel", ()=>{
                            this.initialized && this.resumeContent(),
                            this.trigger("error"),
                            this.loadAds()
                        }
                        ),
                        e(this, "loadAds", ()=>{
                            this.managerPromise.then(()=>{
                                this.manager && this.manager.destroy(),
                                this.managerPromise = new Promise(e=>{
                                    this.on("loaded", e),
                                    this.player.debug.log(this.manager)
                                }
                                ),
                                this.initialized = !1,
                                this.requestAds()
                            }
                            ).catch(()=>{}
                            )
                        }
                        ),
                        e(this, "trigger", (e,...t)=>{
                            const i = this.events[e];
                            I(i) && i.forEach(e=>{
                                N(e) && e.apply(this, t)
                            }
                            )
                        }
                        ),
                        e(this, "on", (e,t)=>(I(this.events[e]) || (this.events[e] = []),
                        this.events[e].push(t),
                        this)),
                        e(this, "startSafetyTimer", (e,t)=>{
                            this.player.debug.log("Safety timer invoked from: " + t),
                            this.safetyTimer = setTimeout(()=>{
                                this.cancel(),
                                this.clearSafetyTimer("startSafetyTimer()")
                            }
                            , e)
                        }
                        ),
                        e(this, "clearSafetyTimer", e=>{
                            _(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e),
                            clearTimeout(this.safetyTimer),
                            this.safetyTimer = null)
                        }
                        ),
                        this.player = t,
                        this.config = t.config.ads,
                        this.playing = !1,
                        this.initialized = !1,
                        this.elements = {
                            container: null,
                            displayContainer: null
                        },
                        this.manager = null,
                        this.loader = null,
                        this.cuePoints = null,
                        this.events = {},
                        this.safetyTimer = null,
                        this.countdownTimer = null,
                        this.managerPromise = new Promise((e,t)=>{
                            this.on("loaded", e),
                            this.on("error", t)
                        }
                        ),
                        this.load()
                    }
                    get enabled() {
                        const {config: e} = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!B(e.publisherId) || H(e.tagUrl))
                    }
                    get tagUrl() {
                        const {config: e} = this;
                        return H(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + Ue({
                            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                            AV_CHANNELID: "5a0458dc28a06145e4519d21",
                            AV_URL: window.location.hostname,
                            cb: Date.now(),
                            AV_WIDTH: 640,
                            AV_HEIGHT: 480,
                            AV_CDIM2: e.publisherId
                        })
                    }
                }
                const ct = e=>{
                    const t = [];
                    return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e=>{
                        const i = {};
                        e.split(/\r\n|\n|\r/).forEach(e=>{
                            if (D(i.startTime)) {
                                if (!B(e.trim()) && B(i.text)) {
                                    const t = e.trim().split("#xywh=");
                                    [i.text] = t,
                                    t[1] && ([i.x,i.y,i.w,i.h] = t[1].split(","))
                                }
                            } else {
                                const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number("0." + t[4]),
                                i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number("0." + t[9]))
                            }
                        }
                        ),
                        i.text && t.push(i)
                    }
                    ),
                    t
                }
                  , ht = (e,t)=>{
                    const i = {};
                    return e > t.width / t.height ? (i.width = t.width,
                    i.height = 1 / e * t.width) : (i.height = t.height,
                    i.width = e * t.height),
                    i
                }
                ;
                class ut {
                    constructor(t) {
                        e(this, "load", ()=>{
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled),
                            this.enabled && this.getThumbnails().then(()=>{
                                this.enabled && (this.render(),
                                this.determineContainerAutoSizing(),
                                this.loaded = !0)
                            }
                            )
                        }
                        ),
                        e(this, "getThumbnails", ()=>new Promise(e=>{
                            const {src: t} = this.player.config.previewThumbnails;
                            if (B(t))
                                throw new Error("Missing previewThumbnails.src config attribute");
                            const i = ()=>{
                                this.thumbnails.sort((e,t)=>e.height - t.height),
                                this.player.debug.log("Preview thumbnails", this.thumbnails),
                                e()
                            }
                            ;
                            if (N(t))
                                t(e=>{
                                    this.thumbnails = e,
                                    i()
                                }
                                );
                            else {
                                const e = (M(t) ? [t] : t).map(e=>this.getThumbnail(e));
                                Promise.all(e).then(i)
                            }
                        }
                        )),
                        e(this, "getThumbnail", e=>new Promise(t=>{
                            Re(e).then(i=>{
                                const n = {
                                    frames: ct(i),
                                    height: null,
                                    urlPrefix: ""
                                };
                                n.frames[0].text.startsWith("/") || n.frames[0].text.startsWith("http://") || n.frames[0].text.startsWith("https://") || (n.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                const s = new Image;
                                s.onload = ()=>{
                                    n.height = s.naturalHeight,
                                    n.width = s.naturalWidth,
                                    this.thumbnails.push(n),
                                    t()
                                }
                                ,
                                s.src = n.urlPrefix + n.frames[0].text
                            }
                            )
                        }
                        )),
                        e(this, "startMove", e=>{
                            if (this.loaded && q(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type)
                                    this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                else {
                                    const t = this.player.elements.progress.getBoundingClientRect()
                                      , i = 100 / t.width * (e.pageX - t.left);
                                    this.seekTime = this.player.media.duration * (i / 100),
                                    this.seekTime < 0 && (this.seekTime = 0),
                                    this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1),
                                    this.mousePosX = e.pageX,
                                    this.elements.thumb.time.innerText = ze(this.seekTime)
                                }
                                this.showImageAtCurrentTime()
                            }
                        }
                        ),
                        e(this, "endMove", ()=>{
                            this.toggleThumbContainer(!1, !0)
                        }
                        ),
                        e(this, "startScrubbing", e=>{
                            (_(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0,
                            this.player.media.duration && (this.toggleScrubbingContainer(!0),
                            this.toggleThumbContainer(!1, !0),
                            this.showImageAtCurrentTime()))
                        }
                        ),
                        e(this, "endScrubbing", ()=>{
                            this.mouseDown = !1,
                            Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : me.call(this.player, this.player.media, "timeupdate", ()=>{
                                this.mouseDown || this.toggleScrubbingContainer(!1)
                            }
                            )
                        }
                        ),
                        e(this, "listeners", ()=>{
                            this.player.on("play", ()=>{
                                this.toggleThumbContainer(!1, !0)
                            }
                            ),
                            this.player.on("seeked", ()=>{
                                this.toggleThumbContainer(!1)
                            }
                            ),
                            this.player.on("timeupdate", ()=>{
                                this.lastTime = this.player.media.currentTime
                            }
                            )
                        }
                        ),
                        e(this, "render", ()=>{
                            this.elements.thumb.container = G("div", {
                                class: this.player.config.classNames.previewThumbnails.thumbContainer
                            }),
                            this.elements.thumb.imageContainer = G("div", {
                                class: this.player.config.classNames.previewThumbnails.imageContainer
                            }),
                            this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            const e = G("div", {
                                class: this.player.config.classNames.previewThumbnails.timeContainer
                            });
                            this.elements.thumb.time = G("span", {}, "00:00"),
                            e.appendChild(this.elements.thumb.time),
                            this.elements.thumb.container.appendChild(e),
                            R(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container),
                            this.elements.scrubbing.container = G("div", {
                                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                            }),
                            this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        }
                        ),
                        e(this, "destroy", ()=>{
                            this.elements.thumb.container && this.elements.thumb.container.remove(),
                            this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                        }
                        ),
                        e(this, "showImageAtCurrentTime", ()=>{
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            const e = this.thumbnails[0].frames.findIndex(e=>this.seekTime >= e.startTime && this.seekTime <= e.endTime)
                              , t = e >= 0;
                            let i = 0;
                            this.mouseDown || this.toggleThumbContainer(t),
                            t && (this.thumbnails.forEach((t,n)=>{
                                this.loadedImages.includes(t.frames[e].text) && (i = n)
                            }
                            ),
                            e !== this.showingThumb && (this.showingThumb = e,
                            this.loadImage(i)))
                        }
                        ),
                        e(this, "loadImage", (e=0)=>{
                            const t = this.showingThumb
                              , i = this.thumbnails[e]
                              , {urlPrefix: n} = i
                              , s = i.frames[t]
                              , r = i.frames[t].text
                              , o = n + r;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === r)
                                this.showImage(this.currentImageElement, s, e, t, r, !1),
                                this.currentImageElement.dataset.index = t,
                                this.removeOldImages(this.currentImageElement);
                            else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                const i = new Image;
                                i.src = o,
                                i.dataset.index = t,
                                i.dataset.filename = r,
                                this.showingThumbFilename = r,
                                this.player.debug.log("Loading image: " + o),
                                i.onload = ()=>this.showImage(i, s, e, t, r, !0),
                                this.loadingImage = i,
                                this.removeOldImages(i)
                            }
                        }
                        ),
                        e(this, "showImage", (e,t,i,n,s,r=!0)=>{
                            this.player.debug.log(`Showing thumb: ${s}. num: ${n}. qual: ${i}. newimg: ${r}`),
                            this.setImageSizeAndOffset(e, t),
                            r && (this.currentImageContainer.appendChild(e),
                            this.currentImageElement = e,
                            this.loadedImages.includes(s) || this.loadedImages.push(s)),
                            this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, s))
                        }
                        ),
                        e(this, "removeOldImages", e=>{
                            Array.from(this.currentImageContainer.children).forEach(t=>{
                                if ("img" !== t.tagName.toLowerCase())
                                    return;
                                const i = this.usingSprites ? 500 : 1e3;
                                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                    t.dataset.deleting = !0;
                                    const {currentImageContainer: e} = this;
                                    setTimeout(()=>{
                                        e.removeChild(t),
                                        this.player.debug.log("Removing thumb: " + t.dataset.filename)
                                    }
                                    , i)
                                }
                            }
                            )
                        }
                        ),
                        e(this, "preloadNearby", (e,t=!0)=>new Promise(i=>{
                            setTimeout(()=>{
                                const n = this.thumbnails[0].frames[e].text;
                                if (this.showingThumbFilename === n) {
                                    let s;
                                    s = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                    let r = !1;
                                    s.forEach(e=>{
                                        const t = e.text;
                                        if (t !== n && !this.loadedImages.includes(t)) {
                                            r = !0,
                                            this.player.debug.log("Preloading thumb filename: " + t);
                                            const {urlPrefix: e} = this.thumbnails[0]
                                              , n = e + t
                                              , s = new Image;
                                            s.src = n,
                                            s.onload = ()=>{
                                                this.player.debug.log("Preloaded thumb filename: " + t),
                                                this.loadedImages.includes(t) || this.loadedImages.push(t),
                                                i()
                                            }
                                        }
                                    }
                                    ),
                                    r || i()
                                }
                            }
                            , 300)
                        }
                        )),
                        e(this, "getHigherQuality", (e,t,i,n)=>{
                            if (e < this.thumbnails.length - 1) {
                                let s = t.naturalHeight;
                                this.usingSprites && (s = i.h),
                                s < this.thumbContainerHeight && setTimeout(()=>{
                                    this.showingThumbFilename === n && (this.player.debug.log("Showing higher quality thumb for: " + n),
                                    this.loadImage(e + 1))
                                }
                                , 300)
                            }
                        }
                        ),
                        e(this, "toggleThumbContainer", (e=!1,t=!1)=>{
                            const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(i, e),
                            !e && t && (this.showingThumb = null,
                            this.showingThumbFilename = null)
                        }
                        ),
                        e(this, "toggleScrubbingContainer", (e=!1)=>{
                            const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e),
                            e || (this.showingThumb = null,
                            this.showingThumbFilename = null)
                        }
                        ),
                        e(this, "determineContainerAutoSizing", ()=>{
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        }
                        ),
                        e(this, "setThumbContainerSizeAndPos", ()=>{
                            if (this.sizeSpecifiedInCSS) {
                                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                    const e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.width = e + "px"
                                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                    const e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.height = e + "px"
                                }
                            } else {
                                const e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                this.elements.thumb.imageContainer.style.height = this.thumbContainerHeight + "px",
                                this.elements.thumb.imageContainer.style.width = e + "px"
                            }
                            this.setThumbContainerPos()
                        }
                        ),
                        e(this, "setThumbContainerPos", ()=>{
                            const e = this.player.elements.progress.getBoundingClientRect()
                              , t = this.player.elements.container.getBoundingClientRect()
                              , {container: i} = this.elements.thumb
                              , n = t.left - e.left + 10
                              , s = t.right - e.left - i.clientWidth - 10;
                            let r = this.mousePosX - e.left - i.clientWidth / 2;
                            r < n && (r = n),
                            r > s && (r = s),
                            i.style.left = r + "px"
                        }
                        ),
                        e(this, "setScrubbingContainerSize", ()=>{
                            const {width: e, height: t} = ht(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            this.elements.scrubbing.container.style.width = e + "px",
                            this.elements.scrubbing.container.style.height = t + "px"
                        }
                        ),
                        e(this, "setImageSizeAndOffset", (e,t)=>{
                            if (!this.usingSprites)
                                return;
                            const i = this.thumbContainerHeight / t.h;
                            e.style.height = e.naturalHeight * i + "px",
                            e.style.width = e.naturalWidth * i + "px",
                            e.style.left = `-${t.x * i}px`,
                            e.style.top = `-${t.y * i}px`
                        }
                        ),
                        this.player = t,
                        this.thumbnails = [],
                        this.loaded = !1,
                        this.lastMouseMoveTime = Date.now(),
                        this.mouseDown = !1,
                        this.loadedImages = [],
                        this.elements = {
                            thumb: {},
                            scrubbing: {}
                        },
                        this.load()
                    }
                    get enabled() {
                        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                    }
                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                    }
                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                    }
                    get thumbAspectRatio() {
                        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                    }
                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            const {height: e} = ht(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            return e
                        }
                        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                    }
                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                    }
                    set currentImageElement(e) {
                        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                    }
                }
                const dt = {
                    insertElements(e, t) {
                        M(t) ? J(e, this.media, {
                            src: t
                        }) : I(t) && t.forEach(t=>{
                            J(e, this.media, t)
                        }
                        )
                    },
                    change(e) {
                        $(e, "sources.length") ? (_e.cancelRequests.call(this),
                        this.destroy.call(this, ()=>{
                            this.options.quality = [],
                            Q(this.media),
                            this.media = null,
                            R(this.elements.container) && this.elements.container.removeAttribute("class");
                            const {sources: t, type: i} = e
                              , [{provider: n=Ye.html5, src: s}] = t
                              , r = "html5" === n ? i : "div"
                              , o = "html5" === n ? {} : {
                                src: s
                            };
                            Object.assign(this, {
                                provider: n,
                                type: i,
                                supported: he.check(i, n, this.config.playsinline),
                                media: G(r, o)
                            }),
                            this.elements.container.appendChild(this.media),
                            O(e.autoplay) && (this.config.autoplay = e.autoplay),
                            this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""),
                            this.config.autoplay && this.media.setAttribute("autoplay", ""),
                            B(e.poster) || (this.poster = e.poster),
                            this.config.loop.active && this.media.setAttribute("loop", ""),
                            this.config.muted && this.media.setAttribute("muted", ""),
                            this.config.playsinline && this.media.setAttribute("playsinline", "")),
                            Qe.addStyleHook.call(this),
                            this.isHTML5 && dt.insertElements.call(this, "source", t),
                            this.config.title = e.title,
                            at.setup.call(this),
                            this.isHTML5 && Object.keys(e).includes("tracks") && dt.insertElements.call(this, "track", e.tracks),
                            (this.isHTML5 || this.isEmbed && !this.supported.ui) && Qe.build.call(this),
                            this.isHTML5 && this.media.load(),
                            B(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails),
                            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(),
                            this.previewThumbnails = null),
                            this.config.previewThumbnails.enabled && (this.previewThumbnails = new ut(this))),
                            this.fullscreen.update()
                        }
                        , !0)) : this.debug.warn("Invalid source format")
                    }
                };
                class pt {
                    constructor(t, i) {
                        if (e(this, "play", ()=>N(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>be(this.media.play())),
                        this.media.play()) : null),
                        e(this, "pause", ()=>this.playing && N(this.media.pause) ? this.media.pause() : null),
                        e(this, "togglePlay", e=>(O(e) ? e : !this.playing) ? this.play() : this.pause()),
                        e(this, "stop", ()=>{
                            this.isHTML5 ? (this.pause(),
                            this.restart()) : N(this.media.stop) && this.media.stop()
                        }
                        ),
                        e(this, "restart", ()=>{
                            this.currentTime = 0
                        }
                        ),
                        e(this, "rewind", e=>{
                            this.currentTime -= D(e) ? e : this.config.seekTime
                        }
                        ),
                        e(this, "forward", e=>{
                            this.currentTime += D(e) ? e : this.config.seekTime
                        }
                        ),
                        e(this, "increaseVolume", e=>{
                            const t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (D(e) ? e : 0)
                        }
                        ),
                        e(this, "decreaseVolume", e=>{
                            this.increaseVolume(-e)
                        }
                        ),
                        e(this, "airplay", ()=>{
                            he.airplay && this.media.webkitShowPlaybackTargetPicker()
                        }
                        ),
                        e(this, "toggleControls", e=>{
                            if (this.supported.ui && !this.isAudio) {
                                const t = se(this.elements.container, this.config.classNames.hideControls)
                                  , i = void 0 === e ? void 0 : !e
                                  , n = ne(this.elements.container, this.config.classNames.hideControls, i);
                                if (n && I(this.config.controls) && this.config.controls.includes("settings") && !B(this.config.settings) && He.toggleMenu.call(this, !1),
                                n !== t) {
                                    const e = n ? "controlshidden" : "controlsshown";
                                    ge.call(this, this.media, e)
                                }
                                return !n
                            }
                            return !1
                        }
                        ),
                        e(this, "on", (e,t)=>{
                            pe.call(this, this.elements.container, e, t)
                        }
                        ),
                        e(this, "once", (e,t)=>{
                            me.call(this, this.elements.container, e, t)
                        }
                        ),
                        e(this, "off", (e,t)=>{
                            fe(this.elements.container, e, t)
                        }
                        ),
                        e(this, "destroy", (e,t=!1)=>{
                            if (!this.ready)
                                return;
                            const i = ()=>{
                                document.body.style.overflow = "",
                                this.embed = null,
                                t ? (Object.keys(this.elements).length && (Q(this.elements.buttons.play),
                                Q(this.elements.captions),
                                Q(this.elements.controls),
                                Q(this.elements.wrapper),
                                this.elements.buttons.play = null,
                                this.elements.captions = null,
                                this.elements.controls = null,
                                this.elements.wrapper = null),
                                N(e) && e()) : (ye.call(this),
                                _e.cancelRequests.call(this),
                                ee(this.elements.original, this.elements.container),
                                ge.call(this, this.elements.original, "destroyed", !0),
                                N(e) && e.call(this.elements.original),
                                this.ready = !1,
                                setTimeout(()=>{
                                    this.elements = null,
                                    this.media = null
                                }
                                , 200))
                            }
                            ;
                            this.stop(),
                            clearTimeout(this.timers.loading),
                            clearTimeout(this.timers.controls),
                            clearTimeout(this.timers.resized),
                            this.isHTML5 ? (Qe.toggleNativeControls.call(this, !0),
                            i()) : this.isYouTube ? (clearInterval(this.timers.buffering),
                            clearInterval(this.timers.playing),
                            null !== this.embed && N(this.embed.destroy) && this.embed.destroy(),
                            i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i),
                            setTimeout(i, 200))
                        }
                        ),
                        e(this, "supports", e=>he.mime.call(this, e)),
                        this.timers = {},
                        this.ready = !1,
                        this.loading = !1,
                        this.failed = !1,
                        this.touch = he.touch,
                        this.media = t,
                        M(this.media) && (this.media = document.querySelectorAll(this.media)),
                        (window.jQuery && this.media instanceof jQuery || j(this.media) || I(this.media)) && (this.media = this.media[0]),
                        this.config = Y({}, We, pt.defaults, i || {}, (()=>{
                            try {
                                return JSON.parse(this.media.getAttribute("data-plyr-config"))
                            } catch (e) {
                                return {}
                            }
                        }
                        )()),
                        this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {
                                popup: null,
                                menu: null,
                                panels: {},
                                buttons: {}
                            }
                        },
                        this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap
                        },
                        this.fullscreen = {
                            active: !1
                        },
                        this.options = {
                            speed: [],
                            quality: []
                        },
                        this.debug = new Ke(this.config.debug),
                        this.debug.log("Config", this.config),
                        this.debug.log("Support", he),
                        _(this.media) || !R(this.media))
                            return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr)
                            return void this.debug.warn("Target already setup");
                        if (!this.config.enabled)
                            return void this.debug.error("Setup failed: disabled by config");
                        if (!he.check().api)
                            return void this.debug.error("Setup failed: no support");
                        const n = this.media.cloneNode(!0);
                        n.autoplay = !1,
                        this.elements.original = n;
                        const s = this.media.tagName.toLowerCase();
                        let r = null
                          , o = null;
                        switch (s) {
                        case "div":
                            if (r = this.media.querySelector("iframe"),
                            R(r)) {
                                if (o = Be(r.getAttribute("src")),
                                this.provider = function(e) {
                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Ye.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Ye.vimeo : null
                                }(o.toString()),
                                this.elements.container = this.media,
                                this.media = r,
                                this.elements.container.className = "",
                                o.search.length) {
                                    const e = ["1", "true"];
                                    e.includes(o.searchParams.get("autoplay")) && (this.config.autoplay = !0),
                                    e.includes(o.searchParams.get("loop")) && (this.config.loop.active = !0),
                                    this.isYouTube ? (this.config.playsinline = e.includes(o.searchParams.get("playsinline")),
                                    this.config.youtube.hl = o.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else
                                this.provider = this.media.getAttribute(this.config.attributes.embed.provider),
                                this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (B(this.provider) || !Object.values(Ye).includes(this.provider))
                                return void this.debug.error("Setup failed: Invalid provider");
                            this.type = "video";
                            break;
                        case "video":
                        case "audio":
                            this.type = s,
                            this.provider = Ye.html5,
                            this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0),
                            this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
                            (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0),
                            this.media.hasAttribute("muted") && (this.config.muted = !0),
                            this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = he.check(this.type, this.provider, this.config.playsinline),
                        this.supported.api ? (this.eventListeners = [],
                        this.listeners = new Ze(this),
                        this.storage = new je(this),
                        this.media.plyr = this,
                        R(this.elements.container) || (this.elements.container = G("div", {
                            tabindex: 0
                        }),
                        X(this.media, this.elements.container)),
                        Qe.migrateStyles.call(this),
                        Qe.addStyleHook.call(this),
                        at.setup.call(this),
                        this.config.debug && pe.call(this, this.elements.container, this.config.events.join(" "), e=>{
                            this.debug.log("event: " + e.type)
                        }
                        ),
                        this.fullscreen = new Ge(this),
                        (this.isHTML5 || this.isEmbed && !this.supported.ui) && Qe.build.call(this),
                        this.listeners.container(),
                        this.listeners.global(),
                        this.config.ads.enabled && (this.ads = new lt(this)),
                        this.isHTML5 && this.config.autoplay && this.once("canplay", ()=>be(this.play())),
                        this.lastSeekTime = 0,
                        this.config.previewThumbnails.enabled && (this.previewThumbnails = new ut(this))) : this.debug.error("Setup failed: no support")
                    }
                    get isHTML5() {
                        return this.provider === Ye.html5
                    }
                    get isEmbed() {
                        return this.isYouTube || this.isVimeo
                    }
                    get isYouTube() {
                        return this.provider === Ye.youtube
                    }
                    get isVimeo() {
                        return this.provider === Ye.vimeo
                    }
                    get isVideo() {
                        return "video" === this.type
                    }
                    get isAudio() {
                        return "audio" === this.type
                    }
                    get playing() {
                        return Boolean(this.ready && !this.paused && !this.ended)
                    }
                    get paused() {
                        return Boolean(this.media.paused)
                    }
                    get stopped() {
                        return Boolean(this.paused && 0 === this.currentTime)
                    }
                    get ended() {
                        return Boolean(this.media.ended)
                    }
                    set currentTime(e) {
                        if (!this.duration)
                            return;
                        const t = D(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0,
                        this.debug.log(`Seeking to ${this.currentTime} seconds`)
                    }
                    get currentTime() {
                        return Number(this.media.currentTime)
                    }
                    get buffered() {
                        const {buffered: e} = this.media;
                        return D(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                    }
                    get seeking() {
                        return Boolean(this.media.seeking)
                    }
                    get duration() {
                        const e = parseFloat(this.config.duration)
                          , t = (this.media || {}).duration
                          , i = D(t) && t !== 1 / 0 ? t : 0;
                        return e || i
                    }
                    set volume(e) {
                        let t = e;
                        M(t) && (t = Number(t)),
                        D(t) || (t = this.storage.get("volume")),
                        D(t) || ({volume: t} = this.config),
                        t > 1 && (t = 1),
                        t < 0 && (t = 0),
                        this.config.volume = t,
                        this.media.volume = t,
                        !B(e) && this.muted && t > 0 && (this.muted = !1)
                    }
                    get volume() {
                        return Number(this.media.volume)
                    }
                    set muted(e) {
                        let t = e;
                        O(t) || (t = this.storage.get("muted")),
                        O(t) || (t = this.config.muted),
                        this.config.muted = t,
                        this.media.muted = t
                    }
                    get muted() {
                        return Boolean(this.media.muted)
                    }
                    get hasAudio() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                    }
                    set speed(e) {
                        let t = null;
                        D(e) && (t = e),
                        D(t) || (t = this.storage.get("speed")),
                        D(t) || (t = this.config.speed.selected);
                        const {minimumSpeed: i, maximumSpeed: n} = this;
                        t = function(e=0, t=0, i=255) {
                            return Math.min(Math.max(e, t), i)
                        }(t, i, n),
                        this.config.speed.selected = t,
                        setTimeout(()=>{
                            this.media.playbackRate = t
                        }
                        , 0)
                    }
                    get speed() {
                        return Number(this.media.playbackRate)
                    }
                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
                    }
                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
                    }
                    set quality(e) {
                        const t = this.config.quality
                          , i = this.options.quality;
                        if (!i.length)
                            return;
                        let n = [!B(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(D)
                          , s = !0;
                        if (!i.includes(n)) {
                            const e = Te(i, n);
                            this.debug.warn(`Unsupported quality option: ${n}, using ${e} instead`),
                            n = e,
                            s = !1
                        }
                        t.selected = n,
                        this.media.quality = n,
                        s && this.storage.set({
                            quality: n
                        })
                    }
                    get quality() {
                        return this.media.quality
                    }
                    set loop(e) {
                        const t = O(e) ? e : this.config.loop.active;
                        this.config.loop.active = t,
                        this.media.loop = t
                    }
                    get loop() {
                        return Boolean(this.media.loop)
                    }
                    set source(e) {
                        dt.change.call(this, e)
                    }
                    get source() {
                        return this.media.currentSrc
                    }
                    get download() {
                        const {download: e} = this.config.urls;
                        return H(e) ? e : this.source
                    }
                    set download(e) {
                        H(e) && (this.config.urls.download = e,
                        He.setDownloadUrl.call(this))
                    }
                    set poster(e) {
                        this.isVideo ? Qe.setPoster.call(this, e, !1).catch(()=>{}
                        ) : this.debug.warn("Poster can only be set for video")
                    }
                    get poster() {
                        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                    }
                    get ratio() {
                        if (!this.isVideo)
                            return null;
                        const e = Ce(Ae.call(this));
                        return I(e) ? e.join(":") : e
                    }
                    set ratio(e) {
                        this.isVideo ? M(e) && Se(e) ? (this.config.ratio = Ce(e),
                        xe.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
                    }
                    set autoplay(e) {
                        const t = O(e) ? e : this.config.autoplay;
                        this.config.autoplay = t
                    }
                    get autoplay() {
                        return Boolean(this.config.autoplay)
                    }
                    toggleCaptions(e) {
                        Ve.toggle.call(this, e, !1)
                    }
                    set currentTrack(e) {
                        Ve.set.call(this, e, !1)
                    }
                    get currentTrack() {
                        const {toggled: e, currentTrack: t} = this.captions;
                        return e ? t : -1
                    }
                    set language(e) {
                        Ve.setLanguage.call(this, e, !1)
                    }
                    get language() {
                        return (Ve.getCurrentTrack.call(this) || {}).language
                    }
                    set pip(e) {
                        if (!he.pip)
                            return;
                        const t = O(e) ? e : !this.pip;
                        N(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? $e : "inline"),
                        N(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }
                    get pip() {
                        return he.pip ? B(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === $e : null
                    }
                    static supported(e, t, i) {
                        return he.check(e, t, i)
                    }
                    static loadSprite(e, t) {
                        return qe(e, t)
                    }
                    static setup(e, t={}) {
                        let i = null;
                        return M(e) ? i = Array.from(document.querySelectorAll(e)) : j(e) ? i = Array.from(e) : I(e) && (i = e.filter(R)),
                        B(i) ? null : i.map(e=>new pt(e,t))
                    }
                }
                var ft;
                return pt.defaults = (ft = We,
                JSON.parse(JSON.stringify(ft))),
                pt
            }())
        }
        ).call(this, i("yLpj"))
    },
    YVj6: function(e, t, i) {
        var n, s;
        !function(r, o) {
            n = [i("x0Ue")],
            void 0 === (s = function(e) {
                return function(e, t) {
                    "use strict";
                    var i = {
                        extend: function(e, t) {
                            for (var i in t)
                                e[i] = t[i];
                            return e
                        },
                        modulo: function(e, t) {
                            return (e % t + t) % t
                        }
                    }
                      , n = Array.prototype.slice;
                    i.makeArray = function(e) {
                        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? n.call(e) : [e]
                    }
                    ,
                    i.removeFrom = function(e, t) {
                        var i = e.indexOf(t);
                        -1 != i && e.splice(i, 1)
                    }
                    ,
                    i.getParent = function(e, i) {
                        for (; e.parentNode && e != document.body; )
                            if (e = e.parentNode,
                            t(e, i))
                                return e
                    }
                    ,
                    i.getQueryElement = function(e) {
                        return "string" == typeof e ? document.querySelector(e) : e
                    }
                    ,
                    i.handleEvent = function(e) {
                        var t = "on" + e.type;
                        this[t] && this[t](e)
                    }
                    ,
                    i.filterFindElements = function(e, n) {
                        e = i.makeArray(e);
                        var s = [];
                        return e.forEach((function(e) {
                            if (e instanceof HTMLElement)
                                if (n) {
                                    t(e, n) && s.push(e);
                                    for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++)
                                        s.push(i[r])
                                } else
                                    s.push(e)
                        }
                        )),
                        s
                    }
                    ,
                    i.debounceMethod = function(e, t, i) {
                        i = i || 100;
                        var n = e.prototype[t]
                          , s = t + "Timeout";
                        e.prototype[t] = function() {
                            var e = this[s];
                            clearTimeout(e);
                            var t = arguments
                              , r = this;
                            this[s] = setTimeout((function() {
                                n.apply(r, t),
                                delete r[s]
                            }
                            ), i)
                        }
                    }
                    ,
                    i.docReady = function(e) {
                        var t = document.readyState;
                        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
                    }
                    ,
                    i.toDashed = function(e) {
                        return e.replace(/(.)([A-Z])/g, (function(e, t, i) {
                            return t + "-" + i
                        }
                        )).toLowerCase()
                    }
                    ;
                    var s = e.console;
                    return i.htmlInit = function(t, n) {
                        i.docReady((function() {
                            var r = i.toDashed(n)
                              , o = "data-" + r
                              , a = document.querySelectorAll("[" + o + "]")
                              , l = document.querySelectorAll(".js-" + r)
                              , c = i.makeArray(a).concat(i.makeArray(l))
                              , h = o + "-options"
                              , u = e.jQuery;
                            c.forEach((function(e) {
                                var i, r = e.getAttribute(o) || e.getAttribute(h);
                                try {
                                    i = r && JSON.parse(r)
                                } catch (t) {
                                    return void (s && s.error("Error parsing " + o + " on " + e.className + ": " + t))
                                }
                                var a = new t(e,i);
                                u && u.data(e, n, a)
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    i
                }(r, e)
            }
            .apply(t, n)) || (e.exports = s)
        }(window)
    },
    dlLY: function(e, t, i) {
        var n, s;
        window,
        void 0 === (s = "function" == typeof (n = function() {
            "use strict";
            function e(e) {
                this.parent = e,
                this.isOriginLeft = "left" == e.originSide,
                this.cells = [],
                this.outerWidth = 0,
                this.height = 0
            }
            var t = e.prototype;
            return t.addCell = function(e) {
                if (this.cells.push(e),
                this.outerWidth += e.size.outerWidth,
                this.height = Math.max(e.size.outerHeight, this.height),
                1 == this.cells.length) {
                    this.x = e.x;
                    var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = e.size[t]
                }
            }
            ,
            t.updateTarget = function() {
                var e = this.isOriginLeft ? "marginRight" : "marginLeft"
                  , t = this.getLastCell()
                  , i = t ? t.size[e] : 0
                  , n = this.outerWidth - (this.firstMargin + i);
                this.target = this.x + this.firstMargin + n * this.parent.cellAlign
            }
            ,
            t.getLastCell = function() {
                return this.cells[this.cells.length - 1]
            }
            ,
            t.select = function() {
                this.cells.forEach((function(e) {
                    e.select()
                }
                ))
            }
            ,
            t.unselect = function() {
                this.cells.forEach((function(e) {
                    e.unselect()
                }
                ))
            }
            ,
            t.getCellElements = function() {
                return this.cells.map((function(e) {
                    return e.element
                }
                ))
            }
            ,
            e
        }
        ) ? n.call(t, i, t, e) : n) || (e.exports = s)
    },
    "ihW+": function(e, t, i) {
        var n, s;
        window,
        n = [i("E4Uq"), i("YVj6")],
        void 0 === (s = function(e, t) {
            return function(e, t, i) {
                "use strict";
                t.createMethods.push("_createLazyload");
                var n = t.prototype;
                function s(e, t) {
                    this.img = e,
                    this.flickity = t,
                    this.load()
                }
                return n._createLazyload = function() {
                    this.on("select", this.lazyLoad)
                }
                ,
                n.lazyLoad = function() {
                    var e = this.options.lazyLoad;
                    if (e) {
                        var t = "number" == typeof e ? e : 0
                          , n = this.getAdjacentCellElements(t)
                          , r = [];
                        n.forEach((function(e) {
                            var t = function(e) {
                                if ("IMG" == e.nodeName) {
                                    var t = e.getAttribute("data-flickity-lazyload")
                                      , n = e.getAttribute("data-flickity-lazyload-src")
                                      , s = e.getAttribute("data-flickity-lazyload-srcset");
                                    if (t || n || s)
                                        return [e]
                                }
                                var r = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                                return i.makeArray(r)
                            }(e);
                            r = r.concat(t)
                        }
                        )),
                        r.forEach((function(e) {
                            new s(e,this)
                        }
                        ), this)
                    }
                }
                ,
                s.prototype.handleEvent = i.handleEvent,
                s.prototype.load = function() {
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this);
                    var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
                      , t = this.img.getAttribute("data-flickity-lazyload-srcset");
                    this.img.src = e,
                    t && this.img.setAttribute("srcset", t),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset")
                }
                ,
                s.prototype.onload = function(e) {
                    this.complete(e, "flickity-lazyloaded")
                }
                ,
                s.prototype.onerror = function(e) {
                    this.complete(e, "flickity-lazyerror")
                }
                ,
                s.prototype.complete = function(e, t) {
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                    var i = this.flickity.getParentCell(this.img)
                      , n = i && i.element;
                    this.flickity.cellSizeChange(n),
                    this.img.classList.add(t),
                    this.flickity.dispatchEvent("lazyLoad", e, n)
                }
                ,
                t.LazyLoader = s,
                t
            }(0, e, t)
        }
        .apply(t, n)) || (e.exports = s)
    },
    l777: function(e, t, i) {
        "use strict";
        var n = function(e) {
            return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map((function(e) {
                return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
            }
            )).join("").slice(1))
        };
        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var r = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.routes = t
            }
            var t, i, r;
            return t = e,
            (i = [{
                key: "fire",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "init"
                      , i = arguments.length > 2 ? arguments[2] : void 0
                      , n = "" !== e && this.routes[e] && "function" == typeof this.routes[e][t];
                    n && this.routes[e][t](i)
                }
            }, {
                key: "loadEvents",
                value: function() {
                    var e = this;
                    this.fire("core"),
                    this.fire("common"),
                    document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(n).forEach((function(t) {
                        e.fire(t),
                        e.fire(t, "finalize")
                    }
                    )),
                    this.fire("common", "finalize"),
                    this.fire("core", "finalize")
                }
            }]) && s(t.prototype, i),
            r && s(t, r),
            e
        }();
        t.a = r
    },
    mPeE: function(e, t) {},
    sYrE: function(e, t, i) {
        var n, s;
        window,
        n = [i("CUlp"), i("YVj6"), i("E4Uq")],
        void 0 === (s = function(e, t, i) {
            return function(e, t, i) {
                "use strict";
                function n(e) {
                    this.parent = e,
                    this.state = "stopped",
                    this.onVisibilityChange = this.visibilityChange.bind(this),
                    this.onVisibilityPlay = this.visibilityPlay.bind(this)
                }
                n.prototype = Object.create(e.prototype),
                n.prototype.play = function() {
                    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing",
                    document.addEventListener("visibilitychange", this.onVisibilityChange),
                    this.tick()))
                }
                ,
                n.prototype.tick = function() {
                    if ("playing" == this.state) {
                        var e = this.parent.options.autoPlay;
                        e = "number" == typeof e ? e : 3e3;
                        var t = this;
                        this.clear(),
                        this.timeout = setTimeout((function() {
                            t.parent.next(!0),
                            t.tick()
                        }
                        ), e)
                    }
                }
                ,
                n.prototype.stop = function() {
                    this.state = "stopped",
                    this.clear(),
                    document.removeEventListener("visibilitychange", this.onVisibilityChange)
                }
                ,
                n.prototype.clear = function() {
                    clearTimeout(this.timeout)
                }
                ,
                n.prototype.pause = function() {
                    "playing" == this.state && (this.state = "paused",
                    this.clear())
                }
                ,
                n.prototype.unpause = function() {
                    "paused" == this.state && this.play()
                }
                ,
                n.prototype.visibilityChange = function() {
                    this[document.hidden ? "pause" : "unpause"]()
                }
                ,
                n.prototype.visibilityPlay = function() {
                    this.play(),
                    document.removeEventListener("visibilitychange", this.onVisibilityPlay)
                }
                ,
                t.extend(i.defaults, {
                    pauseAutoPlayOnHover: !0
                }),
                i.createMethods.push("_createPlayer");
                var s = i.prototype;
                return s._createPlayer = function() {
                    this.player = new n(this),
                    this.on("activate", this.activatePlayer),
                    this.on("uiChange", this.stopPlayer),
                    this.on("pointerDown", this.stopPlayer),
                    this.on("deactivate", this.deactivatePlayer)
                }
                ,
                s.activatePlayer = function() {
                    this.options.autoPlay && (this.player.play(),
                    this.element.addEventListener("mouseenter", this))
                }
                ,
                s.playPlayer = function() {
                    this.player.play()
                }
                ,
                s.stopPlayer = function() {
                    this.player.stop()
                }
                ,
                s.pausePlayer = function() {
                    this.player.pause()
                }
                ,
                s.unpausePlayer = function() {
                    this.player.unpause()
                }
                ,
                s.deactivatePlayer = function() {
                    this.player.stop(),
                    this.element.removeEventListener("mouseenter", this)
                }
                ,
                s.onmouseenter = function() {
                    this.options.pauseAutoPlayOnHover && (this.player.pause(),
                    this.element.addEventListener("mouseleave", this))
                }
                ,
                s.onmouseleave = function() {
                    this.player.unpause(),
                    this.element.removeEventListener("mouseleave", this)
                }
                ,
                i.Player = n,
                i
            }(e, t, i)
        }
        .apply(t, n)) || (e.exports = s)
    },
    vXzw: function(e, t, i) {
        var n, s;
        window,
        n = [i("E4Uq"), i("YVj6")],
        void 0 === (s = function(e, t) {
            return function(e, t, i) {
                "use strict";
                var n = t.prototype;
                return n.insert = function(e, t) {
                    var i = this._makeCells(e);
                    if (i && i.length) {
                        var n = this.cells.length;
                        t = void 0 === t ? n : t;
                        var s = function(e) {
                            var t = document.createDocumentFragment();
                            return e.forEach((function(e) {
                                t.appendChild(e.element)
                            }
                            )),
                            t
                        }(i)
                          , r = t == n;
                        if (r)
                            this.slider.appendChild(s);
                        else {
                            var o = this.cells[t].element;
                            this.slider.insertBefore(s, o)
                        }
                        if (0 === t)
                            this.cells = i.concat(this.cells);
                        else if (r)
                            this.cells = this.cells.concat(i);
                        else {
                            var a = this.cells.splice(t, n - t);
                            this.cells = this.cells.concat(i).concat(a)
                        }
                        this._sizeCells(i),
                        this.cellChange(t, !0)
                    }
                }
                ,
                n.append = function(e) {
                    this.insert(e, this.cells.length)
                }
                ,
                n.prepend = function(e) {
                    this.insert(e, 0)
                }
                ,
                n.remove = function(e) {
                    var t = this.getCells(e);
                    if (t && t.length) {
                        var n = this.cells.length - 1;
                        t.forEach((function(e) {
                            e.remove();
                            var t = this.cells.indexOf(e);
                            n = Math.min(t, n),
                            i.removeFrom(this.cells, e)
                        }
                        ), this),
                        this.cellChange(n, !0)
                    }
                }
                ,
                n.cellSizeChange = function(e) {
                    var t = this.getCell(e);
                    if (t) {
                        t.getSize();
                        var i = this.cells.indexOf(t);
                        this.cellChange(i)
                    }
                }
                ,
                n.cellChange = function(e, t) {
                    var i = this.selectedElement;
                    this._positionCells(e),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
                    var n = this.getCell(i);
                    n && (this.selectedIndex = this.getCellSlideIndex(n)),
                    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
                    this.emitEvent("cellChange", [e]),
                    this.select(this.selectedIndex),
                    t && this.positionSliderAtSelected()
                }
                ,
                t
            }(0, e, t)
        }
        .apply(t, n)) || (e.exports = s)
    },
    x0Ue: function(e, t, i) {
        var n, s;
        !function(r, o) {
            "use strict";
            void 0 === (s = "function" == typeof (n = o) ? n.call(t, i, t, e) : n) || (e.exports = s)
        }(window, (function() {
            "use strict";
            var e = function() {
                var e = window.Element.prototype;
                if (e.matches)
                    return "matches";
                if (e.matchesSelector)
                    return "matchesSelector";
                for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                    var n = t[i] + "MatchesSelector";
                    if (e[n])
                        return n
                }
            }();
            return function(t, i) {
                return t[e](i)
            }
        }
        ))
    },
    yLpj: function(e, t) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (i = window)
        }
        e.exports = i
    },
    yNx1: function(e, t, i) {
        var n, s;
        window,
        n = [i("QK1G")],
        void 0 === (s = function(e) {
            return function(e, t) {
                "use strict";
                function i(e, t) {
                    this.element = e,
                    this.parent = t,
                    this.create()
                }
                var n = i.prototype;
                return n.create = function() {
                    this.element.style.position = "absolute",
                    this.element.setAttribute("aria-hidden", "true"),
                    this.x = 0,
                    this.shift = 0
                }
                ,
                n.destroy = function() {
                    this.unselect(),
                    this.element.style.position = "";
                    var e = this.parent.originSide;
                    this.element.style[e] = "",
                    this.element.removeAttribute("aria-hidden")
                }
                ,
                n.getSize = function() {
                    this.size = t(this.element)
                }
                ,
                n.setPosition = function(e) {
                    this.x = e,
                    this.updateTarget(),
                    this.renderPosition(e)
                }
                ,
                n.updateTarget = n.setDefaultTarget = function() {
                    var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                    this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign
                }
                ,
                n.renderPosition = function(e) {
                    var t = this.parent.originSide;
                    this.element.style[t] = this.parent.getPositionValue(e)
                }
                ,
                n.select = function() {
                    this.element.classList.add("is-selected"),
                    this.element.removeAttribute("aria-hidden")
                }
                ,
                n.unselect = function() {
                    this.element.classList.remove("is-selected"),
                    this.element.setAttribute("aria-hidden", "true")
                }
                ,
                n.wrapShift = function(e) {
                    this.shift = e,
                    this.renderPosition(this.x + this.parent.slideableWidth * e)
                }
                ,
                n.remove = function() {
                    this.element.parentNode.removeChild(this.element)
                }
                ,
                i
            }(0, e)
        }
        .apply(t, n)) || (e.exports = s)
    },
    z7b9: function(e, t, i) {
        var n, s;
        window,
        n = [i("E4Uq"), i("4PUS"), i("YVj6")],
        void 0 === (s = function(e, t, i) {
            return function(e, t, i, n) {
                "use strict";
                var s = "http://www.w3.org/2000/svg";
                function r(e, t) {
                    this.direction = e,
                    this.parent = t,
                    this._create()
                }
                r.prototype = Object.create(i.prototype),
                r.prototype._create = function() {
                    this.isEnabled = !0,
                    this.isPrevious = -1 == this.direction;
                    var e = this.parent.options.rightToLeft ? 1 : -1;
                    this.isLeft = this.direction == e;
                    var t = this.element = document.createElement("button");
                    t.className = "flickity-button flickity-prev-next-button",
                    t.className += this.isPrevious ? " previous" : " next",
                    t.setAttribute("type", "button"),
                    this.disable(),
                    t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                    var i = this.createSVG();
                    t.appendChild(i),
                    this.parent.on("select", this.update.bind(this)),
                    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                }
                ,
                r.prototype.activate = function() {
                    this.bindStartEvent(this.element),
                    this.element.addEventListener("click", this),
                    this.parent.element.appendChild(this.element)
                }
                ,
                r.prototype.deactivate = function() {
                    this.parent.element.removeChild(this.element),
                    this.unbindStartEvent(this.element),
                    this.element.removeEventListener("click", this)
                }
                ,
                r.prototype.createSVG = function() {
                    var e = document.createElementNS(s, "svg");
                    e.setAttribute("class", "flickity-button-icon"),
                    e.setAttribute("viewBox", "0 0 100 100");
                    var t, i = document.createElementNS(s, "path"), n = "string" == typeof (t = this.parent.options.arrowShape) ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
                    return i.setAttribute("d", n),
                    i.setAttribute("class", "arrow"),
                    this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "),
                    e.appendChild(i),
                    e
                }
                ,
                r.prototype.handleEvent = n.handleEvent,
                r.prototype.onclick = function() {
                    if (this.isEnabled) {
                        this.parent.uiChange();
                        var e = this.isPrevious ? "previous" : "next";
                        this.parent[e]()
                    }
                }
                ,
                r.prototype.enable = function() {
                    this.isEnabled || (this.element.disabled = !1,
                    this.isEnabled = !0)
                }
                ,
                r.prototype.disable = function() {
                    this.isEnabled && (this.element.disabled = !0,
                    this.isEnabled = !1)
                }
                ,
                r.prototype.update = function() {
                    var e = this.parent.slides;
                    if (this.parent.options.wrapAround && e.length > 1)
                        this.enable();
                    else {
                        var t = e.length ? e.length - 1 : 0
                          , i = this.isPrevious ? 0 : t;
                        this[this.parent.selectedIndex == i ? "disable" : "enable"]()
                    }
                }
                ,
                r.prototype.destroy = function() {
                    this.deactivate(),
                    this.allOff()
                }
                ,
                n.extend(t.defaults, {
                    prevNextButtons: !0,
                    arrowShape: {
                        x0: 10,
                        x1: 60,
                        y1: 50,
                        x2: 70,
                        y2: 40,
                        x3: 30
                    }
                }),
                t.createMethods.push("_createPrevNextButtons");
                var o = t.prototype;
                return o._createPrevNextButtons = function() {
                    this.options.prevNextButtons && (this.prevButton = new r(-1,this),
                    this.nextButton = new r(1,this),
                    this.on("activate", this.activatePrevNextButtons))
                }
                ,
                o.activatePrevNextButtons = function() {
                    this.prevButton.activate(),
                    this.nextButton.activate(),
                    this.on("deactivate", this.deactivatePrevNextButtons)
                }
                ,
                o.deactivatePrevNextButtons = function() {
                    this.prevButton.deactivate(),
                    this.nextButton.deactivate(),
                    this.off("deactivate", this.deactivatePrevNextButtons)
                }
                ,
                t.PrevNextButton = r,
                t
            }(0, e, t, i)
        }
        .apply(t, n)) || (e.exports = s)
    }
}, [[0, 0, 2]]]);
//# sourceMappingURL=site.js.map

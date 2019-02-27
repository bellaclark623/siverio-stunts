(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    40: function(e, t, n) {
      "use strict";
      var a = n(55),
        r = n(19),
        o = n(20),
        c = n(23),
        i = n(21),
        l = n(22),
        u = n(1),
        s = n.n(u),
        m = n(57),
        p = n(53),
        d = n.n(p),
        h = n(54),
        b = n.n(h),
        f = "https://cra-ssr.herokuapp.com",
        E = "".concat(f).concat(b.a),
        v = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    o = e.contentType,
                    c = e.twitter,
                    i = e.noCrawl,
                    l = e.published,
                    u = e.updated,
                    s = e.category,
                    m = e.tags,
                    p = n
                      ? (n + " | My Website").substring(0, 60)
                      : "My Website",
                    d = a
                      ? a.substring(0, 155)
                      : "This is a really awesome website where we can render on the server. Supa cool.",
                    h = r ? "".concat(f).concat(r) : E,
                    b = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: d },
                      { itemprop: "image", content: h },
                      { name: "description", content: d },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: "@cereallarceny" },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: d },
                      {
                        name: "twitter:creator",
                        content: c || "@cereallarceny"
                      },
                      { name: "twitter:image:src", content: h },
                      { property: "og:title", content: p },
                      { property: "og:type", content: o || "website" },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: h },
                      { property: "og:description", content: d },
                      { property: "og:site_name", content: "My Website" },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    i &&
                      b.push({ name: "robots", content: "noindex, nofollow" }),
                    l && b.push({ name: "article:published_time", content: l }),
                    u && b.push({ name: "article:modified_time", content: u }),
                    s && b.push({ name: "article:section", content: s }),
                    m && b.push({ name: "article:tag", content: m }),
                    b
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    r = e.className,
                    o = Object(a.a)(e, ["children", "id", "className"]);
                  return s.a.createElement(
                    "div",
                    { id: n, className: r },
                    s.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          o.schema || "WebPage"
                        )
                      },
                      title: o.title ? o.title + " | My Website" : "My Website",
                      link: [
                        {
                          rel: "canonical",
                          href: f + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(o, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(u.Component);
      t.a = Object(m.a)(v);
    },
    50: function(e, t, n) {
      e.exports = n.p + "static/media/pekka.1eab475c.jpg";
    },
    51: function(e, t, n) {
      e.exports = n.p + "static/media/arvidsson.4d6f8e0d.jpg";
    },
    54: function(e, t, n) {
      e.exports = n.p + "static/media/logo.8caa15b8.jpg";
    },
    59: function(e, t, n) {
      e.exports = n(96);
    },
    92: function(e, t, n) {},
    94: function(e, t, n) {},
    96: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n.n(a),
        o = n(15),
        c = n(26),
        i = n(13),
        l = n.n(i),
        u = n(48),
        s = n(27),
        m = n(14),
        p = n(49),
        d = n(12),
        h = n(29),
        b = n(35),
        f = n.n(b),
        E = { isAuthenticated: !1, currentUser: {} },
        v = function(e) {
          return function(t) {
            return new Promise(function(n) {
              t({ type: "auth/SET_CURRENT_USER", user: e }),
                f.a.set("mywebsite", e),
                t({ type: "auth/AUTHENTICATE", authenticated: !0 }),
                n(e);
            });
          };
        },
        g = function() {
          return function(e) {
            return new Promise(function(t) {
              var n = f.a.getJSON("mywebsite");
              n ? (e(v(n)), t(n)) : t({});
            });
          };
        },
        y = (n(50), n(51), { currentProfile: {} }),
        w = Object(m.c)({
          auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : E,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "auth/AUTHENTICATE":
                return Object(h.a)({}, e, { isAuthenticated: t.authenticated });
              case "auth/SET_CURRENT_USER":
                return Object(h.a)({}, e, { currentUser: t.user });
              default:
                return e;
            }
          },
          profile: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "auth/SET_CURRENT_PROFILE":
                return Object(h.a)({}, e, { currentProfile: t.profile });
              default:
                return e;
            }
          }
        }),
        O = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        j = n(19),
        x = n(20),
        S = n(23),
        k = n(21),
        _ = n(22),
        T = n(57),
        N = (n(76), n(25)),
        A = n(215),
        C = n(216),
        R = n(217),
        M = n(218),
        P = n(209),
        U = n(229),
        X = n(210),
        W = n(211),
        D = n(212),
        F = n(213),
        H = n(214),
        I = n(28),
        J = [
          {
            to: "/about",
            text: "About",
            children: [
              { to: "/about/manny-siverio", text: "About Manny Siverio" },
              { to: "/about/stunt-work", text: "Getting into Stunt Work" },
              {
                to: "/about/siverio-stunts-history",
                text: "History of Siverio Stunts"
              }
            ]
          },
          { to: "/services", text: "Services" },
          { to: "/credits", text: "Credits" },
          { to: "/media", text: "Media" },
          { to: "/contact", text: "Contact" },
          {
            to: "https://www.imdb.com/name/nm0803371/",
            text: r.a.createElement(I.a, null)
          },
          {
            to: "https://www.instagram.com/siveriostunts/",
            text: r.a.createElement(I.b, null)
          },
          {
            to: "https://twitter.com/siveriostunts",
            text: r.a.createElement(I.d, null)
          },
          {
            to: "https://www.youtube.com/user/SiverioStunts",
            text: r.a.createElement(I.e, null)
          }
        ],
        L = function(e, t) {
          return ("/" === e && t === e) || !("/" === e || !t.includes(e));
        },
        q = function(e) {
          var t = e.className,
            n = e.current,
            a = e.flatten,
            o = J;
          return (
            a &&
              ((o = []),
              J.forEach(function(e) {
                e.children
                  ? e.children.forEach(function(e) {
                      o.push(e);
                    })
                  : o.push(e);
              })),
            r.a.createElement(
              P.a,
              { navbar: !0, className: t },
              o.map(function(e, t) {
                return e.children
                  ? r.a.createElement(
                      U.a,
                      { key: t, nav: !0, inNavbar: !0 },
                      r.a.createElement(X.a, { nav: !0, caret: !0 }, e.text),
                      r.a.createElement(
                        W.a,
                        null,
                        e.children.map(function(e, t) {
                          return r.a.createElement(
                            D.a,
                            { key: t, href: e.to, active: L(n, e.to) },
                            e.text
                          );
                        })
                      )
                    )
                  : r.a.createElement(
                      F.a,
                      { key: t, active: L(n, e.to) },
                      r.a.createElement(
                        H.a,
                        {
                          target: e.to.indexOf("http") > -1 ? "_blank" : "",
                          href: e.to
                        },
                        e.text
                      )
                    );
              })
            )
          );
        },
        G = (function(e) {
          function t(e) {
            var n;
            return (
              Object(j.a)(this, t),
              ((n = Object(S.a)(
                this,
                Object(k.a)(t).call(this, e)
              )).toggle = n.toggle.bind(Object(N.a)(Object(N.a)(n)))),
              (n.state = { isOpen: !1 }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(x.a)(t, [
              {
                key: "toggle",
                value: function() {
                  this.setState({ isOpen: !this.state.isOpen });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.current;
                  return r.a.createElement(
                    "header",
                    { id: "header" },
                    r.a.createElement(
                      A.a,
                      {
                        dark: !0,
                        color: "dark",
                        expand: "md",
                        className: "container-fluid"
                      },
                      r.a.createElement(C.a, { href: "/" }, "Siverio Stunts"),
                      r.a.createElement(R.a, { onClick: this.toggle }),
                      r.a.createElement(
                        M.a,
                        { isOpen: this.state.isOpen, navbar: !0 },
                        r.a.createElement(q, {
                          current: e,
                          className: "ml-auto"
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        z = function(e) {
          var t = e.current;
          return r.a.createElement(
            "footer",
            null,
            r.a.createElement("div", null),
            r.a.createElement(
              "div",
              { className: "container py-3" },
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "div",
                  { className: "col-12 flex-md-grow-1 pb-2 pb-sm-0" },
                  r.a.createElement(
                    "nav",
                    null,
                    r.a.createElement(q, { flatten: !0, current: t })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "col-12 flex-md-shrink-1 pb-2 pb-sm-0" },
                  r.a.createElement(
                    "span",
                    null,
                    "\xa9 Siverio Stunts, All rights reserved."
                  )
                )
              )
            )
          );
        },
        B = n(219),
        K = n(220),
        Q = n(40),
        V = function() {
          return r.a.createElement(
            Q.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            r.a.createElement("p", null, "Super embarrassing.")
          );
        },
        Y = l()({
          loader: function() {
            return Promise.all([n.e(10), n.e(1)]).then(n.bind(null, 228));
          },
          loading: function() {
            return null;
          },
          modules: ["home"]
        }),
        Z = l()({
          loader: function() {
            return n.e(2).then(n.bind(null, 221));
          },
          loading: function() {
            return null;
          },
          modules: ["about-manny"]
        }),
        $ = l()({
          loader: function() {
            return n.e(3).then(n.bind(null, 227));
          },
          loading: function() {
            return null;
          },
          modules: ["about-stunts"]
        }),
        ee = l()({
          loader: function() {
            return n.e(4).then(n.bind(null, 222));
          },
          loading: function() {
            return null;
          },
          modules: ["about-history"]
        }),
        te = l()({
          loader: function() {
            return n.e(5).then(n.bind(null, 223));
          },
          loading: function() {
            return null;
          },
          modules: ["services"]
        }),
        ne = l()({
          loader: function() {
            return n.e(6).then(n.bind(null, 224));
          },
          loading: function() {
            return null;
          },
          modules: ["credits"]
        }),
        ae = l()({
          loader: function() {
            return n.e(7).then(n.bind(null, 225));
          },
          loading: function() {
            return null;
          },
          modules: ["media"]
        }),
        re = l()({
          loader: function() {
            return n.e(8).then(n.bind(null, 226));
          },
          loading: function() {
            return null;
          },
          modules: ["contact"]
        }),
        oe = function() {
          return r.a.createElement(
            B.a,
            null,
            r.a.createElement(K.a, { exact: !0, path: "/", component: Y }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/about/manny-siverio",
              component: Z
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/about/stunt-work",
              component: $
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/about/siverio-stunts-history",
              component: ee
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/services",
              component: te
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/credits",
              component: ne
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/media",
              component: ae
            }),
            r.a.createElement(K.a, {
              exact: !0,
              path: "/contact",
              component: re
            }),
            r.a.createElement(K.a, { component: V })
          );
        },
        ce = (n(92),
        (function(e) {
          function t() {
            return (
              Object(j.a)(this, t),
              Object(S.a)(this, Object(k.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_.a)(t, e),
            Object(x.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  O || this.props.establishCurrentUser();
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { id: "app" },
                    r.a.createElement(G, {
                      isAuthenticated: this.props.isAuthenticated,
                      current: this.props.location.pathname
                    }),
                    r.a.createElement(
                      "div",
                      { id: "content" },
                      r.a.createElement(oe, null),
                      r.a.createElement(z, {
                        current: this.props.location.pathname
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        ie = Object(T.a)(
          Object(c.connect)(
            function(e) {
              return { isAuthenticated: e.auth.isAuthenticated };
            },
            function(e) {
              return Object(m.b)({ establishCurrentUser: g }, e);
            }
          )(ce)
        ),
        le = (n(94),
        (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = O ? Object(d.c)({ initialEntries: [e] }) : Object(d.a)(),
            n = [p.a, Object(s.routerMiddleware)(t)],
            a = m.d.apply(void 0, [m.a.apply(void 0, n)].concat([])),
            r = O ? {} : window.__PRELOADED_STATE__;
          return (
            O || delete window.__PRELOADED_STATE__,
            {
              store: Object(m.e)(Object(s.connectRouter)(t)(w), r, a),
              history: t
            }
          );
        })()),
        ue = le.store,
        se = le.history,
        me = r.a.createElement(
          c.Provider,
          { store: ue },
          r.a.createElement(
            s.ConnectedRouter,
            { history: se },
            r.a.createElement(
              u.Frontload,
              { noServerRender: !0 },
              r.a.createElement(ie, null)
            )
          )
        ),
        pe = document.querySelector("#root");
      !0 === pe.hasChildNodes()
        ? l.a.preloadReady().then(function() {
            Object(o.hydrate)(me, pe);
          })
        : Object(o.render)(me, pe);
    }
  },
  [[59, 11, 9]]
]);
//# sourceMappingURL=main.a39b5e4d.chunk.js.map

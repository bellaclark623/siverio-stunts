(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    228: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(19),
        i = a(20),
        r = a(23),
        c = a(21),
        o = a(22),
        l = a(25),
        s = a(1),
        u = a.n(s),
        d = a(142),
        h = a(191),
        m = a(40),
        p = function(e) {
          var t = e.id,
            a = e.children,
            n = e.title,
            i = e.description;
          return u.a.createElement(
            m.a,
            { id: t, title: n, description: i },
            u.a.createElement("div", { className: "hero" }),
            a
          );
        };
      a.d(t, "default", function() {
        return y;
      });
      var y = (function(e) {
        function t(e) {
          var a;
          return (
            Object(n.a)(this, t),
            ((a = Object(r.a)(this, Object(c.a)(t).call(this, e))).state = {
              calculatedHeight: 1
            }),
            (a.setYoutubePlayerHeight = a.setYoutubePlayerHeight.bind(
              Object(l.a)(Object(l.a)(a))
            )),
            a
          );
        }
        return (
          Object(o.a)(t, e),
          Object(i.a)(t, [
            {
              key: "componentDidMount",
              value: function() {
                this.setYoutubePlayerHeight(),
                  window.addEventListener(
                    "resize",
                    this.setYoutubePlayerHeight
                  );
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                window.removeEventListener(
                  "resize",
                  this.setYoutubePlayerHeight
                );
              }
            },
            {
              key: "setYoutubePlayerHeight",
              value: function() {
                var e = (function(e) {
                  var t;
                  try {
                    t = window
                      .getComputedStyle(e, null)
                      .getPropertyValue("width");
                  } catch (a) {
                    t = e.currentStyle.width;
                  }
                  return (t = parseInt(t.replace("px", "")));
                })(this.youtubePlayerWrapper);
                this.setState({ calculatedHeight: 0.609375 * e });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return u.a.createElement(
                  p,
                  { id: "homepage" },
                  u.a.createElement(
                    "div",
                    { className: "container py-5" },
                    u.a.createElement(
                      "div",
                      { className: "row" },
                      u.a.createElement(
                        "main",
                        {
                          className: "col-12 col-md-9",
                          ref: function(t) {
                            e.youtubePlayerWrapper = t;
                          }
                        },
                        u.a.createElement(h.a, {
                          videoId: "bJiXtyad_xg",
                          opts: {
                            width: "100%",
                            height: this.state.calculatedHeight,
                            modestbranding: "true"
                          }
                        })
                      ),
                      u.a.createElement(
                        "aside",
                        { className: "col-12 col-md-3" },
                        u.a.createElement(
                          "div",
                          { className: "tweets-wrapper" },
                          u.a.createElement(d.a, {
                            noFooter: !0,
                            sourceType: "profile",
                            screenName: "siveriostunts",
                            options: { height: this.state.calculatedHeight }
                          })
                        )
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(s.Component);
    }
  }
]);
//# sourceMappingURL=1.11d16734.chunk.js.map

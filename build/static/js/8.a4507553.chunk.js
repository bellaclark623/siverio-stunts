(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    208: function(e, t) {
      e.exports = function(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      };
    },
    226: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        l = a.n(n),
        r = a(4),
        c = a(5),
        o = a(11),
        s = a(3),
        i = a(0),
        d = a.n(i),
        u = a(6),
        m = a.n(u),
        f = a(2),
        p = {
          children: d.a.node,
          inline: d.a.bool,
          tag: f.i,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          className: d.a.string,
          cssModule: d.a.object
        },
        b = (function(e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(s.a)(Object(s.a)(a))
              )),
              (a.submit = a.submit.bind(Object(s.a)(Object(s.a)(a)))),
              a
            );
          }
          Object(o.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function(e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.submit = function() {
              this.ref && this.ref.submit();
            }),
            (a.render = function() {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                n = e.inline,
                o = e.tag,
                s = e.innerRef,
                i = Object(c.a)(e, [
                  "className",
                  "cssModule",
                  "inline",
                  "tag",
                  "innerRef"
                ]),
                d = Object(f.f)(m()(t, !!n && "form-inline"), a);
              return l.a.createElement(
                o,
                Object(r.a)({}, i, { ref: s, className: d })
              );
            }),
            t
          );
        })(n.Component);
      (b.propTypes = p), (b.defaultProps = { tag: "form" });
      var h = b,
        g = {
          children: d.a.node,
          row: d.a.bool,
          check: d.a.bool,
          inline: d.a.bool,
          disabled: d.a.bool,
          tag: f.i,
          className: d.a.string,
          cssModule: d.a.object
        },
        v = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.row,
            o = e.disabled,
            s = e.check,
            i = e.inline,
            d = e.tag,
            u = Object(c.a)(e, [
              "className",
              "cssModule",
              "row",
              "disabled",
              "check",
              "inline",
              "tag"
            ]),
            p = Object(f.f)(
              m()(
                t,
                !!n && "row",
                s ? "form-check" : "form-group",
                !(!s || !i) && "form-check-inline",
                !(!s || !o) && "disabled"
              ),
              a
            );
          return l.a.createElement(d, Object(r.a)({}, u, { className: p }));
        };
      (v.propTypes = g), (v.defaultProps = { tag: "div" });
      var E = v,
        j = a(208),
        O = a.n(j),
        N = d.a.oneOfType([d.a.number, d.a.string]),
        y = d.a.oneOfType([
          d.a.string,
          d.a.number,
          d.a.shape({
            size: N,
            push: Object(f.d)(N, 'Please use the prop "order"'),
            pull: Object(f.d)(N, 'Please use the prop "order"'),
            order: N,
            offset: N
          })
        ]),
        x = {
          children: d.a.node,
          hidden: d.a.bool,
          check: d.a.bool,
          size: d.a.string,
          for: d.a.string,
          tag: f.i,
          className: d.a.string,
          cssModule: d.a.object,
          xs: y,
          sm: y,
          md: y,
          lg: y,
          xl: y,
          widths: d.a.array
        },
        w = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        z = function(e, t, a) {
          return !0 === a || "" === a
            ? e
              ? "col"
              : "col-" + t
            : "auto" === a
              ? e
                ? "col-auto"
                : "col-" + t + "-auto"
              : e
                ? "col-" + a
                : "col-" + t + "-" + a;
        },
        R = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.hidden,
            o = e.widths,
            s = e.tag,
            i = e.check,
            d = e.size,
            u = e.for,
            p = Object(c.a)(e, [
              "className",
              "cssModule",
              "hidden",
              "widths",
              "tag",
              "check",
              "size",
              "for"
            ]),
            b = [];
          o.forEach(function(t, n) {
            var l = e[t];
            if ((delete p[t], l || "" === l)) {
              var r,
                c = !n;
              if (O()(l)) {
                var o,
                  s = c ? "-" : "-" + t + "-";
                (r = z(c, t, l.size)),
                  b.push(
                    Object(f.f)(
                      m()(
                        (((o = {})[r] = l.size || "" === l.size),
                        (o["order" + s + l.order] = l.order || 0 === l.order),
                        (o["offset" + s + l.offset] =
                          l.offset || 0 === l.offset),
                        o)
                      )
                    ),
                    a
                  );
              } else (r = z(c, t, l)), b.push(r);
            }
          });
          var h = Object(f.f)(
            m()(
              t,
              !!n && "sr-only",
              !!i && "form-check-label",
              !!d && "col-form-label-" + d,
              b,
              !!b.length && "col-form-label"
            ),
            a
          );
          return l.a.createElement(
            s,
            Object(r.a)({ htmlFor: u }, p, { className: h })
          );
        };
      (R.propTypes = x), (R.defaultProps = w);
      var k = R,
        P = {
          children: d.a.node,
          type: d.a.string,
          size: d.a.string,
          bsSize: d.a.string,
          state: Object(f.d)(
            d.a.string,
            'Please use the props "valid" and "invalid" to indicate the state.'
          ),
          valid: d.a.bool,
          invalid: d.a.bool,
          tag: f.i,
          innerRef: d.a.oneOfType([d.a.object, d.a.func, d.a.string]),
          static: Object(f.d)(d.a.bool, 'Please use the prop "plaintext"'),
          plaintext: d.a.bool,
          addon: d.a.bool,
          className: d.a.string,
          cssModule: d.a.object
        },
        M = (function(e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).getRef = a.getRef.bind(
                Object(s.a)(Object(s.a)(a))
              )),
              (a.focus = a.focus.bind(Object(s.a)(Object(s.a)(a)))),
              a
            );
          }
          Object(o.a)(t, e);
          var a = t.prototype;
          return (
            (a.getRef = function(e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (a.focus = function() {
              this.ref && this.ref.focus();
            }),
            (a.render = function() {
              var e = this.props,
                t = e.className,
                a = e.cssModule,
                n = e.type,
                o = e.bsSize,
                s = e.state,
                i = e.valid,
                d = e.invalid,
                u = e.tag,
                p = e.addon,
                b = e.static,
                h = e.plaintext,
                g = e.innerRef,
                v = Object(c.a)(e, [
                  "className",
                  "cssModule",
                  "type",
                  "bsSize",
                  "state",
                  "valid",
                  "invalid",
                  "tag",
                  "addon",
                  "static",
                  "plaintext",
                  "innerRef"
                ]),
                E = ["radio", "checkbox"].indexOf(n) > -1,
                j = new RegExp("\\D", "g"),
                O = u || ("select" === n || "textarea" === n ? n : "input"),
                N = "form-control";
              h || b
                ? ((N += "-plaintext"), (O = u || "input"))
                : "file" === n
                  ? (N += "-file")
                  : E && (N = p ? null : "form-check-input"),
                s &&
                  "undefined" === typeof i &&
                  "undefined" === typeof d &&
                  ("danger" === s ? (d = !0) : "success" === s && (i = !0)),
                v.size &&
                  j.test(v.size) &&
                  (Object(f.j)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (o = v.size),
                  delete v.size);
              var y = Object(f.f)(
                m()(
                  t,
                  d && "is-invalid",
                  i && "is-valid",
                  !!o && "form-control-" + o,
                  N
                ),
                a
              );
              return (
                ("input" === O || (u && "function" === typeof u)) &&
                  (v.type = n),
                !v.children ||
                  h ||
                  b ||
                  "select" === n ||
                  "string" !== typeof O ||
                  "select" === O ||
                  (Object(f.j)(
                    'Input with a type of "' +
                      n +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete v.children),
                l.a.createElement(
                  O,
                  Object(r.a)({}, v, { ref: g, className: y })
                )
              );
            }),
            t
          );
        })(l.a.Component);
      (M.propTypes = P), (M.defaultProps = { type: "text" });
      var T = M,
        F = a(78),
        S = a(28),
        C = a(98);
      t.default = function() {
        return l.a.createElement(
          C.a,
          {
            id: "contact",
            title: "Contact Us",
            description:
              "I would love to hear from you. Fill out the form below!"
          },
          l.a.createElement(
            "div",
            { className: "row" },
            l.a.createElement(
              "main",
              { className: "col-12 col-md-9" },
              l.a.createElement(
                h,
                null,
                l.a.createElement(
                  E,
                  null,
                  l.a.createElement(
                    k,
                    { for: "contactFormFullName" },
                    "Full Name"
                  ),
                  l.a.createElement(T, {
                    type: "text",
                    name: "fullName",
                    id: "contactFormFullName"
                  })
                ),
                l.a.createElement(
                  E,
                  null,
                  l.a.createElement(
                    k,
                    { for: "contactFormPhoneNumber" },
                    "Phone Number"
                  ),
                  l.a.createElement(T, {
                    type: "tel",
                    name: "phoneNumber",
                    id: "contactFormPhoneNumber"
                  })
                ),
                l.a.createElement(
                  E,
                  null,
                  l.a.createElement(k, { for: "exampleEmail" }, "Email"),
                  l.a.createElement(T, {
                    type: "email",
                    name: "email",
                    id: "exampleEmail"
                  })
                ),
                l.a.createElement(
                  E,
                  null,
                  l.a.createElement(k, { for: "exampleText" }, "Text Area"),
                  l.a.createElement(T, {
                    type: "textarea",
                    name: "text",
                    id: "exampleText"
                  })
                ),
                l.a.createElement(F.a, null, "Submit")
              )
            ),
            l.a.createElement(
              "aside",
              { className: "col-12 col-md-3" },
              l.a.createElement("h4", null, "Contact Details"),
              l.a.createElement(
                "table",
                null,
                l.a.createElement(
                  "tr",
                  null,
                  l.a.createElement("td", null, l.a.createElement(S.c, null)),
                  l.a.createElement("td", null, "+1 917-123-1234")
                )
              )
            )
          )
        );
      };
    },
    98: function(e, t, a) {
      "use strict";
      var n = a(1),
        l = a.n(n),
        r = a(40);
      t.a = function(e) {
        var t = e.id,
          a = e.children,
          n = e.title,
          c = e.description;
        return l.a.createElement(
          r.a,
          { id: t, title: n, description: c },
          l.a.createElement(
            "div",
            { className: "InteriorLayout-subheading" },
            l.a.createElement(
              "div",
              { className: "container py-4" },
              l.a.createElement(
                "div",
                { className: "row" },
                l.a.createElement(
                  "div",
                  { className: "col-12" },
                  l.a.createElement("h3", null, n),
                  l.a.createElement("p", null, c)
                )
              )
            )
          ),
          l.a.createElement("div", { className: "container pt-4 pb-5" }, a)
        );
      };
    }
  }
]);
//# sourceMappingURL=8.a4507553.chunk.js.map

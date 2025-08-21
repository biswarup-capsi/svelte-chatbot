typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const ks = 1, Ns = 2, Fs = 16, Ps = 4, Ls = 1, Ds = 2, hr = "[", xn = "[!", En = "]", Ie = {}, L = Symbol(), pr = !1;
var Sn = Array.isArray, Bs = Array.prototype.indexOf, $n = Array.from, Ct = Object.keys, Ae = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Us = Object.prototype, qs = Array.prototype, Ms = Object.getPrototypeOf, Mn = Object.isExtensible;
function Is(e) {
  return typeof e == "function";
}
const te = () => {
};
function vr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hs() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const G = 2, Rn = 4, jn = 8, Ge = 16, we = 32, Se = 64, mr = 128, Z = 256, Tt = 512, M = 1024, Q = 2048, $e = 4096, ne = 8192, Ye = 16384, Lt = 32768, Dt = 65536, In = 1 << 17, zs = 1 << 18, Cn = 1 << 19, _r = 1 << 20, sn = 1 << 21, Tn = 1 << 22, je = 1 << 23, Yt = Symbol("$state"), Vs = Symbol("legacy props"), On = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), gr = 3, ct = 8;
function Ws() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Js(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ks() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Gs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ys() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ei() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ti() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ni() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let A = !1;
function _e(e) {
  A = e;
}
let T;
function ce(e) {
  if (e === null)
    throw Bt(), Ie;
  return T = e;
}
function Ut() {
  return ce(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(T)
  );
}
function B(e) {
  if (A) {
    if (/* @__PURE__ */ ye(T) !== null)
      throw Bt(), Ie;
    T = e;
  }
}
function ri(e = 1) {
  if (A) {
    for (var t = e, n = T; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(n);
    T = n;
  }
}
function on() {
  for (var e = 0, t = T; ; ) {
    if (t.nodeType === ct) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === En) {
        if (e === 0) return t;
        e -= 1;
      } else (n === hr || n === xn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(t)
    );
    t.remove(), t = r;
  }
}
function wr(e) {
  if (!e || e.nodeType !== ct)
    throw Bt(), Ie;
  return (
    /** @type {Comment} */
    e.data
  );
}
function yr(e) {
  return e === this.v;
}
function br(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xr(e) {
  return !br(e, this.v);
}
let si = !1, ee = null;
function Ot(e) {
  ee = e;
}
function Er(e, t = !1, n) {
  ee = {
    p: ee,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Sr(e) {
  var t = (
    /** @type {ComponentContext} */
    ee
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      qr(r);
  }
  return ee = t.p, /** @type {T} */
  {};
}
function $r() {
  return !0;
}
const ii = /* @__PURE__ */ new WeakMap();
function oi(e) {
  var t = $;
  if (t === null)
    return R.f |= je, e;
  if ((t.f & Lt) === 0) {
    if ((t.f & mr) === 0)
      throw !t.parent && e instanceof Error && Rr(e), e;
    t.b.error(e);
  } else
    An(e, t);
}
function An(e, t) {
  for (; t !== null; ) {
    if ((t.f & mr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Rr(e), e;
}
function Rr(e) {
  const t = ii.get(e);
  t && (Ae(e, "message", {
    value: t.message
  }), Ae(e, "stack", {
    value: t.stack
  }));
}
let ft = [], an = [];
function jr() {
  var e = ft;
  ft = [], vr(e);
}
function ai() {
  var e = an;
  an = [], vr(e);
}
function li(e) {
  ft.length === 0 && queueMicrotask(jr), ft.push(e);
}
function ui() {
  ft.length > 0 && jr(), an.length > 0 && ai();
}
function ci() {
  for (var e = (
    /** @type {Effect} */
    $.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Ws(), e;
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  var t = G | Q, n = R !== null && (R.f & G) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return $ === null || n !== null && (n.f & Z) !== 0 ? t |= Z : $.f |= Cn, {
    ctx: ee,
    deps: null,
    effects: null,
    equals: yr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      L
    ),
    wv: 0,
    parent: n ?? $,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function fi(e, t) {
  let n = (
    /** @type {Effect | null} */
    $
  );
  n === null && Ks();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = dt(
    /** @type {V} */
    L
  ), o = null, a = !R;
  return $i(() => {
    try {
      var u = e();
    } catch (m) {
      u = Promise.reject(m);
    }
    var l = () => u;
    s = o?.then(l, l) ?? Promise.resolve(u), o = s;
    var c = (
      /** @type {Batch} */
      O
    ), h = r.pending;
    a && (r.update_pending_count(1), h || c.increment());
    const v = (m, f = void 0) => {
      o = null, h || c.activate(), f ? f !== On && (i.f |= je, kt(i, f)) : ((i.f & je) !== 0 && (i.f ^= je), kt(i, m)), a && (r.update_pending_count(-1), h || c.decrement()), Ar();
    };
    if (s.then(v, (m) => v(null, m || "unknown")), c)
      return () => {
        queueMicrotask(() => c.neuter());
      };
  }), new Promise((u) => {
    function l(c) {
      function h() {
        c === s ? u(i) : l(s);
      }
      c.then(h, h);
    }
    l(s);
  });
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  const t = /* @__PURE__ */ Cr(e);
  return t.equals = xr, t;
}
function Tr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      fe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function hi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & G) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function kn(e) {
  var t, n = $;
  Ee(hi(e));
  try {
    Tr(e), t = Xr(e);
  } finally {
    Ee(n);
  }
  return t;
}
function Or(e) {
  var t = kn(e);
  if (e.equals(t) || (e.v = t, e.wv = Gr()), !Xe)
    if (Ve !== null)
      Ve.set(e, e.v);
    else {
      var n = (xe || (e.f & Z) !== 0) && e.deps !== null ? $e : M;
      z(e, n);
    }
}
function pi(e, t, n) {
  const r = Cr;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var s = O, i = (
    /** @type {Effect} */
    $
  ), o = vi(), a = ci();
  Promise.all(t.map((u) => /* @__PURE__ */ fi(u))).then((u) => {
    s?.activate(), o();
    try {
      n([...e.map(r), ...u]);
    } catch (l) {
      (i.f & Ye) === 0 && An(l, i);
    }
    s?.deactivate(), Ar();
  }).catch((u) => {
    a.error(u);
  });
}
function vi() {
  var e = $, t = R, n = ee;
  return function() {
    Ee(e), de(t), Ot(n);
  };
}
function Ar() {
  Ee(null), de(null), Ot(null);
}
const nt = /* @__PURE__ */ new Set();
let O = null, Ve = null, Hn = /* @__PURE__ */ new Set(), At = [];
function kr() {
  const e = (
    /** @type {() => void} */
    At.shift()
  );
  At.length > 0 && queueMicrotask(kr), e();
}
let ke = [], qt = null, ln = !1, xt = !1;
class Ne {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #c = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #f = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    ke = [];
    var n = null;
    if (nt.size > 1) {
      n = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
      for (const [i, o] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = o;
      for (const i of nt)
        if (i !== this)
          for (const [o, a] of i.#t)
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = a);
    }
    for (const i of t)
      this.#p(i);
    if (this.#s.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#i, s = this.#r;
      this.#i = [], this.#r = [], this.#a = [], O = null, zn(r), zn(s), O === null ? O = this : nt.delete(this), this.#u?.resolve();
    } else
      this.#l(this.#i), this.#l(this.#r), this.#l(this.#a);
    if (n) {
      for (const [i, { v: o, wv: a }] of n)
        i.wv <= a && (i.v = o);
      Ve = null;
    }
    for (const i of this.#s)
      ut(i);
    for (const i of this.#o)
      ut(i);
    this.#s = [], this.#o = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #p(t) {
    t.f ^= M;
    for (var n = t.first; n !== null; ) {
      var r = n.f, s = (r & (we | Se)) !== 0, i = s && (r & M) !== 0, o = i || (r & ne) !== 0 || this.skipped_effects.has(n);
      if (!o && n.fn !== null) {
        if (s)
          n.f ^= M;
        else if ((r & M) === 0)
          if ((r & Rn) !== 0)
            this.#r.push(n);
          else if ((r & Tn) !== 0) {
            var a = n.b?.pending ? this.#o : this.#s;
            a.push(n);
          } else It(n) && ((n.f & Ge) !== 0 && this.#a.push(n), ut(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var l = n.parent;
      for (n = n.next; n === null && l !== null; )
        n = l.next, l = l.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(t) {
    for (const n of t)
      ((n.f & Q) !== 0 ? this.#f : this.#d).push(n), z(n, M);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    O = this;
  }
  deactivate() {
    O = null;
    for (const t of Hn)
      if (Hn.delete(t), t(), O !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    ke.length > 0 ? Nr() : this.#h(), O === this && (this.#n === 0 && nt.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#c)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#f)
        z(t, Q), Fe(t);
      for (const t of this.#d)
        z(t, $e), Fe(t);
      this.#i = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#u ??= Hs()).promise;
  }
  static ensure() {
    if (O === null) {
      const t = O = new Ne();
      nt.add(O), xt || Ne.enqueue(() => {
        O === t && t.flush();
      });
    }
    return O;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    At.length === 0 && queueMicrotask(kr), At.unshift(t);
  }
}
function mi(e) {
  var t = xt;
  xt = !0;
  try {
    for (var n; ; ) {
      if (ui(), ke.length === 0 && (O?.flush(), ke.length === 0))
        return qt = null, /** @type {T} */
        n;
      Nr();
    }
  } finally {
    xt = t;
  }
}
function Nr() {
  var e = ze;
  ln = !0;
  try {
    var t = 0;
    for (Jn(!0); ke.length > 0; ) {
      var n = Ne.ensure();
      if (t++ > 1e3) {
        var r, s;
        _i();
      }
      n.process(ke), Ce.clear();
    }
  } finally {
    ln = !1, Jn(e), qt = null;
  }
}
function _i() {
  try {
    Zs();
  } catch (e) {
    An(e, qt);
  }
}
function zn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ye | ne)) === 0 && It(r)) {
        var s = O ? O.current.size : 0;
        if (ut(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Vr(r) : r.fn = null), O !== null && O.current.size > s && (r.f & _r) !== 0)
          break;
      }
    }
    for (; n < t; )
      Fe(e[n++]);
  }
}
function Fe(e) {
  for (var t = qt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ln && t === $ && (n & Ge) !== 0)
      return;
    if ((n & (Se | we)) !== 0) {
      if ((n & M) === 0) return;
      t.f ^= M;
    }
  }
  ke.push(t);
}
const Ce = /* @__PURE__ */ new Map();
function dt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  const n = dt(e);
  return Ti(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t = !1, n = !0) {
  const r = dt(e);
  return t || (r.equals = xr), r;
}
function le(e, t, n = !1) {
  R !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ue || (R.f & In) !== 0) && $r() && (R.f & (G | Ge | Tn | In)) !== 0 && !ge?.includes(e) && ni();
  let r = n ? Me(t) : t;
  return kt(e, r);
}
function kt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Xe ? Ce.set(e, t) : Ce.set(e, n), e.v = t;
    var r = Ne.ensure();
    r.capture(e, n), (e.f & G) !== 0 && ((e.f & Q) !== 0 && kn(
      /** @type {Derived} */
      e
    ), z(e, (e.f & Z) === 0 ? M : $e)), e.wv = Gr(), Fr(e, Q), $ !== null && ($.f & M) !== 0 && ($.f & (we | Se)) === 0 && (Y === null ? Oi([e]) : Y.push(e));
  }
  return t;
}
function Xt(e) {
  le(e, e.v + 1);
}
function Fr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, s = 0; s < r; s++) {
      var i = n[s], o = i.f, a = (o & Q) === 0;
      a && z(i, t), (o & G) !== 0 ? Fr(
        /** @type {Derived} */
        i,
        $e
      ) : a && Fe(
        /** @type {Effect} */
        i
      );
    }
}
function Me(e) {
  if (typeof e != "object" || e === null || Yt in e)
    return e;
  const t = Ms(e);
  if (t !== Us && t !== qs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Sn(e), s = /* @__PURE__ */ ve(0), i = Te, o = (a) => {
    if (Te === i)
      return a();
    var u = R, l = Te;
    de(null), Gn(i);
    var c = a();
    return de(u), Gn(l), c;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && ei();
        var c = n.get(u);
        return c === void 0 ? c = o(() => {
          var h = /* @__PURE__ */ ve(l.value);
          return n.set(u, h), h;
        }) : le(c, l.value, !0), !0;
      },
      deleteProperty(a, u) {
        var l = n.get(u);
        if (l === void 0) {
          if (u in a) {
            const c = o(() => /* @__PURE__ */ ve(L));
            n.set(u, c), Xt(s);
          }
        } else
          le(l, L), Xt(s);
        return !0;
      },
      get(a, u, l) {
        if (u === Yt)
          return e;
        var c = n.get(u), h = u in a;
        if (c === void 0 && (!h || He(a, u)?.writable) && (c = o(() => {
          var m = Me(h ? a[u] : L), f = /* @__PURE__ */ ve(m);
          return f;
        }), n.set(u, c)), c !== void 0) {
          var v = X(c);
          return v === L ? void 0 : v;
        }
        return Reflect.get(a, u, l);
      },
      getOwnPropertyDescriptor(a, u) {
        var l = Reflect.getOwnPropertyDescriptor(a, u);
        if (l && "value" in l) {
          var c = n.get(u);
          c && (l.value = X(c));
        } else if (l === void 0) {
          var h = n.get(u), v = h?.v;
          if (h !== void 0 && v !== L)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return l;
      },
      has(a, u) {
        if (u === Yt)
          return !0;
        var l = n.get(u), c = l !== void 0 && l.v !== L || Reflect.has(a, u);
        if (l !== void 0 || $ !== null && (!c || He(a, u)?.writable)) {
          l === void 0 && (l = o(() => {
            var v = c ? Me(a[u]) : L, m = /* @__PURE__ */ ve(v);
            return m;
          }), n.set(u, l));
          var h = X(l);
          if (h === L)
            return !1;
        }
        return c;
      },
      set(a, u, l, c) {
        var h = n.get(u), v = u in a;
        if (r && u === "length")
          for (var m = l; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var f = n.get(m + "");
            f !== void 0 ? le(f, L) : m in a && (f = o(() => /* @__PURE__ */ ve(L)), n.set(m + "", f));
          }
        if (h === void 0)
          (!v || He(a, u)?.writable) && (h = o(() => /* @__PURE__ */ ve(void 0)), le(h, Me(l)), n.set(u, h));
        else {
          v = h.v !== L;
          var p = o(() => Me(l));
          le(h, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(a, u);
        if (_?.set && _.set.call(c, l), !v) {
          if (r && typeof u == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), y = Number(u);
            Number.isInteger(y) && y >= b.v && le(b, y + 1);
          }
          Xt(s);
        }
        return !0;
      },
      ownKeys(a) {
        X(s);
        var u = Reflect.ownKeys(a).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== L;
        });
        for (var [l, c] of n)
          c.v !== L && !(l in a) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        ti();
      }
    }
  );
}
var Vn, Pr, Lr, Dr;
function un() {
  if (Vn === void 0) {
    Vn = window, Pr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Lr = He(t, "firstChild").get, Dr = He(t, "nextSibling").get, Mn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Mn(n) && (n.__t = void 0);
  }
}
function We(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Lr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Dr.call(e);
}
function U(e, t) {
  if (!A)
    return /* @__PURE__ */ Je(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(T)
  );
  if (n === null)
    n = T.appendChild(We());
  else if (t && n.nodeType !== gr) {
    var r = We();
    return n?.before(r), ce(r), r;
  }
  return ce(n), n;
}
function gi(e, t) {
  if (!A) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Je(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ye(n) : n;
  }
  return T;
}
function q(e, t = 1, n = !1) {
  let r = A ? T : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(r);
  if (!A)
    return r;
  if (n && r?.nodeType !== gr) {
    var i = We();
    return r === null ? s?.after(i) : r.before(i), ce(i), i;
  }
  return ce(r), /** @type {TemplateNode} */
  r;
}
function Br(e) {
  e.textContent = "";
}
function Ur() {
  return !1;
}
function Mt(e) {
  var t = R, n = $;
  de(null), Ee(null);
  try {
    return e();
  } finally {
    de(t), Ee(n);
  }
}
function wi(e) {
  $ === null && R === null && Xs(), R !== null && (R.f & Z) !== 0 && $ === null && Ys(), Xe && Gs();
}
function yi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function he(e, t, n, r = !0) {
  var s = $;
  s !== null && (s.f & ne) !== 0 && (e |= ne);
  var i = {
    ctx: ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Q,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ut(i), i.f |= Lt;
    } catch (u) {
      throw fe(i), u;
    }
  else t !== null && Fe(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Cn) === 0;
  if (!o && r && (s !== null && yi(i, s), R !== null && (R.f & G) !== 0 && (e & Se) === 0)) {
    var a = (
      /** @type {Derived} */
      R
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function bi(e) {
  const t = he(jn, null, !1);
  return z(t, M), t.teardown = e, t;
}
function xi(e) {
  wi();
  var t = (
    /** @type {Effect} */
    $.f
  ), n = !R && (t & we) !== 0 && (t & Lt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ??= []).push(e);
  } else
    return qr(e);
}
function qr(e) {
  return he(Rn | _r, e, !1);
}
function Ei(e) {
  Ne.ensure();
  const t = he(Se, e, !0);
  return () => {
    fe(t);
  };
}
function Si(e) {
  Ne.ensure();
  const t = he(Se, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fn(t, () => {
      fe(t), r(void 0);
    }) : (fe(t), r(void 0));
  });
}
function Mr(e) {
  return he(Rn, e, !1);
}
function $i(e) {
  return he(Tn | Cn, e, !0);
}
function Ri(e, t = 0) {
  return he(jn | t, e, !0);
}
function Wn(e, t = [], n = []) {
  pi(t, n, (r) => {
    he(jn, () => e(...r.map(X)), !0);
  });
}
function Ir(e, t = 0) {
  var n = he(Ge | t, e, !0);
  return n;
}
function Ke(e, t = !0) {
  return he(we, e, !0, t);
}
function Hr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xe, r = R;
    Kn(!0), de(null);
    try {
      t.call(null);
    } finally {
      Kn(n), de(r);
    }
  }
}
function zr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Mt(() => {
      s.abort(On);
    });
    var r = n.next;
    (n.f & Se) !== 0 ? n.parent = null : fe(n, t), n = r;
  }
}
function ji(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & we) === 0 && fe(t), t = n;
  }
}
function fe(e, t = !0) {
  var n = !1;
  (t || (e.f & zs) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Ci(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), zr(e, t && !n), Nt(e, 0), z(e, Ye);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Hr(e);
  var s = e.parent;
  s !== null && s.first !== null && Vr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ci(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(e)
    );
    e.remove(), e = n;
  }
}
function Vr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fn(e, t) {
  var n = [];
  Pn(e, n, !0), Wr(n, () => {
    fe(e), t && t();
  });
}
function Wr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function Pn(e, t, n) {
  if ((e.f & ne) === 0) {
    if (e.f ^= ne, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & Dt) !== 0 || (r.f & we) !== 0;
      Pn(r, t, i ? n : !1), r = s;
    }
  }
}
function Ln(e) {
  Jr(e, !0);
}
function Jr(e, t) {
  if ((e.f & ne) !== 0) {
    e.f ^= ne, (e.f & M) === 0 && (z(e, Q), Fe(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Dt) !== 0 || (n.f & we) !== 0;
      Jr(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let ze = !1;
function Jn(e) {
  ze = e;
}
let Xe = !1;
function Kn(e) {
  Xe = e;
}
let R = null, ue = !1;
function de(e) {
  R = e;
}
let $ = null;
function Ee(e) {
  $ = e;
}
let ge = null;
function Ti(e) {
  R !== null && (ge === null ? ge = [e] : ge.push(e));
}
let H = null, K = 0, Y = null;
function Oi(e) {
  Y = e;
}
let Kr = 1, ht = 0, Te = ht;
function Gn(e) {
  Te = e;
}
let xe = !1;
function Gr() {
  return ++Kr;
}
function It(e) {
  var t = e.f;
  if ((t & Q) !== 0)
    return !0;
  if ((t & $e) !== 0) {
    var n = e.deps, r = (t & Z) !== 0;
    if (n !== null) {
      var s, i, o = (t & Tt) !== 0, a = r && $ !== null && !xe, u = n.length;
      if ((o || a) && ($ === null || ($.f & Ye) === 0)) {
        var l = (
          /** @type {Derived} */
          e
        ), c = l.parent;
        for (s = 0; s < u; s++)
          i = n[s], (o || !i?.reactions?.includes(l)) && (i.reactions ??= []).push(l);
        o && (l.f ^= Tt), a && c !== null && (c.f & Z) === 0 && (l.f ^= Z);
      }
      for (s = 0; s < u; s++)
        if (i = n[s], It(
          /** @type {Derived} */
          i
        ) && Or(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || $ !== null && !xe) && z(e, M);
  }
  return !1;
}
function Yr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !ge?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & G) !== 0 ? Yr(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? z(i, Q) : (i.f & M) !== 0 && z(i, $e), Fe(
        /** @type {Effect} */
        i
      ));
    }
}
function Xr(e) {
  var t = H, n = K, r = Y, s = R, i = xe, o = ge, a = ee, u = ue, l = Te, c = e.f;
  H = /** @type {null | Value[]} */
  null, K = 0, Y = null, xe = (c & Z) !== 0 && (ue || !ze || R === null), R = (c & (we | Se)) === 0 ? e : null, ge = null, Ot(e.ctx), ue = !1, Te = ++ht, e.ac !== null && (Mt(() => {
    e.ac.abort(On);
  }), e.ac = null);
  try {
    e.f |= sn;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h(), m = e.deps;
    if (H !== null) {
      var f;
      if (Nt(e, K), m !== null && K > 0)
        for (m.length = K + H.length, f = 0; f < H.length; f++)
          m[K + f] = H[f];
      else
        e.deps = m = H;
      if (!xe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & G) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (f = K; f < m.length; f++)
          (m[f].reactions ??= []).push(e);
    } else m !== null && K < m.length && (Nt(e, K), m.length = K);
    if ($r() && Y !== null && !ue && m !== null && (e.f & (G | $e | Q)) === 0)
      for (f = 0; f < /** @type {Source[]} */
      Y.length; f++)
        Yr(
          Y[f],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (ht++, Y !== null && (r === null ? r = Y : r.push(.../** @type {Source[]} */
    Y))), (e.f & je) !== 0 && (e.f ^= je), v;
  } catch (p) {
    return oi(p);
  } finally {
    e.f ^= sn, H = t, K = n, Y = r, R = s, xe = i, ge = o, Ot(a), ue = u, Te = l;
  }
}
function Ai(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bs.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (H === null || !H.includes(t)) && (z(t, $e), (t.f & (Z | Tt)) === 0 && (t.f ^= Tt), Tr(
    /** @type {Derived} **/
    t
  ), Nt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Nt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ai(e, n[r]);
}
function ut(e) {
  var t = e.f;
  if ((t & Ye) === 0) {
    z(e, M);
    var n = $, r = ze;
    $ = e, ze = !0;
    try {
      (t & Ge) !== 0 ? ji(e) : zr(e), Hr(e);
      var s = Xr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Kr;
      var i;
      pr && si && (e.f & Q) !== 0 && e.deps;
    } finally {
      ze = r, $ = n;
    }
  }
}
function X(e) {
  var t = e.f, n = (t & G) !== 0;
  if (R !== null && !ue) {
    var r = $ !== null && ($.f & Ye) !== 0;
    if (!r && !ge?.includes(e)) {
      var s = R.deps;
      if ((R.f & sn) !== 0)
        e.rv < ht && (e.rv = ht, H === null && s !== null && s[K] === e ? K++ : H === null ? H = [e] : (!xe || !H.includes(e)) && H.push(e));
      else {
        (R.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [R] : i.includes(R) || i.push(R);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && (a.f & Z) === 0 && (o.f ^= Z);
  }
  if (Xe) {
    if (Ce.has(e))
      return Ce.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var u = o.v;
      return ((o.f & M) === 0 && o.reactions !== null || Zr(o)) && (u = kn(o)), Ce.set(o, u), u;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, Ve?.has(o))
      return Ve.get(o);
    It(o) && Or(o);
  }
  if ((e.f & je) !== 0)
    throw e.v;
  return e.v;
}
function Zr(e) {
  if (e.v === L) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ce.has(t) || (t.f & G) !== 0 && Zr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Dn(e) {
  var t = ue;
  try {
    return ue = !0, e();
  } finally {
    ue = t;
  }
}
const ki = -7169;
function z(e, t) {
  e.f = e.f & ki | t;
}
const Qr = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Ni(e) {
  for (var t = 0; t < e.length; t++)
    Qr.add(e[t]);
  for (var n of cn)
    n(e);
}
let Yn = null;
function yt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Yn = e;
  var o = 0, a = Yn === e && e.__root;
  if (a) {
    var u = s.indexOf(a);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = s.indexOf(t);
    if (l === -1)
      return;
    u <= l && (o = u);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    Ae(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = R, h = $;
    de(null), Ee(null);
    try {
      for (var v, m = []; i !== null; ) {
        var f = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Sn(p)) {
              var [_, ...b] = p;
              _.apply(i, [e, ...b]);
            } else
              p.call(i, e);
        } catch (y) {
          v ? m.push(y) : v = y;
        }
        if (e.cancelBubble || f === t || f === null)
          break;
        i = f;
      }
      if (v) {
        for (let y of m)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, de(c), Ee(h);
    }
  }
}
function Fi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Et(e, t) {
  var n = (
    /** @type {Effect} */
    $
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  var n = (t & Ls) !== 0, r = (t & Ds) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (A)
      return Et(T, null), T;
    s === void 0 && (s = Fi(i ? e : "<!>" + e), n || (s = /** @type {Node} */
    /* @__PURE__ */ Je(s)));
    var o = (
      /** @type {TemplateNode} */
      r || Pr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Et(a, u);
    } else
      Et(o, o);
    return o;
  };
}
function be(e, t) {
  if (A) {
    $.nodes_end = T, Ut();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Pi = ["touchstart", "touchmove"];
function Li(e) {
  return Pi.includes(e);
}
let fn = !0;
function Xn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function es(e, t) {
  return ts(e, t);
}
function Di(e, t) {
  un(), t.intro = t.intro ?? !1;
  const n = t.target, r = A, s = T;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(n)
    ); i && (i.nodeType !== ct || /** @type {Comment} */
    i.data !== hr); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(i);
    if (!i)
      throw Ie;
    _e(!0), ce(
      /** @type {Comment} */
      i
    ), Ut();
    const o = ts(e, { ...t, anchor: i });
    if (T === null || T.nodeType !== ct || /** @type {Comment} */
    T.data !== En)
      throw Bt(), Ie;
    return _e(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Ie && console.warn("Failed to hydrate: ", o), t.recover === !1 && Qs(), un(), Br(n), _e(!1), es(e, t);
  } finally {
    _e(r), ce(s);
  }
}
const De = /* @__PURE__ */ new Map();
function ts(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  un();
  var a = /* @__PURE__ */ new Set(), u = (h) => {
    for (var v = 0; v < h.length; v++) {
      var m = h[v];
      if (!a.has(m)) {
        a.add(m);
        var f = Li(m);
        t.addEventListener(m, yt, { passive: f });
        var p = De.get(m);
        p === void 0 ? (document.addEventListener(m, yt, { passive: f }), De.set(m, 1)) : De.set(m, p + 1);
      }
    }
  };
  u($n(Qr)), cn.add(u);
  var l = void 0, c = Si(() => {
    var h = n ?? t.appendChild(We());
    return Ke(() => {
      if (i) {
        Er({});
        var v = (
          /** @type {ComponentContext} */
          ee
        );
        v.c = i;
      }
      s && (r.$$events = s), A && Et(
        /** @type {TemplateNode} */
        h,
        null
      ), fn = o, l = e(h, r) || {}, fn = !0, A && ($.nodes_end = T), i && Sr();
    }), () => {
      for (var v of a) {
        t.removeEventListener(v, yt);
        var m = (
          /** @type {number} */
          De.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, yt), De.delete(v)) : De.set(v, m);
      }
      cn.delete(u), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return dn.set(l, c), l;
}
let dn = /* @__PURE__ */ new WeakMap();
function Bi(e, t) {
  const n = dn.get(e);
  return n ? (dn.delete(e), n(t)) : Promise.resolve();
}
function Ui(e) {
  ee === null && Js(), xi(() => {
    const t = Dn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function rt(e, t, n = !1) {
  A && Ut();
  var r = e, s = null, i = null, o = L, a = n ? Dt : 0, u = !1;
  const l = (m, f = !0) => {
    u = !0, v(f, m);
  };
  var c = null;
  function h() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var m = o ? s : i, f = o ? i : s;
    m && Ln(m), f && Fn(f, () => {
      o ? i = null : s = null;
    });
  }
  const v = (m, f) => {
    if (o === (o = m)) return;
    let p = !1;
    if (A) {
      const S = wr(r) === xn;
      !!o === S && (r = on(), ce(r), _e(!1), p = !0);
    }
    var _ = Ur(), b = r;
    if (_ && (c = document.createDocumentFragment(), c.append(b = We())), o ? s ??= f && Ke(() => f(b)) : i ??= f && Ke(() => f(b)), _) {
      var y = (
        /** @type {Batch} */
        O
      ), w = o ? s : i, E = o ? i : s;
      w && y.skipped_effects.delete(w), E && y.skipped_effects.add(E), y.add_callback(h);
    } else
      h();
    p && _e(!0);
  };
  Ir(() => {
    u = !1, t(l), u || v(null, null);
  }, a), A && (r = T);
}
function qi(e, t) {
  return t;
}
function Mi(e, t, n) {
  for (var r = e.items, s = [], i = t.length, o = 0; o < i; o++)
    Pn(t[o].e, s, !0);
  var a = i > 0 && s.length === 0 && n !== null;
  if (a) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Br(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), ae(e, t[0].prev, t[i - 1].next);
  }
  Wr(s, () => {
    for (var l = 0; l < i; l++) {
      var c = t[l];
      a || (r.delete(c.k), ae(e, c.prev, c.next)), fe(c.e, !a);
    }
  });
}
function Ii(e, t, n, r, s, i = null) {
  var o = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  A && Ut();
  var u = null, l = !1, c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ di(() => {
    var p = n();
    return Sn(p) ? p : p == null ? [] : $n(p);
  }), v, m;
  function f() {
    Hi(
      m,
      v,
      a,
      c,
      o,
      s,
      t,
      r,
      n
    ), i !== null && (v.length === 0 ? u ? Ln(u) : u = Ke(() => i(o)) : u !== null && Fn(u, () => {
      u = null;
    }));
  }
  Ir(() => {
    m ??= /** @type {Effect} */
    $, v = /** @type {V[]} */
    X(h);
    var p = v.length;
    if (l && p === 0)
      return;
    l = p === 0;
    let _ = !1;
    if (A) {
      var b = wr(o) === xn;
      b !== (p === 0) && (o = on(), ce(o), _e(!1), _ = !0);
    }
    if (A) {
      for (var y = null, w, E = 0; E < p; E++) {
        if (T.nodeType === ct && /** @type {Comment} */
        T.data === En) {
          o = /** @type {Comment} */
          T, _ = !0, _e(!1);
          break;
        }
        var S = v[E], j = r(S, E);
        w = hn(
          T,
          a,
          y,
          null,
          S,
          j,
          E,
          s,
          t,
          n
        ), a.items.set(j, w), y = w;
      }
      p > 0 && ce(on());
    }
    if (A)
      p === 0 && i && (u = Ke(() => i(o)));
    else if (Ur()) {
      var F = /* @__PURE__ */ new Set(), P = (
        /** @type {Batch} */
        O
      );
      for (E = 0; E < p; E += 1) {
        S = v[E], j = r(S, E);
        var g = a.items.get(j) ?? c.get(j);
        g ? ns(g, S, E) : (w = hn(
          null,
          a,
          null,
          null,
          S,
          j,
          E,
          s,
          t,
          n,
          !0
        ), c.set(j, w)), F.add(j);
      }
      for (const [C, N] of a.items)
        F.has(C) || P.skipped_effects.add(N.e);
      P.add_callback(f);
    } else
      f();
    _ && _e(!0), X(h);
  }), A && (o = T);
}
function Hi(e, t, n, r, s, i, o, a, u) {
  var l = t.length, c = n.items, h = n.first, v = h, m, f = null, p = [], _ = [], b, y, w, E;
  for (E = 0; E < l; E += 1) {
    if (b = t[E], y = a(b, E), w = c.get(y), w === void 0) {
      var S = r.get(y);
      if (S !== void 0) {
        r.delete(y), c.set(y, S);
        var j = f ? f.next : v;
        ae(n, f, S), ae(n, S, j), Zt(S, j, s), f = S;
      } else {
        var F = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : s;
        f = hn(
          F,
          n,
          f,
          f === null ? n.first : f.next,
          b,
          y,
          E,
          i,
          o,
          u
        );
      }
      c.set(y, f), p = [], _ = [], v = f.next;
      continue;
    }
    if (ns(w, b, E), (w.e.f & ne) !== 0 && Ln(w.e), w !== v) {
      if (m !== void 0 && m.has(w)) {
        if (p.length < _.length) {
          var P = _[0], g;
          f = P.prev;
          var C = p[0], N = p[p.length - 1];
          for (g = 0; g < p.length; g += 1)
            Zt(p[g], P, s);
          for (g = 0; g < _.length; g += 1)
            m.delete(_[g]);
          ae(n, C.prev, N.next), ae(n, f, C), ae(n, N, P), v = P, f = N, E -= 1, p = [], _ = [];
        } else
          m.delete(w), Zt(w, v, s), ae(n, w.prev, w.next), ae(n, w, f === null ? n.first : f.next), ae(n, f, w), f = w;
        continue;
      }
      for (p = [], _ = []; v !== null && v.k !== y; )
        (v.e.f & ne) === 0 && (m ??= /* @__PURE__ */ new Set()).add(v), _.push(v), v = v.next;
      if (v === null)
        continue;
      w = v;
    }
    p.push(w), f = w, v = w.next;
  }
  if (v !== null || m !== void 0) {
    for (var D = m === void 0 ? [] : $n(m); v !== null; )
      (v.e.f & ne) === 0 && D.push(v), v = v.next;
    var J = D.length;
    if (J > 0) {
      var se = null;
      Mi(n, D, se);
    }
  }
  e.first = n.first && n.first.e, e.last = f && f.e;
  for (var ie of r.values())
    fe(ie.e);
  r.clear();
}
function ns(e, t, n, r) {
  kt(e.v, t), e.i = n;
}
function hn(e, t, n, r, s, i, o, a, u, l, c) {
  var h = (u & ks) !== 0, v = (u & Fs) === 0, m = h ? v ? /* @__PURE__ */ Nn(s, !1, !1) : dt(s) : s, f = (u & Ns) === 0 ? o : dt(o), p = {
    i: f,
    v: m,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var _ = document.createDocumentFragment();
      _.append(e = We());
    }
    return p.e = Ke(() => a(
      /** @type {Node} */
      e,
      m,
      f,
      l
    ), A), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? c || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Zt(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, s = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(i)
    );
    s.before(i), i = o;
  }
}
function ae(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function zi(e, t) {
  Mr(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
const Vi = () => performance.now(), me = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Vi(),
  tasks: /* @__PURE__ */ new Set()
};
function rs() {
  const e = me.now();
  me.tasks.forEach((t) => {
    t.c(e) || (me.tasks.delete(t), t.f());
  }), me.tasks.size !== 0 && me.tick(rs);
}
function Wi(e) {
  let t;
  return me.tasks.size === 0 && me.tick(rs), {
    promise: new Promise((n) => {
      me.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      me.tasks.delete(t);
    }
  };
}
function bt(e, t) {
  Mt(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Ji(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Zn(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const o = Ji(s.trim());
    t[o] = i.trim();
  }
  return t;
}
const Ki = (e) => e;
function Qt(e, t, n, r) {
  var s = (e & Ps) !== 0, i = "both", o, a = t.inert, u = t.style.overflow, l, c;
  function h() {
    return Mt(() => o ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var v = {
    is_global: s,
    in() {
      t.inert = a, bt(t, "introstart"), l = pn(t, h(), c, 1, () => {
        bt(t, "introend"), l?.abort(), l = o = void 0, t.style.overflow = u;
      });
    },
    out(_) {
      t.inert = !0, bt(t, "outrostart"), c = pn(t, h(), l, 0, () => {
        bt(t, "outroend"), _?.();
      });
    },
    stop: () => {
      l?.abort(), c?.abort();
    }
  }, m = (
    /** @type {Effect} */
    $
  );
  if ((m.transitions ??= []).push(v), fn) {
    var f = s;
    if (!f) {
      for (var p = (
        /** @type {Effect | null} */
        m.parent
      ); p && (p.f & Dt) !== 0; )
        for (; (p = p.parent) && (p.f & Ge) === 0; )
          ;
      f = !p || (p.f & Lt) !== 0;
    }
    f && Mr(() => {
      Dn(() => v.in());
    });
  }
}
function pn(e, t, n, r, s) {
  var i = r === 1;
  if (Is(t)) {
    var o, a = !1;
    return li(() => {
      if (!a) {
        var _ = t({ direction: i ? "in" : "out" });
        o = pn(e, _, n, r, s);
      }
    }), {
      abort: () => {
        a = !0, o?.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n?.deactivate(), !t?.duration)
    return s(), {
      abort: te,
      deactivate: te,
      reset: te,
      t: () => r
    };
  const { delay: u = 0, css: l, tick: c, easing: h = Ki } = t;
  var v = [];
  if (i && n === void 0 && (c && c(0, 1), l)) {
    var m = Zn(l(0, 1));
    v.push(m, m);
  }
  var f = () => 1 - r, p = e.animate(v, { duration: u, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var _ = n?.t() ?? 1 - r;
    n?.abort();
    var b = r - _, y = (
      /** @type {number} */
      t.duration * Math.abs(b)
    ), w = [];
    if (y > 0) {
      var E = !1;
      if (l)
        for (var S = Math.ceil(y / 16.666666666666668), j = 0; j <= S; j += 1) {
          var F = _ + b * h(j / S), P = Zn(l(F, 1 - F));
          w.push(P), E ||= P.overflow === "hidden";
        }
      E && (e.style.overflow = "hidden"), f = () => {
        var g = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return _ + b * h(g / y);
      }, c && Wi(() => {
        if (p.playState !== "running") return !1;
        var g = f();
        return c(g, 1 - g), !0;
      });
    }
    p = e.animate(w, { duration: y, fill: "forwards" }), p.onfinish = () => {
      f = () => r, c?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = te);
    },
    deactivate: () => {
      s = te;
    },
    reset: () => {
      r === 0 && c?.(1, 0);
    },
    t: () => f()
  };
}
function ss(e, t, n) {
  if (e == null)
    return t(void 0), te;
  const r = Dn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Be = [];
function vt(e, t = te) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (br(e, a) && (e = a, n)) {
      const u = !Be.length;
      for (const l of r)
        l[1](), Be.push(l, e);
      if (u) {
        for (let l = 0; l < Be.length; l += 2)
          Be[l][0](Be[l + 1]);
        Be.length = 0;
      }
    }
  }
  function i(a) {
    s(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, u = te) {
    const l = [a, u];
    return r.add(l), r.size === 1 && (n = t(s, i) || te), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function Gi(e) {
  let t;
  return ss(e, (n) => t = n)(), t;
}
let vn = Symbol();
function st(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ Nn(void 0),
    unsubscribe: te
  };
  if (r.store !== e && !(vn in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = te;
    else {
      var s = !0;
      r.unsubscribe = ss(e, (i) => {
        s ? r.source.v = i : le(r.source, i);
      }), s = !1;
    }
  return e && vn in n ? Gi(e) : X(r.source);
}
function Yi() {
  const e = {};
  function t() {
    bi(() => {
      for (var n in e)
        e[n].unsubscribe();
      Ae(e, vn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Xi(e) {
  return new Zi(e);
}
class Zi {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, o) => {
      var a = /* @__PURE__ */ Nn(o, !1, !1);
      return n.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return X(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === Vs ? !0 : (X(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, a) {
          return le(n.get(o) ?? r(o, a), a), Reflect.set(i, o, a);
        }
      }
    );
    this.#e = (t.hydrate ? Di : es)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && mi(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Ae(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(o) {
          this.#e[i] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#e.$destroy = () => {
      Bi(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let is;
typeof HTMLElement == "function" && (is = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (s) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), be(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Qi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = St(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Xi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Ei(() => {
        Ri(() => {
          this.$$r = !0;
          for (const r of Ct(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = St(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const i = this.$$c.$on(r, s);
          this.$$l_u.set(s, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = St(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ct(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function St(e, t, n, r) {
  const s = n[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Qi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function eo(e, t, n, r, s, i) {
  let o = class extends is {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ct(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ct(t).forEach((a) => {
    Ae(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        u = St(a, u, t), this.$$d[a] = u;
        var l = this.$$c;
        if (l) {
          var c = He(l, a)?.get;
          c ? l[a] = u : l.$set({ [a]: u });
        }
      }
    });
  }), r.forEach((a) => {
    Ae(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
function to(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Qn(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function en(e, { delay: t = 0, duration: n = 400, easing: r = to, x: s = 0, y: i = 0, opacity: o = 0 } = {}) {
  const a = getComputedStyle(e), u = +a.opacity, l = a.transform === "none" ? "" : a.transform, c = u * (1 - o), [h, v] = Qn(s), [m, f] = Qn(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, _) => `
			transform: ${l} translate(${(1 - p) * h}${v}, ${(1 - p) * m}${f});
			opacity: ${u - c * _}`
  };
}
const it = vt(!0), Ue = vt(!1), qe = vt(!1), ot = vt(!1), at = vt(!1);
function os(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: no } = Object.prototype, { getPrototypeOf: Bn } = Object, { iterator: Ht, toStringTag: as } = Symbol, zt = /* @__PURE__ */ ((e) => (t) => {
  const n = no.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), re = (e) => (e = e.toLowerCase(), (t) => zt(t) === e), Vt = (e) => (t) => typeof t === e, { isArray: Ze } = Array, pt = Vt("undefined");
function mt(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ls = re("ArrayBuffer");
function ro(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ls(e.buffer), t;
}
const so = Vt("string"), V = Vt("function"), us = Vt("number"), _t = (e) => e !== null && typeof e == "object", io = (e) => e === !0 || e === !1, $t = (e) => {
  if (zt(e) !== "object")
    return !1;
  const t = Bn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(as in e) && !(Ht in e);
}, oo = (e) => {
  if (!_t(e) || mt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ao = re("Date"), lo = re("File"), uo = re("Blob"), co = re("FileList"), fo = (e) => _t(e) && V(e.pipe), ho = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || V(e.append) && ((t = zt(e)) === "formdata" || // detect form-data instance
  t === "object" && V(e.toString) && e.toString() === "[object FormData]"));
}, po = re("URLSearchParams"), [vo, mo, _o, go] = ["ReadableStream", "Request", "Response", "Headers"].map(re), wo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ze(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (mt(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function cs(e, t) {
  if (mt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, fs = (e) => !pt(e) && e !== Re;
function mn() {
  const { caseless: e } = fs(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && cs(t, s) || s;
    $t(t[i]) && $t(r) ? t[i] = mn(t[i], r) : $t(r) ? t[i] = mn({}, r) : Ze(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && gt(arguments[r], n);
  return t;
}
const yo = (e, t, n, { allOwnKeys: r } = {}) => (gt(t, (s, i) => {
  n && V(s) ? e[i] = os(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), bo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xo = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Eo = (e, t, n, r) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && Bn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, So = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $o = (e) => {
  if (!e) return null;
  if (Ze(e)) return e;
  let t = e.length;
  if (!us(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ro = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bn(Uint8Array)), jo = (e, t) => {
  const r = (e && e[Ht]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Co = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, To = re("HTMLFormElement"), Oo = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), er = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ao = re("RegExp"), ds = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  gt(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, ko = (e) => {
  ds(e, (t, n) => {
    if (V(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (V(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, No = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return Ze(e) ? r(e) : r(String(e).split(t)), n;
}, Fo = () => {
}, Po = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Lo(e) {
  return !!(e && V(e.append) && e[as] === "FormData" && e[Ht]);
}
const Do = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (_t(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (mt(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = Ze(r) ? [] : {};
        return gt(r, (o, a) => {
          const u = n(o, s + 1);
          !pt(u) && (i[a] = u);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Bo = re("AsyncFunction"), Uo = (e) => e && (_t(e) || V(e)) && V(e.then) && V(e.catch), hs = ((e, t) => e ? setImmediate : t ? ((n, r) => (Re.addEventListener("message", ({ source: s, data: i }) => {
  s === Re && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Re.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  V(Re.postMessage)
), qo = typeof queueMicrotask < "u" ? queueMicrotask.bind(Re) : typeof process < "u" && process.nextTick || hs, Mo = (e) => e != null && V(e[Ht]), d = {
  isArray: Ze,
  isArrayBuffer: ls,
  isBuffer: mt,
  isFormData: ho,
  isArrayBufferView: ro,
  isString: so,
  isNumber: us,
  isBoolean: io,
  isObject: _t,
  isPlainObject: $t,
  isEmptyObject: oo,
  isReadableStream: vo,
  isRequest: mo,
  isResponse: _o,
  isHeaders: go,
  isUndefined: pt,
  isDate: ao,
  isFile: lo,
  isBlob: uo,
  isRegExp: Ao,
  isFunction: V,
  isStream: fo,
  isURLSearchParams: po,
  isTypedArray: Ro,
  isFileList: co,
  forEach: gt,
  merge: mn,
  extend: yo,
  trim: wo,
  stripBOM: bo,
  inherits: xo,
  toFlatObject: Eo,
  kindOf: zt,
  kindOfTest: re,
  endsWith: So,
  toArray: $o,
  forEachEntry: jo,
  matchAll: Co,
  isHTMLForm: To,
  hasOwnProperty: er,
  hasOwnProp: er,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ds,
  freezeMethods: ko,
  toObjectSet: No,
  toCamelCase: Oo,
  noop: Fo,
  toFiniteNumber: Po,
  findKey: cs,
  global: Re,
  isContextDefined: fs,
  isSpecCompliantForm: Lo,
  toJSONObject: Do,
  isAsyncFn: Bo,
  isThenable: Uo,
  setImmediate: hs,
  asap: qo,
  isIterable: Mo
};
function x(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
d.inherits(x, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ps = x.prototype, vs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  vs[e] = { value: e };
});
Object.defineProperties(x, vs);
Object.defineProperty(ps, "isAxiosError", { value: !0 });
x.from = (e, t, n, r, s, i) => {
  const o = Object.create(ps);
  return d.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), x.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Io = null;
function _n(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function ms(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function tr(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ms(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ho(e) {
  return d.isArray(e) && !e.some(_n);
}
const zo = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wt(e, t, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, _) {
    return !d.isUndefined(_[p]);
  });
  const r = n.metaTokens, s = n.visitor || c, i = n.dots, o = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (d.isDate(f))
      return f.toISOString();
    if (d.isBoolean(f))
      return f.toString();
    if (!u && d.isBlob(f))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(f) || d.isTypedArray(f) ? u && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function c(f, p, _) {
    let b = f;
    if (f && !_ && typeof f == "object") {
      if (d.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), f = JSON.stringify(f);
      else if (d.isArray(f) && Ho(f) || (d.isFileList(f) || d.endsWith(p, "[]")) && (b = d.toArray(f)))
        return p = ms(p), b.forEach(function(w, E) {
          !(d.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? tr([p], E, i) : o === null ? p : p + "[]",
            l(w)
          );
        }), !1;
    }
    return _n(f) ? !0 : (t.append(tr(_, p, i), l(f)), !1);
  }
  const h = [], v = Object.assign(zo, {
    defaultVisitor: c,
    convertValue: l,
    isVisitable: _n
  });
  function m(f, p) {
    if (!d.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(f), d.forEach(f, function(b, y) {
        (!(d.isUndefined(b) || b === null) && s.call(
          t,
          b,
          d.isString(y) ? y.trim() : y,
          p,
          v
        )) === !0 && m(b, p ? p.concat(y) : [y]);
      }), h.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function nr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Un(e, t) {
  this._pairs = [], e && Wt(e, this, t);
}
const _s = Un.prototype;
_s.append = function(t, n) {
  this._pairs.push([t, n]);
};
_s.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, nr);
  } : nr;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Vo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function gs(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Vo;
  d.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = d.isURLSearchParams(t) ? t.toString() : new Un(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class rr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ws = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wo = typeof URLSearchParams < "u" ? URLSearchParams : Un, Jo = typeof FormData < "u" ? FormData : null, Ko = typeof Blob < "u" ? Blob : null, Go = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wo,
    FormData: Jo,
    Blob: Ko
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qn = typeof window < "u" && typeof document < "u", gn = typeof navigator == "object" && navigator || void 0, Yo = qn && (!gn || ["ReactNative", "NativeScript", "NS"].indexOf(gn.product) < 0), Xo = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zo = qn && window.location.href || "http://localhost", Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qn,
  hasStandardBrowserEnv: Yo,
  hasStandardBrowserWebWorkerEnv: Xo,
  navigator: gn,
  origin: Zo
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Qo,
  ...Go
};
function ea(e, t) {
  return Wt(e, new I.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return I.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ta(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function na(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function ys(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), u = i >= n.length;
    return o = !o && d.isArray(s) ? s.length : o, u ? (d.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !d.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && d.isArray(s[o]) && (s[o] = na(s[o])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, s) => {
      t(ta(r), s, n, 0);
    }), n;
  }
  return null;
}
function ra(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const wt = {
  transitional: ws,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = d.isObject(t);
    if (i && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return s ? JSON.stringify(ys(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ea(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Wt(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), ra(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || wt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (d.isResponse(t) || d.isReadableStream(t))
      return t;
    if (t && d.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? x.from(a, x.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wt.headers[e] = {};
});
const sa = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ia = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && sa[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, sr = Symbol("internals");
function lt(e) {
  return e && String(e).trim().toLowerCase();
}
function Rt(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Rt) : String(e);
}
function oa(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const aa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tn(e, t, n, r, s) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function la(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ua(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let W = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, u, l) {
      const c = lt(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = d.findKey(s, c);
      (!h || s[h] === void 0 || l === !0 || l === void 0 && s[h] !== !1) && (s[h || u] = Rt(a));
    }
    const o = (a, u) => d.forEach(a, (l, c) => i(l, c, u));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (d.isString(t) && (t = t.trim()) && !aa(t))
      o(ia(t), n);
    else if (d.isObject(t) && d.isIterable(t)) {
      let a = {}, u, l;
      for (const c of t) {
        if (!d.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = c[0]] = (u = a[l]) ? d.isArray(u) ? [...u, c[1]] : [u, c[1]] : c[1];
      }
      o(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = lt(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return oa(s);
        if (d.isFunction(n))
          return n.call(this, s, r);
        if (d.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = lt(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = lt(o), o) {
        const a = d.findKey(r, o);
        a && (!n || tn(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return d.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || tn(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return d.forEach(this, (s, i) => {
      const o = d.findKey(r, i);
      if (o) {
        n[o] = Rt(s), delete n[i];
        return;
      }
      const a = t ? la(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Rt(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && d.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[sr] = this[sr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = lt(o);
      r[a] || (ua(s, o), r[a] = !0);
    }
    return d.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
W.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(W.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(W);
function nn(e, t) {
  const n = this || wt, r = t || n, s = W.from(r.headers);
  let i = r.data;
  return d.forEach(e, function(a) {
    i = a.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function bs(e) {
  return !!(e && e.__CANCEL__);
}
function Qe(e, t, n) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, n), this.name = "CanceledError";
}
d.inherits(Qe, x, {
  __CANCEL__: !0
});
function xs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new x(
    "Request failed with status code " + n.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ca(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fa(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), c = r[i];
    o || (o = l), n[s] = u, r[s] = l;
    let h = i, v = 0;
    for (; h !== s; )
      v += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), l - o < t)
      return;
    const m = c && l - c;
    return m ? Math.round(v * 1e3 / m) : void 0;
  };
}
function da(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (l, c = Date.now()) => {
    n = c, s = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const c = Date.now(), h = c - n;
    h >= r ? o(l, c) : (s = l, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const Ft = (e, t, n = 3) => {
  let r = 0;
  const s = fa(50, 250);
  return da((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, u = o - r, l = s(u), c = o <= a;
    r = o;
    const h = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && a && c ? (a - o) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, ir = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, or = (e) => (...t) => d.asap(() => e(...t)), ha = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, I.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, pa = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      d.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), d.isString(r) && o.push("path=" + r), d.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function va(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ma(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Es(e, t, n) {
  let r = !va(t);
  return e && (r || n == !1) ? ma(e, t) : t;
}
const ar = (e) => e instanceof W ? { ...e } : e;
function Pe(e, t) {
  t = t || {};
  const n = {};
  function r(l, c, h, v) {
    return d.isPlainObject(l) && d.isPlainObject(c) ? d.merge.call({ caseless: v }, l, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function s(l, c, h, v) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(l))
        return r(void 0, l, h, v);
    } else return r(l, c, h, v);
  }
  function i(l, c) {
    if (!d.isUndefined(c))
      return r(void 0, c);
  }
  function o(l, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, c);
  }
  function a(l, c, h) {
    if (h in t)
      return r(l, c);
    if (h in e)
      return r(void 0, l);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, c, h) => s(ar(l), ar(c), h, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(c) {
    const h = u[c] || s, v = h(e[c], t[c], c);
    d.isUndefined(v) && h !== a || (n[c] = v);
  }), n;
}
const Ss = (e) => {
  const t = Pe({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = t;
  t.headers = o = W.from(o), t.url = gs(Es(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (d.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [l, ...c] = u ? u.split(";").map((h) => h.trim()).filter(Boolean) : [];
      o.setContentType([l || "multipart/form-data", ...c].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && d.isFunction(r) && (r = r(t)), r || r !== !1 && ha(t.url))) {
    const l = s && i && pa.read(i);
    l && o.set(s, l);
  }
  return t;
}, _a = typeof XMLHttpRequest < "u", ga = _a && function(e) {
  return new Promise(function(n, r) {
    const s = Ss(e);
    let i = s.data;
    const o = W.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: l } = s, c, h, v, m, f;
    function p() {
      m && m(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let _ = new XMLHttpRequest();
    _.open(s.method.toUpperCase(), s.url, !0), _.timeout = s.timeout;
    function b() {
      if (!_)
        return;
      const w = W.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: w,
        config: e,
        request: _
      };
      xs(function(F) {
        n(F), p();
      }, function(F) {
        r(F), p();
      }, S), _ = null;
    }
    "onloadend" in _ ? _.onloadend = b : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, _.onabort = function() {
      _ && (r(new x("Request aborted", x.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      r(new x("Network Error", x.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let E = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || ws;
      s.timeoutErrorMessage && (E = s.timeoutErrorMessage), r(new x(
        E,
        S.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in _ && d.forEach(o.toJSON(), function(E, S) {
      _.setRequestHeader(S, E);
    }), d.isUndefined(s.withCredentials) || (_.withCredentials = !!s.withCredentials), a && a !== "json" && (_.responseType = s.responseType), l && ([v, f] = Ft(l, !0), _.addEventListener("progress", v)), u && _.upload && ([h, m] = Ft(u), _.upload.addEventListener("progress", h), _.upload.addEventListener("loadend", m)), (s.cancelToken || s.signal) && (c = (w) => {
      _ && (r(!w || w.type ? new Qe(null, e, _) : w), _.abort(), _ = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const y = ca(s.url);
    if (y && I.protocols.indexOf(y) === -1) {
      r(new x("Unsupported protocol " + y + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(i || null);
  });
}, wa = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(l) {
      if (!s) {
        s = !0, a();
        const c = l instanceof Error ? l : this.reason;
        r.abort(c instanceof x ? c : new Qe(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new x(`timeout ${t} of ms exceeded`, x.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: u } = r;
    return u.unsubscribe = () => d.asap(a), u;
  }
}, ya = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, ba = async function* (e, t) {
  for await (const n of xa(e))
    yield* ya(n, t);
}, xa = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, lr = (e, t, n, r) => {
  const s = ba(e, t);
  let i = 0, o, a = (u) => {
    o || (o = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: l, value: c } = await s.next();
        if (l) {
          a(), u.close();
          return;
        }
        let h = c.byteLength;
        if (n) {
          let v = i += h;
          n(v);
        }
        u.enqueue(new Uint8Array(c));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(u) {
      return a(u), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Jt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $s = Jt && typeof ReadableStream == "function", Ea = Jt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Rs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Sa = $s && Rs(() => {
  let e = !1;
  const t = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ur = 64 * 1024, wn = $s && Rs(() => d.isReadableStream(new Response("").body)), Pt = {
  stream: wn && ((e) => e.body)
};
Jt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Pt[t] && (Pt[t] = d.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new x(`Response type '${t}' is not supported`, x.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const $a = async (e) => {
  if (e == null)
    return 0;
  if (d.isBlob(e))
    return e.size;
  if (d.isSpecCompliantForm(e))
    return (await new Request(I.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (d.isArrayBufferView(e) || d.isArrayBuffer(e))
    return e.byteLength;
  if (d.isURLSearchParams(e) && (e = e + ""), d.isString(e))
    return (await Ea(e)).byteLength;
}, Ra = async (e, t) => {
  const n = d.toFiniteNumber(e.getContentLength());
  return n ?? $a(t);
}, ja = Jt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: l,
    headers: c,
    withCredentials: h = "same-origin",
    fetchOptions: v
  } = Ss(e);
  l = l ? (l + "").toLowerCase() : "text";
  let m = wa([s, i && i.toAbortSignal()], o), f;
  const p = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let _;
  try {
    if (u && Sa && n !== "get" && n !== "head" && (_ = await Ra(c, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), j;
      if (d.isFormData(r) && (j = S.headers.get("content-type")) && c.setContentType(j), S.body) {
        const [F, P] = ir(
          _,
          Ft(or(u))
        );
        r = lr(S.body, ur, F, P);
      }
    }
    d.isString(h) || (h = h ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    f = new Request(t, {
      ...v,
      signal: m,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? h : void 0
    });
    let y = await fetch(f, v);
    const w = wn && (l === "stream" || l === "response");
    if (wn && (a || w && p)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((g) => {
        S[g] = y[g];
      });
      const j = d.toFiniteNumber(y.headers.get("content-length")), [F, P] = a && ir(
        j,
        Ft(or(a), !0)
      ) || [];
      y = new Response(
        lr(y.body, ur, F, () => {
          P && P(), p && p();
        }),
        S
      );
    }
    l = l || "text";
    let E = await Pt[d.findKey(Pt, l) || "text"](y, e);
    return !w && p && p(), await new Promise((S, j) => {
      xs(S, j, {
        data: E,
        headers: W.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: f
      });
    });
  } catch (b) {
    throw p && p(), b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(
      new x("Network Error", x.ERR_NETWORK, e, f),
      {
        cause: b.cause || b
      }
    ) : x.from(b, b && b.code, e, f);
  }
}), yn = {
  http: Io,
  xhr: ga,
  fetch: ja
};
d.forEach(yn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cr = (e) => `- ${e}`, Ca = (e) => d.isFunction(e) || e === null || e === !1, js = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (r = n, !Ca(n) && (r = yn[(o = String(n)).toLowerCase()], r === void 0))
        throw new x(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(cr).join(`
`) : " " + cr(i[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: yn
};
function rn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Qe(null, e);
}
function fr(e) {
  return rn(e), e.headers = W.from(e.headers), e.data = nn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), js.getAdapter(e.adapter || wt.adapter)(e).then(function(r) {
    return rn(e), r.data = nn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = W.from(r.headers), r;
  }, function(r) {
    return bs(r) || (rn(e), r && r.response && (r.response.data = nn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = W.from(r.response.headers))), Promise.reject(r);
  });
}
const Cs = "1.11.0", Kt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Kt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dr = {};
Kt.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Cs + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new x(
        s(o, " has been removed" + (n ? " in " + n : "")),
        x.ERR_DEPRECATED
      );
    return n && !dr[o] && (dr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
Kt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ta(e, t, n) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const a = e[i], u = a === void 0 || o(a, i, e);
      if (u !== !0)
        throw new x("option " + i + " must be " + u, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new x("Unknown option " + i, x.ERR_BAD_OPTION);
  }
}
const jt = {
  assertOptions: Ta,
  validators: Kt
}, oe = jt.validators;
let Oe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new rr(),
      response: new rr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && jt.assertOptions(r, {
      silentJSONParsing: oe.transitional(oe.boolean),
      forcedJSONParsing: oe.transitional(oe.boolean),
      clarifyTimeoutError: oe.transitional(oe.boolean)
    }, !1), s != null && (d.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : jt.assertOptions(s, {
      encode: oe.function,
      serialize: oe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jt.assertOptions(n, {
      baseUrl: oe.spelling("baseURL"),
      withXsrfToken: oe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && d.merge(
      i.common,
      i[n.method]
    );
    i && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = W.concat(o, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (u = u && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let c, h = 0, v;
    if (!u) {
      const f = [fr.bind(this), void 0];
      for (f.unshift(...a), f.push(...l), v = f.length, c = Promise.resolve(n); h < v; )
        c = c.then(f[h++], f[h++]);
      return c;
    }
    v = a.length;
    let m = n;
    for (h = 0; h < v; ) {
      const f = a[h++], p = a[h++];
      try {
        m = f(m);
      } catch (_) {
        p.call(this, _);
        break;
      }
    }
    try {
      c = fr.call(this, m);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, v = l.length; h < v; )
      c = c.then(l[h++], l[h++]);
    return c;
  }
  getUri(t) {
    t = Pe(this.defaults, t);
    const n = Es(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gs(n, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(t) {
  Oe.prototype[t] = function(n, r) {
    return this.request(Pe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, a) {
      return this.request(Pe(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Oe.prototype[t] = n(), Oe.prototype[t + "Form"] = n(!0);
});
let Oa = class Ts {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      r.reason || (r.reason = new Qe(i, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ts(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Aa(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ka(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const bn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(bn).forEach(([e, t]) => {
  bn[t] = e;
});
function Os(e) {
  const t = new Oe(e), n = os(Oe.prototype.request, t);
  return d.extend(n, Oe.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Os(Pe(e, s));
  }, n;
}
const k = Os(wt);
k.Axios = Oe;
k.CanceledError = Qe;
k.CancelToken = Oa;
k.isCancel = bs;
k.VERSION = Cs;
k.toFormData = Wt;
k.AxiosError = x;
k.Cancel = k.CanceledError;
k.all = function(t) {
  return Promise.all(t);
};
k.spread = Aa;
k.isAxiosError = ka;
k.mergeConfig = Pe;
k.AxiosHeaders = W;
k.formToJSON = (e) => ys(d.isHTMLForm(e) ? new FormData(e) : e);
k.getAdapter = js.getAdapter;
k.HttpStatusCode = bn;
k.default = k;
const {
  Axios: Xa,
  AxiosError: Za,
  CanceledError: Qa,
  isCancel: el,
  CancelToken: tl,
  VERSION: nl,
  all: rl,
  Cancel: sl,
  isAxiosError: il,
  spread: ol,
  toFormData: al,
  AxiosHeaders: ll,
  HttpStatusCode: ul,
  formToJSON: cl,
  getAdapter: fl,
  mergeConfig: dl
} = k;
var Na = (e, t) => e.key === "Enter" && t, Fa = /* @__PURE__ */ Le('<div class="chat-icon svelte-1i9700j" aria-live="polite" aria-label="Chat" role="button" tabindex="0"><svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1i9700j"><g filter="url(#filter0_d_8673_2670)" class="svelte-1i9700j"><ellipse cx="37.5002" cy="30" rx="25.1296" ry="21.6667" fill="white" class="svelte-1i9700j"></ellipse><path d="M37.5002 4C21.2078 4 8 15.6409 8 30.0002C8 37.3989 11.5062 44.0755 17.1343 48.81C17.0623 51.0675 16.2932 53.302 14.9482 55.0939C17.5558 54.9875 20.1101 53.9229 22.0741 52.1664C26.5625 54.598 31.8457 56.0004 37.5002 56.0004C53.7926 56.0004 67.0004 44.3595 67.0004 30.0002C67.0004 15.6409 53.7926 4 37.5002 4ZM55.8352 42.599C54.748 43.8262 53.1989 44.516 51.5813 44.516H23.4191C21.8015 44.516 20.2524 43.8262 19.1652 42.599C16.0867 39.1239 14.2522 34.7507 14.2522 29.9998C14.2522 25.249 16.0863 20.8761 19.1648 17.401C22.5117 13.622 27.3739 10.5 37.5 10.5C45.948 10.5 52.7599 13.9097 55.8733 17.4436C58.9292 20.9115 60.7482 25.2685 60.7482 29.9994C60.7482 34.7303 58.9137 39.1239 55.8352 42.599Z" fill="url(#paint0_linear_8673_2670)" class="svelte-1i9700j"></path><path d="M31.2311 29.1936C30.3741 30.545 29.1376 29.1936 26.5542 29.1936C23.9707 29.1936 22.7346 30.545 21.8776 29.1936C21.0482 27.8852 23.3365 24.6578 26.5542 24.6578C29.7718 24.6578 32.0602 27.8856 31.2311 29.1936Z" fill="#46359D" class="svelte-1i9700j"></path><path d="M53.1223 29.1936C52.2653 30.545 51.0287 29.1936 48.4453 29.1936C45.8618 29.1936 44.6257 30.545 43.7687 29.1936C42.9393 27.8852 45.2276 24.6578 48.4453 24.6578C51.6629 24.6578 53.9513 27.8856 53.1223 29.1936Z" fill="#46359D" class="svelte-1i9700j"></path><path d="M37.4996 35.3421C35.6966 35.3421 34.5071 33.8776 34.4573 33.8155C34.1879 33.4777 34.2365 32.9798 34.5662 32.7038C34.8959 32.4278 35.382 32.4776 35.6515 32.8153C35.6565 32.8213 36.4381 33.7621 37.4996 33.7621C38.5612 33.7621 39.3427 32.8213 39.3505 32.8118C39.62 32.474 40.1045 32.4258 40.4342 32.7018C40.7639 32.9779 40.8114 33.4773 40.5415 33.8151C40.4918 33.8776 39.3023 35.3417 37.4992 35.3417L37.4996 35.3421Z" fill="#46359D" class="svelte-1i9700j"></path></g><defs class="svelte-1i9700j"><filter id="filter0_d_8673_2670" x="0" y="0" width="75.0005" height="68.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" class="svelte-1i9700j"><feFlood flood-opacity="0" result="BackgroundImageFix" class="svelte-1i9700j"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" class="svelte-1i9700j"></feColorMatrix><feOffset dy="4" class="svelte-1i9700j"></feOffset><feGaussianBlur stdDeviation="4" class="svelte-1i9700j"></feGaussianBlur><feComposite in2="hardAlpha" operator="out" class="svelte-1i9700j"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" class="svelte-1i9700j"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8673_2670" class="svelte-1i9700j"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8673_2670" result="shape" class="svelte-1i9700j"></feBlend></filter><linearGradient id="paint0_linear_8673_2670" x1="67.0004" y1="30.0002" x2="8" y2="30.0002" gradientUnits="userSpaceOnUse" class="svelte-1i9700j"><stop stop-color="#99A1E3" class="svelte-1i9700j"></stop><stop offset="0.129808" stop-color="#858EDC" class="svelte-1i9700j"></stop><stop offset="0.389423" stop-color="#635EBA" class="svelte-1i9700j"></stop><stop offset="1" stop-color="#43319A" class="svelte-1i9700j"></stop></linearGradient></defs></svg></div>'), Pa = (e, t) => e.key === "Enter" && t, La = (e, t) => e.key === "Enter" && t, Da = /* @__PURE__ */ Le(`<div class="welcome-box svelte-1i9700j"><div class="welcome svelte-1i9700j"><h1 class="svelte-1i9700j">Welcome to our website!</h1> <p class="svelte-1i9700j">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-1i9700j"><div class="faq svelte-1i9700j" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-1i9700j" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), Ba = (e, t) => e.key === "Enter" && t, Ua = /* @__PURE__ */ Le(' <div class="faq-box svelte-1i9700j"><div class="faq-options svelte-1i9700j"><ul class="faq-options-li svelte-1i9700j"><li class="svelte-1i9700j">How do I apply?</li> <li class="svelte-1i9700j">What courses do you offer?</li> <li class="svelte-1i9700j">When do applications close?</li> <li class="svelte-1i9700j">Where is the campus located?</li> <li class="svelte-1i9700j">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-1i9700j">Can I talk to someone?</div></ul></div></div>', 1), qa = (e) => e.key === "Enter" && console.log("recorded"), Ma = () => console.log("recorded"), Ia = /* @__PURE__ */ Le(`<div class="chat-dialog svelte-1i9700j"><div class="chat-header svelte-1i9700j"><div class="svelte-1i9700j"><h1 class="svelte-1i9700j">ChatFlow</h1> <p class="svelte-1i9700j">A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1i9700j" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x svelte-1i9700j"><circle cx="12" cy="12" r="10" class="svelte-1i9700j"></circle><path d="m15 9-6 6" class="svelte-1i9700j"></path><path d="m9 9 6 6" class="svelte-1i9700j"></path></svg></div></div> <div class="chat-body svelte-1i9700j"><div class="messages svelte-1i9700j"><p class="bot-msg svelte-1i9700j">Hi! How Can I help You?</p> <div class="chat-options svelte-1i9700j"><ul id="chat-options" class="svelte-1i9700j"><li class="svelte-1i9700j">How do I apply?</li> <li class="svelte-1i9700j">What courses do you offer?</li> <li class="svelte-1i9700j">When do applications close?</li> <li class="svelte-1i9700j">Where is the campus located?</li> <li class="svelte-1i9700j">Talk to someone?</li></ul></div></div> <div class="input svelte-1i9700j"><input type="text" placeholder="Let's share something" class="svelte-1i9700j"/> <button class="send svelte-1i9700j" tabindex="0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1i9700j"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" class="svelte-1i9700j"></path></svg></button></div></div></div>`), Ha = /* @__PURE__ */ Le('<li class="svelte-1i9700j"> </li>'), za = /* @__PURE__ */ Le(`<div class="chat-dialog svelte-1i9700j"><div class="chat-header svelte-1i9700j"><div class="svelte-1i9700j"><h1 class="svelte-1i9700j">ChatFlow</h1> <p class="svelte-1i9700j">A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1i9700j" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x svelte-1i9700j"><circle cx="12" cy="12" r="10" class="svelte-1i9700j"></circle><path d="m15 9-6 6" class="svelte-1i9700j"></path><path d="m9 9 6 6" class="svelte-1i9700j"></path></svg></div></div> <div class="chat-body svelte-1i9700j"><div class="messages svelte-1i9700j"><p class="bot-msg svelte-1i9700j">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-1i9700j"><li class="svelte-1i9700j">John</li> <!></ul></div> <div class="input svelte-1i9700j"><input type="text" placeholder="Let's share something" class="svelte-1i9700j"/> <button class="send svelte-1i9700j"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1i9700j"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" class="svelte-1i9700j"></path></svg></button></div></div></div>`), Va = /* @__PURE__ */ Le('<div class="svelte-1i9700j"><!> <!> <!> <!> <!></div>');
const Wa = {
  hash: "svelte-1i9700j",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial;position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-1i9700j {bottom:20px;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-1i9700j:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-1i9700j {position:absolute;bottom:20px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-1i9700j {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60) px);}.welcome.svelte-1i9700j {box-sizing:border-box;max-width:290px;max-height:124px;background:#e9e9e9;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-1i9700j h1:where(.svelte-1i9700j) {font-size:16px;margin:0;padding:0;}.welcome.svelte-1i9700j p:where(.svelte-1i9700j) {box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-1i9700j {height:44px;display:flex;gap:10px;}.faq.svelte-1i9700j,\r
.talk.svelte-1i9700j {background:linear-gradient(270deg, #a7befe 0%, #43319a 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-1i9700j:hover {transform:scale(1.02);}.talk.svelte-1i9700j:hover {transform:scale(1.02);}.chat-header.svelte-1i9700j {background:linear-gradient(\r
    270deg,\r
    #a7befe 0%,\r
    #6e6ec5 36.11%,\r
    #5347aa 64.88%,\r
    #43319a 100%\r
  );padding:0.8rem;display:flex;justify-content:space-between;font-family:'Figtree', sans-serif;}.chat-header.svelte-1i9700j div:where(.svelte-1i9700j) h1:where(.svelte-1i9700j) {font-family:"source sans 3", sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
  /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-1i9700j div:where(.svelte-1i9700j) {color:white;font-family:"Questrial", sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-1i9700j {cursor:pointer;padding-top:1px;font-size:15rem;}.chat-body.svelte-1i9700j {flex:1;position:relative;height:inherit;padding:0 12px 0 12px;padding-top:169px;padding-bottom:1.5rem;\r
  /* overflow-y: scroll; */overflow-x:hidden;}.chat-options.svelte-1i9700j {padding:0.5rem;}#chat-options.svelte-1i9700j {padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-1i9700j li:where(.svelte-1i9700j) {padding:0.3rem;border:1px solid #a3b9fa;color:#6d6cc4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-1i9700j li:where(.svelte-1i9700j):hover {border:2px solid #a3b9fa;cursor:pointer;}.input.svelte-1i9700j {position:absolute;bottom:0;left:0;}.input.svelte-1i9700j input:where(.svelte-1i9700j) {flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-1i9700j:focus {outline:none;}.send.svelte-1i9700j {background-color:#5347aa;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-1i9700j svg:where(.svelte-1i9700j) {width:14px;height:14px;}.bot-msg.svelte-1i9700j {padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;text-align:left;background-color:#f4f4f4;font-family:"Outfit", sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-1i9700j {width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:50px;right:1%;}.faq-options.svelte-1i9700j {padding:0.5rem;}.faq-options-li.svelte-1i9700j {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-1i9700j li:where(.svelte-1i9700j) {cursor:pointer;background-color:#e9e9e9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:"Figtree", sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-1i9700j li:where(.svelte-1i9700j):hover {transform:scale(1.03);cursor:pointer;}#talk-btn.svelte-1i9700j {cursor:pointer;background:linear-gradient(270deg, #a7befe 0%, #43319a 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-1i9700j {display:flex;flex-direction:column;align-items:flex-end;gap:10px;margin:0;}.user-msg.svelte-1i9700j li:where(.svelte-1i9700j) {\r
  /* display: inline-block; */width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319a;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;}.chat-dialog.svelte-1i9700j {position:absolute;bottom:20px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.chat-body.svelte-1i9700j {display:flex;flex-direction:column;height:100%;padding:0 12px 0 12px;padding-top:16px;padding-bottom:1.5rem;border:1px solid #ccc;position:relative;}.svelte-1i9700j::-webkit-scrollbar{display:none;}.messages.svelte-1i9700j {flex:1;overflow-y:auto;}.input.svelte-1i9700j {display:flex;gap:10px;background:#fff;margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-1i9700j input:where(.svelte-1i9700j) {flex:1;padding:8px;}\r
  @media only screen and (max-width: 375px) {.chat-dialog.svelte-1i9700j {width:350px;margin:0;}.input.svelte-1i9700j {width:332px;}\r
}\r
  @media only screen and (max-width: 320px) {.chat-dialog.svelte-1i9700j {right:0;width:310px;margin:0;}.chat-body.svelte-1i9700j{width:300px;}\r
}`
};
function Ja(e, t) {
  Er(t, !0), zi(e, Wa);
  const [n, r] = Yi(), s = () => st(Ue, "$open", n), i = () => st(it, "$showBot", n), o = () => st(qe, "$openFaq", n), a = () => st(ot, "$openChat", n), u = () => st(at, "$openAgent", n), l = () => {
    Ue.update((g) => !g), ot.set(!1), qe.set(!1), at.set(!1);
  }, c = () => {
    s() && Ue.update((g) => !g), ot.update((g) => !g), qe.set(!1), it.set(!1);
  }, h = () => {
    s() && Ue.update((g) => !g), at.update((g) => !g), qe.set(!1), it.set(!1);
  }, v = () => {
    s() && Ue.update((g) => !g), qe.update((g) => !g);
  };
  let m = /* @__PURE__ */ ve(Me([]));
  Ui(async () => {
    const g = await k.get("https://jsonplaceholder.typicode.com/users");
    le(m, g.data, !0);
  });
  var f = Va(), p = U(f);
  {
    var _ = (g) => {
      var C = Fa();
      C.__click = l, C.__keydown = [Na, l], be(g, C);
    };
    rt(p, (g) => {
      i() && g(_);
    });
  }
  var b = q(p, 2);
  {
    var y = (g) => {
      var C = Da(), N = q(U(C), 2), D = U(N);
      D.__click = v, D.__keydown = [Pa, v];
      var J = q(D, 2);
      J.__click = c, J.__keydown = [La, c], B(N), B(C), Qt(3, C, () => en, () => ({ y: 20, duration: 300 })), be(g, C);
    };
    rt(b, (g) => {
      s() && g(y);
    });
  }
  var w = q(b, 2);
  {
    var E = (g) => {
      var C = Ua(), N = gi(C), D = q(N), J = U(D), se = U(J), ie = q(U(se), 10);
      ie.__click = h, ie.__keydown = [Ba, h], B(se), B(J), B(D), Wn((et) => Xn(N, `${et ?? ""} `), [() => Ue.set(!1)]), be(g, C);
    };
    rt(w, (g) => {
      o() && s() == !1 && g(E);
    });
  }
  var S = q(w, 2);
  {
    var j = (g) => {
      var C = Ia(), N = U(C), D = q(U(N), 2);
      D.__click = () => {
        ot.update((pe) => !pe), it.set(!0);
      }, D.__keydown = (pe) => pe.key === "enter" && ot.update((tt) => !tt), B(N);
      var J = q(N, 2), se = q(U(J), 2), ie = U(se);
      ie.__keydown = [qa];
      var et = q(ie, 2);
      et.__click = [Ma], B(se), B(J), B(C), Qt(3, C, () => en, () => ({ x: 20, duration: 300 })), be(g, C);
    };
    rt(S, (g) => {
      a() && !s() && g(j);
    });
  }
  var F = q(S, 2);
  {
    var P = (g) => {
      var C = za(), N = U(C), D = q(U(N), 2);
      D.__click = () => {
        at.update((pe) => !pe), qe.set(!1), it.set(!0);
      }, D.__keydown = (pe) => pe.key === "enter" && at.update((tt) => !tt), B(N);
      var J = q(N, 2), se = U(J), ie = q(U(se), 2), et = q(U(ie), 2);
      Ii(et, 17, () => X(m), qi, (pe, tt) => {
        var Gt = Ha(), As = U(Gt, !0);
        B(Gt), Wn(() => Xn(As, X(tt).name)), be(pe, Gt);
      }), B(ie), B(se), ri(2), B(J), B(C), Qt(3, C, () => en, () => ({ x: 20, duration: 300 })), be(g, C);
    };
    rt(F, (g) => {
      u() && !s() && g(P);
    });
  }
  B(f), be(e, f), Sr(), r();
}
Ni(["click", "keydown"]);
customElements.define("chat-widget", eo(Ja, {}, [], [], !0));
export {
  Ja as default
};

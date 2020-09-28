//>>built
define("dojo/store/DataStore","../_base/lang ../_base/declare ../Deferred ../_base/array ./util/QueryResults ./util/SimpleQueryEngine".split(" "),function(p,q,m,r,s,t){return q("dojo.store.DataStore",null,{target:"",constructor:function(a){p.mixin(this,a);if(!1 in a){var c;try{c=this.store.getIdentityAttributes()}catch(b){}this.idProperty=!c||!idAttributes[0]||this.idProperty}a=this.store.getFeatures();a["dojo.data.api.Read"]||(this.get=null);a["dojo.data.api.Identity"]||(this.getIdentity=null);a["dojo.data.api.Write"]||
(this.put=this.add=null)},idProperty:"id",store:null,queryEngine:t,_objectConverter:function(a){function c(a){for(var k={},n=b.getAttributes(a),l=0;l<n.length;l++){var g=n[l],h=b.getValues(a,g);if(1<h.length){for(g=0;g<h.length;g++){var e=h[g];"object"==typeof e&&b.isItem(e)&&(h[g]=c(e))}e=h}else e=b.getValue(a,g),"object"==typeof e&&b.isItem(e)&&(e=c(e));k[n[l]]=e}!(d in k)&&b.getIdentity&&(k[d]=b.getIdentity(a));return k}var b=this.store,d=this.idProperty;return function(b){return a(c(b))}},get:function(a,
c){var b,d,f=new m;this.store.fetchItemByIdentity({identity:a,onItem:this._objectConverter(function(a){f.resolve(b=a)}),onError:function(a){f.reject(d=a)}});if(b)return b;if(d)throw d;return f.promise},put:function(a,c){var b=c&&"undefined"!=typeof c.id||this.getIdentity(a),d=this.store,f=this.idProperty;"undefined"==typeof b?(d.newItem(a),d.save()):d.fetchItemByIdentity({identity:b,onItem:function(b){if(b)for(var c in a)c!=f&&d.getValue(b,c)!=a[c]&&d.setValue(b,c,a[c]);else d.newItem(a);d.save()}})},
remove:function(a){var c=this.store;this.store.fetchItemByIdentity({identity:a,onItem:function(a){c.deleteItem(a);c.save()}})},query:function(a,c){var b,d=new m(function(){b.abort&&b.abort()});d.total=new m;var f=this._objectConverter(function(a){return a});b=this.store.fetch(p.mixin({query:a,onBegin:function(a){d.total.resolve(a)},onComplete:function(a){d.resolve(r.map(a,f))},onError:function(a){d.reject(a)}},c));return s(d)},getIdentity:function(a){return a[this.idProperty]}})});
//# sourceMappingURL=DataStore.js.map
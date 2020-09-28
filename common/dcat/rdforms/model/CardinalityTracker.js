//>>built
define("rdforms/model/CardinalityTracker",["dojo/_base/declare"],function(a){return a(null,{_listeners:null,_counter:0,_limits:null,maxReached:function(){},minReached:function(){},cardinalityChanged:function(){},getCardinality:function(){return this._counter},isMax:function(){return null!=this._limits.max&&this._counter>=this._limits.max},isMin:function(){return null!=this._limits.min&&this._counter<=this._limits.min},isFine:function(){return this._fine},increment:function(){this._counter++;this._checkCounter()},
decrement:function(){this._counter--;this._checkCounter()},checkCardinality:function(){this._checkCounter()},constructor:function(a){this._listener=[];this._limits=a.getCardinality()||{}},_checkCounter:function(){null!=this._limits.max&&this._counter===this._limits.max?(this._fine=!0,this.maxReached()):null!=this._limits.max&&this._counter>this._limits.max?(this._fine=!1,this.maxReached()):null!=this._limits.min&&this._counter===this._limits.min?(this._fine=!0,this.minReached()):null!=this._limits.min&&
this._counter<this._limits.min&&(this._fine=!1,this.minReached());this.cardinalityChanged()}})});
//# sourceMappingURL=CardinalityTracker.js.map
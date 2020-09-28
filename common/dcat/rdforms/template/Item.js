//>>built
define("rdforms/template/Item",["dojo/_base/declare","rdforms/utils"],function(d,e){var f=0;return d(null,{_source:{},_styles:"invisible invisibleGroup stars commentOn multiline horizontalRadioButtons verticalRadioButtons nonEditable expandable compact nonCompact dropDown table firstcolumnfixedtable tree externalLink image".split(" "),getId:function(){var a=this.getSource(!0);return a.id||a["@id"]},setId:function(a){var b=this.getSource(!0);b.id=a;delete b["@id"]},getType:function(a){a=this.getSource(a);
return a.type||a["@type"]},setType:function(a){var b=this.getSource(!0);b.type=a;delete b["@type"];this.refreshExtends()},getExtends:function(){return this.getSource(!0)["extends"]||""},refreshExtends:function(){this.isExtention&&this.setExtends(this.getExtends())},setExtends:function(a){var b=this.getSource(!0),c=this._itemStore.getItem(a);this._source=null==c?b:this._itemStore.createExtendedSource(c.getSource(),b);""==a||null==a?delete b["extends"]:b["extends"]=a},isExtention:function(){return null!=
this.getExtends()},getLabel:function(a,b){var c=this.getSource(b);return a?this._getLocalizedValue(c.label):this._getLocalizedValue(c.label).value},setLabel:function(a,b){var c=this.getSource(!0);c.label=this._setLangHash(c.label,a,b);this.refreshExtends()},getLabelMap:function(a){return this.getSource(a).label},setLabelMap:function(a){this.getSource(!0).label=a;this.refreshExtends()},getDescription:function(a,b){var c=this.getSource(b);return a?this._getLocalizedValue(c.description):this._getLocalizedValue(c.description).value},
setDescription:function(a,b){var c=this.getSource(!0);c.description=this._setLangHash(c.description,a,b);this.refreshExtends()},getDescriptionMap:function(a){return this.getSource(a).description},setDescriptionMap:function(a){this.getSource(!0).description=a;this.refreshExtends()},getProperty:function(a){return this.getSource(a).property},setProperty:function(a){var b=this.getSource(!0);a&&""!==a?b.property=a:delete b.property;this.refreshExtends()},getURIValueLabelProperties:function(a){return this.getSource(a).uriValueLabelProperties},
setURIValueLabelProperties:function(a){var b=this.getSource(!0);a?b.uriValueLabelProperties=a:delete b.uriValueLabelProperties;this.refreshExtends()},getConstraints:function(a){return this.getSource(a).constraints},setConstraints:function(a){var b=this.getSource(!0);a?b.constraints=a:delete b.constraints;this.refreshExtends()},getConstraints:function(a){return this.getSource(a).constraints},setConstraints:function(a){var b=this.getSource(!0);a?b.constraints=a:delete b.constraints;this.refreshExtends()},
getDatatype:function(a){return this.getSource(a).datatype},setDatatype:function(a){var b=this.getSource(!0);a&&""!==a?b.datatype=a:delete b.datatype;this.refreshExtends()},getPattern:function(a){return this.getSource(a).pattern},setPattern:function(a){var b=this.getSource(!0);a&&""!==a?b.pattern=a:delete b.pattern;this.refreshExtends()},getLanguage:function(a){return this.getSource(a).language},setLanguage:function(a){var b=this.getSource(!0);a&&""!==a?b.language=a:delete b.language;this.refreshExtends()},
getMember:function(a){return this.getSource(a).member},setMember:function(a){var b=this.getSource(!0);null!=a?b.member=a:delete b.member;this.refreshExtends()},getNodetype:function(a){a=this.getSource(a);return a.nodetype||a.nodeType},setNodetype:function(a){var b=this.getSource(!0);a?b.nodetype=a:delete b.nodetype;b.nodetype=a;this.refreshExtends()},getValue:function(a){return this.getSource(a).value},setValue:function(a){var b=this.getSource(!0);a&&""!=a?b.value=a:delete b.value;this.refreshExtends()},
getCardinality:function(a){return this.getSource(a).cardinality||{}},setCardinality:function(a){var b=this.getSource(!0);a?b.cardinality=a:delete b.cardinality;this.refreshExtends()},isEnabled:function(a){a=this.getSource(a);return void 0===a.enabled?!0:a.enabled},setEnabled:function(a){var b=this.getSource(!0);a?delete b.enabled:b.enabled=a;this.refreshExtends()},getClasses:function(a){return this.getSource(a).cls||[]},setClasses:function(a){var b=this.getSource(!0);a?b.cls=a:delete b.cls;this.refreshExtends()},
hasClass:function(a,b){var c=this.getSource(b);return this.hasStyle(a,b)?!0:void 0===c.cls?!1:dojo.some(c.cls,function(b){return b.toLowerCase()===a.toLowerCase()})},getAvailableStyles:function(){return this._styles},getStyles:function(a){return this.getSource(a).styles||[]},setStyles:function(a){this.getSource(!0).styles=a;this.refreshExtends()},hasStyle:function(a,b){var c=this.getSource(b);return void 0===c.styles?!1:dojo.some(c.styles,function(b){return b.toLowerCase()===a.toLowerCase()})},getSource:function(a){return!0===
a?this._source._extendedSource||this._source:!1===a?(a=this._itemStore.getItem(this.getExtends()),null==a?this._source:a.getSource()):this._source},getBundle:function(){return this._bundle},constructor:function(a){this._itemStore=a.itemStore;this._source=a.source;this._bundle=a.bundle;this._internalId=f++},_setLangHash:function(a,b,c){a=a||{};if(dojo.isString(b))dojo.isString(c)?a[c]=b:a[""]=b;else if(dojo.isObject(b))return b;return a},_getLocalizedValue:e.getLocalizedValue})});
//# sourceMappingURL=Item.js.map
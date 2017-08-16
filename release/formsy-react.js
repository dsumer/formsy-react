!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.Formsy=e(require("react")):t.Formsy=e(t.react)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,r){t.exports=r(6)()},function(e,r){e.exports=t},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={arraysDiffer:function(t,e){var r=!1;return t.length!==e.length?r=!0:t.forEach(function(t,n){this.isSame(t,e[n])||(r=!0)},this),r},objectsDiffer:function(t,e){var r=!1;return Object.keys(t).length!==Object.keys(e).length?r=!0:Object.keys(t).forEach(function(n){this.isSame(t[n],e[n])||(r=!0)},this),r},isSame:function(t,e){return(void 0===t?"undefined":n(t))===(void 0===e?"undefined":n(e))&&(Array.isArray(t)&&Array.isArray(e)?!this.arraysDiffer(t,e):"function"==typeof t?t.toString()===e.toString():"object"===(void 0===t?"undefined":n(t))&&null!==t&&null!==e?!this.objectsDiffer(t,e):t===e)},find:function(t,e){for(var r=0,n=t.length;r<n;r++){var i=t[r];if(e(i))return i}return null},runRules:function(t,e,r,n){var i={errors:[],failed:[],success:[]};return Object.keys(r).length&&Object.keys(r).forEach(function(u){if(n[u]&&"function"==typeof r[u])throw new Error("Formsy does not allow you to override default validations: "+u);if(!n[u]&&"function"!=typeof r[u])throw new Error("Formsy does not have the validation rule: "+u);if("function"==typeof r[u]){var o=r[u](e,t);return void("string"==typeof o?(i.errors.push(o),i.failed.push(u)):o||i.failed.push(u))}if("function"!=typeof r[u]){var a=n[u](e,t,r[u]);return void("string"==typeof a?(i.errors.push(a),i.failed.push(u)):a?i.success.push(u):i.failed.push(u))}i.success.push(u)}),i}}},function(t,e,r){"use strict";(function(e){function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(5),c=n(f),p=r(0),F=n(p),h=r(1),m=n(h),v=r(2),y=n(v),b=r(10),g=n(b),V=r(11),E=n(V),D=[],x={},S={};x.withFormsy=E.default,x.defaults=function(t){S=t},x.addValidationRule=function(t,e){g.default[t]=e},x.Form=function(t){function e(t){u(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={isValid:!0,isSubmitting:!1,canChange:!1},r.inputs=[],r.attachToForm=r.attachToForm.bind(r),r.detachFromForm=r.detachFromForm.bind(r),r.getCurrentValues=r.getCurrentValues.bind(r),r.getPristineValues=r.getPristineValues.bind(r),r.isChanged=r.isChanged.bind(r),r.isFormDisabled=r.isFormDisabled.bind(r),r.reset=r.reset.bind(r),r.runValidation=r.runValidation.bind(r),r.submit=r.submit.bind(r),r.updateInputsWithError=r.updateInputsWithError.bind(r),r.validate=r.validate.bind(r),r.validateForm=r.validateForm.bind(r),r}return a(e,t),d(e,[{key:"getChildContext",value:function(){var t=this;return{formsy:{attachToForm:this.attachToForm,detachFromForm:this.detachFromForm,validate:this.validate,isFormDisabled:this.isFormDisabled,isValidValue:function(e,r){return t.runValidation(e,r).isValid}}}}},{key:"componentDidMount",value:function(){this.validateForm()}},{key:"componentWillUpdate",value:function(){this.prevInputNames=this.inputs.map(function(t){return t.props.name})}},{key:"componentDidUpdate",value:function(){this.props.validationErrors&&"object"===l(this.props.validationErrors)&&Object.keys(this.props.validationErrors).length>0&&this.setInputValidationErrors(this.props.validationErrors);var t=this.inputs.map(function(t){return t.props.name});y.default.arraysDiffer(this.prevInputNames,t)&&this.validateForm()}},{key:"getModel",value:function(){var t=this.getCurrentValues();return this.mapModel(t)}},{key:"setInputValidationErrors",value:function(t){this.inputs.forEach(function(e){var r=e.props.name,n=[{isValid:!(r in t),validationError:"string"==typeof t[r]?[t[r]]:t[r]}];e.setState.apply(e,n)})}},{key:"getPristineValues",value:function(){return this.inputs.reduce(function(t,e){var r=e.props.name,n=Object.assign({},t);return n[r]=e.props.value,n},{})}},{key:"getCurrentValues",value:function(){return this.inputs.reduce(function(t,e){var r=e.props.name,n=Object.assign({},t);return n[r]=e.state.value,n},{})}},{key:"setFormPristine",value:function(t){this.setState({formSubmitted:!t}),this.inputs.forEach(function(e){e.setState({formSubmitted:!t,isPristine:t})})}},{key:"isChanged",value:function(){return!y.default.isSame(this.getPristineValues(),this.getCurrentValues())}},{key:"isFormDisabled",value:function(){return this.props.disabled}},{key:"mapModel",value:function(t){return this.props.mapping?this.props.mapping(t):c.default.toObj(Object.keys(t).reduce(function(e,r){for(var n=r.split("."),i=e;n.length;){var u=n.shift();i[u]=n.length?i[u]||{}:t[r],i=i[u]}return e},{}))}},{key:"resetModel",value:function(t){this.inputs.forEach(function(e){var r=e.props.name;t&&Object.prototype.hasOwnProperty.call(t,r)?e.setValue(t[r]):e.resetValue()}),this.validateForm()}},{key:"reset",value:function(t){this.setFormPristine(!0),this.resetModel(t)}},{key:"submit",value:function(t){t&&t.preventDefault&&t.preventDefault(),this.setFormPristine(!1);var e=this.getModel();this.props.onSubmit(e,this.resetModel,this.updateInputsWithError),this.state.isValid?this.props.onValidSubmit(e,this.resetModel,this.updateInputsWithError):this.props.onInvalidSubmit(e,this.resetModel,this.updateInputsWithError)}},{key:"updateInputsWithError",value:function(t){var e=this;Object.keys(t).forEach(function(r){var n=y.default.find(e.inputs,function(t){return t.props.name===r});if(!n)throw new Error("You are trying to update an input that does not exist. Verify errors object with input names. "+JSON.stringify(t));var i=[{isValid:e.props.preventExternalInvalidation,externalError:"string"==typeof t[r]?[t[r]]:t[r]}];n.setState.apply(n,i)})}},{key:"validate",value:function(t){this.state.canChange&&this.props.onChange(this.getCurrentValues(),this.isChanged());var e=this.runValidation(t);t.setState({isValid:e.isValid,isRequired:e.isRequired,validationError:e.error,externalError:null},this.validateForm)}},{key:"runValidation",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.value,n=this.getCurrentValues(),i=t.props.validationErrors,u=t.props.validationError,o=y.default.runRules(r,n,t.validations,g.default),a=y.default.runRules(r,n,t.requiredValidations,g.default);"function"==typeof t.validate&&(o.failed=t.validate()?[]:["failed"]);var s=!!Object.keys(t.requiredValidations).length&&!!a.success.length,l=!(o.failed.length||this.props.validationErrors&&this.props.validationErrors[t.props.name]);return{isRequired:s,isValid:!s&&l,error:function(){if(l&&!s)return D;if(o.errors.length)return o.errors;if(e.props.validationErrors&&e.props.validationErrors[t.props.name])return"string"==typeof e.props.validationErrors[t.props.name]?[e.props.validationErrors[t.props.name]]:e.props.validationErrors[t.props.name];if(s){var r=i[a.success[0]];return r?[r]:null}return o.failed.length?o.failed.map(function(t){return i[t]?i[t]:u}).filter(function(t,e,r){return r.indexOf(t)===e}):void 0}()}}},{key:"validateForm",value:function(){var t=this,e=function(){var e=t.inputs.every(function(t){return t.state.isValid});t.setState({isValid:e}),e?t.props.onValid():t.props.onInvalid(),t.setState({canChange:!0})};this.inputs.forEach(function(r,n){var i=t.runValidation(r);i.isValid&&r.state.externalError&&(i.isValid=!1),r.setState({isValid:i.isValid,isRequired:i.isRequired,validationError:i.error,externalError:!i.isValid&&r.state.externalError?r.state.externalError:null},n===t.inputs.length-1?e:null)}),this.inputs.length||this.setState({canChange:!0})}},{key:"attachToForm",value:function(t){-1===this.inputs.indexOf(t)&&this.inputs.push(t),this.validate(t)}},{key:"detachFromForm",value:function(t){var e=this.inputs.indexOf(t);-1!==e&&(this.inputs=this.inputs.slice(0,e).concat(this.inputs.slice(e+1))),this.validateForm()}},{key:"render",value:function(){var t=this.props,e=(t.getErrorMessage,t.getErrorMessages,t.getValue,t.hasValue,t.isFormDisabled,t.isFormSubmitted,t.isPristine,t.isRequired,t.isValid,t.isValidValue,t.mapping,t.onChange,t.onInvalidSubmit,t.onInvalid,t.onSubmit,t.onValid,t.onValidSubmit,t.preventExternalInvalidation,t.resetValue,t.setValidations,t.setValue,t.showError,t.showRequired,t.validationErrors,i(t,["getErrorMessage","getErrorMessages","getValue","hasValue","isFormDisabled","isFormSubmitted","isPristine","isRequired","isValid","isValidValue","mapping","onChange","onInvalidSubmit","onInvalid","onSubmit","onValid","onValidSubmit","preventExternalInvalidation","resetValue","setValidations","setValue","showError","showRequired","validationErrors"]));return m.default.createElement("form",s({onSubmit:this.submit},e),this.props.children)}}]),e}(m.default.Component),x.Form.displayName="Formsy.Form",x.Form.defaultProps={children:null,disabled:!1,getErrorMessage:function(){},getErrorMessages:function(){},getValue:function(){},hasValue:function(){},isFormDisabled:function(){},isFormSubmitted:function(){},isPristine:function(){},isRequired:function(){},isValid:function(){},isValidValue:function(){},mapping:null,onChange:function(){},onError:function(){},onInvalid:function(){},onInvalidSubmit:function(){},onSubmit:function(){},onValid:function(){},onValidSubmit:function(){},preventExternalInvalidation:!1,resetValue:function(){},setValidations:function(){},setValue:function(){},showError:function(){},showRequired:function(){},validationErrors:null},x.Form.propTypes={children:F.default.node,disabled:F.default.bool,getErrorMessage:F.default.func,getErrorMessages:F.default.func,getValue:F.default.func,hasValue:F.default.func,isFormDisabled:F.default.func,isFormSubmitted:F.default.func,isPristine:F.default.func,isRequired:F.default.func,isValid:F.default.func,isValidValue:F.default.func,mapping:F.default.object,preventExternalInvalidation:F.default.bool,onChange:F.default.func,onInvalid:F.default.func,onInvalidSubmit:F.default.func,onSubmit:F.default.func,onValid:F.default.func,onValidSubmit:F.default.func,resetValue:F.default.func,setValidations:F.default.func,setValue:F.default.func,showError:F.default.func,showRequired:F.default.func,validationErrors:F.default.object},x.Form.childContextTypes={formsy:F.default.object},e.exports||e.module||e.define&&e.define.amd||(e.Formsy=x),t.exports=x}).call(e,r(4))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){function r(t){return Object.keys(t).reduce(function(e,r){var n=r.match(/[^\[]*/i),i=r.match(/\[.*?\]/g)||[];i=[n[0]].concat(i).map(function(t){return t.replace(/\[|\]/g,"")});for(var u=e;i.length;){var o=i.shift();o in u?u=u[o]:(u[o]=i.length?isNaN(i[0])?{}:[]:t[r],u=u[o])}return e},{})}function n(t){function e(t,r,n){return Array.isArray(n)||"[object Object]"===Object.prototype.toString.call(n)?(Object.keys(n).forEach(function(i){e(t,r+"["+i+"]",n[i])}),t):(t[r]=n,t)}return Object.keys(t).reduce(function(r,n){return e(r,n,t[n])},{})}t.exports={fromObj:n,toObj:r}},function(t,e,r){"use strict";var n=r(7),i=r(8),u=r(9);t.exports=function(){function t(t,e,r,n,o,a){a!==u&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return r.checkPropTypes=n,r.PropTypes=r,r}},function(t,e,r){"use strict";function n(t){return function(){return t}}var i=function(){};i.thatReturns=n,i.thatReturnsFalse=n(!1),i.thatReturnsTrue=n(!0),i.thatReturnsNull=n(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},t.exports=i},function(t,e,r){"use strict";function n(t,e,r,n,u,o,a,s){if(i(e),!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,u,o,a,s],f=0;l=new Error(e.replace(/%s/g,function(){return d[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var i=function(t){};t.exports=n},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";var n=function(t){return null!==t&&void 0!==t},i=function(t){return""===t},u={isDefaultRequiredValue:function(t,e){return void 0===e||""===e},isExisty:function(t,e){return n(e)},matchRegexp:function(t,e,r){return!n(e)||i(e)||r.test(e)},isUndefined:function(t,e){return void 0===e},isEmptyString:function(t,e){return i(e)},isEmail:function(t,e){return u.matchRegexp(t,e,/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)},isUrl:function(t,e){return u.matchRegexp(t,e,/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i)},isTrue:function(t,e){return!0===e},isFalse:function(t,e){return!1===e},isNumeric:function(t,e){return"number"==typeof e||u.matchRegexp(t,e,/^[-+]?(?:\d*[.])?\d+$/)},isAlpha:function(t,e){return u.matchRegexp(t,e,/^[A-Z]+$/i)},isAlphanumeric:function(t,e){return u.matchRegexp(t,e,/^[0-9A-Z]+$/i)},isInt:function(t,e){return u.matchRegexp(t,e,/^(?:[-+]?(?:0|[1-9]\d*))$/)},isFloat:function(t,e){return u.matchRegexp(t,e,/^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/)},isWords:function(t,e){return u.matchRegexp(t,e,/^[A-Z\s]+$/i)},isSpecialWords:function(t,e){return u.matchRegexp(t,e,/^[A-Z\s\u00C0-\u017F]+$/i)},isLength:function(t,e,r){return!n(e)||i(e)||e.length===r},equals:function(t,e,r){return!n(e)||i(e)||e==r},equalsField:function(t,e,r){return e==t[r]},maxLength:function(t,e,r){return!n(e)||e.length<=r},minLength:function(t,e,r){return!n(e)||i(e)||e.length>=r}};t.exports=u},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=r(0),d=n(l),f=r(1),c=n(f),p=r(2),F=n(p),h=function(t){return"string"==typeof t?t.split(/,(?![^{[]*[}\]])/g).reduce(function(t,e){var r=e.split(":"),n=r.shift();if(r=r.map(function(t){try{return JSON.parse(t)}catch(e){return t}}),r.length>1)throw new Error("Formsy does not support multiple args on string validations. Use object format of validations instead.");var i=Object.assign({},t);return i[n]=!r.length||r[0],i},{}):t||{}};t.exports=function(t){var e=function(e){function r(t){i(this,r);var e=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.state={value:t.value,isRequired:!1,isValid:!0,isPristine:!0,pristineValue:t.value,validationError:[],externalError:null,formSubmitted:!1},e.getErrorMessage=e.getErrorMessage.bind(e),e.getErrorMessages=e.getErrorMessages.bind(e),e.getValue=e.getValue.bind(e),e.isFormDisabled=e.isFormDisabled.bind(e),e.isPristine=e.isPristine.bind(e),e.isRequired=e.isRequired.bind(e),e.isValid=e.isValid.bind(e),e.resetValue=e.resetValue.bind(e),e.setValue=e.setValue.bind(e),e.showRequired=e.showRequired.bind(e),e}return o(r,e),s(r,[{key:"componentWillMount",value:function(){var t=this;if(!this.props.name)throw new Error("Form Input requires a name property when used");!function(){t.setValidations(t.props.validations,t.props.required),t.context.formsy.attachToForm(t)}()}},{key:"componentWillReceiveProps",value:function(t){this.setValidations(t.validations,t.required)}},{key:"componentDidUpdate",value:function(t){F.default.isSame(this.props.value,t.value)||this.setValue(this.props.value),F.default.isSame(this.props.validations,t.validations)&&F.default.isSame(this.props.required,t.required)||this.context.formsy.validate(this)}},{key:"componentWillUnmount",value:function(){this.context.formsy.detachFromForm(this)}},{key:"setValidations",value:function(t,e){this.validations=h(t)||{},this.requiredValidations=!0===e?{isDefaultRequiredValue:!0}:h(e)}},{key:"setValue",value:function(t){var e=this;arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?this.setState({value:t}):this.setState({value:t,isPristine:!1},function(){e.context.formsy.validate(e)})}},{key:"getValue",value:function(){return this.state.value}},{key:"getErrorMessage",value:function(){var t=this.getErrorMessages();return t.length?t[0]:null}},{key:"getErrorMessages",value:function(){return!this.isValid()||this.showRequired()?this.state.externalError||this.state.validationError||[]:[]}},{key:"hasValue",value:function(){return""!==this.state.value}},{key:"isFormDisabled",value:function(){return this.context.formsy.isFormDisabled()}},{key:"isValid",value:function(){return this.state.isValid}},{key:"isPristine",value:function(){return this.state.isPristine}},{key:"isFormSubmitted",value:function(){return this.state.formSubmitted}},{key:"isRequired",value:function(){return!!this.props.required}},{key:"showRequired",value:function(){return this.state.isRequired}},{key:"showError",value:function(){return!this.showRequired()&&!this.isValid()}},{key:"isValidValue",value:function(t){return this.context.formsy.isValidValue.call(null,this,t)}},{key:"resetValue",value:function(){var t=this;this.setState({value:this.state.pristineValue,isPristine:!0},function(){t.context.formsy.validate(t)})}},{key:"render",value:function(){var e=this.props.innerRef,r=a({getErrorMessage:this.getErrorMessage,getErrorMessages:this.getErrorMessages,getValue:this.getValue,hasValue:this.hasValue,isFormDisabled:this.isFormDisabled,isValid:this.isValid,isPristine:this.isPristine,isFormSubmitted:this.isFormSubmitted,isRequired:this.isRequired,isValidValue:this.isValidValue,resetValue:this.resetValue,setValidations:this.setValidations,setValue:this.setValue,showRequired:this.showRequired,showError:this.showError},this.props);return e&&(r.ref=e),c.default.createElement(t,r)}}]),r}(c.default.Component);return e.displayName="Formsy("+function(t){return t.displayName||t.name||("string"==typeof t?t:"Component")}(t)+")",e.contextTypes={formsy:d.default.object},e.defaultProps={innerRef:function(){},required:!1,validationError:"",validationErrors:{},validations:null,value:t.defaultValue},e.propTypes={innerRef:d.default.func,name:d.default.string.isRequired,required:d.default.bool,validations:d.default.oneOfType([d.default.object,d.default.string]),value:d.default.string},e}}])});
//# sourceMappingURL=formsy-react.js.map
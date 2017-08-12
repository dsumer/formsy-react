!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.Formsy=e(require("react")):t.Formsy=e(t.react)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){(function(e){"use strict";function n(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,s,c,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),d=r(7),h=e.React||r(8),F={},y=r(10),v=r(11),m=r(5),g=r(9),b={},E=[];F.withFormsy=g,F.propTypes={setValidations:d.func,setValue:d.func,resetValue:d.func,getValue:d.func,hasValue:d.func,getErrorMessage:d.func,getErrorMessages:d.func,isFormDisabled:d.func,isValid:d.func,isPristine:d.func,isFormSubmitted:d.func,isRequired:d.func,showRequired:d.func,showError:d.func,isValidValue:d.func},F.defaults=function(t){b=t},F.addValidationRule=function(t,e){y[t]=e},F.Form=(s=a=function(t){function e(){var t,r,n,u;i(this,e);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=n=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),c.call(n),u=r,o(n,u)}return u(e,t),p(e,[{key:"getChildContext",value:function(){var t=this;return{formsy:{attachToForm:this.attachToForm,detachFromForm:this.detachFromForm,validate:this.validate,isFormDisabled:this.isFormDisabled,isValidValue:function(e,r){return t.runValidation(e,r).isValid}}}}},{key:"componentWillMount",value:function(){this.inputs=[]}},{key:"componentDidMount",value:function(){this.validateForm()}},{key:"componentWillUpdate",value:function(){this.prevInputNames=this.inputs.map(function(t){return t.props.name})}},{key:"componentDidUpdate",value:function(){this.props.validationErrors&&"object"===f(this.props.validationErrors)&&Object.keys(this.props.validationErrors).length>0&&this.setInputValidationErrors(this.props.validationErrors);var t=this.inputs.map(function(t){return t.props.name});m.arraysDiffer(this.prevInputNames,t)&&this.validateForm()}},{key:"render",value:function(){var t=this.props,e=(t.mapping,t.validationErrors,t.onSubmit,t.onValid,t.onValidSubmit,t.onInvalid,t.onInvalidSubmit,t.onChange,t.reset,t.preventExternalInvalidation,t.onSuccess,t.onError,n(t,["mapping","validationErrors","onSubmit","onValid","onValidSubmit","onInvalid","onInvalidSubmit","onChange","reset","preventExternalInvalidation","onSuccess","onError"]));return h.createElement("form",l({},e,{onSubmit:this.submit}),this.props.children)}}]),e}(h.Component),a.displayName="Formsy.Form",a.defaultProps={onSuccess:function(){},onError:function(){},onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){},onValid:function(){},onInvalid:function(){},onChange:function(){},validationErrors:null,preventExternalInvalidation:!1},a.childContextTypes={formsy:d.object},c=function(){var t=this;this.state={isValid:!0,isSubmitting:!1,canChange:!1},this.reset=function(e){t.setFormPristine(!0),t.resetModel(e)},this.submit=function(e){e&&e.preventDefault(),t.setFormPristine(!1);var r=t.getModel();t.props.onSubmit(r,t.resetModel,t.updateInputsWithError),t.state.isValid?t.props.onValidSubmit(r,t.resetModel,t.updateInputsWithError):t.props.onInvalidSubmit(r,t.resetModel,t.updateInputsWithError)},this.mapModel=function(e){return t.props.mapping?t.props.mapping(e):v.toObj(Object.keys(e).reduce(function(t,r){for(var n=r.split("."),i=t;n.length;){var o=n.shift();i=i[o]=n.length?i[o]||{}:e[r]}return t},{}))},this.getModel=function(){var e=t.getCurrentValues();return t.mapModel(e)},this.resetModel=function(e){t.inputs.forEach(function(t){var r=t.props.name;e&&e.hasOwnProperty(r)?t.setValue(e[r]):t.resetValue()}),t.validateForm()},this.setInputValidationErrors=function(e){t.inputs.forEach(function(t){var r=t.props.name,n=[{_isValid:!(r in e),_validationError:"string"==typeof e[r]?[e[r]]:e[r]}];t.setState.apply(t,n)})},this.isChanged=function(){return!m.isSame(t.getPristineValues(),t.getCurrentValues())},this.getPristineValues=function(){return t.inputs.reduce(function(t,e){var r=e.props.name;return t[r]=e.props.value,t},{})},this.updateInputsWithError=function(e){Object.keys(e).forEach(function(r,n){var i=m.find(t.inputs,function(t){return t.props.name===r});if(!i)throw new Error("You are trying to update an input that does not exist. Verify errors object with input names. "+JSON.stringify(e));var o=[{_isValid:t.props.preventExternalInvalidation||!1,_externalError:"string"==typeof e[r]?[e[r]]:e[r]}];i.setState.apply(i,o)})},this.isFormDisabled=function(){return t.props.disabled},this.getCurrentValues=function(){return t.inputs.reduce(function(t,e){var r=e.props.name;return t[r]=e.state._value,t},{})},this.setFormPristine=function(e){t.setState({_formSubmitted:!e}),t.inputs.forEach(function(t,r){t.setState({_formSubmitted:!e,_isPristine:e})})},this.validate=function(e){t.state.canChange&&t.props.onChange(t.getCurrentValues(),t.isChanged());var r=t.runValidation(e);e.setState({_isValid:r.isValid,_isRequired:r.isRequired,_validationError:r.error,_externalError:null},t.validateForm)},this.runValidation=function(e,r){var n=t.getCurrentValues(),i=e.props.validationErrors,o=e.props.validationError;r=r?r:e.state._value;var u=t.runRules(r,n,e._validations),a=t.runRules(r,n,e._requiredValidations);"function"==typeof e.validate&&(u.failed=e.validate()?[]:["failed"]);var s=!!Object.keys(e._requiredValidations).length&&!!a.success.length,c=!(u.failed.length||t.props.validationErrors&&t.props.validationErrors[e.props.name]);return{isRequired:s,isValid:!s&&c,error:function(){if(c&&!s)return E;if(u.errors.length)return u.errors;if(this.props.validationErrors&&this.props.validationErrors[e.props.name])return"string"==typeof this.props.validationErrors[e.props.name]?[this.props.validationErrors[e.props.name]]:this.props.validationErrors[e.props.name];if(s){var t=i[a.success[0]];return t?[t]:null}return u.failed.length?u.failed.map(function(t){return i[t]?i[t]:o}).filter(function(t,e,r){return r.indexOf(t)===e}):void 0}.call(t)}},this.runRules=function(t,e,r){var n={errors:[],failed:[],success:[]};return Object.keys(r).length&&Object.keys(r).forEach(function(i){if(y[i]&&"function"==typeof r[i])throw new Error("Formsy does not allow you to override default validations: "+i);if(!y[i]&&"function"!=typeof r[i])throw new Error("Formsy does not have the validation rule: "+i);if("function"==typeof r[i]){var o=r[i](e,t);return void("string"==typeof o?(n.errors.push(o),n.failed.push(i)):o||n.failed.push(i))}if("function"!=typeof r[i]){var o=y[i](e,t,r[i]);return void("string"==typeof o?(n.errors.push(o),n.failed.push(i)):o?n.success.push(i):n.failed.push(i))}return n.success.push(i)}),n},this.validateForm=function(){var e=function(){var t=this.inputs.every(function(t){return t.state._isValid});this.setState({isValid:t}),t?this.props.onValid():this.props.onInvalid(),this.setState({canChange:!0})}.bind(t);t.inputs.forEach(function(r,n){var i=t.runValidation(r);i.isValid&&r.state._externalError&&(i.isValid=!1),r.setState({_isValid:i.isValid,_isRequired:i.isRequired,_validationError:i.error,_externalError:!i.isValid&&r.state._externalError?r.state._externalError:null},n===t.inputs.length-1?e:null)}),t.inputs.length||t.setState({canChange:!0})},this.attachToForm=function(e){t.inputs.indexOf(e)===-1&&t.inputs.push(e),t.validate(e)},this.detachFromForm=function(e){var r=t.inputs.indexOf(e);r!==-1&&(t.inputs=t.inputs.slice(0,r).concat(t.inputs.slice(r+1))),t.validateForm()}},s),e.exports||e.module||e.define&&e.define.amd||(e.Formsy=F),t.exports=F}).call(e,function(){return this}())},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function u(){F&&d&&(F=!1,d.length?h=d.concat(h):y=-1,h.length&&a())}function a(){if(!F){var t=i(u);F=!0;for(var e=h.length;e;){for(d=h,h=[];++y<e;)d&&d[y].run();y=-1,e=h.length}d=null,F=!1,o(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var d,h=[],F=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new s(t,e)),1!==h.length||F||i(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){"use strict";function r(t){return function(){return t}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},t.exports=n},function(t,e,r){(function(e){"use strict";function r(t,e,r,i,o,u,a,s){if(n(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,i,o,u,a,s],f=0;c=new Error(e.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(t){};"production"!==e.env.NODE_ENV&&(n=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")}),t.exports=r}).call(e,r(1))},function(t,e){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";t.exports=r},function(t,e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={arraysDiffer:function(t,e){var r=!1;return t.length!==e.length?r=!0:t.forEach(function(t,n){this.isSame(t,e[n])||(r=!0)},this),r},objectsDiffer:function(t,e){var r=!1;return Object.keys(t).length!==Object.keys(e).length?r=!0:Object.keys(t).forEach(function(n){this.isSame(t[n],e[n])||(r=!0)},this),r},isSame:function(t,e){return("undefined"==typeof t?"undefined":r(t))===("undefined"==typeof e?"undefined":r(e))&&(Array.isArray(t)&&Array.isArray(e)?!this.arraysDiffer(t,e):"function"==typeof t?t.toString()===e.toString():"object"===("undefined"==typeof t?"undefined":r(t))&&null!==t&&null!==e?!this.objectsDiffer(t,e):t===e)},find:function(t,e){for(var r=0,n=t.length;r<n;r++){var i=t[r];if(e(i))return i}return null}}},function(t,e,r){(function(e){"use strict";var n=r(2),i=n;if("production"!==e.env.NODE_ENV){var o=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,o="Warning: "+t.replace(/%s/g,function(){return r[i++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(t){}};i=function(t,e){if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==e.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];o.apply(void 0,[e].concat(n))}}}t.exports=i}).call(e,r(1))},function(t,e,r){(function(e){if("production"!==e.env.NODE_ENV){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},o=!0;t.exports=r(15)(i,o)}else t.exports=r(14)()}).call(e,r(1))},function(e,r){e.exports=t},function(t,e,r){(function(e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return t.displayName||t.name||("string"==typeof t?t:"Component")}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=e.React||r(8),l=r(7),f=r(12),p=r(5),d=function(t){return"string"==typeof t?t.split(/\,(?![^{\[]*[}\]])/g).reduce(function(t,e){var r=e.split(":"),n=r.shift();if(r=r.map(function(t){try{return JSON.parse(t)}catch(e){return t}}),r.length>1)throw new Error("Formsy does not support multiple args on string validations. Use object format of validations instead.");return t[n]=!r.length||r[0],t},{}):t||{}};t.exports=function(t){var e=function(e){function r(){var e,o,u,a;n(this,r);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return o=u=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(c))),u.state={_value:"undefined"!=typeof u.props.value?u.props.value:t.defaultProps?t.defaultProps.value:void 0,_isRequired:!1,_isValid:!0,_isPristine:!0,_pristineValue:"undefined"!=typeof u.props.value?u.props.value:t.defaultProps?t.defaultProps.value:void 0,_validationError:[],_externalError:null,_formSubmitted:!1},u.setValidations=function(t,e){u._validations=d(t)||{},u._requiredValidations=e===!0?{isDefaultRequiredValue:!0}:d(e)},u.setValue=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e?u.setState({_value:t,_isPristine:!1},function(){u.context.formsy.validate(u)}):u.setState({_value:t})},u.resetValue=function(){u.setState({_value:u.state._pristineValue,_isPristine:!0},function(){this.context.formsy.validate(this)})},u.getValue=function(){return u.state._value},u.hasValue=function(){return""!==u.state._value},u.getErrorMessage=function(){var t=u.getErrorMessages();return t.length?t[0]:null},u.getErrorMessages=function(){return!u.isValid()||u.showRequired()?u.state._externalError||u.state._validationError||[]:[]},u.isFormDisabled=function(){return u.context.formsy.isFormDisabled()},u.isValid=function(){return u.state._isValid},u.isPristine=function(){return u.state._isPristine},u.isFormSubmitted=function(){return u.state._formSubmitted},u.isRequired=function(){return!!u.props.required},u.showRequired=function(){return u.state._isRequired},u.showError=function(){return!u.showRequired()&&!u.isValid()},u.isValidValue=function(t){return u.context.formsy.isValidValue.call(null,u,t)},a=o,i(u,a)}return o(r,e),s(r,[{key:"componentWillMount",value:function(){var t=this,e=function(){t.setValidations(t.props.validations,t.props.required),t.context.formsy.attachToForm(t)};if(!this.props.name)throw new Error("Form Input requires a name property when used");e()}},{key:"componentWillReceiveProps",value:function(t){this.setValidations(t.validations,t.required)}},{key:"componentDidUpdate",value:function(t){p.isSame(this.props.value,t.value)||this.setValue(this.props.value),p.isSame(this.props.validations,t.validations)&&p.isSame(this.props.required,t.required)||this.context.formsy.validate(this)}},{key:"componentWillUnmount",value:function(){this.context.formsy.detachFromForm(this)}},{key:"render",value:function(){var e=this.props.innerRef,r=a({setValidations:this.setValidations,setValue:this.setValue,resetValue:this.resetValue,getValue:this.getValue,hasValue:this.hasValue,getErrorMessage:this.getErrorMessage,getErrorMessages:this.getErrorMessages,isFormDisabled:this.isFormDisabled,isValid:this.isValid,isPristine:this.isPristine,isFormSubmitted:this.isFormSubmitted,isRequired:this.isRequired,showRequired:this.showRequired,showError:this.showError,isValidValue:this.isValidValue},this.props);return e&&(r.ref=e),c.createElement(t,r)}}]),r}(c.Component);return e.displayName="Formsy("+u(t)+")",e.contextTypes={formsy:l.object},e.defaultProps={validationError:"",validationErrors:{}},f(e,t)}}).call(e,function(){return this}())},function(t,e){"use strict";var r=function(t){return null!==t&&void 0!==t},n=function(t){return""===t},i={isDefaultRequiredValue:function(t,e){return void 0===e||""===e},isExisty:function(t,e){return r(e)},matchRegexp:function(t,e,i){return!r(e)||n(e)||i.test(e)},isUndefined:function(t,e){return void 0===e},isEmptyString:function(t,e){return n(e)},isEmail:function(t,e){return i.matchRegexp(t,e,/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)},isUrl:function(t,e){return i.matchRegexp(t,e,/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i)},isTrue:function(t,e){return e===!0},isFalse:function(t,e){return e===!1},isNumeric:function(t,e){return"number"==typeof e||i.matchRegexp(t,e,/^[-+]?(?:\d*[.])?\d+$/)},isAlpha:function(t,e){return i.matchRegexp(t,e,/^[A-Z]+$/i)},isAlphanumeric:function(t,e){return i.matchRegexp(t,e,/^[0-9A-Z]+$/i)},isInt:function(t,e){return i.matchRegexp(t,e,/^(?:[-+]?(?:0|[1-9]\d*))$/)},isFloat:function(t,e){return i.matchRegexp(t,e,/^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/)},isWords:function(t,e){return i.matchRegexp(t,e,/^[A-Z\s]+$/i)},isSpecialWords:function(t,e){return i.matchRegexp(t,e,/^[A-Z\s\u00C0-\u017F]+$/i)},isLength:function(t,e,i){return!r(e)||n(e)||e.length===i},equals:function(t,e,i){return!r(e)||n(e)||e==i},equalsField:function(t,e,r){return e==t[r]},maxLength:function(t,e,n){return!r(e)||e.length<=n},minLength:function(t,e,i){return!r(e)||n(e)||e.length>=i}};t.exports=i},function(t,e){function r(t){return Object.keys(t).reduce(function(e,r){var n=r.match(/[^\[]*/i),i=r.match(/\[.*?\]/g)||[];i=[n[0]].concat(i).map(function(t){return t.replace(/\[|\]/g,"")});for(var o=e;i.length;){var u=i.shift();u in o?o=o[u]:(o[u]=i.length?isNaN(i[0])?{}:[]:t[r],o=o[u])}return e},{})}function n(t){function e(t,r,n){return Array.isArray(n)||"[object Object]"===Object.prototype.toString.call(n)?(Object.keys(n).forEach(function(i){e(t,r+"["+i+"]",n[i])}),t):(t[r]=n,t)}var r=Object.keys(t);return r.reduce(function(r,n){return e(r,n,t[n])},{})}t.exports={fromObj:n,toObj:r}},function(t,e){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.getOwnPropertySymbols,o=(Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable),u=Object.getPrototypeOf,a=u&&u(Object),s=Object.getOwnPropertyNames;t.exports=function t(e,c,l){if("string"!=typeof c){if(a){var f=u(c);f&&f!==a&&t(e,f,l)}var p=s(c);i&&(p=p.concat(i(c)));for(var d=0;d<p.length;++d){var h=p[d];if(!(r[h]||n[h]||l&&l[h])&&(o.call(c,h)||"function"==typeof c[h]))try{e[h]=c[h]}catch(t){}}return e}return e}},function(t,e,r){(function(e){"use strict";function n(t,r,n,s,c){if("production"!==e.env.NODE_ENV)for(var l in t)if(t.hasOwnProperty(l)){var f;try{i("function"==typeof t[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",s||"React class",n,l),f=t[l](r,l,s,n,null,u)}catch(t){f=t}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",n,l,typeof f),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var p=c?c():"";o(!1,"Failed %s type: %s%s",n,f.message,null!=p?p:"")}}}if("production"!==e.env.NODE_ENV)var i=r(3),o=r(6),u=r(4),a={};t.exports=n}).call(e,r(1))},function(t,e,r){"use strict";var n=r(2),i=r(3),o=r(4);t.exports=function(){function t(t,e,r,n,u,a){a!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return r.checkPropTypes=n,r.PropTypes=r,r}},function(t,e,r){(function(e){"use strict";var n=r(2),i=r(3),o=r(6),u=r(4),a=r(13);t.exports=function(t,r){function s(t){var e=t&&(S&&t[S]||t[j]);if("function"==typeof e)return e}function c(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function l(t){this.message=t,this.stack=""}function f(t){function n(n,c,f,p,d,h,F){if(p=p||R,h=h||f,F!==u)if(r)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==e.env.NODE_ENV&&"undefined"!=typeof console){var y=p+":"+f;!a[y]&&s<3&&(o(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),a[y]=!0,s++)}return null==c[f]?n?new l(null===c[f]?"The "+d+" `"+h+"` is marked as required "+("in `"+p+"`, but its value is `null`."):"The "+d+" `"+h+"` is marked as required in "+("`"+p+"`, but its value is `undefined`.")):null:t(c,f,p,d,h)}if("production"!==e.env.NODE_ENV)var a={},s=0;var c=n.bind(null,!1);return c.isRequired=n.bind(null,!0),c}function p(t){function e(e,r,n,i,o,u){var a=e[r],s=V(a);if(s!==t){var c=O(a);return new l("Invalid "+i+" `"+o+"` of type "+("`"+c+"` supplied to `"+n+"`, expected ")+("`"+t+"`."))}return null}return f(e)}function d(){return f(n.thatReturnsNull)}function h(t){function e(e,r,n,i,o){if("function"!=typeof t)return new l("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=e[r];if(!Array.isArray(a)){var s=V(a);return new l("Invalid "+i+" `"+o+"` of type "+("`"+s+"` supplied to `"+n+"`, expected an array."))}for(var c=0;c<a.length;c++){var f=t(a,c,n,i,o+"["+c+"]",u);if(f instanceof Error)return f}return null}return f(e)}function F(){function e(e,r,n,i,o){var u=e[r];if(!t(u)){var a=V(u);return new l("Invalid "+i+" `"+o+"` of type "+("`"+a+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return f(e)}function y(t){function e(e,r,n,i,o){if(!(e[r]instanceof t)){var u=t.name||R,a=w(e[r]);return new l("Invalid "+i+" `"+o+"` of type "+("`"+a+"` supplied to `"+n+"`, expected ")+("instance of `"+u+"`."))}return null}return f(e)}function v(t){function r(e,r,n,i,o){for(var u=e[r],a=0;a<t.length;a++)if(c(u,t[a]))return null;var s=JSON.stringify(t);return new l("Invalid "+i+" `"+o+"` of value `"+u+"` "+("supplied to `"+n+"`, expected one of "+s+"."))}return Array.isArray(t)?f(r):("production"!==e.env.NODE_ENV?o(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,n.thatReturnsNull)}function m(t){function e(e,r,n,i,o){if("function"!=typeof t)return new l("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var a=e[r],s=V(a);if("object"!==s)return new l("Invalid "+i+" `"+o+"` of type "+("`"+s+"` supplied to `"+n+"`, expected an object."));for(var c in a)if(a.hasOwnProperty(c)){var f=t(a,c,n,i,o+"."+c,u);if(f instanceof Error)return f}return null}return f(e)}function g(t){function r(e,r,n,i,o){for(var a=0;a<t.length;a++){var s=t[a];if(null==s(e,r,n,i,o,u))return null}return new l("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`."))}if(!Array.isArray(t))return"production"!==e.env.NODE_ENV?o(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,n.thatReturnsNull;for(var i=0;i<t.length;i++){var a=t[i];if("function"!=typeof a)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",_(a),i),n.thatReturnsNull}return f(r)}function b(){function t(t,e,r,n,i){return x(t[e])?null:new l("Invalid "+n+" `"+i+"` supplied to "+("`"+r+"`, expected a ReactNode."))}return f(t)}function E(t){function e(e,r,n,i,o){var a=e[r],s=V(a);if("object"!==s)return new l("Invalid "+i+" `"+o+"` of type `"+s+"` "+("supplied to `"+n+"`, expected `object`."));for(var c in t){var f=t[c];if(f){var p=f(a,c,n,i,o+"."+c,u);if(p)return p}}return null}return f(e)}function x(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(x);if(null===e||t(e))return!0;var r=s(e);if(!r)return!1;var n,i=r.call(e);if(r!==e.entries){for(;!(n=i.next()).done;)if(!x(n.value))return!1}else for(;!(n=i.next()).done;){var o=n.value;if(o&&!x(o[1]))return!1}return!0;default:return!1}}function D(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function V(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":D(e,t)?"symbol":e}function O(t){if("undefined"==typeof t||null===t)return""+t;var e=V(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function _(t){var e=O(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function w(t){return t.constructor&&t.constructor.name?t.constructor.name:R}var S="function"==typeof Symbol&&Symbol.iterator,j="@@iterator",R="<<anonymous>>",T={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:h,element:F(),instanceOf:y,node:b(),objectOf:m,oneOf:v,oneOfType:g,shape:E};return l.prototype=Error.prototype,T.checkPropTypes=a,T.PropTypes=T,T}}).call(e,r(1))}])});
//# sourceMappingURL=formsy-react.js.map
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@aurelia/runtime", "../../dom"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const runtime_1 = require("@aurelia/runtime");
    const dom_1 = require("../../dom");
    /**
     * Focus attribute for element focus binding
     */
    let Focus = class Focus {
        constructor(element, dom) {
            this.dom = dom;
            /**
             * Indicates whether `apply` should be called when `attached` callback is invoked
             */
            this.needsApply = false;
            this.element = element;
        }
        binding() {
            this.valueChanged();
        }
        /**
         * Invoked everytime the bound value changes.
         *
         * @param newValue - The new value.
         */
        valueChanged() {
            // In theory, we could/should react immediately
            // but focus state of an element cannot be achieved
            // while it's disconnected from the document
            // thus, there neesd to be a check if it's currently connected or not
            // before applying the value to the element
            if (this.$controller.state & 32 /* isAttached */) {
                this.apply();
            }
            else {
                // If the element is not currently connect
                // toggle the flag to add pending work for later
                // in attached lifecycle
                this.needsApply = true;
            }
        }
        /**
         * Invoked when the attribute is attached to the DOM.
         */
        attached() {
            if (this.needsApply) {
                this.needsApply = false;
                this.apply();
            }
            const el = this.element;
            el.addEventListener('focus', this);
            el.addEventListener('blur', this);
        }
        /**
         * Invoked when the attribute is detached from the DOM.
         */
        detached() {
            const el = this.element;
            el.removeEventListener('focus', this);
            el.removeEventListener('blur', this);
        }
        /**
         * EventTarget interface handler for better memory usage
         */
        handleEvent(e) {
            // there are only two event listened to
            // if the even is focus, it menans the element is focused
            // only need to switch the value to true
            if (e.type === 'focus') {
                this.value = true;
            }
            else if (this.dom.document.activeElement !== this.element) {
                // else, it's blur event
                // when a blur event happens, there are two situations
                // 1. the element itself lost the focus
                // 2. window lost the focus
                // To handle both (1) and (2), only need to check if
                // current active element is still the same element of this focus custom attribute
                // If it's not, it's a blur event happened on Window because the browser tab lost focus
                this.value = false;
            }
        }
        /**
         * Focus/blur based on current value
         */
        apply() {
            const el = this.element;
            if (this.value) {
                el.focus();
            }
            else {
                el.blur();
            }
        }
    };
    tslib_1.__decorate([
        runtime_1.bindable({ mode: runtime_1.BindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], Focus.prototype, "value", void 0);
    Focus = tslib_1.__decorate([
        runtime_1.customAttribute('focus'),
        tslib_1.__param(0, runtime_1.INode),
        tslib_1.__param(1, runtime_1.IDOM),
        tslib_1.__metadata("design:paramtypes", [Object, dom_1.HTMLDOM])
    ], Focus);
    exports.Focus = Focus;
});
//# sourceMappingURL=focus.js.map
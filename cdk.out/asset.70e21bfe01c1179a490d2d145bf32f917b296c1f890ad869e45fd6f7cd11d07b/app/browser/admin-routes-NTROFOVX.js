import {
  ActivatedRoute,
  NotificationService,
  Router,
  RouterLink
} from "./chunk-F6OYOYGX.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  MatProgressSpinner,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-SGEREERX.js";
import {
  ApiService,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DOCUMENT,
  DecimalPipe,
  DestroyRef,
  Directionality,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  IterableDiffers,
  MatButton,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
  MatCommonModule,
  NgModule,
  NgZone,
  Optional,
  Output,
  Platform,
  ProductsService,
  ScrollingModule,
  SkipSelf,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportRuler,
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  _ViewRepeaterOperation,
  __privateAdd,
  __privateGet,
  __privateSet,
  booleanAttribute,
  filter,
  finalize,
  from,
  inject,
  input,
  isDataSource,
  isObservable,
  model,
  of,
  output,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  takeUntilDestroyed,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NDJ4H5LI.js";

// src/app/admin/orders/orders.service.ts
var _OrdersService = class _OrdersService {
  constructor() {
  }
  getOrders() {
    return of([]);
  }
};
_OrdersService.\u0275fac = function OrdersService_Factory(t) {
  return new (t || _OrdersService)();
};
_OrdersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdersService, factory: _OrdersService.\u0275fac });
var OrdersService = _OrdersService;

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var _CdkCellDef = class _CdkCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkCellDef.\u0275fac = function CdkCellDef_Factory(t) {
  return new (t || _CdkCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCellDef,
  selectors: [["", "cdkCellDef", ""]],
  standalone: true
});
var CdkCellDef = _CdkCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkHeaderCellDef = class _CdkHeaderCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkHeaderCellDef.\u0275fac = function CdkHeaderCellDef_Factory(t) {
  return new (t || _CdkHeaderCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkHeaderCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderCellDef,
  selectors: [["", "cdkHeaderCellDef", ""]],
  standalone: true
});
var CdkHeaderCellDef = _CdkHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkFooterCellDef = class _CdkFooterCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkFooterCellDef.\u0275fac = function CdkFooterCellDef_Factory(t) {
  return new (t || _CdkFooterCellDef)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkFooterCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterCellDef,
  selectors: [["", "cdkFooterCellDef", ""]],
  standalone: true
});
var CdkFooterCellDef = _CdkFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkColumnDef = class _CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /** Whether the cell is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(_table) {
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
    this._stickyEnd = false;
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
};
_CdkColumnDef.\u0275fac = function CdkColumnDef_Factory(t) {
  return new (t || _CdkColumnDef)(\u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkColumnDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkColumnDef,
  selectors: [["", "cdkColumnDef", ""]],
  contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkHeaderCellDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkFooterCellDef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
    }
  },
  inputs: {
    name: [InputFlags.None, "cdkColumnDef", "name"],
    sticky: [InputFlags.HasDecoratorInputTransform, "sticky", "sticky", booleanAttribute],
    stickyEnd: [InputFlags.HasDecoratorInputTransform, "stickyEnd", "stickyEnd", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _CdkColumnDef
  }]), \u0275\u0275InputTransformsFeature]
});
var CdkColumnDef = _CdkColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var _CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
  }
};
_CdkHeaderCell.\u0275fac = function CdkHeaderCell_Factory(t) {
  return new (t || _CdkHeaderCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkHeaderCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderCell,
  selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkHeaderCell = _CdkHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkFooterCell.\u0275fac = function CdkFooterCell_Factory(t) {
  return new (t || _CdkFooterCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkFooterCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterCell,
  selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
  hostAttrs: [1, "cdk-footer-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkFooterCell = _CdkFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkCell = class _CdkCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkCell.\u0275fac = function CdkCell_Factory(t) {
  return new (t || _CdkCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
};
_CdkCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCell,
  selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
  hostAttrs: [1, "cdk-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkCell = _CdkCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _Schedule = class {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }
};
var _COALESCED_STYLE_SCHEDULER = new InjectionToken("_COALESCED_STYLE_SCHEDULER");
var __CoalescedStyleScheduler = class __CoalescedStyleScheduler {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    this._currentSchedule = null;
    this._destroyed = new Subject();
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */
  schedule(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.tasks.push(task);
  }
  /**
   * Schedules the specified task to run after other scheduled tasks at the end of the current
   * VM turn.
   */
  scheduleEnd(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.endTasks.push(task);
  }
  /** Prevent any further tasks from running. */
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  _createScheduleIfNeeded() {
    if (this._currentSchedule) {
      return;
    }
    this._currentSchedule = new _Schedule();
    this._getScheduleObservable().pipe(takeUntil(this._destroyed)).subscribe(() => {
      while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
        const schedule = this._currentSchedule;
        this._currentSchedule = new _Schedule();
        for (const task of schedule.tasks) {
          task();
        }
        for (const task of schedule.endTasks) {
          task();
        }
      }
      this._currentSchedule = null;
    });
  }
  _getScheduleObservable() {
    return this._ngZone.isStable ? from(Promise.resolve(void 0)) : this._ngZone.onStable.pipe(take(1));
  }
};
__CoalescedStyleScheduler.\u0275fac = function _CoalescedStyleScheduler_Factory(t) {
  return new (t || __CoalescedStyleScheduler)(\u0275\u0275inject(NgZone));
};
__CoalescedStyleScheduler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: __CoalescedStyleScheduler,
  factory: __CoalescedStyleScheduler.\u0275fac
});
var _CoalescedStyleScheduler = __CoalescedStyleScheduler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CoalescedStyleScheduler, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _BaseRowDef = class _BaseRowDef {
  constructor(template, _differs) {
    this.template = template;
    this._differs = _differs;
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
};
_BaseRowDef.\u0275fac = function BaseRowDef_Factory(t) {
  return new (t || _BaseRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers));
};
_BaseRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseRowDef,
  features: [\u0275\u0275NgOnChangesFeature]
});
var BaseRowDef = _BaseRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], null);
})();
var _CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
};
_CdkHeaderRowDef.\u0275fac = function CdkHeaderRowDef_Factory(t) {
  return new (t || _CdkHeaderRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkHeaderRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkHeaderRowDef,
  selectors: [["", "cdkHeaderRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "cdkHeaderRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkHeaderRowDef = _CdkHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
};
_CdkFooterRowDef.\u0275fac = function CdkFooterRowDef_Factory(t) {
  return new (t || _CdkFooterRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkFooterRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkFooterRowDef,
  selectors: [["", "cdkFooterRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "cdkFooterRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkFooterRowDef = _CdkFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkRowDef = class _CdkRowDef extends BaseRowDef {
  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
};
_CdkRowDef.\u0275fac = function CdkRowDef_Factory(t) {
  return new (t || _CdkRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
};
_CdkRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkRowDef,
  selectors: [["", "cdkRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "cdkRowDefColumns", "columns"],
    when: [InputFlags.None, "cdkRowDefWhen", "when"]
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var CdkRowDef = _CdkRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _CdkCellOutlet = class _CdkCellOutlet {
  constructor(_viewContainer) {
    this._viewContainer = _viewContainer;
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
};
_CdkCellOutlet.mostRecentCellOutlet = null;
_CdkCellOutlet.\u0275fac = function CdkCellOutlet_Factory(t) {
  return new (t || _CdkCellOutlet)(\u0275\u0275directiveInject(ViewContainerRef));
};
_CdkCellOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCellOutlet,
  selectors: [["", "cdkCellOutlet", ""]],
  standalone: true
});
var CdkCellOutlet = _CdkCellOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var _CdkHeaderRow = class _CdkHeaderRow {
};
_CdkHeaderRow.\u0275fac = function CdkHeaderRow_Factory(t) {
  return new (t || _CdkHeaderRow)();
};
_CdkHeaderRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkHeaderRow,
  selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-header-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkHeaderRow = _CdkHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkFooterRow = class _CdkFooterRow {
};
_CdkFooterRow.\u0275fac = function CdkFooterRow_Factory(t) {
  return new (t || _CdkFooterRow)();
};
_CdkFooterRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkFooterRow,
  selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-footer-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkFooterRow = _CdkFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkRow = class _CdkRow {
};
_CdkRow.\u0275fac = function CdkRow_Factory(t) {
  return new (t || _CdkRow)();
};
_CdkRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkRow,
  selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-row"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkRow = _CdkRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _CdkNoDataRow = class _CdkNoDataRow {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._contentClassName = "cdk-no-data-row";
  }
};
_CdkNoDataRow.\u0275fac = function CdkNoDataRow_Factory(t) {
  return new (t || _CdkNoDataRow)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkNoDataRow.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkNoDataRow,
  selectors: [["ng-template", "cdkNoDataRow", ""]],
  standalone: true
});
var CdkNoDataRow = _CdkNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row);
      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    }
    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const firstRow = rows[0];
      const numCells = firstRow.children.length;
      const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
      const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
      const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      const lastStickyStart = stickyStartStates.lastIndexOf(true);
      const firstStickyEnd = stickyEndStates.indexOf(true);
      const isRtl = this.direction === "rtl";
      const start = isRtl ? "right" : "left";
      const end = isRtl ? "left" : "right";
      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];
          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }
          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
          }
        }
      }
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
      const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
      const stickyOffsets = [];
      const stickyCellHeights = [];
      const elementsToStick = [];
      for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        stickyOffsets[rowIndex] = stickyOffset;
        const row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        const height = row.getBoundingClientRect().height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }
      const borderedRowIndex = states.lastIndexOf(true);
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;
        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }
      if (position === "top") {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const tfoot = tableElement.querySelector("tfoot");
      if (tfoot) {
        if (stickyStates.some((state) => !state)) {
          this._removeStickyStyle(tfoot, ["bottom"]);
        } else {
          this._addStickyStyle(tfoot, "bottom", 0, false);
        }
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      let cell = firstRowCells[i];
      cellWidths.push(cell.getBoundingClientRect().width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
};
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for theprovided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var _CdkRecycleRows = class _CdkRecycleRows {
};
_CdkRecycleRows.\u0275fac = function CdkRecycleRows_Factory(t) {
  return new (t || _CdkRecycleRows)();
};
_CdkRecycleRows.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkRecycleRows,
  selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var CdkRecycleRows = _CdkRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var _DataRowOutlet = class _DataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
};
_DataRowOutlet.\u0275fac = function DataRowOutlet_Factory(t) {
  return new (t || _DataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_DataRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DataRowOutlet,
  selectors: [["", "rowOutlet", ""]],
  standalone: true
});
var DataRowOutlet = _DataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _HeaderRowOutlet = class _HeaderRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
};
_HeaderRowOutlet.\u0275fac = function HeaderRowOutlet_Factory(t) {
  return new (t || _HeaderRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_HeaderRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HeaderRowOutlet,
  selectors: [["", "headerRowOutlet", ""]],
  standalone: true
});
var HeaderRowOutlet = _HeaderRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _FooterRowOutlet = class _FooterRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
};
_FooterRowOutlet.\u0275fac = function FooterRowOutlet_Factory(t) {
  return new (t || _FooterRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_FooterRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FooterRowOutlet,
  selectors: [["", "footerRowOutlet", ""]],
  standalone: true
});
var FooterRowOutlet = _FooterRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _NoDataRowOutlet = class _NoDataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
};
_NoDataRowOutlet.\u0275fac = function NoDataRowOutlet_Factory(t) {
  return new (t || _NoDataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
};
_NoDataRowOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NoDataRowOutlet,
  selectors: [["", "noDataRowOutlet", ""]],
  standalone: true
});
var NoDataRowOutlet = _NoDataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var CDK_TABLE_TEMPLATE = (
  // Note that according to MDN, the `caption` element has to be projected as the **first**
  // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
  `
  <ng-content select="caption"/>
  <ng-content select="colgroup, col"/>

  <!--
    Unprojected content throws a hydration error so we need this to capture it.
    It gets removed on the client so it doesn't affect the layout.
  -->
  @if (_isServer) {
    <ng-content/>
  }

  @if (_isNativeHtmlTable) {
    <thead role="rowgroup">
      <ng-container headerRowOutlet/>
    </thead>
    <tbody role="rowgroup">
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
    </tbody>
    <tfoot role="rowgroup">
      <ng-container footerRowOutlet/>
    </tfoot>
  } @else {
    <ng-container headerRowOutlet/>
    <ng-container rowOutlet/>
    <ng-container noDataRowOutlet/>
    <ng-container footerRowOutlet/>
  }
`
);
var _CdkTable = class _CdkTable {
  /** Aria role to apply to the table's cells based on the table's own role. */
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const role = this._elementRef.nativeElement.getAttribute("role");
      const cellRole = role === "grid" || role === "treegrid" ? "gridcell" : "cell";
      this._cellRoleInternal = this._isNativeHtmlTable && cellRole === "cell" ? null : cellRole;
    }
    return this._cellRoleInternal;
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener, _ngZone) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._viewportRuler = _viewportRuler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._ngZone = _ngZone;
    this._onDestroy = new Subject();
    this._columnDefsByName = /* @__PURE__ */ new Map();
    this._customColumnDefs = /* @__PURE__ */ new Set();
    this._customRowDefs = /* @__PURE__ */ new Set();
    this._customHeaderRowDefs = /* @__PURE__ */ new Set();
    this._customFooterRowDefs = /* @__PURE__ */ new Set();
    this._headerRowDefChanged = true;
    this._footerRowDefChanged = true;
    this._stickyColumnStylesNeedReset = true;
    this._forceRecalculateCellWidths = true;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    this.stickyCssClass = "cdk-table-sticky";
    this.needsPositionStickyOnElement = true;
    this._isShowingNoDataRow = false;
    this._hasAllOutlets = false;
    this._hasInitialized = false;
    this._cellRoleInternal = void 0;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false;
    this.contentChanged = new EventEmitter();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    if (!role) {
      _elementRef.nativeElement.setAttribute("role", "table");
    }
    this._document = _document;
    this._isServer = !_platform.isBrowser;
    this._isNativeHtmlTable = _elementRef.nativeElement.nodeName === "TABLE";
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    if (this._ngZone && NgZone.isInAngularZone()) {
      this._ngZone.onStable.pipe(take(1), takeUntil(this._onDestroy)).subscribe(() => {
        this.updateStickyColumnStyles();
      });
    } else {
      this.updateStickyColumnStyles();
    }
    this.contentChanged.next();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /** Invoked whenever an outlet is created and has been assigned to the table. */
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  /** Whether the table has all the information to start rendering. */
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  /** Renders the table if its state has changed. */
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
};
_CdkTable.\u0275fac = function CdkTable_Factory(t) {
  return new (t || _CdkTable)(\u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275injectAttribute("role"), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(_VIEW_REPEATER_STRATEGY), \u0275\u0275directiveInject(_COALESCED_STYLE_SCHEDULER), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(STICKY_POSITIONING_LISTENER, 12), \u0275\u0275directiveInject(NgZone, 8));
};
_CdkTable.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkTable,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5);
      \u0275\u0275contentQuery(dirIndex, CdkColumnDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkRowDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkHeaderRowDef, 5);
      \u0275\u0275contentQuery(dirIndex, CdkFooterRowDef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
    }
  },
  hostAttrs: [1, "cdk-table"],
  hostVars: 2,
  hostBindings: function CdkTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
    }
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: [InputFlags.HasDecoratorInputTransform, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
    fixedLayout: [InputFlags.HasDecoratorInputTransform, "fixedLayout", "fixedLayout", booleanAttribute]
  },
  outputs: {
    contentChanged: "contentChanged"
  },
  exportAs: ["cdkTable"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    {
      provide: CDK_TABLE,
      useExisting: _CdkTable
    },
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 2,
  consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function CdkTable_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
      \u0275\u0275template(2, CdkTable_Conditional_2_Template, 1, 0)(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx._isServer ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(3, ctx._isNativeHtmlTable ? 3 : 4);
    }
  },
  dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
  encapsulation: 2
});
var CdkTable = _CdkTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: CDK_TABLE_TEMPLATE,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: _CoalescedStyleScheduler,
    decorators: [{
      type: Inject,
      args: [_COALESCED_STYLE_SCHEDULER]
    }]
  }, {
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [STICKY_POSITIONING_LISTENER]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var _CdkTextColumn = class _CdkTextColumn {
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  constructor(_table, _options) {
    this._table = _table;
    this._options = _options;
    this.justify = "start";
    this._options = _options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
};
_CdkTextColumn.\u0275fac = function CdkTextColumn_Factory(t) {
  return new (t || _CdkTextColumn)(\u0275\u0275directiveInject(CdkTable, 8), \u0275\u0275directiveInject(TEXT_COLUMN_OPTIONS, 8));
};
_CdkTextColumn.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkTextColumn,
  selectors: [["cdk-text-column"]],
  viewQuery: function CdkTextColumn_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkColumnDef, 7);
      \u0275\u0275viewQuery(CdkCellDef, 7);
      \u0275\u0275viewQuery(CdkHeaderCellDef, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
    }
  },
  inputs: {
    name: "name",
    headerText: "headerText",
    dataAccessor: "dataAccessor",
    justify: "justify"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
  template: function CdkTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
      \u0275\u0275elementContainerEnd();
    }
  },
  dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
  encapsulation: 2
});
var CdkTextColumn = _CdkTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [{
    type: CdkTable,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [TEXT_COLUMN_OPTIONS]
    }]
  }], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var _CdkTableModule = class _CdkTableModule {
};
_CdkTableModule.\u0275fac = function CdkTableModule_Factory(t) {
  return new (t || _CdkTableModule)();
};
_CdkTableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CdkTableModule
});
_CdkTableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ScrollingModule]
});
var CdkTableModule = _CdkTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c12 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var _MatRecycleRows = class _MatRecycleRows {
};
_MatRecycleRows.\u0275fac = function MatRecycleRows_Factory(t) {
  return new (t || _MatRecycleRows)();
};
_MatRecycleRows.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRecycleRows,
  selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var MatRecycleRows = _MatRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTable = class _MatTable extends CdkTable {
  constructor() {
    super(...arguments);
    this.stickyCssClass = "mat-mdc-table-sticky";
    this.needsPositionStickyOnElement = false;
  }
};
_MatTable.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatTable_BaseFactory;
  return function MatTable_Factory(t) {
    return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(t || _MatTable);
  };
})();
_MatTable.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    {
      provide: CdkTable,
      useExisting: _MatTable
    },
    {
      provide: CDK_TABLE,
      useExisting: _MatTable
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c12,
  decls: 5,
  vars: 2,
  consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
      \u0275\u0275template(2, MatTable_Conditional_2_Template, 1, 0)(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx._isServer ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(3, ctx._isNativeHtmlTable ? 3 : 4);
    }
  },
  dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
  encapsulation: 2
});
var MatTable = _MatTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"]
    }]
  }], null, null);
})();
var _MatCellDef = class _MatCellDef extends CdkCellDef {
};
_MatCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatCellDef_BaseFactory;
  return function MatCellDef_Factory(t) {
    return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(t || _MatCellDef);
  };
})();
_MatCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCellDef,
  selectors: [["", "matCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkCellDef,
    useExisting: _MatCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatCellDef = _MatCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
};
_MatHeaderCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderCellDef_BaseFactory;
  return function MatHeaderCellDef_Factory(t) {
    return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(t || _MatHeaderCellDef);
  };
})();
_MatHeaderCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderCellDef,
    useExisting: _MatHeaderCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatHeaderCellDef = _MatHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
};
_MatFooterCellDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterCellDef_BaseFactory;
  return function MatFooterCellDef_Factory(t) {
    return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(t || _MatFooterCellDef);
  };
})();
_MatFooterCellDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterCellDef,
    useExisting: _MatFooterCellDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatFooterCellDef = _MatFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
};
_MatColumnDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatColumnDef_BaseFactory;
  return function MatColumnDef_Factory(t) {
    return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(t || _MatColumnDef);
  };
})();
_MatColumnDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    name: [InputFlags.None, "matColumnDef", "name"]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkColumnDef,
    useExisting: _MatColumnDef
  }, {
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _MatColumnDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatColumnDef = _MatColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }],
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var _MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
};
_MatHeaderCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderCell_BaseFactory;
  return function MatHeaderCell_Factory(t) {
    return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(t || _MatHeaderCell);
  };
})();
_MatHeaderCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatHeaderCell = _MatHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterCell = class _MatFooterCell extends CdkFooterCell {
};
_MatFooterCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterCell_BaseFactory;
  return function MatFooterCell_Factory(t) {
    return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(t || _MatFooterCell);
  };
})();
_MatFooterCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatFooterCell = _MatFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCell = class _MatCell extends CdkCell {
};
_MatCell.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatCell_BaseFactory;
  return function MatCell_Factory(t) {
    return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(t || _MatCell);
  };
})();
_MatCell.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatCell = _MatCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
};
_MatHeaderRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderRowDef_BaseFactory;
  return function MatHeaderRowDef_Factory(t) {
    return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(t || _MatHeaderRowDef);
  };
})();
_MatHeaderRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matHeaderRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "matHeaderRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderRowDef,
    useExisting: _MatHeaderRowDef
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
});
var MatHeaderRowDef = _MatHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
};
_MatFooterRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterRowDef_BaseFactory;
  return function MatFooterRowDef_Factory(t) {
    return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(t || _MatFooterRowDef);
  };
})();
_MatFooterRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matFooterRowDef", "columns"],
    sticky: [InputFlags.HasDecoratorInputTransform, "matFooterRowDefSticky", "sticky", booleanAttribute]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterRowDef,
    useExisting: _MatFooterRowDef
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
});
var MatFooterRowDef = _MatFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatRowDef = class _MatRowDef extends CdkRowDef {
};
_MatRowDef.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatRowDef_BaseFactory;
  return function MatRowDef_Factory(t) {
    return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(t || _MatRowDef);
  };
})();
_MatRowDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: [InputFlags.None, "matRowDefColumns", "columns"],
    when: [InputFlags.None, "matRowDefWhen", "when"]
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkRowDef,
    useExisting: _MatRowDef
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatRowDef = _MatRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
};
_MatHeaderRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatHeaderRow_BaseFactory;
  return function MatHeaderRow_Factory(t) {
    return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(t || _MatHeaderRow);
  };
})();
_MatHeaderRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
  exportAs: ["matHeaderRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkHeaderRow,
    useExisting: _MatHeaderRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatHeaderRow = _MatHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatFooterRow = class _MatFooterRow extends CdkFooterRow {
};
_MatFooterRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatFooterRow_BaseFactory;
  return function MatFooterRow_Factory(t) {
    return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(t || _MatFooterRow);
  };
})();
_MatFooterRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
  exportAs: ["matFooterRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkFooterRow,
    useExisting: _MatFooterRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatFooterRow = _MatFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatRow = class _MatRow extends CdkRow {
};
_MatRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatRow_BaseFactory;
  return function MatRow_Factory(t) {
    return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(t || _MatRow);
  };
})();
_MatRow.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
  exportAs: ["matRow"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkRow,
    useExisting: _MatRow
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatRow = _MatRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var _MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = "mat-mdc-no-data-row";
  }
};
_MatNoDataRow.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatNoDataRow_BaseFactory;
  return function MatNoDataRow_Factory(t) {
    return (\u0275MatNoDataRow_BaseFactory || (\u0275MatNoDataRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatNoDataRow)))(t || _MatNoDataRow);
  };
})();
_MatNoDataRow.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkNoDataRow,
    useExisting: _MatNoDataRow
  }]), \u0275\u0275InheritDefinitionFeature]
});
var MatNoDataRow = _MatNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatTextColumn = class _MatTextColumn extends CdkTextColumn {
};
_MatTextColumn.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatTextColumn_BaseFactory;
  return function MatTextColumn_Factory(t) {
    return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(t || _MatTextColumn);
  };
})();
_MatTextColumn.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTextColumn,
  selectors: [["mat-text-column"]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      \u0275\u0275elementContainerEnd();
    }
  },
  dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
  encapsulation: 2
});
var MatTextColumn = _MatTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var _MatTableModule = class _MatTableModule {
};
_MatTableModule.\u0275fac = function MatTableModule_Factory(t) {
  return new (t || _MatTableModule)();
};
_MatTableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatTableModule
});
_MatTableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, CdkTableModule, MatCommonModule]
});
var MatTableModule = _MatTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();

// src/app/admin/orders/orders.component.ts
function OrdersComponent_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "From");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", order_r1.address.firstName, " ", order_r1.address.firstName, " ");
  }
}
function OrdersComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Count");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r2.items.length);
  }
}
function OrdersComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Address");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r3.address.address);
  }
}
function OrdersComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r4.items.length);
  }
}
function OrdersComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r5.items.length);
  }
}
function OrdersComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 12);
  }
}
function OrdersComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 13);
  }
}
var _OrdersComponent = class _OrdersComponent {
  constructor() {
    this.columns = ["from", "count", "address", "status", "action"];
    this.orders = toSignal(inject(OrdersService).getOrders(), {
      initialValue: []
    });
  }
};
_OrdersComponent.\u0275fac = function OrdersComponent_Factory(t) {
  return new (t || _OrdersComponent)();
};
_OrdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 3, consts: [["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "from"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "count"], ["matColumnDef", "address"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function OrdersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Manage orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "table", 0);
    \u0275\u0275elementContainerStart(3, 1);
    \u0275\u0275template(4, OrdersComponent_th_4_Template, 2, 0, "th", 2)(5, OrdersComponent_td_5_Template, 2, 2, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 4);
    \u0275\u0275template(7, OrdersComponent_th_7_Template, 2, 0, "th", 2)(8, OrdersComponent_td_8_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 5);
    \u0275\u0275template(10, OrdersComponent_th_10_Template, 2, 0, "th", 2)(11, OrdersComponent_td_11_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 6);
    \u0275\u0275template(13, OrdersComponent_th_13_Template, 2, 0, "th", 2)(14, OrdersComponent_td_14_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 7);
    \u0275\u0275template(16, OrdersComponent_th_16_Template, 2, 0, "th", 2)(17, OrdersComponent_td_17_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(18, OrdersComponent_tr_18_Template, 1, 0, "tr", 8)(19, OrdersComponent_tr_19_Template, 1, 0, "tr", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx.orders());
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx.columns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.columns);
  }
}, dependencies: [
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow
], styles: ["\n\n/*# sourceMappingURL=orders.component.css.map */"], changeDetection: 0 });
var OrdersComponent = _OrdersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent" });
})();

// src/app/admin/manage-products/manage-products.service.ts
var _ManageProductsService = class _ManageProductsService extends ApiService {
  uploadProductsCSV(file) {
    if (!this.endpointEnabled("import")) {
      console.warn('Endpoint "import" is disabled. To enable change your environment.ts config');
      return EMPTY;
    }
    return this.getPreSignedUrl(file.name).pipe(switchMap((url) => this.http.put(url, file, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "text/csv"
      }
    })));
  }
  getPreSignedUrl(fileName) {
    const url = this.getUrl("import", "import");
    return this.http.get(url, {
      params: {
        name: fileName
      }
    });
  }
};
_ManageProductsService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ManageProductsService_BaseFactory;
  return function ManageProductsService_Factory(t) {
    return (\u0275ManageProductsService_BaseFactory || (\u0275ManageProductsService_BaseFactory = \u0275\u0275getInheritedFactory(_ManageProductsService)))(t || _ManageProductsService);
  };
})();
_ManageProductsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManageProductsService, factory: _ManageProductsService.\u0275fac });
var ManageProductsService = _ManageProductsService;

// src/app/shared/file-picker/file-picker.component.ts
function FilePickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function FilePickerComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.uploadClick.emit());
    });
    \u0275\u0275text(3, " Upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function FilePickerComponent_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeFile());
    });
    \u0275\u0275text(5, "Delete");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Selected file: ", ctx.name, "");
  }
}
function FilePickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Select file to upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function FilePickerComponent_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const fileInput_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275text(3, " Import Products CSV ");
    \u0275\u0275elementEnd();
  }
}
var _FilePickerComponent = class _FilePickerComponent {
  constructor() {
    this.uploadClick = output();
    this.file = model();
  }
  selectFile(files) {
    if (!files?.length) {
      this.removeFile();
      return;
    }
    const file = files.item(0);
    if (!["text/csv", "application/vnd.ms-excel"].includes(file.type)) {
      this.removeFile();
      return;
    }
    this.file.set(file);
  }
  removeFile() {
    this.file.set(void 0);
  }
};
_FilePickerComponent.\u0275fac = function FilePickerComponent_Factory(t) {
  return new (t || _FilePickerComponent)();
};
_FilePickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilePickerComponent, selectors: [["app-file-picker"]], inputs: { file: [InputFlags.SignalBased, "file"] }, outputs: { uploadClick: "uploadClick", file: "fileChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["fileInput", ""], ["accept", "text/csv", "type", "file", 1, "d-none", 3, "change"], [1, "h5", "mb-0", "text-muted", "d-flex", "align-items-center"], [1, "mr-3"], ["color", "primary", "mat-flat-button", "", 1, "mr-1", 3, "click"], ["color", "warn", "mat-flat-button", "", 3, "click"], ["color", "accent", "mat-flat-button", "", 3, "click"]], template: function FilePickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 1, 0);
    \u0275\u0275listener("change", function FilePickerComponent_Template_input_change_0_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx.selectFile(fileInput_r2.files));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, FilePickerComponent_Conditional_3_Template, 6, 1)(4, FilePickerComponent_Conditional_4_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, (tmp_1_0 = ctx.file()) ? 3 : 4, tmp_1_0);
  }
}, dependencies: [MatButton], styles: ["\n\n/*# sourceMappingURL=file-picker.component.css.map */"] });
var FilePickerComponent = _FilePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilePickerComponent, { className: "FilePickerComponent" });
})();

// src/app/admin/manage-products/manage-products.component.ts
function ManageProductsComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r1.title, " ");
  }
}
function ManageProductsComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.description);
  }
}
function ManageProductsComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Price");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind2(2, 1, product_r3.price, "1.2-2")), " ");
  }
}
function ManageProductsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Count");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.count);
  }
}
function ManageProductsComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function ManageProductsComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 14)(1, "button", 15);
    \u0275\u0275text(2, " manage ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275text(4, " delete ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", product_r5.id);
  }
}
function ManageProductsComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 17);
  }
}
function ManageProductsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 18);
  }
}
var _ManageProductsComponent = class _ManageProductsComponent {
  constructor() {
    this.productsService = inject(ProductsService);
    this.manageProductsService = inject(ManageProductsService);
    this.columns = ["from", "description", "price", "count", "action"];
    this.selectedFile = signal(void 0);
    this.products = toSignal(this.productsService.getProducts(), {
      initialValue: []
    });
  }
  onUploadCSV() {
    const selectedFile = this.selectedFile();
    if (!selectedFile) {
      return;
    }
    this.manageProductsService.uploadProductsCSV(selectedFile).subscribe(() => {
      this.selectedFile.set(void 0);
    });
  }
};
_ManageProductsComponent.\u0275fac = function ManageProductsComponent_Factory(t) {
  return new (t || _ManageProductsComponent)();
};
_ManageProductsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageProductsComponent, selectors: [["app-manage-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 4, consts: [[1, "d-flex"], [1, "mr-2", 3, "fileChange", "uploadClick", "file"], ["color", "primary", "mat-flat-button", "", "routerLink", "new", 1, "text-uppercase"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "from"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "price"], ["matColumnDef", "count"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["color", "primary", "mat-flat-button", "", 1, "text-uppercase", "mr-2", 3, "routerLink"], ["color", "warn", "mat-flat-button", "", 1, "text-uppercase"], ["mat-header-row", ""], ["mat-row", ""]], template: function ManageProductsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Manage products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 0)(3, "app-file-picker", 1);
    \u0275\u0275twoWayListener("fileChange", function ManageProductsComponent_Template_app_file_picker_fileChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFile, $event) || (ctx.selectedFile = $event);
      return $event;
    });
    \u0275\u0275listener("uploadClick", function ManageProductsComponent_Template_app_file_picker_uploadClick_3_listener() {
      return ctx.onUploadCSV();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275text(5, " create product ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 3);
    \u0275\u0275elementContainerStart(7, 4);
    \u0275\u0275template(8, ManageProductsComponent_th_8_Template, 2, 0, "th", 5)(9, ManageProductsComponent_td_9_Template, 2, 1, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 7);
    \u0275\u0275template(11, ManageProductsComponent_th_11_Template, 2, 0, "th", 5)(12, ManageProductsComponent_td_12_Template, 2, 1, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 8);
    \u0275\u0275template(14, ManageProductsComponent_th_14_Template, 2, 0, "th", 5)(15, ManageProductsComponent_td_15_Template, 4, 6, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 9);
    \u0275\u0275template(17, ManageProductsComponent_th_17_Template, 2, 0, "th", 5)(18, ManageProductsComponent_td_18_Template, 2, 1, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 10);
    \u0275\u0275template(20, ManageProductsComponent_th_20_Template, 2, 0, "th", 5)(21, ManageProductsComponent_td_21_Template, 5, 1, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, ManageProductsComponent_tr_22_Template, 1, 0, "tr", 11)(23, ManageProductsComponent_tr_23_Template, 1, 0, "tr", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("file", ctx.selectedFile);
    \u0275\u0275advance(3);
    \u0275\u0275property("dataSource", ctx.products());
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx.columns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.columns);
  }
}, dependencies: [
  FilePickerComponent,
  MatButton,
  RouterLink,
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow,
  DecimalPipe,
  CurrencyPipe
], styles: ["\n\n/*# sourceMappingURL=manage-products.component.css.map */"], changeDetection: 0 });
var ManageProductsComponent = _ManageProductsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageProductsComponent, { className: "ManageProductsComponent" });
})();

// src/app/admin/edit-product/edit-product.component.ts
function EditProductComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Product title is required ");
    \u0275\u0275elementEnd();
  }
}
function EditProductComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Product description is required ");
    \u0275\u0275elementEnd();
  }
}
function EditProductComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Product price is required ");
    \u0275\u0275elementEnd();
  }
}
function EditProductComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Product count is required ");
    \u0275\u0275elementEnd();
  }
}
function EditProductComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card")(1, "h1", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-card-content")(4, "form", 1)(5, "div", 2)(6, "mat-form-field", 3)(7, "mat-label");
    \u0275\u0275text(8, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 4);
    \u0275\u0275template(10, EditProductComponent_Conditional_0_Conditional_10_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 2)(12, "mat-form-field", 3)(13, "mat-label");
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 5);
    \u0275\u0275template(16, EditProductComponent_Conditional_0_Conditional_16_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 6)(18, "mat-form-field", 3)(19, "mat-label");
    \u0275\u0275text(20, "Price ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 7);
    \u0275\u0275template(22, EditProductComponent_Conditional_0_Conditional_22_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 6)(24, "mat-form-field", 3)(25, "mat-label");
    \u0275\u0275text(26, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 8);
    \u0275\u0275template(28, EditProductComponent_Conditional_0_Conditional_28_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "mat-card-actions")(30, "button", 9);
    \u0275\u0275text(31, " cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 10);
    \u0275\u0275listener("click", function EditProductComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProduct());
    });
    \u0275\u0275text(33, " save product ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.productId() ? "Edit product" : "Create new product", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(10, ctx_r1.titleCtrl.touched && ctx_r1.titleCtrl.hasError("required") ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(16, ctx_r1.descriptionCtrl.touched && ctx_r1.descriptionCtrl.hasError("required") ? 16 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(22, ctx_r1.priceCtrl.touched && ctx_r1.priceCtrl.hasError("required") ? 22 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(28, ctx_r1.countCtrl.touched && ctx_r1.countCtrl.hasError("required") ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.requestInProgress);
  }
}
function EditProductComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 40);
  }
}
var _destroyRef;
var _EditProductComponent = class _EditProductComponent {
  constructor(activatedRoute, fb, notificationService, productsService, router) {
    __privateAdd(this, _destroyRef, void 0);
    this.activatedRoute = activatedRoute;
    this.fb = fb;
    this.notificationService = notificationService;
    this.productsService = productsService;
    this.router = router;
    __privateSet(this, _destroyRef, inject(DestroyRef));
    this.productId = input();
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      count: ["", Validators.required]
    });
    this.requestInProgress = false;
    this.loaded = signal(false);
  }
  get countCtrl() {
    return this.form.get("count");
  }
  get descriptionCtrl() {
    return this.form.get("description");
  }
  get priceCtrl() {
    return this.form.get("price");
  }
  get titleCtrl() {
    return this.form.get("title");
  }
  ngOnInit() {
    const productId = this.productId();
    if (!productId) {
      this.loaded.set(true);
      return;
    }
    this.productsService.getProductById(productId).pipe(finalize(() => this.loaded.set(true)), filter(Boolean), takeUntilDestroyed(__privateGet(this, _destroyRef))).subscribe((product) => {
      this.form.patchValue(product);
    });
  }
  editProduct() {
    const product = this.form.value;
    if (!product) {
      return;
    }
    const productId = this.productId();
    const observable = productId ? this.productsService.editProduct(productId, product) : this.productsService.createNewProduct(product);
    this.requestInProgress = true;
    observable.subscribe({
      next: () => this.router.navigate(["../"], { relativeTo: this.activatedRoute }),
      error: (error) => {
        console.warn(error);
        this.requestInProgress = false;
        this.notificationService.showError(`Failed to ${this.productId() ? "edit" : "create"} product`);
      }
    });
  }
};
_destroyRef = new WeakMap();
_EditProductComponent.\u0275fac = function EditProductComponent_Factory(t) {
  return new (t || _EditProductComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ProductsService), \u0275\u0275directiveInject(Router));
};
_EditProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProductComponent, selectors: [["app-edit-product"]], inputs: { productId: [InputFlags.SignalBased, "productId"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["mat-card-title", "", 1, "text-center", "pt-4"], [1, "row", 3, "formGroup"], [1, "col-12"], [1, "w-100"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "description"], [1, "col", "col-md-6"], ["type", "number", "matInput", "", "formControlName", "price"], ["type", "number", "matInput", "", "formControlName", "count"], ["mat-flat-button", "", "routerLink", "..", 1, "text-uppercase", "mr-2"], ["color", "primary", "mat-flat-button", "", 1, "text-uppercase", 3, "click", "disabled"], [1, "py-5"], [1, "mx-auto", 3, "diameter"]], template: function EditProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditProductComponent_Conditional_0_Template, 34, 7, "mat-card")(1, EditProductComponent_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(0, ctx.loaded() ? 0 : 1);
  }
}, dependencies: [
  MatCard,
  MatCardTitle,
  MatCardContent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatFormField,
  MatLabel,
  MatInput,
  MatError,
  MatCardActions,
  MatButton,
  RouterLink,
  MatProgressSpinner
], styles: ["\n\n/*# sourceMappingURL=edit-product.component.css.map */"], changeDetection: 0 });
var EditProductComponent = _EditProductComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProductComponent, { className: "EditProductComponent" });
})();

// src/app/admin/admin-routes.ts
var admin_routes_default = [
  {
    path: "",
    children: [
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "products",
        component: ManageProductsComponent
      },
      {
        path: "products/new",
        component: EditProductComponent
      },
      {
        path: "products/:productId",
        component: EditProductComponent
      }
    ],
    providers: [OrdersService, ManageProductsService]
  }
];
export {
  admin_routes_default as default
};
//# sourceMappingURL=admin-routes-NTROFOVX.js.map

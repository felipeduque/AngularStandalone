import {
  ChevronDownIcon,
  ChevronUpIcon
} from "./chunk-FPJRS3BH.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-O6PSYUKC.js";
import {
  BaseComponent
} from "./chunk-WZYG2LBG.js";
import "./chunk-7WJ5UGCX.js";
import {
  BaseStyle
} from "./chunk-GLJU25L3.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-L3QLBC37.js";
import {
  hasClass
} from "./chunk-2XUDQHIN.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-Q47BK6CH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6AVS6SYJ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-organizationchart.mjs
var _c0 = ["pOrganizationChartNode", ""];
var _c1 = (a0, a1) => ({
  "p-organizationchart-node": true,
  "p-organizationchart-node-selectable": a0,
  "p-organizationchart-node-selected": a1
});
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = (a0) => ({
  "p-organizationchart-connector-top": a0
});
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.node.label);
  }
}
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chart.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.node));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-organizationchart-node-toggle-button-icon");
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-organizationchart-node-toggle-button-icon");
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronDownIcon_1_Template, 1, 2, "ChevronDownIcon", 10)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_ChevronUpIcon_2_Template, 1, 2, "ChevronUpIcon", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.node.expanded);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("data-pc-section", "nodeTogglerIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c2, ctx_r1.node.expanded));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.enter", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.space", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_space_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleNode($event, ctx_r1.node));
    });
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template, 3, 2, "ng-container", 0)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template, 2, 5, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "nodeToggler");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chart.togglerIconTemplate && !ctx_r1.chart._togglerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_Template, 3, 3, "a", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.leaf);
  }
}
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "div", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineCell")("colspan", ctx_r1.colspan);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineDown");
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1, " ");
    ɵɵelementEnd();
    ɵɵelementStart(2, "td", 15);
    ɵɵtext(3, " ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c3, !first_r4));
    ɵɵattribute("data-pc-section", "lineLeft");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c3, !last_r5));
    ɵɵattribute("data-pc-section", "lineRight");
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 8, "ng-template", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.node.children);
  }
}
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 16);
    ɵɵelement(1, "table", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "nodeCell");
    ɵɵadvance();
    ɵɵproperty("node", child_r6)("collapsible", ctx_r1.node.children && ctx_r1.node.children.length > 0 && ctx_r1.collapsible);
  }
}
function OrganizationChartNode_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody")(1, "tr")(2, "td")(3, "div", 1);
    ɵɵlistener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNodeClick($event, ctx_r1.node));
    });
    ɵɵtemplate(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 0)(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 0)(6, OrganizationChartNode_tbody_0_ng_container_6_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "tr", 2)(8, "td");
    ɵɵelement(9, "div", 3);
    ɵɵelementEnd()();
    ɵɵelementStart(10, "tr", 2);
    ɵɵtemplate(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 3, "ng-container", 0)(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelementStart(13, "tr", 4);
    ɵɵtemplate(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 3, "td", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "body");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "row");
    ɵɵadvance();
    ɵɵattribute("colspan", ctx_r1.colspan)("data-pc-section", "cell");
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.node.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(26, _c1, ctx_r1.chart.selectionMode && ctx_r1.node.selectable !== false, ctx_r1.isSelected()));
    ɵɵattribute("data-pc-section", "node");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.collapsible);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("@childState", "in");
    ɵɵattribute("data-pc-section", "lines");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineCell")("colspan", ctx_r1.colspan);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "lineDown");
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("@childState", "in");
    ɵɵattribute("data-pc-section", "lines");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.children && ctx_r1.node.children.length === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.node.children && ctx_r1.node.children.length > 1);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("@childState", "in");
    ɵɵattribute("data-pc-section", "nodes");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.node.children);
  }
}
var _c4 = ["togglericon"];
var _c5 = (a0) => ({
  "p-organizationchart p-component": true,
  "p-organizationchart-preservespace": a0
});
function OrganizationChart_table_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "table", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("collapsible", ctx_r0.collapsible)("node", ctx_r0.root);
  }
}
var theme = ({
  dt
}) => `
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 ${dt("organizationchart.gutter")};
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid ${dt("organizationchart.node.border.color")};
    background: ${dt("organizationchart.node.background")};
    color: ${dt("organizationchart.node.color")};
    padding: ${dt("organizationchart.node.padding")};
    border-radius: ${dt("organizationchart.node.border.radius")};
    transition: background ${dt("organizationchart.transition.duration")}, border-color ${dt("organizationchart.transition.duration")}, color ${dt("organizationchart.transition.duration")}, box-shadow ${dt("organizationchart.transition.duration")};
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: ${dt("organizationchart.node.toggleable.padding")};
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
    background: ${dt("organizationchart.node.hover.background")};
    color: ${dt("organizationchart.node.hover.color")};
}

.p-organizationchart-node-selected {
    background: ${dt("organizationchart.node.selected.background")};
    color: ${dt("organizationchart.node.selected.color")};
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    inset-block-end: calc(-1 * calc(${dt("organizationchart.node.toggle.button.size")} / 2));
    margin-inline-start: calc(-1 * calc(${dt("organizationchart.node.toggle.button.size")} / 2));
    z-index: 2;
    inset-inline-start: 50%;
    user-select: none;
    cursor: pointer;
    width: ${dt("organizationchart.node.toggle.button.size")};
    height: ${dt("organizationchart.node.toggle.button.size")};
    text-decoration: none;
    background: ${dt("organizationchart.node.toggle.button.background")};
    color: ${dt("organizationchart.node.toggle.button.color")};
    border-radius: ${dt("organizationchart.node.toggle.button.border.radius")};
    border: 1px solid ${dt("organizationchart.node.toggle.button.border.color")};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background ${dt("organizationchart.transition.duration")}, color ${dt("organizationchart.transition.duration")}, border-color ${dt("organizationchart.transition.duration")}, outline-color ${dt("organizationchart.transition.duration")}, box-shadow ${dt("organizationchart.transition.duration")};
}

.p-organizationchart-node-toggle-button:hover {
    background: ${dt("organizationchart.node.toggle.button.hover.background")};
    color: ${dt("organizationchart.node.toggle.button.hover.color")};
}

.p-organizationchart-node-toggle-button:focus-visible {
    box-shadow: ${dt("breadcrumb.item.focus.ring.shadow")};
    outline: ${dt("breadcrumb.item.focus.ring.width")} ${dt("breadcrumb.item.focus.ring.style")} ${dt("breadcrumb.item.focus.ring.color")};
    outline-offset: ${dt("breadcrumb.item.focus.ring.offset")};
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    inset-block-start: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: ${dt("organizationchart.connector.height")};
    width: 1px;
    background: ${dt("organizationchart.connector.color")};
}

.p-organizationchart-connector-right {
    border-radius: 0;
}

.p-organizationchart-connector-left {
    border-radius: 0;
    border-inline-end: 1px solid ${dt("organizationchart.connector.color")};
}

.p-organizationchart-connector-top {
    border-block-start: 1px solid ${dt("organizationchart.connector.color")};
}

.p-organizationchart-node-selectable {
    cursor: pointer;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
    border-inline-end: 0 none;
}

.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
    border-start-end-radius: ${dt("organizationchart.connector.border.radius")};
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-inline-start: 1px solid ${dt("organizationchart.connector.color")};
    border-start-start-radius: ${dt("organizationchart.connector.border.radius")};
}
`;
var classes = {
  root: "p-organizationchart p-component",
  table: "p-organizationchart-table",
  node: ({
    instance
  }) => ["p-organizationchart-node", {
    "p-organizationchart-node-selectable": instance.selectable,
    "p-organizationchart-node-selected": instance.selected
  }],
  nodeToggleButton: "p-organizationchart-node-toggle-button",
  nodeToggleButtonIcon: "p-organizationchart-node-toggle-button-icon",
  connectors: "p-organizationchart-connectors",
  connectorDown: "p-organizationchart-connector-down",
  connectorLeft: ({
    index
  }) => ["p-organizationchart-connector-left", {
    "p-organizationchart-connector-top": !(index === 0)
  }],
  connectorRight: ({
    props,
    index
  }) => ["p-organizationchart-connector-right", {
    "p-organizationchart-connector-top": !(index === props.node.children.length - 1)
  }],
  nodeChildren: "p-organizationchart-node-children"
};
var OrganizationChartStyle = class _OrganizationChartStyle extends BaseStyle {
  name = "organizationchart";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵOrganizationChartStyle_BaseFactory;
    return function OrganizationChartStyle_Factory(__ngFactoryType__) {
      return (ɵOrganizationChartStyle_BaseFactory || (ɵOrganizationChartStyle_BaseFactory = ɵɵgetInheritedFactory(_OrganizationChartStyle)))(__ngFactoryType__ || _OrganizationChartStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _OrganizationChartStyle,
    factory: _OrganizationChartStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartStyle, [{
    type: Injectable
  }], null, null);
})();
var OrganizationChartClasses;
(function(OrganizationChartClasses2) {
  OrganizationChartClasses2["root"] = "p-organizationchart";
  OrganizationChartClasses2["table"] = "p-organizationchart-table";
  OrganizationChartClasses2["node"] = "p-organizationchart-node";
  OrganizationChartClasses2["nodeToggleButton"] = "p-organizationchart-node-toggle-button";
  OrganizationChartClasses2["nodeToggleButtonIcon"] = "p-organizationchart-node-toggle-button-icon";
  OrganizationChartClasses2["connectors"] = "p-organizationchart-connectors";
  OrganizationChartClasses2["connectorDown"] = "p-organizationchart-connector-down";
  OrganizationChartClasses2["connectorLeft"] = "p-organizationchart-connector-left";
  OrganizationChartClasses2["connectorRight"] = "p-organizationchart-connector-right";
  OrganizationChartClasses2["nodeChildren"] = "p-organizationchart-node-children";
})(OrganizationChartClasses || (OrganizationChartClasses = {}));
var OrganizationChartNode = class _OrganizationChartNode {
  cd;
  node;
  root;
  first;
  last;
  collapsible;
  chart;
  subscription;
  constructor(chart, cd) {
    this.cd = cd;
    this.chart = chart;
    this.subscription = this.chart.selectionSource$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  get leaf() {
    if (this.node) {
      return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
  }
  get colspan() {
    if (this.node) {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }
  getChildStyle(node) {
    return {
      visibility: !this.leaf && node.expanded ? "inherit" : "hidden"
    };
  }
  onNodeClick(event, node) {
    this.chart.onNodeClick(event, node);
  }
  toggleNode(event, node) {
    node.expanded = !node.expanded;
    if (node.expanded) this.chart.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
    else this.chart.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
    event.preventDefault();
  }
  isSelected() {
    return this.chart.isSelected(this.node);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static ɵfac = function OrganizationChartNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartNode)(ɵɵdirectiveInject(forwardRef(() => OrganizationChart)), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OrganizationChartNode,
    selectors: [["", "pOrganizationChartNode", ""]],
    inputs: {
      node: "node",
      root: [2, "root", "root", booleanAttribute],
      first: [2, "first", "first", booleanAttribute],
      last: [2, "last", "last", booleanAttribute],
      collapsible: [2, "collapsible", "collapsible", booleanAttribute]
    },
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "click", "ngClass"], [1, "p-organizationchart-connectors", 3, "ngStyle"], [1, "p-organizationchart-connector-down"], [1, "p-organizationchart-node-children", 3, "ngStyle"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "class", "p-organizationchart-node-toggle-button", 3, "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tabindex", "0", 1, "p-organizationchart-node-toggle-button", 3, "click", "keydown.enter", "keydown.space"], ["class", "p-organizationchart-node-toggle-button-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-organizationchart-node-toggle-button-icon"], ["ngFor", "", 3, "ngForOf"], [1, "p-organizationchart-connector-left", 3, "ngClass"], [1, "p-organizationchart-connector-right", 3, "ngClass"], ["colspan", "2"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node", "collapsible"]],
    template: function OrganizationChartNode_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, OrganizationChartNode_tbody_0_Template, 15, 29, "tbody", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.node);
      }
    },
    dependencies: [_OrganizationChartNode, CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronDownIcon, ChevronUpIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("childState", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0
      }), animate(150)]), transition("* => void", [animate(150, style({
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartNode, [{
    type: Component,
    args: [{
      selector: "[pOrganizationChartNode]",
      standalone: true,
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule],
      template: `
        <tbody *ngIf="node" [attr.data-pc-section]="'body'">
            <tr [attr.data-pc-section]="'row'">
                <td [attr.colspan]="colspan" [attr.data-pc-section]="'cell'">
                    <div
                        [class]="node.styleClass"
                        [ngClass]="{
                            'p-organizationchart-node': true,
                            'p-organizationchart-node-selectable': chart.selectionMode && node.selectable !== false,
                            'p-organizationchart-node-selected': isSelected()
                        }"
                        (click)="onNodeClick($event, node)"
                        [attr.data-pc-section]="'node'"
                    >
                        <div *ngIf="!chart.getTemplateForNode(node)">{{ node.label }}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </div>
                        <ng-container *ngIf="collapsible">
                            <a
                                *ngIf="!leaf"
                                tabindex="0"
                                class="p-organizationchart-node-toggle-button"
                                (click)="toggleNode($event, node)"
                                (keydown.enter)="toggleNode($event, node)"
                                (keydown.space)="toggleNode($event, node)"
                                [attr.data-pc-section]="'nodeToggler'"
                            >
                                <ng-container *ngIf="!chart.togglerIconTemplate && !chart._togglerIconTemplate">
                                    <ChevronDownIcon *ngIf="node.expanded" [styleClass]="'p-organizationchart-node-toggle-button-icon'" [attr.data-pc-section]="'nodeTogglerIcon'" />
                                    <ChevronUpIcon *ngIf="!node.expanded" [styleClass]="'p-organizationchart-node-toggle-button-icon'" [attr.data-pc-section]="'nodeTogglerIcon'" />
                                </ng-container>
                                <span class="p-organizationchart-node-toggle-button-icon" *ngIf="chart.togglerIconTemplate || chart._togglerIconTemplate" [attr.data-pc-section]="'nodeTogglerIcon'">
                                    <ng-template *ngTemplateOutlet="chart.togglerIconTemplate || chart._togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                </span>
                            </a>
                        </ng-container>
                    </div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" class="p-organizationchart-connectors" [@childState]="'in'" [attr.data-pc-section]="'lines'">
                <td [attr.data-pc-section]="'lineCell'" [attr.colspan]="colspan">
                    <div [attr.data-pc-section]="'lineDown'" class="p-organizationchart-connector-down"></div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" class="p-organizationchart-connectors" [@childState]="'in'" [attr.data-pc-section]="'lines'">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [attr.data-pc-section]="'lineCell'" [attr.colspan]="colspan">
                        <div [attr.data-pc-section]="'lineDown'" class="p-organizationchart-connector-down"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                        <td [attr.data-pc-section]="'lineLeft'" class="p-organizationchart-connector-left" [ngClass]="{ 'p-organizationchart-connector-top': !first }">&nbsp;</td>
                        <td [attr.data-pc-section]="'lineRight'" class="p-organizationchart-connector-right" [ngClass]="{ 'p-organizationchart-connector-top': !last }">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" class="p-organizationchart-node-children" [@childState]="'in'" [attr.data-pc-section]="'nodes'">
                <td *ngFor="let child of node.children" colspan="2" [attr.data-pc-section]="'nodeCell'">
                    <table class="p-organizationchart-table" pOrganizationChartNode [node]="child" [collapsible]="node.children && node.children.length > 0 && collapsible"></table>
                </td>
            </tr>
        </tbody>
    `,
      animations: [trigger("childState", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0
      }), animate(150)]), transition("* => void", [animate(150, style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default
    }]
  }], () => [{
    type: OrganizationChart,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => OrganizationChart)]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    node: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    first: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    last: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var OrganizationChart = class _OrganizationChart extends BaseComponent {
  el;
  cd;
  /**
   * An array of nested TreeNodes.
   * @group Props
   */
  value;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Whether the nodes can be expanded or toggled.
   * @group Props
   */
  collapsible;
  /**
   * Whether the space allocated by a node is preserved when hidden.
   * @group Props
   */
  preserveSpace = true;
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
    if (this.initialized) this.selectionSource.next(null);
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selected value.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {OrganizationChartNodeSelectEvent} event - custom node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {OrganizationChartNodeUnSelectEvent} event - custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {OrganizationChartNodeExpandEvent} event - custom node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {OrganizationChartNodeCollapseEvent} event - custom node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  templates;
  togglerIconTemplate;
  templateMap;
  _togglerIconTemplate;
  selectionSource = new Subject();
  _selection;
  initialized;
  selectionSource$ = this.selectionSource.asObservable();
  _componentStyle = inject(OrganizationChartStyle);
  constructor(el, cd) {
    super();
    this.el = el;
    this.cd = cd;
  }
  get root() {
    return this.value && this.value.length ? this.value[0] : null;
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      if (item.getType() === "togglericon") {
        this._togglerIconTemplate = item.template;
      } else {
        this.templateMap[item.getType()] = item.template;
      }
    });
    this.initialized = true;
  }
  getTemplateForNode(node) {
    if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap["default"];
    else return null;
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (eventTarget.className && (hasClass(eventTarget, "p-organizationchart-node-toggle-button") || hasClass(eventTarget, "p-organizationchart-node-toggle-button-icon"))) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.selectionMode === "single") {
        if (selected) {
          this.selection = null;
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = node;
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else if (this.selectionMode === "multiple") {
        if (selected) {
          this.selection = this.selection.filter((val, i) => i != index);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = [...this.selection || [], node];
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      }
      this.selectionChange.emit(this.selection);
      this.selectionSource.next(null);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.selectionMode === "single") {
        index = this.selection == node ? 0 : -1;
      } else if (this.selectionMode === "multiple") {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.selection[i] == node) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  static ɵfac = function OrganizationChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChart)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OrganizationChart,
    selectors: [["p-organizationChart"], ["p-organization-chart"], ["p-organizationchart"]],
    contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.togglerIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      value: "value",
      style: "style",
      styleClass: "styleClass",
      selectionMode: "selectionMode",
      collapsible: [2, "collapsible", "collapsible", booleanAttribute],
      preserveSpace: [2, "preserveSpace", "preserveSpace", booleanAttribute],
      selection: "selection"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse"
    },
    features: [ɵɵProvidersFeature([OrganizationChartStyle]), ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 8,
    consts: [[3, "ngStyle", "ngClass"], ["class", "p-organizationchart-table", "pOrganizationChartNode", "", 3, "collapsible", "node", 4, "ngIf"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "collapsible", "node"]],
    template: function OrganizationChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, OrganizationChart_table_1_Template, 1, 2, "table", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction1(6, _c5, ctx.preserveSpace));
        ɵɵattribute("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.root);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgStyle, OrganizationChartNode, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChart, [{
    type: Component,
    args: [{
      selector: "p-organizationChart, p-organization-chart, p-organizationchart",
      standalone: true,
      imports: [CommonModule, OrganizationChartNode, SharedModule],
      template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{ 'p-organizationchart p-component': true, 'p-organizationchart-preservespace': preserveSpace }" [attr.data-pc-section]="'root'">
            <table class="p-organizationchart-table" [collapsible]="collapsible" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OrganizationChartStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveSpace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selection: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }]
  });
})();
var OrganizationChartModule = class _OrganizationChartModule {
  static ɵfac = function OrganizationChartModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OrganizationChartModule,
    imports: [OrganizationChart, OrganizationChartNode, SharedModule],
    exports: [OrganizationChart, OrganizationChartNode, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [OrganizationChart, OrganizationChartNode, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartModule, [{
    type: NgModule,
    args: [{
      imports: [OrganizationChart, OrganizationChartNode, SharedModule],
      exports: [OrganizationChart, OrganizationChartNode, SharedModule]
    }]
  }], null, null);
})();
export {
  OrganizationChart,
  OrganizationChartClasses,
  OrganizationChartModule,
  OrganizationChartNode,
  OrganizationChartStyle
};
//# sourceMappingURL=primeng_organizationchart.js.map

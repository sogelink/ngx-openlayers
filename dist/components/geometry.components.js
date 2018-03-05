"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var feature_component_1 = require("./feature.component");
var GeometryLinestringComponent = (function () {
    function GeometryLinestringComponent(host) {
        this.host = host;
        this.componentType = 'geometry-linestring';
        // console.log('instancing aol-geometry-linestring');
    }
    GeometryLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.LineString([]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryLinestringComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryLinestringComponent;
}());
GeometryLinestringComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-geometry-linestring',
                template: "\n    <ng-content></ng-content>"
            },] },
];
/** @nocollapse */
GeometryLinestringComponent.ctorParameters = function () { return [
    { type: feature_component_1.FeatureComponent, },
]; };
exports.GeometryLinestringComponent = GeometryLinestringComponent;
var GeometryPointComponent = (function () {
    function GeometryPointComponent(host) {
        this.host = host;
        this.componentType = 'geometry-point';
        // console.log('creating aol-geometry-point');
    }
    GeometryPointComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPointComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryPointComponent;
}());
GeometryPointComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-geometry-point',
                template: "\n    <ng-content></ng-content>"
            },] },
];
/** @nocollapse */
GeometryPointComponent.ctorParameters = function () { return [
    { type: feature_component_1.FeatureComponent, },
]; };
exports.GeometryPointComponent = GeometryPointComponent;
var GeometryPolygonComponent = (function () {
    function GeometryPolygonComponent(host) {
        this.host = host;
        this.componentType = 'geometry-polygon';
        // console.log('creating aol-geometry-polygon');
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new openlayers_1.geom.Polygon([[[0, 0], [1, 0], [1, 1]]]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPolygonComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryPolygonComponent;
}());
GeometryPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-geometry-polygon',
                template: "\n    <ng-content></ng-content>"
            },] },
];
/** @nocollapse */
GeometryPolygonComponent.ctorParameters = function () { return [
    { type: feature_component_1.FeatureComponent, },
]; };
exports.GeometryPolygonComponent = GeometryPolygonComponent;
var GeometryMultiPolygonComponent = (function () {
    function GeometryMultiPolygonComponent(host) {
        this.host = host;
        this.componentType = 'geometry-multipolygon';
        // console.log('creating aol-geometry-polygon');
    }
    GeometryMultiPolygonComponent.prototype.ngOnInit = function () {
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new openlayers_1.geom.MultiPolygon([
            [
                [
                    [
                        4.83403,
                        45.76789
                    ],
                    [
                        4.834052,
                        45.767718
                    ],
                    [
                        4.836037,
                        45.767886
                    ],
                    [
                        4.835983,
                        45.768039
                    ],
                    [
                        4.83403,
                        45.76789
                    ]
                ]
            ]
        ]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryMultiPolygonComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryMultiPolygonComponent;
}());
GeometryMultiPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-geometry-multipolygon',
                template: "\n    <ng-content></ng-content>"
            },] },
];
/** @nocollapse */
GeometryMultiPolygonComponent.ctorParameters = function () { return [
    { type: feature_component_1.FeatureComponent, },
]; };
exports.GeometryMultiPolygonComponent = GeometryMultiPolygonComponent;
//# sourceMappingURL=geometry.components.js.map
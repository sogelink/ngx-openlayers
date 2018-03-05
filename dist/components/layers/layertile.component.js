"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var layer_component_1 = require("./layer.component");
var layergroup_component_1 = require("./layergroup.component");
var LayerTileComponent = (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new openlayers_1.layer.Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    return LayerTileComponent;
}(layer_component_1.LayerComponent));
LayerTileComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-layer-tile',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
LayerTileComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: layergroup_component_1.LayerGroupComponent, decorators: [{ type: core_1.Optional },] },
]; };
LayerTileComponent.propDecorators = {
    'preload': [{ type: core_1.Input },],
    'useInterimTilesOnError': [{ type: core_1.Input },],
};
exports.LayerTileComponent = LayerTileComponent;
//# sourceMappingURL=layertile.component.js.map
/// <reference types="openlayers" />
import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { layer, style, StyleFunction } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: layer.VectorTileRenderType | string;
    renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
    style: (style.Style | style.Style[] | StyleFunction);
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

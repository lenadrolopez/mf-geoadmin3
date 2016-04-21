goog.provide('olcs.GaKmlSynchronizer');
goog.require('olcs.AbstractSynchronizer');


/**
 * Unidirectionally synchronize geoadmin kml layers to Cesium.
 * @param {!ol.Map} map
 * @param {!Cesium.Scene} scene
 * @param {!Cesium.DataSourceCollection} dataSources
 * @constructor
 * @extends {olcs.AbstractSynchronizer}
 * @api
 * @struct
 */
olcs.GaKmlSynchronizer = function(map, scene, dataSources) {

  /**
   * @protected
   */
  this.dataSources_ = dataSources;

  goog.base(this, map, scene);
};
goog.inherits(olcs.GaKmlSynchronizer, olcs.AbstractSynchronizer);


/**
 * @inheritDoc
 */
olcs.GaKmlSynchronizer.prototype.createSingleLayerCounterparts =
    function(olLayer) {
  if (olLayer.get('type') === 'KML' && olLayer.get('url') &&
      !/:\/\/public\./.test(olLayer.get('url'))) {
    var options = {
      camera: this.scene.camera,
      canvas: this.scene.canvas,
      proxy: new Cesium.DefaultProxy('https://api3.geo.admin.ch/ogcproxy?url=')
    };
    var url = '' + olLayer.get('url');
    this.dataSources_.add(Cesium.KmlDataSource.load(url, options));
  }
  return null;
};

/**
 * @inheritDoc
 */
olcs.GaKmlSynchronizer.prototype.destroyCesiumObject = function(object) {
  //this.dataSourcesobject.getRootPrimitive().destroy();
};


/**
 * @inheritDoc
 */
olcs.GaKmlSynchronizer.prototype.removeSingleCesiumObject =
    function(object, destroy) {
  //object.destroy();
  //this.csAllPrimitives_.destroyPrimitives = destroy;
  //this.csAllPrimitives_.remove(object.getRootPrimitive());
  //this.csAllPrimitives_.destroyPrimitives = false;
};


/**
 * @inheritDoc
 */
olcs.GaKmlSynchronizer.prototype.removeAllCesiumObjects = function(destroy) {
  //this.csAllPrimitives_.destroyPrimitives = destroy;
  //if (destroy) {
  //  for (var i = 0; i < this.csAllPrimitives_.length; ++i) {
  //    this.csAllPrimitives_.get(i)['counterpart'].destroy();
  //  }
  //}
  //this.csAllPrimitives_.removeAll();
  //this.csAllPrimitives_.destroyPrimitives = false;
};


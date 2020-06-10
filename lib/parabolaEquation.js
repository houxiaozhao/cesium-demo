function parabolaEquation(options, resultOut) {
  //方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者
  var h = options.height && options.height > 5000 ? options.height : 5000;
  var L =
    Math.abs(options.pt1.lon - options.pt2.lon) >
    Math.abs(options.pt1.lat - options.pt2.lat)
      ? Math.abs(options.pt1.lon - options.pt2.lon)
      : Math.abs(options.pt1.lat - options.pt2.lat);
  var num = options.num && options.num > 50 ? options.num : 50;
  var result = [];
  var dlt = L / num;
  if (
    Math.abs(options.pt1.lon - options.pt2.lon) >
    Math.abs(options.pt1.lat - options.pt2.lat)
  ) {
    //以lon为基准
    var delLat = (options.pt2.lat - options.pt1.lat) / num;
    if (options.pt1.lon - options.pt2.lon > 0) {
      dlt = -dlt;
    }
    for (var i = 0; i < num; i++) {
      var tempH =
        h -
        (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2);
      var lon = options.pt1.lon + dlt * i;
      var lat = options.pt1.lat + delLat * i;
      result.push([lon, lat, tempH]);
    }
  } else {
    //以lat为基准
    var delLon = (options.pt2.lon - options.pt1.lon) / num;
    if (options.pt1.lat - options.pt2.lat > 0) {
      dlt = -dlt;
    }
    for (var i = 0; i < num; i++) {
      var tempH =
        h -
        (Math.pow(-0.5 * L + Math.abs(dlt) * i, 2) * 4 * h) / Math.pow(L, 2);
      var lon = options.pt1.lon + delLon * i;
      var lat = options.pt1.lat + dlt * i;
      result.push([lon, lat, tempH]);
    }
  }
  if (resultOut != undefined) {
    resultOut = result;
  }
  return result;
}


var worlds = {
    stratis: {
        tileDir: 'stratis_18022',
        initialZoom: 7,
        maxZoom: 14,
        center: [5000, 5000],
        metersToCoord: function (x, y) {
            return new google.maps.LatLng(y * 0.00018861 - 2.8114, x * 0.00018882);
        },
        coordToMeters: function (latLng) {
            return {
                x: latLng.lat() / 0.00018882,
                y: latLng.lng() + 2.8114 / 0.00018861,
                z: 0
            };
        },
        name: 'Stratis'
    },

    altis: {
        tileDir: 'AltisZL5',
        initialZoom: 7,
        maxZoom: 12,
        center: [10000, 10000],
        metersToCoord: function (x, y) {
            return new google.maps.LatLng(y * 0.00018861 - 2.8114, x * 0.0001828);
        },
        coordToMeters: function (latLng) {
            return {
                x: latLng.lat() / 0.0001828,
                y: latLng.lng() + 2.8114 / 0.00018861,
                z: 0
            };
        },
        name: 'Altis'
    }
};
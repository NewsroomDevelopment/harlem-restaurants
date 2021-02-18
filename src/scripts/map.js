import { config } from './config';
import "intersection-observer";
import scrollama from "scrollama";

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

export default function () {
    function getLayerPaintType(layer) {
        var layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function (prop) {
            var options = {};
            if (layer.duration) {
                var transitionProp = prop + "-transition";
                options = {
                    "duration": layer.duration
                };
                map.setPaintProperty(layer.layer, transitionProp, options);
            }
            map.setPaintProperty(layer.layer, prop, layer.opacity, options);
        });
    }

    var story = document.getElementById('story');
    var features = document.createElement('div');
    features.setAttribute('id', 'features');

    var header = document.createElement('div');

    if (config.title) {
        var titleText = document.createElement('h1');
        titleText.innerText = config.title;
        header.appendChild(titleText);
    }

    if (config.subtitle) {
        var subtitleText = document.createElement('h2');
        subtitleText.innerText = config.subtitle;
        header.appendChild(subtitleText);
    }

    if (header.innerText.length > 0) {
        header.classList.add(config.theme);
        header.setAttribute('id', 'header');
        story.appendChild(header);
    }

    config.chapters.forEach((record, idx) => {
        var container = document.createElement('div');
        var chapter = document.createElement('div');

        if (record.title) {
            var title = document.createElement('h3');
            title.innerText = record.title;
            chapter.appendChild(title);
        }

        if (record.image) {
            var image = new Image();
            image.src = record.image;
            chapter.appendChild(image);
        }

        if (record.description) {
            var story = document.createElement('p');
            story.innerHTML = record.description;
            chapter.appendChild(story);
        }

        container.setAttribute('id', record.id);
        container.classList.add('step');
        if (idx === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        container.appendChild(chapter);
        container.classList.add(alignments[record.alignment] || 'centered');
        if (record.hidden) {
            container.classList.add('hidden');
        }
        features.appendChild(container);
    });

    story.appendChild(features);

    var footer = document.createElement('div');

    if (config.footer) {
        var footerText = document.createElement('p');
        footerText.innerHTML = config.footer;
        footer.appendChild(footerText);
    }

    if (footer.innerText.length > 0) {
        footer.classList.add(config.theme);
        footer.setAttribute('id', 'footer');
        story.appendChild(footer);
    }

    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
        return {
            url: url + suffix
        }
    }

    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.center,
        zoom: config.chapters[0].location.zoom,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        interactive: false,
        transformRequest: transformRequest
    });

    if (config.showMarkers) {
        var marker = new mapboxgl.Marker({
            color: config.markerColor
        });
        marker.setLngLat(config.chapters[0].location.center).addTo(map);
    }

    // instantiate the scrollama
    var scroller = scrollama();

    //the markers on the map
    var places = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'properties': {
                'description': 'Sylvia\'s Restaurant of Harlem',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.94447900208048, 40.80865259993899]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Amy Ruth’s',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.95021425760106, 40.80270006369895],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Melba’s',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.95658658643693, 40.803272405026455],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Red Rooster',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.94463548458589, 40.808285654806056],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'The World Famous Cotton Club',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.9602977272153, 40.81780651171123],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Seasoned Vegan',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.95275073061616, 40.80080104628655],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Tsion Cafe',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.94344591712296, 40.82640216381314],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Archer & Goat',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.94834750178023, 40.80459943429945],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Little Senegal',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.95426384225763, 40.80434171197095],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description': 'Schomburg Center for Research in Black Culture',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-73.94059340786883, 40.81475769680448],
            }
        },
        ]
    };

    map.on("load", function () {
        if (config.use3dTerrain) {
            map.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });
            // add the DEM source as a terrain layer with exaggerated height
            map.setTerrain({
                'source': 'mapbox-dem',
                'exaggeration': 1.5
            });

            // add a sky layer that will show when the map is highly pitched
            map.addLayer({
                'id': 'sky',
                'type': 'sky',
                'paint': {
                    'sky-type': 'atmosphere',
                    'sky-atmosphere-sun': [0.0, 0.0],
                    'sky-atmosphere-sun-intensity': 15
                }
            });

            map.addSource('places', {
                'type': 'geojson',
                'data': places
            });

            map.addLayer({
                'id': 'poi-labels',
                'type': 'symbol',
                'source': 'places',
                "paint": {
                    "text-color": "#FFFFFF"
                },
                'layout': {
                    'text-field': ['get', 'description'],
                    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                    'text-radial-offset': 0.5,
                    'text-justify': 'auto',
                    'icon-image': ['concat', ['get', 'icon'], '-15'],
                }
            });

            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;

            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 18,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
                labelLayerId
            );
        };

        // setup the instance, pass callback functions
        scroller
            .setup({
                step: '.step',
                offset: 0.5,
                progress: true
            })
            .onStepEnter(response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                response.element.classList.add('active');
                map[chapter.mapAnimation || 'flyTo'](chapter.location);
                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity);
                }
                if (chapter.callback) {
                    window[chapter.callback]();
                }
                if (chapter.rotateAnimation) {
                    map.once('moveend', function () {
                        const rotateNumber = map.getBearing();
                        map.rotateTo(rotateNumber + 90, {
                            duration: 24000,
                            easing: function (t) {
                                return t;
                            }
                        });
                    });
                }
            })
            .onStepExit(response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                response.element.classList.remove('active');
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            });
    });

    // setup resize event
    window.addEventListener('resize', scroller.resize);
}
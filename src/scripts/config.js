import Doc from "../../data/doc.json";
import mapboxgl from 'mapbox-gl';

var config = {
    style: 'mapbox://styles/mapbox/dark-v9',
    accessToken: 'pk.eyJ1IjoiaG9uZ3NlbmR1IiwiYSI6ImNrbDJxNDJ0djBjMjYydXBraGNuNWM0djUifQ.ByezJ_3QPduEseu6a3_2qw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Harlem Food History',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Noah Sheidlower',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            description: 'Introduction about the article in general',
            location: {
                center: [-73.9572, 40.8045],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sylvias',
            alignment: 'left',
            hidden: false,
            description: 'Sylvia’s Restaurant, “The Queen of Soul Food,” was founded in 1962 by Sylvia Woods, serving soul food classics to the Harlem community like fried chicken and bar-b-que ribs for nearly six decades. This iconic restaurant has attracted figures like Barack Obama, Nelson Mandela, Bill Clinton, Whoopi Goldberg, and countless other celebrities.',
            location: {
                center: [-73.94447900208048, 40.80865259993899],
                zoom: 17,
                pitch: 0,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'amyruths',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.95021425760106, 40.80270006369895],
                zoom: 19,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'melbas',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.95658658643693, 40.803272405026455],
                zoom: 18,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'redrooster',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.94463548458589, 40.808285654806056],
                zoom: 17,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cottonclub',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.9602977272153, 40.81780651171123],
                zoom: 19,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seasonedvegan',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.95275073061616, 40.80080104628655],
                zoom: 18,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tsioncafe',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.94344591712296, 40.82640216381314],
                zoom: 17,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'archergoat',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.94834750178023, 40.80459943429945],
                zoom: 19,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'littlesenegal',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.95426384225763, 40.80434171197095],
                zoom: 19,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'schomburg',
            alignment: 'left',
            hidden: false,
            description: 'Founded in 1998, Amy Ruth’s helped expand the popularity of chicken and waffles in Harlem as well as other waffle pairings like fried catfish or pork chop. The institution takes its name from the founders’ grandmother Amy Ruth Moore Bass, a native Alabamian and mother of 10 children who “taught all of her children and grandchildren how to love each other, to look out for one another, and to respect themselves as well as others."',
            location: {
                center: [-73.94059340786883, 40.81475769680448],
                zoom: 19,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

var steps = Doc.top[0].value.steps;
steps.forEach(function(element, index) {
    config.chapters[index].description = element;
})
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelectorAll('.shadow').forEach(element => {
        element.style.transform = `skewX(${scrolled / 10 - 40}deg)`;
    });

    document.querySelector('.sun')
        .style.transform = `translateX(${scrolled * 0.13}vw)`;

    document.querySelector('.blink')
        .style.transform = `translateX(${-scrolled * 0.13 + 100}vw)`;
}



Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line',
        backgroundColor: 'black'
    },

    title: {
        text: 'Main skills',
        style: {
            color: 'white',
            'font-size': '32px'
        },
    },

    pane: {
        size: '80%',
        background: {
            backgroundColor: 'black'
        }
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['JavaScript, TypeScript', 'HTML 5', 'Vue.JS', 'Angular',
            'Jest, Karma, Protractor', 'Jenkins, Gulp, Webpack', 'CSS, SASS', 'NodeJS',
            'GIT', 'Python3'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        gridLineColor: 'black',
        labels: {
            style: {
                color: 'white',
                'font-size': '18px'
            },
            distance: 35
        }
    },

    exporting: {
        enabled: false
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        gridLineColor: 'black',
        labels: {
            style: {
                color: 'black'
            }
        }
    },

    tooltip: {
        shared: true
    },

    series: [{
        name: 'Actual skill percentage',
        data: [94, 90, 93, 73,
            80, 79, 97, 71,
            94, 67],
        pointPlacement: 'on'
    }]

});
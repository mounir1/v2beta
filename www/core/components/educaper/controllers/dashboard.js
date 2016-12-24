// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core.educaper')

/**
 * Controller to handle the list of sections in App settings.
 *
 * @module mm.core.settings
 * @ngdoc controller
 * @name mmSettingsListCtrl
 */

.controller('mmDashboardCtrl', function($scope, $mmCourses, $mmSettingsDelegate) {
    $scope.isIOS = ionic.Platform.isIOS();
    $scope.handlers = $mmSettingsDelegate.getHandlers();
    $scope.areHandlersLoaded = $mmSettingsDelegate.areHandlersLoaded;

    console.log('mmCourses' + $mmCourses);

    var courses = $mmCourses.currentCourses;
    console.log('courses: ' + courses)
    Highcharts.chart('piechart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browsers Usage'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]

        }]
    });


    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Temperature Data'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });


    var ch = document.getElementById("myChart");
    var myChart = new Chart(ch, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }]
    };
    var ctx = document.getElementById("chartInstance");
    var chartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: false
        }
    });
    var _data = {
        labels: ["01-01",
            "01-04",
            "01-15",
            "02-03",
            "03-25",
            "04-03",
            "04-14",
            "05-27",
            "05-27",
            "08-03"
        ],
        datasets: [{
            data: [5, 13, 23, 20, 5, 13, 23, 20, 110, 2],
            label: "female",
            borderColor: "rgba(197,23,1,0.8)",
            backgroundColor: "rgba(197,23,1,0.4)",
            hoverBackgroundColor: "rgba(197,23,1,1)",
            borderWidth: 1,
            pointBorderColor: "rgba(197,23,1,1)",
            pointBackgroundColor: "rgba(255,255,255,0.8)",
            pointBorderWidth: 1.5,
            tension: -1,
            yAxisID: "y-axis-1",
        }, ],
    };

    var _options = {
        scales: {
            xAxes: [{
                categorySpacing: 0
            }],
            yAxes: [{
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
            }]
        }
    };

    var myBar = new Chart(document.getElementById("barChart").getContext("2d"), {
        type: "bar",
        data: _data,
        options: _options
    });
});
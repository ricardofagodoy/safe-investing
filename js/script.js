console.log(`Safe Investing Prototype (${new Date()})`)

function move(page) {
    window.location.href = page + '.html'
}

function calculate_vh() {
    // First we get the viewport height and we multiple it 
    // by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01

    // Then we set the value in the --vh custom property to 
    // the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    console.log(`For this screen, 1vh is ${vh}px`)
}

function load_chart() {

    if(window.google == undefined)
        return

    console.log('Drawing chart')

    google.charts.load('current', {'packages':['corechart']})
    google.charts.setOnLoadCallback(drawChart)

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Effort', 'Amount given'],
            ['FIIs', 30],
            ['Ações', 70]
        ]);

        var options = {
            pieHole: 0.6,
            pieSliceText: 'none',
            pieSliceBorderColor: '#d9d9d9',
            pieSliceTextStyle: {
                color: 'black'
            },
            chartArea:{
                width: window.innerWidth*0.01*80,
                height: window.innerHeight*0.01*30
            },
            backgroundColor: {
                fill: '#dbe3ec'
            },
            legend: {
                position: 'labeled'
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('home-graph'));
        chart.draw(data, options);
    }
}

// On startup
calculate_vh()
load_chart()

// Recalculate viewport height on resize
window.addEventListener('resize', () => {
    calculate_vh()
    load_chart()
})
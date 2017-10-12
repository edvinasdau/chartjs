console.log("CHartJS");

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


function chartAdd() {


    myChart.data.labels.push(document.getElementById('vardas').value);
    myChart.data.datasets[0].data.push(document.getElementById('amzius').value);
    myChart.update();
    }

function chartRemoveLast() {
   myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.update();
}

function chartClear() {
    myChart.clear();
}

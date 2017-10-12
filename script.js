console.log("CHartJS");

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Algis", "Juozas", "Andrius"],
        datasets: [{
            label: 'Amzius',
            data: [34, 43, 55],
            borderWidth: 3,
            backgroundColor: ["red", "red", "blue"],
        }, {
            label: 'Alga',
            data: [340, 830, 550],
            borderWidth: 3,
            backgroundColor: ["orange", "green", "green"],
            type: 'bar',
                    }]
    },
    
});



function chartAdd() {


    myChart.data.labels.push(document.getElementById('vardas').value);
    myChart.data.datasets[0].data.push(document.getElementById('amzius').value);
    myChart.data.datasets[1].data.push(document.getElementById('alga').value);
    

        if (parseInt(document.getElementById('amzius').value) < 50){
           myChart.data.datasets[0].backgroundColor.push("red");
    } else {
            myChart.data.datasets[0].backgroundColor.push("blue");
    }

        if (parseInt(document.getElementById('alga').value) < 380){
           myChart.data.datasets[1].backgroundColor.push("orange");
    } else {
            myChart.data.datasets[1].backgroundColor.push("green");
    }

    myChart.update();
}

function chartRemoveLast() {
    myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.update();
}

function chartClear() {
    for (var i = myChart.data.labels.length - 1; i >= 0; i--) {
        myChart.data.labels.pop();
        myChart.data.datasets[0].data.pop();
        myChart.update();
    }
}



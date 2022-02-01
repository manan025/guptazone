const labels = [
    'Dubai',
    'Abu Dhabi',
    'New Delhi',
];

let count = [0, 0, 0];
const xd = supabase.from('survey')
    .select('selection')
    .then(data => {
        for (let i = 0; i < data.data.length; i++) {
            let city = data.data[i].selection;
            if (city === 'dubai') {
                count[0]++;
            } else if (city === 'abudhabi') {
                count[1]++;
            } else if (city === 'delhi') {
                count[2]++;
            }
        }
        makeChart();
    })

const data = {
    labels: labels,
    datasets: [{
        label: 'Location',
        borderColor: 'rgb(255, 99, 132)',
        data: count,
        backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)'
        ]
    }]
};

const config = {
    type: 'polarArea',
    data: data,
    options: {}
};


function makeChart() {
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
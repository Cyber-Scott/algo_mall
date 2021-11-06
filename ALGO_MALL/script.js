const data = {
    labels: [
      'Pre-sale',
      'Ecosystem and marketplace growth',
      'Airdrop and community rewards',
      'Liquidity pool',
      'Team and advisors',
      'Community hackathons',
      'Public and marketing'
    ],
    datasets: [{
      label: 'ALGO Tokenomics',
      data: [40, 20, 10, 10, 10, 5, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverOffset: 5
    }]
  };
        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                layout:{
                    padding: 10,
                    boxHeight: 10
                },
                plugins:{
                legend: {
                    position: 'right',
                    labels:{
                        padding: 15
                    }
                }
            }
        }
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
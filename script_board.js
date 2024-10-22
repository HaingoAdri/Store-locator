// Exemple de code pour générer des graphiques avec Chart.js
const interactionCtx = document.getElementById('interactionChart').getContext('2d');
const filterCtx = document.getElementById('filterChart').getContext('2d');

const interactionChart = new Chart(interactionCtx, {
    type: 'bar',
    data: {
        labels: ['Carrefour Bruxelles', 'Carrefour Anvers', 'Carrefour Liège', 'Carrefour Namur', 'Carrefour Charleroi'],
        datasets: [{
            label: 'Interactions',
            data: [1500, 1300, 1200, 1100, 1000],
            backgroundColor: '#033e74',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre d\'Interactions'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Magasins'
                }
            }
        }
    }
});

const filterChart = new Chart(filterCtx, {
    type: 'pie',
    data: {
        labels: ['Distance', 'Horaires', 'Produits', 'Services'],
        datasets: [{
            label: 'Filtres de Recherche',
            data: [60, 25, 10, 5],
            backgroundColor: ['#033e74', '#0056b3', '#007bff', '#00aaff'],
        }]
    },
    options: {
        plugins: {
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: '#ffffff',
                formatter: (value) => {
                    return value + '%';
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});
const productsCtx = document.getElementById('popularProductsChart').getContext('2d');

const popularProductsChart = new Chart(productsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
            {
                label: 'Pain frais',
                data: [300, 400, 500, 600, 700, 800],
                borderColor: '#ff6384',
                fill: false
            },
            {
                label: 'Lait',
                data: [250, 300, 350, 400, 450, 500],
                borderColor: '#36a2eb',
                fill: false
            },
            {
                label: 'Fruits et légumes',
                data: [200, 220, 250, 270, 300, 330],
                borderColor: '#4bc0c0',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre de Commandes'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Mois'
                }
            }
        }
    }
});
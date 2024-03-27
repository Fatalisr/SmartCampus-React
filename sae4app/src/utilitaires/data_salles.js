
const salles = [
    {
        "id": 1,
        "nom": "D304",
        "nbAlerte24h": 3
    },
    {
        "id": 2,
        "nom": "D204",
        "nbAlerte24h": 2
    },
    {
        "id": 3,
        "nom": "D104",
        "nbAlerte24h": 0
    },
    {
        "id": 4,
        "nom": "D004",
        "nbAlerte24h": 1
    }
];



export const salles$ = new Promise((resolve, reject) => setTimeout(resolve, 500, salles));
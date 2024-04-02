const salles = [
    {
        "id": 1,
        "nom": "D205",
        "nbAlerte24h": 3
    },
    {
        "id": 2,
        "nom": "D206",
        "nbAlerte24h": 2
    },
    {
        "id": 3,
        "nom": "D207",
        "nbAlerte24h": 0
    },
    {
        "id": 4,
        "nom": "D204",
        "nbAlerte24h": 1
    },
    {
        "id": 5,
        "nom": "D203",
        "nbAlerte24h": 3
    },
    {
        "id": 6,
        "nom": "D303",
        "nbAlerte24h": 2
    },
    {
        "id": 7,
        "nom": "D304",
        "nbAlerte24h": 0
    },
    {
        "id": 8,
        "nom": "C101",
        "nbAlerte24h": 1
    },
    {
        "id": 9,
        "nom": "D109",
        "nbAlerte24h": 3
    },
    {
        "id": 10,
        "nom": "Secrétariat",
        "nbAlerte24h": 2
    },
    {
        "id": 11,
        "nom": "D001",
        "nbAlerte24h": 0
    },
    {
        "id": 12,
        "nom": "D002",
        "nbAlerte24h": 1
    },
    {
        "id": 13,
        "nom": "D004",
        "nbAlerte24h": 3
    },
    {
        "id": 14,
        "nom": "C004",
        "nbAlerte24h": 2
    },
    {
        "id": 15,
        "nom": "C007",
        "nbAlerte24h": 0
    },
    {
        "id": 16,
        "nom": "D201",
        "nbAlerte24h": 1
    },
    {
        "id": 17,
        "nom": "D307",
        "nbAlerte24h": 1
    },
    {
        "id": 18,
        "nom": "C005",
        "nbAlerte24h": 1
    }
];



export const salles$ = new Promise((resolve) => setTimeout(resolve, 500, salles));
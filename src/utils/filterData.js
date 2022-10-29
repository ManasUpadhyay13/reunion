export const filterData = [
    {
        placeholder: "Min Price (Rs)",
        query: "minPrice",
        options: [
            { name: '-', value: '' },
            { name: '30,00,000', value: '3000000' },
            { name: '40,00,000', value: '4000000' },
            { name: '50,00,000', value: '5000000' },
            { name: '60,00,000', value: '6000000' },
            { name: '70,00,000', value: '7000000' }
        ]
    },
    {
        placeholder: "No. of Rooms",
        query: 'roomsMin',
        options: [
            { name: '-', value: '' },
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
            { name: '5', value: '5' },
            { name: '6', value: '6' },
        ]
    },
    {
        placeholder: "Sort",
        query: 'sort',
        options: [
            { name: '-', value: '' },
            { name: 'Lowest Price', value: 'price-asc' },
            { name: 'Highest Price', value: 'price-des' },
        ]
    },
    {
        placeholder: "Property Type",
        query: 'categoryExternalID',
        options: [
            { name: '-', value: '' },
            { name: 'Apartment', value: '4' },
            { name: 'Townhouses', value: '16' },
            { name: 'Villas', value: '3' },
            { name: 'Penthouses', value: '18' },
            { name: 'Hotel Apartments', value: '21' },
            { name: 'Villa Compound', value: '19' },
            { name: 'Residential Plot', value: '14' },
            { name: 'Residential Floor', value: '12' },
            { name: 'Residential Building', value: '17' },
        ]
    },
]
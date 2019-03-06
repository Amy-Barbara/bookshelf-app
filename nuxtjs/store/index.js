export const state = () => ({
    books: [],
    rentalHistory: []
})

export const mutations = {
    setBooks (state, bookItems) {
        state.books = bookItems
    },
    setRentalHistory (state, rentalItems) {
        state.rentalHistory = rentalItems
    },

}

export const actions = {
    async load(ctx) {
        const bookItems = [
            {
                "id": 1,
                "title": "PHPの本",
                "detail": "PHPの本詳細",
                "rental": [
                    {
                        "rentalHistoryId": 1,
                        "rentalPersonName": "barbara",
                        "rentalDateFrom": "2019-03-01",
                        "rentalDateTo": "2019-03-10",
                    },
                    {
                        "rentalHistoryId": 2,
                        "rentalPersonName": "barbara2",
                        "rentalDateFrom": "2019-03-01",
                        "rentalDateTo": "2019-03-10",
                    },
                    {
                        "rentalHistoryId": 3,
                        "rentalPersonName": "barbara3",
                        "rentalDateFrom": "2019-03-01",
                        "rentalDateTo": "2019-03-10",
                    }
                ]
            },
            {
                "id": 2,
                "title": "HTMLの本",
                "detail": "HTMLの本詳細"
            },
            {
                "id": 3,
                "title": "CSSの本",
                "detail": "CSSの本詳細"
            }
        ]
        ctx.commit("setBooks", bookItems)
        const rentalItems = [
            {
                "id": 1,
                "name": "barbara",
                "dateFrom": "2019-03-01",
                "dateTo": "2019-03-10"
            },
            {
                "id": 2,
                "name": "matsubara",
                "dateFrom": "2019-03-10",
                "dateTo": "2019-03-20"
            }
        ]
        ctx.commit("setRentalHistory", rentalItems)
    }
}
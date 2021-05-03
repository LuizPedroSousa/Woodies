const axios = require('axios')

exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest
}) => {
    // get data from json-server API at build time

    const baseUrl = process.env.API_URL || 'http://localhost:3333'

    const categories = await axios.get(`${baseUrl}/categories`)
    const testimonies = await axios.get(`${baseUrl}/testimonies`)



    createNode({
        categories: categories.data,
        testimonies: testimonies.data,
        // required fields
        id: 'api-request',
        parent: null,
        children: [],
        internal: {
            type: `Api`,
            contentDigest: createContentDigest({
                ...categories.data,
                ...testimonies.data
            })
        }
    })
}

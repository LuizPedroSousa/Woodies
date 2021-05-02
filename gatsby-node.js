const axios = require('axios')

exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest
}) => {
    // get data from json-server API at build time

    const baseUrl = process.env.API_URL || 'http://localhost:3333'

    const categories = await axios.get(`${baseUrl}/categories`)
    const testimony = await axios.get(`${baseUrl}/testimony`)

    createNode({
        categories: categories.data,
        testimony: testimony.data,
        // required fields
        id: 'api-request',
        parent: null,
        children: [],
        internal: {
            type: `Api`,
            contentDigest: createContentDigest({
                ...categories.data,
                ...testimony.data
            })
        }
    })
}

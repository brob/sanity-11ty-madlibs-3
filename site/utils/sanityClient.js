const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'bxgv33j8',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})


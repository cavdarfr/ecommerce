export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            description: 'Choose a category for this product'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Set the price for this product in cents (e.g. 2399 = $23.99)'
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number'
        },
        {
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'promotion',
            title: 'Promotion',
            description: 'Is this product in promotion? (percent)',
            type: 'number',
            initialValue: 0,
            max: 100,
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{
                type: 'image', options: {
                    hotspot: true
                },
            }],
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime'
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'price',
            promotion: 'promotion',
            media: 'mainImage'
        },
        prepare(selection) {
            const { subtitle, promotion } = selection
            const euros = subtitle / 100;
            const formattedPrice = new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR'
            }).format(euros)

            return {
                ...selection,
                subtitle: `${formattedPrice} ${promotion > 0 ? '- Promo!' : ''}`
            }
        }
    }
}

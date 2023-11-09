import { CollectionConfig } from 'payload/types';

const Customers: CollectionConfig = {
    slug: 'customers',
    auth: true,
    admin: {
        useAsTitle: 'username'
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'username',
            type: 'text',
            required: true
        },
        {
            name: 'age',
            type: 'number',
            required: true
        }
    ],
}

export default Customers;
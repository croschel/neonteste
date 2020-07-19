/* eslint-disable prettier/prettier */
const TransactionSchema = {
  name: 'Transaction',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    value: 'float',
    entryAt: 'date',
    user: 'User',
    contact: 'Contact',
  },
};

export default TransactionSchema;

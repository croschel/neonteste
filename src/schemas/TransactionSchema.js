/* eslint-disable prettier/prettier */
const TransactionSchema = {
  name: 'Transaction',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    value: 'float',
    entryAt: 'date',
    user: { type: 'User' },
    contact: { type: 'Contact' },
  },
};

export default TransactionSchema;

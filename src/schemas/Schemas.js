/* eslint-disable prettier/prettier */
export const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    email: 'string',
  },
};

export const ContactSchema = {
  name: 'Contact',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    phone: 'string',
    tot_value: 'float',
  },
};

export const TransactionSchema = {
  name: 'Transaction',
  primaryKey: 'id',
  properties: {
    id: 'int',
    value: 'float',
    entryAt: 'date',
    user: { type: 'User' },
    contact: { type: 'Contact' },
  },
};

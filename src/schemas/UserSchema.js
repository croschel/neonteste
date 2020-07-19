/* eslint-disable prettier/prettier */
const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    name: 'string',
    email: 'string',
  },
};

export default UserSchema;

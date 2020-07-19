/* eslint-disable prettier/prettier */
const ContactSchema = {
  name: 'Contact',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    name: 'string',
    phone: 'string',
  },
};
export default ContactSchema;

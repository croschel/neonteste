import Realm from 'realm';
/* import UserSchema from '~/schemas/UserSchema';
import ContactSchema from '~/schemas/ContactSchema';
import TransactionSchema from '~/schemas/TransactionSchema'; */
import { UserSchema, ContactSchema, TransactionSchema } from '~/schemas/Schemas';

export default function getRealm() {
  return Realm.open({
    schema: [UserSchema, ContactSchema, TransactionSchema],
    schemaVersion: 1,
  });
}

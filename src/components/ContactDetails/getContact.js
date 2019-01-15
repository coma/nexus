import Contacts from '../../services/contacts';
import onlyTheLast from '../../util/onlyTheLast';

export default onlyTheLast(Contacts.read, Contacts);

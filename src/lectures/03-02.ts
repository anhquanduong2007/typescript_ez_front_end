interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = BusinessPartner & Identity & Contact;
const e: Employee = {
  name: '1',
  id: 1,
  email: '',
  phone: '',
  credit: 1,
};

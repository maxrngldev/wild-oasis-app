import { expect, test } from 'vitest';
import { subtractDates } from '../helpers';

const MOCK_BOOKING = {
  id: 1,
  createdAt: '2024-08-18T07:39:29.649+00:00',
  startDate: '2024-08-21T00:00:00',
  endDate: '2024-09-01T00:00:00',
  numNights: 11,
  numGuests: 6,
  status: 'unconfirmed',
  totalPrice: 7700,
  cabins: {
    name: '001',
  },
  guests: {
    email: 'david@gmail.com',
    fullName: 'David Smith',
  },
};

test('subtractDates should calculate the number of nights for a booking (endDate - startDate)', () => {
  const numNights = subtractDates(MOCK_BOOKING.endDate, MOCK_BOOKING.startDate);

  expect(numNights).toBe(11);
});

import { PaymentCreated, Publisher, Subjects } from '@ssktickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreated> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

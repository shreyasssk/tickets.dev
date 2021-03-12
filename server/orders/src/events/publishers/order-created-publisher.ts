import { Publisher, OrderCreated, Subjects } from '@ssktickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreated> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

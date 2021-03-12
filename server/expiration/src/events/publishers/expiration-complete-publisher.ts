import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ssktickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

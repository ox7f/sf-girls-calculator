import {
  DocumentData,
  FirestoreDataConverter,
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore';
import { Agent, NewAgent, NewTarget, Target } from '@sf-girls-calculator/calculator';

export type ItemConverterType<T extends NewAgent | NewTarget, U extends Agent | Target> = FirestoreDataConverter<U> & {
  toFirestore(modelObject: T): DocumentData;
  fromFirestore(
    snapshot: import('firebase/firestore').QueryDocumentSnapshot<DocumentData>,
    options: import('firebase/firestore').SnapshotOptions
  ): U;
};

// Firestore data converter
export const AgentConverter = {
  toFirestore({ name }: PartialWithFieldValue<NewAgent>): DocumentData {
    // TODO:
    return { name };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Agent(data as NewAgent);
  }
};

export const TargetConverter = {
  toFirestore({ critical_resistance, duration, health, name }: PartialWithFieldValue<NewTarget>): DocumentData {
    return { critical_resistance, duration, health, name };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    return new Target(data as NewTarget);
  }
};

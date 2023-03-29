import { Agent, Agents, NewAgent, NewTarget, Target, Targets } from '@sf-girls-calculator/calculator';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { firestore } from '.';
import { AgentConverter, ItemConverterType, TargetConverter } from './converter';

interface ItemType<T> {
  name: string;
  item: T;
}

export const initializeCollection = async <T extends NewAgent | NewTarget>(
  collectionName: string,
  collectionData: ItemType<T>[],
  userId: string,
  converter: ItemConverterType<NewAgent | NewTarget, Agent | Target>
) => {
  const userCollectionRef = collection(firestore, collectionName, userId);

  // Check if the user already has any data in the collection
  const querySnapshot = await getDocs(userCollectionRef);
  if (querySnapshot.size > 0) {
    return;
  }

  // If the user doesn't have any data, create them
  const promises = collectionData.map((item: ItemType<T>) =>
    setDoc(doc(userCollectionRef, item.name).withConverter(converter), item)
  );

  await Promise.all(promises);
};

// Call initializeCollection for agents
export const initializeAgents = async (userId: string) => {
  const items = Agents.Agents.map((agent) => ({
    name: agent.name,
    item: agent
  }));

  await initializeCollection('agents', items, userId, AgentConverter);
};

// Call initializeCollection for targets
export const initializeTargets = async (userId: string) => {
  const items = Targets.Targets.map((target) => ({
    name: target.name,
    item: target
  }));

  await initializeCollection('targets', items, userId, TargetConverter);
};

export const checkIfUserExists = async (uid: string) => {
  const userDocRef = doc(firestore, 'users', uid);
  const userDocSnap = await getDoc(userDocRef);
  return userDocSnap.exists();
};

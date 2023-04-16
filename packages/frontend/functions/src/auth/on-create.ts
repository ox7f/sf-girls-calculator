import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth';
import { Agents } from '@sf-girls-calculator/calculator';

admin.initializeApp();
const db = admin.firestore();

export default functions.auth.user().onCreate(async (user: UserRecord) => {
  // Get user uid
  const uid = user.uid;

  // Create agent documents with default values
  await createAgentsForUser(uid);

  // Create ditto document with default value
  // TODO:
});

async function createAgentsForUser(uid: string) {
  // Create agent documents with default values
  const agentDefaults = Agents.Agents;

  const batch = db.batch();

  agentDefaults.forEach((agent) => {
    // Create agent document reference
    const agentRef = db.collection(`users/${uid}/agents`).doc(agent.name);

    // Set agent document data
    batch.set(agentRef, agent);
  });

  // Commit the batch
  await batch.commit();

  // Log success message
  console.log(`Initialized agents for user ${uid}`);
}

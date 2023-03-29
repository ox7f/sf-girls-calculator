import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Agents, Targets } from '@sf-girls-calculator/calculator';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

const db = admin.firestore();

export const onCreateUser = functions.auth.user().onCreate(async (user) => {
  // Get user uid
  const uid = user.uid;

  // Create agent documents with default values
  await createAgentsForUser(uid);

  // Create ditto document with default value
  await createDittoForUser(uid);
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

async function createDittoForUser(uid: string) {
  // Create ditto document with default value
  const dittoDefault = Targets.Ditto;

  const batch = db.batch();

  // Create ditto document reference
  const agentRef = db.collection(`users/${uid}/agents`).doc("Ditto");

  // Set ditto document data
  batch.set(agentRef, dittoDefault);

  // Commit the batch
  await batch.commit();

  // Log success message
  console.log(`Initialized ditto for user ${uid}`);
}

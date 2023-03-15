import { useAtom } from 'jotai';
import { ChangeEvent } from 'react';

import { ModalBody, ModalHeader } from './index';
import { Modal as CommonModal } from '../../Common';
import { AgentDB, AgentNameAtom } from '../../../atoms';

const Modal: React.FC = () => {
  const [agentName, setAgentName] = useAtom(AgentNameAtom);
  const [agent, setAgent] = useAtom(AgentDB.item(agentName));

  if (!agent) return null;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAgent({ ...agent, [event.target.name]: Number(event.target.value) });
  };

  return (
    <CommonModal modalId={agentName} clickOutside={() => setAgentName('')}>
      <ModalHeader onClose={() => setAgentName('')} />
      <ModalBody agent={agent} onChange={changeHandler} />
    </CommonModal>
  );
};

export default Modal;

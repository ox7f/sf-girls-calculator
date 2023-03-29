import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { NewTarget } from '@sf-girls-calculator/calculator';

import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { TargetConverter } from '../../firebase/converter';

import { ErrorMessage, Select } from '../common';
import { CurrentViewAtom, SelectedTargetListAtom } from '../../atoms';

const TargetSelect: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [targets, setTargets] = useState<NewTarget[]>([]);

  const [selectedTarget, setSelectedTarget] = useAtom(SelectedTargetListAtom);
  const viewName = useAtomValue(CurrentViewAtom);

  const fetchTargets = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'targets').withConverter(TargetConverter));
      const targetOptions = querySnapshot.docs.map((doc) => doc.data() as NewTarget);
      setTargets(targetOptions);
    } catch (err) {
      setError((err as Error).message);
    }

    setLoading(false);
    setError('');
  };

  useEffect(() => {
    fetchTargets();
  }, []);

  const selectOptions = useMemo(
    () =>
      targets.map((target) => ({
        value: target.name,
        label: target.name
      })),
    [targets]
  );

  const select = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedTarget((prev) => ({ ...prev, [viewName]: [event.target.value] }));

  return (
    <div className="u-center">
      {error && <ErrorMessage message={error} />}

      {isLoading && (
        <select className="animated pulse line select bg-gray-300 w-100p">
          <option>loading...</option>
        </select>
      )}

      {!isLoading && <Select value={selectedTarget[viewName][0]} options={selectOptions} onChange={select} />}
    </div>
  );
};

export default TargetSelect;

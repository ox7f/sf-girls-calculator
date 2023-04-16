import { calculate, FunctionParams } from './utils';

export const calculateCalculator = async (params: FunctionParams) => {
  const result = await calculate(params);
  return JSON.stringify(result);
};

export const calculateTeamfinder = async (params: FunctionParams) => {
  const results = await calculate(params, true);
  return JSON.stringify(results);
};

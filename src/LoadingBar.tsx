import Cleaning from './assets/Cleaning';
import { Bar, Loader } from './styled/Loading';

export const LoadingBar = () => {
  return (
    <>
      <Cleaning />
      <Bar>
        <Loader />
      </Bar>

    </>
  );
};

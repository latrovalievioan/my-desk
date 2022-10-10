import Cleaning from './assets/Cleaning';
import { Bar, Loader } from './styled/Loading';

export const LoadingBar = () => {
  return (
    <div>
      <Cleaning/>
      <Bar>
        <Loader />
      </Bar>
      <p>Cleaning my desk...</p>
    </div>
  );
};

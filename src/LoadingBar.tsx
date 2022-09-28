import Cleaning from './assets/Cleaning';
import { Box } from './styled/Box';
import { Bar, Loader } from './styled/Loading';

export const LoadingBar = () => {
  return (
    <Box>
      <Cleaning/>
      <Bar>
        <Loader />
      </Bar>
      <p>Cleaning my desk...</p>
    </Box>
  );
};

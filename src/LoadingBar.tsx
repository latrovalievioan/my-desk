import Cleaning from './assets/Cleaning';
import { Bar, Loader } from './styled/Loading';
import { Section } from './styled/Section';

export const LoadingBar = () => {
  return (
    <Section>
      <Cleaning />
      <Bar>
        <Loader />
      </Bar>
      <p>Cleaning my desk...</p>
    </Section>
  );
};

import styled from 'styled-components';
import { Box } from '../../styled/Box';
import { Stack } from '../../styled/Stack';
import { Title } from '../../styled/Title';
import { Cluster } from '../../styled/Cluster';
import { Text } from '../../styled/Text';

export const ProjectCard: React.VFC<{ cardStyle: 1 | 2 | 3 }> = ({
  cardStyle,
}) => {
  const Card = styled(Box)<{ cardStyle: 1 | 2 | 3 }>`
    flex: 1 1 33%;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 300px;
    max-width: 300px;
    width: 300px;
    height: 300px;
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 2em;
    padding: 20px;

    ${({ cardStyle }) => {
      switch (cardStyle) {
        case 1:
          return `background: linear-gradient(
                  180deg,
                  rgba(135, 255, 190, 0.4) 0%,
                  rgba(255, 239, 152, 0.4) 100%);
                  `;
        case 2:
          return `background: linear-gradient(
                  180deg,
                  rgba(255, 233, 153, 0.4) 0%,
                  rgba(255, 122, 154, 0.4) 100%);
                  `;
        case 3:
          return `background: linear-gradient(
                  180deg,
                  rgba(255, 163, 163, 0.4) 0%,
                  rgba(136, 225, 244, 0.4) 100%);
                  `;
      }
    }}
  `;

  const CardTitle = styled(Title)`
    font-size: 1.5em;
    width: 100%;
    border-bottom: 3px solid white;
    padding-bottom: 30px;
    text-align: left;
  `;

  const ProjectStack = styled(Stack)`
    width: 100%;
  `;

  return (
    <Card cardStyle={cardStyle}>
      <ProjectStack>
        <Cluster>
          <CardTitle>My Desk</CardTitle>
        </Cluster>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tincidunt tellus. Pellentesque malesuada, nisi eu dapibus volutpat, erat lorem sodales arcu</Text>
      </ProjectStack>
    </Card>
  );
};

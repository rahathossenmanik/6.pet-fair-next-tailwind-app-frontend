import React from 'react';
import {
  Grid,
  Container,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Button,
  Badge,
  LoadingOverlay,
} from '@mantine/core';
import { Icon } from '@iconify/react';
import { post } from '../helpers/api_helpers';
import { PET_API } from '../constants/api/petEndpoints';
// import { useNavigate } from 'react-router-dom';
import { useStyles } from '../constants/common/commonStyles';
import Link from 'next/link';

const Archive = (props: any) => {
  const { pets, loading, trigger } = props;
  const { classes, theme } = useStyles();

  const url =
    typeof window !== 'undefined'
      ? window.location.protocol + '//' + window.location.host + '/pets/single/'
      : '';

  const shortenAbout = (text: string) => {
    if (text.length > 100) {
      return text.substring(0, 100) + '...';
    } else {
      return text;
    }
  };

  const onLoveReact = async (id: string | number) => {
    const res = await post(PET_API.love(id), {});
    if (res) trigger();
  };

  const onShareFacebook = (id: string | number) => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url + id}&t=TITLE`,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'
    );
    return false;
  };

  return (
    <Container
      my='md'
      pos='relative'
      style={{ minHeight: '80vh', minWidth: '100%' }}>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Grid>
        {pets?.map((pet: any, i: number) => (
          <Grid.Col key={i} xs={12} sm={6} md={4}>
            <Card withBorder padding='lg' radius='md' className={classes.card}>
              <Card.Section mb='sm'>
                <Image src={pet?.image} alt={'Pet'} height={180} />
              </Card.Section>

              <Badge
                className={classes.rating}
                variant='gradient'
                gradient={{ from: 'blue', to: 'cyan' }}>
                {pet?.age} Years
              </Badge>

              <Badge>{pet?.petType?.label}</Badge>

              <Text fw={700} className={classes.title} mt='xs'>
                {pet?.name}
              </Text>
              <Text fz='sm' color='dimmed' lineClamp={4}>
                {shortenAbout(pet?.about)}
              </Text>

              <Card.Section className={classes.footer}>
                <Group position='apart'>
                  <Group mt='xs'>
                    <Link href={`/pets/single/${pet?._id}`}>
                      <Button radius='md' style={{ flex: 1 }}>
                        View {pet?.name}
                      </Button>
                    </Link>
                  </Group>
                  <Group spacing={0} mt='xs' fz='xs'>
                    {pet?.loveCount}
                    <ActionIcon onClick={() => onLoveReact(pet?._id)}>
                      <Icon
                        icon='mdi:heart-outline'
                        color={theme.colors.red[6]}
                      />
                    </ActionIcon>
                    <ActionIcon onClick={() => onShareFacebook(pet?._id)}>
                      <Icon
                        icon='solar:share-outline'
                        color={theme.colors.blue[6]}
                      />
                    </ActionIcon>
                  </Group>
                </Group>
              </Card.Section>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Archive;

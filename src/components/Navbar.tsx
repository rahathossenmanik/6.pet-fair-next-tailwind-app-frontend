import {
  Header,
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon } from '@iconify/react';
import { useStyles } from '../constants/common/commonStyles';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = (props: any) => {
  const { setThemeMode } = props;
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const onNavigateMobile = (path: string) => {
    closeDrawer();
  };

  return (
    <Box pb={20}>
      <Header height={60} px='md'>
        <Group className='flex justify-around' sx={{ height: '100%' }}>
          <Image
            src='/logo.png'
            alt='Pet Fair Logo'
            style={{ maxWidth: '25%' }}
            width={200}
            height={50}
          />

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}>
            <Link href='/'>
              <Text className={classes.link}>All Pets</Text>
            </Link>
            <Link href='/dogs'>
              <Text className={classes.link}>Dogs</Text>
            </Link>
            <Link href='/cats'>
              <Text className={classes.link}>Cats</Text>
            </Link>
            <Link href='/birds'>
              <Text className={classes.link}>Birds</Text>
            </Link>
            <Link href='/reptiles'>
              <Text className={classes.link}>Reptiles</Text>
            </Link>
          </Group>

          <Group>
            {theme.colorScheme === 'dark' ? (
              <Button variant='default' onClick={() => setThemeMode('light')}>
                <Icon icon='tdesign:mode-light' />
              </Button>
            ) : (
              <Button variant='default' onClick={() => setThemeMode('dark')}>
                <Icon icon='tdesign:mode-dark' />
              </Button>
            )}
            <Link href='/pets/register'>
              <Button className={classes.hiddenMobile}>Introduce Pet</Button>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
          <Link href='/'>
            <Text onClick={closeDrawer} className={classes.link}>
              All Pets
            </Text>
          </Link>
          <Link href='/dogs'>
            <Text onClick={closeDrawer} className={classes.link}>
              Dogs
            </Text>
          </Link>
          <Link href='/cats'>
            <Text onClick={closeDrawer} className={classes.link}>
              Cats
            </Text>
          </Link>
          <Link href='/birds'>
            <Text onClick={closeDrawer} className={classes.link}>
              Birds
            </Text>
          </Link>
          <Link href='/reptiles'>
            <Text onClick={closeDrawer} className={classes.link}>
              Reptiles
            </Text>
          </Link>

          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position='center' grow pb='xl' px='md'>
            <Link href='/pets/register'>
              <Button onClick={closeDrawer}>Introduce Pet</Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import { RightMenu } from '@src/widgets/right-menu';
import { Editor } from '@src/widgets/editor';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import * as model from "../model";
import { reflect } from '@effector/reflect';
type Props = {
  onMount: () => void,
  onUnmount: () => void,
  isLoading: boolean,
}

const HomePageView = ({ onUnmount, onMount, isLoading }: Props) => {

  useEffect(() => {
    onMount();
    return () => onUnmount();
  }, [])

  const {
    subBackground
  } = getThemeColors();

  if (isLoading) {
    return (
      <Box
        width="100vw"
        height="100vh"
        backgroundColor={subBackground}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
        <Text>
          Loading
        </Text>
      </Box>
    )
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor={subBackground}
      display="flex"
      flexDirection="row"
    >
      <Box
        height="100%"
        flexGrow={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Editor />
      </Box>
      <RightMenu />
    </Box>
  );
}

export const HomePage = reflect({
  view: HomePageView,
  bind: {
    onMount: model.pageMounted,
    onUnmount: model.pageUnmounted,
    isLoading: model.$isLoading,
  },
})
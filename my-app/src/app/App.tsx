import styled from '@emotion/styled';
import React from 'react';
import theme from "../app/themes"

const AppContainer = styled('div', ({theme: Theme}) => ({
    color: theme.color,
}))

export const App: React.FC = () => {
    const theme = {theme}
    return(
        <AppContainer theme={}>
            stuff
        </AppContainer>
    )
}
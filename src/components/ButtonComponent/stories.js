import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import Button from './index';

const stories = storiesOf(Button.displayName, module);

stories.add('button', () => (
    <Button
        color={'white'}
        label={'button'}
    />
));

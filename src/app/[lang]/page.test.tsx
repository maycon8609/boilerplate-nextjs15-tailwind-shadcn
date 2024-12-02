import { describe, expect, test } from 'vitest';

import { render, screen } from '@/app/tests/react-test-utils';

import Page from './page';

describe('Page', () => {
  test('should render the text', () => {
    render(<Page params={{ lang: 'pt-BR' }} />);

    const text = screen.getByText('Current locale:');

    expect(text).toBeInTheDocument();
  });
});

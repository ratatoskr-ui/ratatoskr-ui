import * as React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';
import { Box } from '../../../layout';

describe('components/Avatar', () => {
  describe('<Avatar />', () => {
    test('renders image correctly', () => {
      const { getByRole } = render(<Avatar name="Kiriyama Rei" src="https://picsum.photos/id/2/400/400" />);

      const image = getByRole('img', {
        name: /Kiriyama Rei/i,
      });
      expect(image).toBeVisible();
    });

    test('renders initials correctly', () => {
      const { getByText, getByRole } = render(<Avatar name="Kiriyama Rei" />);

      expect(getByText(/Kiriyama Rei/i)).toBeInTheDocument();
      expect(getByRole('presentation')).toBeVisible();
    });

    test('render presence and notification badge correctly', () => {
      const { getByTestId } = render(
        <Avatar
          name="Kiriyama Rei"
          presence={<Box width="100%" height="100%" backgroundColor={'red07'} />}
          notificationBadge="99+"
        />
      );
      const presence = getByTestId('sign-badge');
      expect(presence).toBeInTheDocument();
      const notificationBadge = getByTestId('notification-badge');
      expect(notificationBadge).toBeInTheDocument();
    });

    test('not render presence', () => {
      const { queryByTestId } = render(<Avatar name="Kiriyama Rei" />);
      const presence = queryByTestId('sign-badge');
      expect(presence).not.toBeInTheDocument();
      const notificationBadge = queryByTestId('notification-badge');
      expect(notificationBadge).not.toBeInTheDocument();
    });
  });
  describe('Bg Color Generator', () => {
    test('generate bgColor Correctly', () => {
      const { getAllByTestId } = render(
        <>
          <Avatar name="Tongshan Ling" />
          <Avatar name="Gongben Wuchang" />
          <Avatar name="Fan Ruiyan" />
          <Avatar name="德川 家康" />
        </>
      );

      const listContainer = getAllByTestId('avatar-container');
      expect(!!(listContainer[0].className === listContainer[2].className)).toBe(true);
      expect(!!(listContainer[0].className === listContainer[1].className)).toBe(false);
      expect(!!(listContainer[0].className === listContainer[3].className)).toBe(false);
    });
  });
});

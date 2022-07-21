import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { Box, BoxProps, Stack } from '../../../../layout';
import { Text } from '../../../../typography';

type SortType = 'asc' | 'desc' | 'noSort' | undefined;
interface TableHeadCellSortProps {
  sortType?: SortType;
}

export type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  Omit<BoxProps, 'width' | 'height'> &
  TableHeadCellSortProps;

const renderIconSort = (sortType: SortType) => {
  if (typeof sortType === 'undefined') return '';
  if (sortType === 'noSort') {
    return (
      <Stack direction="vertical" marginRight={5.5} paddingTop={2}>
        <ChevronUpIcon style={{ marginBottom: '-2px' }} width={9} />
        <ChevronDownIcon style={{ marginTop: '-2px' }} width={9} />
      </Stack>
    );
  }
  return (
    <Box marginRight={5.5}>
      {sortType === 'asc' && <ChevronUpIcon width={9} />}
      {sortType === 'desc' && <ChevronDownIcon width={9} />}
    </Box>
  );
};

const TableHeadCell = React.forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ className, style, sortType = undefined, children, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        as="th"
        className={className}
        style={style}
        textAlign="left"
        px="md"
        height="40px"
        fontSize="12px"
        lineHeight="16px"
        sx={{ boxShadow: `inset 0px 1px 0px #E5EAEF, inset 0px -1px 0px #EFF2F5;` }}
        {...rest}
      >
        <Stack direction="horizontal">
          {renderIconSort(sortType)}
          {typeof children === 'string' ? (
            <Text marginRight={10} fontSize="12px" lineHeight="16px" fontWeight={700} color="greydark02">
              {children}
            </Text>
          ) : (
            children
          )}
        </Stack>
      </Box>
    );
  }
);

TableHeadCell.displayName = 'TableHeadCell';

export default TableHeadCell;

import { MenuOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import React, { useEffect, useState } from 'react';
import type { SortableContainerProps, SortEnd } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
const diffNodesSameLevel = (
  oldNodes: any[],
  newNodes: any[],
  changeKey: string,
  matchKey = 'key',
) => {
  const re: any[] = [];
  oldNodes.forEach((oldNode) => {
    const matchNewNode = newNodes.find((newNode) => newNode[matchKey] === oldNode[matchKey]);
    if (!matchNewNode) {
      re.push(oldNode);
    } else {
      if (oldNode[changeKey] !== matchNewNode[changeKey]) re.push(matchNewNode);
    }
  });

  return re;
};

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

const SortTable = (props: any) => {
  const {
    dataSource: propsDataSource,
    columns: propsColumns,
    onSortEnd: propsOnSortEnd,
    isSort = true,
    rowKey,
    sortKey = 'sort',
    pagination,
    // sortColumn,
    ...others
  } = props;
  const [dataSource, setDataSource] = useState<any>([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(
      isSort
        ? [
            {
              title: '排序',
              dataIndex: sortKey,
              width: 90,
              render: () => <DragHandle />,
            },
          ].concat(propsColumns)
        : propsColumns,
    );
    console.log(setColumns, propsColumns, DragHandle);
  }, [isSort]);

  useEffect(() => {
    setDataSource(propsDataSource.map((i: any, index: number) => ({ ...i, index })));
  }, []);

  const onSortEnd = async ({ oldIndex, newIndex }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const oldData = dataSource.map((source: any, index: any) => ({ ...source, sort: index }));

      const newData = arrayMoveImmutable(dataSource, oldIndex, newIndex).map((item, index) => ({
        ...(item as any),
        sort: index,
      }));

      const changeNodes = diffNodesSameLevel(oldData, newData, sortKey, rowKey).map((item) => {
        const node = {};
        node[rowKey] = item[rowKey];
        node[sortKey] =
          item[sortKey] + (pagination ? (pagination.current - 1) * pagination.pageSize : 0);
        return node;
      });
      console.log(changeNodes, 'changeNodes');

      if (changeNodes.length === 0) return;

      setDataSource(newData);
      await propsOnSortEnd(changeNodes).catch(() => setDataSource(oldData));
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow: React.FC<any> = ({ _1, _2, ...restProps }) => {
    console.log(_1, _2);

    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex((x: any) => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
      pagination={pagination}
      {...others}
    />
  );
};

export default SortTable;

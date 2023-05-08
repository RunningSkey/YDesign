import React from 'react';
import { Button, SortTable } from '../lib/es';
import './style.css';

function App() {
  console.log(SortTable, 'SortTable');

  const dataSource = [
    { id: '1', name: '1name', sorter: 0 },
    { id: '2', name: '2name', sorter: 1 },
    { id: '3', name: '3name', sorter: 2 },
  ];
  const columns = [
    { dataIndex: 'sorter', title: 'sorter' },
    { dataIndex: 'id', title: 'id' },
    { dataIndex: 'name', title: 'name' },
  ];

  return (
    <div className={'App'}>
      <header className="App-header">header</header>
      <Button type="primary">primary</Button>
      <Button>default</Button>
      <SortTable
        isSort={true}
        rowKey={'id'}
        pagination={{
          current: 1,
          pageSize: 10,
          size: 10,
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default App;

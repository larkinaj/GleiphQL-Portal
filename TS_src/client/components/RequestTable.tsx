import { v4 as uuidv4 } from 'uuid';
import useStore from '../store';
import { FC, ReactElement } from 'react';
import { EndpointRequest, PartialStore } from '../../types';


const RequestTable : FC = () : ReactElement => {
  const { endpointRequests } : PartialStore = useStore();

  return (
    <section className='my-12 rounded-lg border border-slate-100 border-1 overflow-hidden w-3/4 p-2'>
      <h2 className='flex flex-col justify-center items-center text-lg m-8'>Recent Requests to the Endpoint</h2>
      <table className='m-0 table-auto'>
        <thead>
          <tr className='h-12'>
            <th className='w-[12%]'>IP Address</th>
            <th className='w-[12%]'>Complexity Score</th>
            <th className='w-[12%] hidden md:table-cell'>Complexity Limit</th>
            <th className='w-[12%] hidden md:table-cell'>Query Depth</th>
            <th className='w-[12%] hidden lg:table-cell'>Number of Object Types</th>
            <th className='w-[12%] hidden lg:table-cell'>Blocked</th>
            <th className='w-[24%]'>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {endpointRequests && endpointRequests.slice(0, 30).map((row: EndpointRequest, index: number) => {
            const color: string = index % 2 > 0? 'bg-white' : 'bg-slate-50';
            return (
              <tr key={uuidv4()} className={`h-24 ${color}`}>
                <th>{row.ip_address}</th>
                <th>{row.complexity_score}</th>
                <th className='hidden md:table-cell'>{row.complexity_limit}</th>
                <th className='hidden md:table-cell'>{row.query_depth}</th>
                <th className='hidden lg:table-cell'>{row.object_types.objectTypes.length}</th>
                <th className='hidden lg:table-cell'>{row.blocked? 'true' : 'false'}</th>
                <th>{row.timestamp}</th>
              </tr>
            );
          })}
        </tbody>
    </table>
  </section>
  );
};

export default RequestTable;
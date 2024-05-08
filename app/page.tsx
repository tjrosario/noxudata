'use client';

import Avatar from '@/components/avatar/Avatar';
import Table from '@/components/table/Table';
import Button from '@/components/button/Button';
import InlineLeadingSelect from '@/components/form/InlineLeadingSelect';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa6';
import { GiOwl } from 'react-icons/gi';
import { BsChat } from 'react-icons/bs';
import { columns, rows } from '@/data/mock';

export default function Home() {
  const tableRows = rows.map((r) => ({
    ...r,
    name: `${r.firstName} - ${r.lastName}`,
  }));

  return (
    <main>
      <header className="bg-white py-10 px-5 md:px-0">
        <div className="container xl:w-5/12 mx-auto flex items-center gap-4">
          <Avatar src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <div>List my top 10 accounts</div>
        </div>
      </header>

      <section className="container xl:w-5/12 mx-auto py-6 px-5 md:px-0">
        <div className="flex items-center">
          <Button
            className="flex items-center gap-1 font-semibold rounded-tr-none rounded-br-none"
            level="info"
            size="md2"
          >
            <AiOutlineExclamationCircle />
            Not Confident
          </Button>
          <Button
            className="flex items-center gap-1 font-semibold border-l-0 rounded-tl-none rounded-bl-none"
            level="info"
            size="md2"
          >
            Human Help <FaArrowRight />
          </Button>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <GiOwl size={30} />
          <p className="text-sm">
            To find out how many accounts you have, you can use the following
            query:
          </p>
        </div>

        <div className="mt-3 xl:ml-9">
          <Table columns={columns} rows={tableRows}></Table>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-300 border-solid py-4 px-5 md:px-0">
        <div className="container xl:w-5/12 mx-auto">
          <div className="flex gap-x-4">
            {[1, 2, 3].map((num) => (
              <Button key={num}>Suggest question {num}</Button>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="grow">
              <InlineLeadingSelect
                options={[{ label: 'Chat', value: 'chat' }]}
                inputIcon={<IoPaperPlaneOutline size={20} />}
                placeholder="Start a new chat"
                selectIcon={<BsChat size={20} />}
              />
            </div>
            <Button level="danger">End Chat</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}

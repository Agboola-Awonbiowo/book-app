import { FC } from 'react';
interface CardProps {
  publisher: string;
  name: string;
  isbn: number;
  authors: [];
  characters: string;
  culture: string;
}
const Card: FC<CardProps> = (props) => {
  const { publisher, name, isbn, authors, culture, characters } = props;
  return (

    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{name}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Book Details</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500"> Publisher</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {publisher}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">ISBN</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{isbn}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Author</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {authors}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500"> Character</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{characters ? characters : "none"}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">  Culture</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{culture ? culture : "none"}</dd>
            </div>
            
          </dl>
        </div>
      </div>
    </>
  );
};

export default Card;
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
    <div className="mx-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md hover:-translate-y-4 duration-200 hover:animate-pulse">
      <div className="p-5">
        <p>
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            Publisher:{' '}
          </span>{' '}
          {publisher}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            Name:{' '}
          </span>
          {name}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            ISBN:{' '}
          </span>
          {isbn}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            Author:{' '}
          </span>
          {authors}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            Character:{' '}
          </span>
          {characters}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <span className="mb-2  font-bold tracking-tight text-gray-900">
            Culture:{' '}
          </span>
          {culture}
        </p>
      </div>
    </div>
  );
};

export default Card;

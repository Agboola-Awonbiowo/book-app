import React, { useEffect, useState } from 'react';
import Card from '../../components/BookCard/Card';
import Search from '../../components/Search/Search';
import { getBooks } from '../../features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';

function Books() {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState('');
  const { books, isLoading, error } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const searchBooks = books?.filter((book) => {
    if (!searchInput.length) return book;
    return Object.keys(book).some((key) => {
      // @ts-ignore
      return book[key].toString().toLowerCase().includes(searchInput);
    });
  });
  return (
    <>
      <div className="mb-12 mt-10 flex justify-center">
        <Search setSearchInput={setSearchInput} />
      </div>
      {isLoading && <p className="text-center text-white">Loading...</p>}
      {error && <p className='text-center text-white'>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {searchBooks &&
          searchBooks?.map((book, idx) => {
            const { publisher, name, isbn, authors, culture, aliases } = book;
            return (
              <Card
                key={idx}
                name={name}
                publisher={publisher}
                isbn={isbn}
                authors={authors}
                culture={culture}
                characters={aliases}
              />
            );
          })}
      </div>
    </>
  );
}

export default Books;

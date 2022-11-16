/* eslint-disable array-callback-return */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import bookData from '../../models/bookModel';

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (data, thunkApi) => {
    const getBooksEndPoint = await axios.get<bookData[]>(
      'https://www.anapioficeandfire.com/api/books'
    );
    const getCharactersEndPoint = await axios.get<bookData[]>(
      'https://www.anapioficeandfire.com/api/characters'
    );
    try {
      const response = axios
        .all([getBooksEndPoint, getCharactersEndPoint])
        .then(
          axios.spread((...allData) => {
            const booksResponse = allData[0].data;
            const charactersResponse = allData[1].data;
            const booksData: any[] = [];
            booksResponse.map((book: any, id) => {
              booksData.push({
                id,
                ...book,
              });
            });
            const charactersData: any[] = [];
            charactersResponse.map((character: any, id) => {
              charactersData.push({
                id,
                ...character,
              });
            });
            const result: any = [];
            booksData.map((book: any) => {
              result.push({
                ...charactersData.find(
                  (character: any) => character.id === book.id
                ),
                ...book,
              });
            });
            return result;
          })
        );
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface booksState {
  books: null | bookData[];
  isLoading: boolean;
  error: null | string;
}

const initialState: booksState = {
  books: null,
  isLoading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<bookData[]>) => {
        state.isLoading = false;
        state.books = action.payload;
      }
    );
    builder.addCase(getBooks.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;

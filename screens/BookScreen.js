import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import BookForm from '../components/BookForm';
import { getBooks } from '../services/api';

const BookScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Cadastro de Livros</Text>
      <BookForm />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.titulo} - {item.anoPublicacao}</Text>}
      />
    </View>
  );
};

export default BookScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import LoanForm from '../components/LoanForm';
import { getLoans } from '../services/api';

const LoanScreen = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const loansData = await getLoans();
      setLoans(loansData);
    };
    fetchLoans();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Empréstimo de Livros</Text>
      <LoanForm />
      <FlatList
        data={loans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.idUsuario} pegou {item.idLivro} para devolver em {item.dataDeEntrega}</Text>
        )}
      />
    </View>
  );
};

export default LoanScreen;

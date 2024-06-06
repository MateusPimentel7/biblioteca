import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import UserForm from '../components/UserForm';
import { getUsers } from '../services/api';

const UserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Cadastro de Usuários</Text>
      <UserForm />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nome} - {item.cpf}</Text>}
      />
    </View>
  );
};

export default UserScreen;

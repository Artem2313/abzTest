import axios from 'axios';

export const fetchUsers = () => {
  return axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  );
};

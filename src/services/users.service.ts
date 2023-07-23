export interface IUsersData {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export const UsersService = {
  async getUsers(url: string): Promise<IUsersData[]> {
    const response = await fetch(`https://reqres.in${url}`)

    const data = await response.json();

    return data.data;
  },

  async getUsersByID(id: string): Promise<IUsersData> {
    const response = await fetch(`https://reqres.in/api/users/${id}`)

    const data = await response.json();

    return data.data;
  }
}


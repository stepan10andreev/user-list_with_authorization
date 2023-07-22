// const data = {
//   "email": "charles.morris@reqres.in",
//   "password": "pistol"
// }

interface IUserData {
  email: string;
  password: string;
}

type IRegisterPromise = string | null;

interface IResponse {
  token: string;
  error: string
}

export const FormService = {
  async register(userData: IUserData): Promise<IRegisterPromise> {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const result: IResponse = await response.json();

    if (response.ok) {
      return result.token
    } else {
      return null
    }
    // return result;
  }
}

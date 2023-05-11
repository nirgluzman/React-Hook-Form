import { useForm, Controller } from 'react-hook-form';

import { TextField } from '@mui/material';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './App.css';

const schema = yup
  .object({
    nickname: yup.string().required(),
    username: yup.string().required(),
    password: yup
      .string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[a-z]/, 'Password must include a lowercase letter')
      .matches(/[A-Z]/, 'Password must include a upercase letter')
      .matches(/[^\w]/, 'Password must include a symbol'),
  })
  .required();

function App() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='nickname'
        rules={{ required: 'This field is required' }}
        render={({ field }) => <TextField {...field} />}
      />
      <p>{errors.nickname?.message}</p>
      <p>
        <input
          {...register('username', { required: 'This field is required' })}
          placeholder='username'
          type='text'
        />
      </p>
      <p>{errors.username?.message}</p>
      <p>
        <input
          {...register('password', { required: 'This field is required' })}
          placeholder='password'
          type='password'
        />
      </p>
      <p>{errors.password?.message}</p>
      <p>{watch('username')}</p>
      <input type='submit' />
    </form>
  );
}

export default App;

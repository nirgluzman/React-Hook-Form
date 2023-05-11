import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import './App.css';

function App() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      nickname: 'bobo',
      username: 'Bob',
      password: '123',
    },
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
          {...register('password')}
          placeholder='password'
          type='password'
        />
      </p>
      <p>{watch('username')}</p>
      <input type='submit' />
    </form>
  );
}

export default App;
